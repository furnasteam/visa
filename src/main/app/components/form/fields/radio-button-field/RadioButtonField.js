import React from 'react';
import {AbstractFormField} from '../../components/abstract-form-field/AbstractFormField';
import {element, func, string, array, number} from 'prop-types';
import {Input} from '../../../input/Input';
import {RadioButton} from './RadioButton';
import classNames from 'classnames';
import {Checkbox} from "../checkbox-field/Checkbox";

export class RadioButtonField extends React.Component {

  static propTypes = {
    label: string,
    helpText: element,
    // value: string,
    value: array,
    onChange: func,
    fieldName: string,
    buttons: array,
    defaultCheckedIndex : number
  };

  updateSelectedState(name, selected) {
    if(name){
      const { onChange, buttons} = this.props;

      buttons.forEach((el) => {
        el.selected = false;
      });

      var found = buttons.find(function(el, i) {
        return el.name == name;
      });
      found.selected = true;
      onChange(buttons);
    }
  }

  render() {
    const {label, helpText, value, fieldName, buttons, defaultCheckedIndex, onChange} = this.props;
    let context = this;

    let radioButtons = buttons.slice().map(function(btn, i){
      return  <RadioButton label={btn.label} key={fieldName +'_'+ btn.name} id={fieldName +'_'+ btn.name} value={btn.name} name={fieldName}
                           checked={btn.selected} onChange={context.updateSelectedState.bind(context)}  />
    });

    return (
      <AbstractFormField label={label}
                         helpText={helpText}>
        <div className={"radio-buttons-container"} >
          {radioButtons}
        </div>


      </AbstractFormField>
    );
  }
}


