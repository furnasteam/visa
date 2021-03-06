import React from 'react';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {
    VISA_APPLICATION_FORM_ENUMS,
    VISA_APPLICATION_FORM_ENUMS_NAMES,
    VISA_APPLICATION_FORM_FILEDS
} from '../../VisaApplicationFormModel';
import {Form} from '../../../../components/form/Form';
import {func, object, string} from 'prop-types';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';
import {xlp} from "../../../../helpers/helper";

export class TripScreen extends React.Component {
  static propTypes ={
    formData: object,
    onChange: func,
  }
  onFormChange(value) {
    var {formData, onChange} = this.props;
    if(formData){
      onChange(value);
    }
  }
  showTargetDetails(){
      return xlp.isSelected(this.props.formData.target, VISA_APPLICATION_FORM_ENUMS_NAMES.TARGET.OTHER);
  }
  render() {
    var {formData, onChange} = this.props;
    return (
      <Form onChange={this.onFormChange.bind(this)}
            value={formData}>
        <CheckboxField label={"Главные цели поездки"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.TARGET}
                    buttons={VISA_APPLICATION_FORM_ENUMS.TARGET}
        />
        {this.showTargetDetails() &&
        <InputField
                    fieldName={VISA_APPLICATION_FORM_FILEDS.TARGET_DETAILS}
                    placeholder="Уточните цель поездки"
        />
        }

        <InputField label={"Страна(ы) назначения"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.TARGET_COUNTRY}
                    placeholder="Spain"
                    helpText={<div>Укажите страну, у которой запрашиваете визу</div>}
        />
        <InputField label={"Страна первого въезда"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.ENTRY_COUNTRY}
                    placeholder="Spain"
                    helpText={<div>Если у вас прямой рейс, указывайте Испанию. Если рейс с пересадкой, например, в Германии, указывайте Германию.</div>}
        />
        <RadioButtonField label={"Виза запрашивается для"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.ENTRY_TYPE_COUNT}
                          buttons={VISA_APPLICATION_FORM_ENUMS.ENTRY_TYPE_COUNT}
                          helpText={<div>Если хотите, чтобы визу предоставили на дольший срок — указывайте пункт «многократного въезда».</div>}
        />

        <DateField label={"Продолжительность пребывания или транзита.Начало действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.VISA_START_DATE}
                   placeholder="25.06.18."
        />
        <DateField label={"Продолжительность пребывания или транзита.Окончание действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.VISA_END_DATE}
                   placeholder="25.06.18."
        />
      </Form>
    );    
  }

}
