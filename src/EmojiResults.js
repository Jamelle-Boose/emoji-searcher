import React from 'react';
import EmojiResultRow from './EmojiResultRow';

class EmojiResults extends React.Component {
  render() {
    const { emojiData } = this.props;

    return (
      <div>
        {/* <EmojiResultRow title='Grinning' symbol='😀' /> */}
        {emojiData.map(emojiData => {
          return (
            <EmojiResultRow
              key={emojiData.symbol}
              symbol={emojiData.symbol}
              title={emojiData.title}
            />
          );
        })}
      </div>
    );
  }
}

EmojiResults.propTypes = {
  emojiData: React.PropTypes.array
};

export default EmojiResults;
