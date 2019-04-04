import React from 'react';
import {array, string} from 'prop-types';
import isEmpty from 'lodash/isEmpty';

export class DocumentsList extends React.Component {

  static propTypes = {
    selectedTags: array,
  };

  render() {
    const {children, selectedTags} = this.props;
    return (
      <ul className="documents__list">
        {React.Children.map(children, (child, index) => {
          const documentIndex = isEmpty(selectedTags) ? null : (index + 1);
          return React.cloneElement(child, {selectedTags, documentIndex});
        })}
      </ul>
    );
  }

}
