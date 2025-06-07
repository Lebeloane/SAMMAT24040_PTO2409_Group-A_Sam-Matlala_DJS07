import React from 'react';

const Header = () => {
  return (
    <header className='header'>
        <img 
            src="/images/troll-face.png" 
            alt="logo-troll-face"
            className='header--img'
        />
      <h2 className='header--title'>Meme generator</h2>
      <h4 className='header-project'>React Course</h4>
    </header>
  );
}

export default Header;
