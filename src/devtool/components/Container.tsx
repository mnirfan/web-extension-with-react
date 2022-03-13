import React, { useEffect, useRef, useState } from 'react';
import { browser } from '@/globals';
import icon from '@/assets/cool-doge.png';

import type { Event } from '@/types/event';

import { sImage } from './styles';


const DevtoolPanelContainer = () => {
  const [message, setMessage] = useState<Event | null>();
  const portRef = useRef<chrome.runtime.Port>(null)
  const tabId = browser.devtools.inspectedWindow.tabId;

  function sendToBackgroundScript() {
    browser.runtime.sendMessage<Event>({ tabId, ping: { message: 'hello from new tab' } });
  }

  useEffect(() => {
    portRef.current = browser.runtime.connect({ name: `${tabId}` });

    const func = (message: Event) => {
      setMessage(message);
    };

    portRef.current.onMessage.addListener(func)

    return () => portRef.current.onMessage.removeListener(func);
  }, []);

  return (
    <main>
      <h1>Awesome Extension</h1>
      <img src={icon} alt="cool doge with glasses" className={sImage} />
      <div>Message: &quot;{message?.pong?.message}&quot;</div>
      <button onClick={sendToBackgroundScript}>send</button>
    </main>
  )
}

export default DevtoolPanelContainer;
