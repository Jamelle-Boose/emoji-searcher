import React from 'react';
import PropTypes from 'prop-types';

import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

class EmojiResults extends React.Component {
  render() {
    const { emojiData } = this.props;

    return (
      <div className='component-emoji-results'>
        {emojiData.map(emojiData => {
          return (
            <EmojiResultRow
              key={emojiData.title}
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
