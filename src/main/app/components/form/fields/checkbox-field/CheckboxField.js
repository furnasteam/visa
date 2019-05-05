import React from 'react';
import {AbstractFormField} from '../../components/abstract-form-field/AbstractFormField';
import {element, func, string, array, number} from 'prop-types';
import {Input} from '../../../input/Input';
import {Checkbox} from './Checkbox';
import classNames from 'classnames';

export class CheckboxField extends React.Component {

  static propTypes = {
    label: string,
    helpText: element,
    value: string,
    onChange: func,
    fieldName: string,
    buttonNames: array,
    defaultCheckedIndex : number
  };

  render() {
    const {label, helpText, value, fieldName, buttonNames, defaultCheckedIndex, onChange} = this.props;

    let radioButtons = buttonNames.map(function(val, i){
      return  <Checkbox label={val} key={val} id={val} name={fieldName} checked={i==defaultCheckedIndex} onChange={onChange}  />
    });

    return (
      <AbstractFormField label={label}
                         helpText={helpText}>
        <div className={"checkboxes-container"} >
          {radioButtons}
        </div>


      </AbstractFormField>
    );
  }
  // render() {
  //   return (
  //     <div>
  //     </div>
  //   );
  // }

}