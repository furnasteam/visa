import React from 'react';

export class DocumentsList extends React.Component {

  render() {
    const {children} = this.props;
    return (
      <ul className="documents__list">
        {children}
      </ul>
    );
  }

}
