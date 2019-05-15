import React from 'react';
import {VISA_APPLICATION_FORM_ENUMS, VISA_APPLICATION_FORM_FILEDS} from '../../VisaApplicationFormModel';
import {Form} from '../../../../components/form/Form';
import {func, object, string} from 'prop-types';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';
import size from 'lodash/size';

export class ProfileScreen extends React.Component {
  static propTypes = {
    formData: object,
    onChange: func,
  }
  state = {
    showMaritalStatusDetails: false
  };
  onFormChange(value) {
    var {formData, onChange} = this.props;
    if(formData){
      onChange(value);
    }
    this.setState({showMaritalStatusDetails: value.maritalStatus == "иное"})
  }

  render() {
    const {showMaritalStatusDetails} = this.state;
    var {formData, onChange} = this.props;

    return (
      <Form onChange={this.onFormChange.bind(this)}
            value={formData}>
        <InputField label={"1. Имя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.FIRST_NAME}
                    placeholder="IVAN"
                    helpText={<div>
                      <div>Имя латинскими буквами точно как в загран. паспорте</div>
                      <div>Пример: IVAN</div>
                    </div>}
        />

        <InputField label={"2. Фамилия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.LAST_NAME}
                    placeholder="IVANOV"
                    helpText={<div>Фамилия латинскими буквами точно как в загран. паспорте.</div>}
        />

        <DateField label={"3. Дата рождения"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.BIRTH_DATE}
                   placeholder="Укажите дату рождения"
                   helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />

        <RadioButtonField label={"4. Пол"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.GENDER}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.GENDER}
        />

        <InputField label={"5. Фамилия при рождении"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.BIRTH_LAST_NAME}
                    placeholder="IVANOV"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />

        <InputField label={"6. Место рождения"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.BIRTH_PLACE}
                    placeholder="USSR"
                    helpText={<div>Место рождения латинскими буквами точно как в загран. паспорте.<br/>
                      Если об этом нет информации, укажите место рождения указанное
                      в Свидетельстве о рождении. Воспользуйтесь таблицей транслитерации.</div>}
        />

        <InputField label={"7. Страна рождения"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.BIRTH_COUNTRY}
                    placeholder="USSR"
                    helpText={<div>Если родились до 06.02.1991 года (ВКЛЮЧАЯ ИЛИ НЕТ) — указывайте USSR.<br/>
                      Если родились до 06.02.1991 года на территории Германии — уточните
                      в консульстве Испании.</div>}
        />


        <InputField label={"8.1. Гражданство сейчас"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.CITIZENSHIP}
                    placeholder="USSR"
                    helpText={<div>Латинскими буквами точно как в загран. паспорте.</div>}
        />

        <InputField label={"8.2. Гражданство при рождении"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.BIRTH_CITIZENSHIP}
                    placeholder="USSR"
                    helpText={<div>Если было то же самое, оставьте пустым.<br/>
                      Если родились до 06.02.1991 года (ВКЛЮЧАЯ ИЛИ НЕТ) — указывайте USSR.<br/>
                      Если родились до 06.02.1991 года на территории Германии — уточните
                      в консульстве Испании.</div>}
        />



        <RadioButtonField label={"9. Семейное положение"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.MARITAL_STATUS}
                          buttonNames={VISA_APPLICATION_FORM_ENUMS.MARITAL_STATUS}
        />

        { showMaritalStatusDetails && <InputField label={""}
                                                            fieldName={VISA_APPLICATION_FORM_FILEDS.MARITAL_STATUS_DETAILS}
                                                            placeholder="Уточните семейное положение"
                                                            helpText={<div>Для несовершеннолетних детей — пункт «Холост/не замужем».</div>} />
        }
      </Form>
    );
  }
}