import React from 'react';
import Header from './header/Header';
import SearchInput from './search/SearchInput';
import EmojiResults from './results/EmojiResults';
import filterEmoji from './common/filterEmoji';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredEmoji: filterEmoji('', 20)
    };
  }

  handleSearchChange = event => {
    // console.log(`search input changed to:`, event.target.value);
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
