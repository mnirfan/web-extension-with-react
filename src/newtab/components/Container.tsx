import React from 'react';

import icon from '@/assets/cool-doge.png';

import { sImage } from './styles';

const NewTabContainer = () => {
  return (
    <main>
      <h1>Awesome Extension Tab</h1>
      <img src={icon} alt="cool doge with glasses" className={sImage} />
    </main>
  )
}

export default NewTabContainer;
