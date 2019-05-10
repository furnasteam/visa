import React from 'react';
import {VISA_APPLICATION_FORM_FILEDS} from '../../VisaApplicationFormModel';
import {Form} from '../../../../components/form/Form';
import {func, object} from 'prop-types';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';

export class SchengenVisa extends React.Component {
  render() {
    return (
      <div>
        <h2>Виза 1.</h2>
        <DateField label={"Начало действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_VISA_START_DATE}
                   placeholder="25.06.18."
        />
        <DateField label={"Окончание действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_VISA_END_DATE}
                   placeholder="25.06.18."
        />
        <InputField label={"Номер"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_VISA_NUMBER}
                    placeholder="560742329"
        />
      </div>
    );    
  }

}
