import React from 'react';
import {AbstractFormField} from '../../components/abstract-form-field/AbstractFormField';
import {element, func, string, array, number} from 'prop-types';
import {Input} from '../../../input/Input';
import {RadioButton} from './RadioButton';

export class RadioButtonField extends React.Component {

  static propTypes = {
    label: string,
    helpText: element,
    value: string,
    name: string,
    fieldName: string,
    buttonNames: array,
    defaultCheckedIndex : number
  };

  render() {
    const {label, helpText, value, name, buttonNames, defaultCheckedIndex} = this.props;

    let radioButtons = buttonNames.map(function(val, i){
      return  <RadioButton label={val} id={val} name={name} checked={i==defaultCheckedIndex} />
    });

    return (
      <AbstractFormField label={label}
                         helpText={helpText}>
        {radioButtons}
      </AbstractFormField>
    );
  }
}


