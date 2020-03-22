import React from 'react';
import PropTypes from 'prop-types';
import './EmojiResultRow.css';

class EmojiResultRow extends React.Component {
  render() {
    const { title, symbol } = this.props;
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return (
      <div className='component-emoji-result-row'>
        <img alt={title} src={src} />
        <span className='title'>{title}</span>
      </div>
    );
  }
}

EmojiResultRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string
};

export default EmojiResultRow;
