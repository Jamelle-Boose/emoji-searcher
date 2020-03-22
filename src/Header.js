import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className='component-header'>
        <img
          alt='lorem ipsum'
          src='//cdn.jsdelivr.net/emojione/assets/png/1f638.png'
          width='32'
          height='32'
        />
        Emoji Search
        <img
          alt='lorem ipsum'
          src='//cdn.jsdelivr.net/emojione/assets/png/1f63a.png'
          width='32'
          height='32'
        />
      </header>
    );
  }
}

export default Header;
