import React from 'react';

class EmojiResultRow extends React.Component {
  render() {
    const { title, symbol } = this.props;
    const codePointHex = symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    return (
      <div>
        <img alt={title} src={src} />
        <span>{title}</span>
      </div>
    );
  }
}

EmojiResultRow.propTypes = {
  title: React.PropTypes.string,
  symbol: React.PropTypes.string
};

export default EmojiResultRow;
