import React from 'react';
import PropTypes from 'prop-types';

import './SearchInput.css';

export default class SearchInput extends React.Component {
  static propType = {
    textChange: PropTypes.func
  };

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
