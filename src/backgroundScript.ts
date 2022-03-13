import { browser } from "@/globals";
import { Event } from "@/types/event";

const devtoolsPorts = new Map<number, chrome.runtime.Port>();

function sendMessageToDevtool(port: chrome.runtime.Port, event: Event) {
  port.postMessage(event);
}

browser.runtime.onConnect.addListener((port) => {
  devtoolsPorts.set(parseInt(port.name), port);
});

browser.runtime.onMessage.addListener((message: Event) => {
  const tabId = message.tabId;
  const devtoolConnection = devtoolsPorts.get(tabId);

  if (message.ping && devtoolConnection) {
    const event: Event = { pong: { message: 'Hi, devtool page!' } };
    sendMessageToDevtool(devtoolConnection, event);
    return;
  }

  if (message.ping) {
    browser.runtime.sendMessage<Event>({ pong: { message: 'Hi, new tab page!' } });
  }
});
