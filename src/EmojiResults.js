import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

export default class EmojiResults extends React.Component {
  static propTypes = {
    emojiData: PropTypes.array
  };

  componentDidMount() {
    this.clipboard = new Clipboard('.copy-to-clipboard');
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

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
