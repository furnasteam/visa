import React from 'react';
import {SchengenVisa} from './SchengenVisa';
import {VISA_APPLICATION_FORM_ENUMS, VISA_APPLICATION_FORM_FILEDS} from '../../VisaApplicationFormModel';
import {Form} from '../../../../components/form/Form';
import {func, object} from 'prop-types';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';

export class PasportScreen extends React.Component {

  render() {
    return (
      <React.Fragment>
        <InputField label={"3. Номер загран. паспорта"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_NUMBER}
                    placeholder="IVANOV"
        />
        <DateField label={"4. Дата выдачи загран. паспорта"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_STARTDATE}
                   placeholder="23.04.2014"
        />
        <DateField label={"5. Загран. паспорт действителен до"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_ENDDATE}
                   placeholder="23.04.2024"
        />
        <InputField label={"6. Кем выдан"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INTERNATIONAL_PASSPORT_DELIVERY_STRUCTURE}
                    placeholder="USSR"
                    helpText={<div>Достаточно указать Russian Federation или FMS 2432?</div>}
        />
        <RadioButtonField label={"7. Шенгенские визы, выданные за последние \n" +
        "    три года (2016 — 2018)" +
        "Есть шенгенские визы?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.SCHENGEN_EXISTS}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.BOOL}
                          helpText={<div>
                            Если гражданин РФ и проживает в РФ, то напишите нет.
                          </div>}

        />
        <SchengenVisa/>
      </React.Fragment>
    );    
  }

}