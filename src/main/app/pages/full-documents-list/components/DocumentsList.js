import React from 'react';

export class DocumentsList extends React.Component {

  render() {
    const {children} = this.props;
    return (
      <ul className="full-documents-list__list">
        {children}
      </ul>
    );
  }

}
