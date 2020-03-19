import React from 'react';

class SearchInput extends React.Component {
  handleChange = event => {
    // console.log(`You changed the search input`);
    this.props.textChange(event);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchInput;
