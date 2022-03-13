import React, { useEffect, useState } from 'react';

import icon from '@/assets/cool-doge.png';

import { sImage } from './styles';
import { browser } from '@/globals';
import { Event } from '@/types/event';

const NewTabContainer = () => {
  const [response, setResponse] = useState<Event | null>();

  function handleClickButton() {
    browser.runtime.sendMessage<Event>({ ping: { message: 'hello' } });
  }

  useEffect(() => {
    const handler = (message: Event) => {
      if (message.pong) {
        setResponse(message);
      }
    };

    browser.runtime.onMessage.addListener(handler);

    return () => browser.runtime.onMessage.removeListener(handler);
  }, []);

  return (
    <main>
      <h1>Awesome Extension Tab</h1>
      <img src={icon} alt="cool doge with glasses" className={sImage} />
      <div>{response?.pong?.message}</div>
      <button onClick={handleClickButton}>Send Message</button>
      <div></div>
    </main>
  )
}

export default NewTabContainer;
