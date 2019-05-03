import React from 'react';
import {AbstractFormField} from '../../components/abstract-form-field/AbstractFormField';
import {element, func, string} from 'prop-types';
import {Input} from '../../../input/Input';

export class InputField extends React.Component {

  static propTypes = {
    label: string,
    helpText: element,
    value: string,
    onChange: func,
    fieldName: string
  };

  render() {

    const {label, helpText, value, onChange} = this.props;

    return (
      <AbstractFormField label={label}
                         helpText={helpText}>
        <Input value={value}
               onChange={onChange}/>
      </AbstractFormField>
    );
  }

}
