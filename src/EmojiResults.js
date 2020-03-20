import React from 'react';
import PropTypes from 'prop-types';
import EmojiResultRow from './EmojiResultRow';

class EmojiResults extends React.Component {
  render() {
    const { emojiData } = this.props;

    return (
      <div className='component-emoji-results'>
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
  emojiData: PropTypes.array
};

export default EmojiResults;
