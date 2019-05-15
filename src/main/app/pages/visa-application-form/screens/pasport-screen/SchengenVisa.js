import React from 'react';
import {VISA_APPLICATION_FORM_FILEDS} from '../../VisaApplicationFormModel';
import {Form} from '../../../../components/form/Form';
import {func, object, string, number} from 'prop-types';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';
import includes from 'lodash/includes';
import remove from 'lodash/remove';

export class SchengenVisa extends React.Component {
  static propTypes ={
    formData: object,
    index: number,
    onChange: func,
  }
  onSchengenVisaChange(value){
    handleTagClick = (tag) => {
      const {onChange} = this.props;
      // const tagsWithoutOptions = remove(tags, t => !includes(tagOptions, t));
      // onChange([...tagsWithoutOptions, tag]);
      onChange({...value, [fieldName]: fieldValue});
    };
  }

  render() {
    var {formData, onChange} = this.props;
    return (
      <div>
        <h2>Виза 1.</h2>
        <DateField label={"Начало действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_VISA_START_DATE}
                   placeholder="25.06.18."
                   onChange={this.onSchengenVisaChange}
        />
        <DateField label={"Окончание действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_VISA_END_DATE}
                   placeholder="25.06.18."
                   onChange={this.onSchengenVisaChange}
        />
        <InputField label={"Номер"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_VISA_NUMBER}
                    placeholder="560742329"
                    onChange={this.onSchengenVisaChange}
        />
      </div>
    );    
  }

}