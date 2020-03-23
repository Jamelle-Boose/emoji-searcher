import React from 'react';
import PropTypes from 'prop-types';

import './SearchInput.css';

class SearchInput extends React.Component {
  handleChange = event => {
    // console.log(`You changed the search input`);
    this.props.textChange(event);
  };

  render() {
    return (
      <div className='component-search-input'>
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

SearchInput.propType = {
  textChange: PropTypes.func
};

export default SearchInput;
