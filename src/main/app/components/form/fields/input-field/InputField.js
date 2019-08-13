import React from 'react';
import {AbstractFormField} from '../../components/abstract-form-field/AbstractFormField';
import {element, func, string, bool} from 'prop-types';
import {Input} from '../../../input/Input';
import classNames from 'classnames';

export class InputField extends React.Component {

  static propTypes = {
    label: string,
    helpText: element,
    errorText: element,
    value: string,
    onChange: func,
    placeholder : string,
    fieldName: string,
    capitilize: bool
  };

  render() {
    const {label, helpText, value, onChange, placeholder, capitilize, errorText} = this.props;

    return (
      <AbstractFormField label={label}
                         helpText={helpText}
                         errorText={errorText}>
        <Input value={value}
               onChange={onChange}
               capitilize={capitilize}
               placeholder={placeholder}
        />
      </AbstractFormField>
    );
  }

}
