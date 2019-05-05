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
    value: array,
    onChange: func,
    fieldName: string,
    buttonNames: array,
    defaultCheckedIndex : number
  };
  updateSelectedState(name, selected) {
    if(name){
      const { onChange, buttonNames} = this.props;

      var found = buttonNames.find(function(el, i) {
        return el.name == name;
      });
      found.selected = selected;
      onChange(buttonNames);
    }
  }

  render() {
    const {label, helpText, value, fieldName, buttonNames, defaultCheckedIndex, onChange} = this.props;
    let context = this;
    let radioButtons = buttonNames.map(function(val, i){
      return  <Checkbox label={val.name} key={val.name} id={val.name} name={fieldName} checked={val.selected} onChange={context.updateSelectedState.bind(context)}  />
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
}