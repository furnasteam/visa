import React from 'react';
import {string, element} from 'prop-types';

export class AbstractFormField extends React.Component {

  static propTypes = {
    label: string,
    helpText: element,
    fieldName: string
  };

  render() {
    const {children, label, helpText} = this.props;
    return (
      <div className="abstract-form-field">
        <div className="abstract-form-field__label">
          {label}
        </div>
        {children}
        <div className="abstract-form-field__help-text">
          {helpText}
        </div>
      </div>
    );
  }

}
