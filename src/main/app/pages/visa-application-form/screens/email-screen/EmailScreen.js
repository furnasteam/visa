import React from 'react';
import {VISA_APPLICATION_FORM_ENUMS, VISA_APPLICATION_FORM_FILEDS} from '../../VisaApplicationFormModel';
import {Form} from '../../../../components/form/Form';
import {func, object, string} from 'prop-types';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';

export class EmailScreen extends React.Component {
  static propTypes ={
    formData: object,
    onChange: func,
  }
  render() {
    var {formData, onChange} = this.props;
    return (
      <Form onChange={onChange}
            value={formData}>
        <DateField label={"Дата"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.DOCUMENTS_DATE}
                   placeholder="01.06.2019г."
                   helpText={<div>Дата, когда подадите документы</div>}
        />
        <InputField label={"Город"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.DOCUMENTS_CITY}
                    placeholder="Moscow"
                    helpText={<div>Город, где будете подавать документы</div>}
        />
        <InputField label={"Email"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.DOCUMENTS_EMAIL}
                    placeholder="email@email.ru"
                    helpText={<div>Укажите email куда отправить заполненную анкету</div>}
        />
      </Form>
    );    
  }

}
