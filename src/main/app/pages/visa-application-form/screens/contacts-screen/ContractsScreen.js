import React from 'react';
import {Form} from '../../../../components/form/Form';
import {func, object, string} from 'prop-types';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';
import {
    VISA_APPLICATION_FORM_ENUMS,
    VISA_APPLICATION_FORM_ENUMS_NAMES,
    VISA_APPLICATION_FORM_FILEDS
} from '../../VisaApplicationFormModel';
import {xlp} from "../../../../helpers/helper";

export class ContractsScreen extends React.Component {
  static propTypes = {
    formData: object,
    onChange: func,
  }

  onFormChange(value) {
    var {formData, onChange} = this.props;
    if(formData){
      onChange(value);
    }
  }

  showPupil(){
      return xlp.isSelected(this.props.formData.maritalStatus, VISA_APPLICATION_FORM_ENUMS_NAMES.MARITAL_STATUS.NOTADULT);
  }
  showTargetCountryDetails(){
      return xlp.isSelected(this.props.formData.targetCountry, VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);
  }
  showEmploymentStatusDetails(){
      return xlp.isSelected(this.props.formData.employmentStatus, VISA_APPLICATION_FORM_ENUMS_NAMES.EMPLOYMENT_STATUS.OTHER);
  }

  render() {
    var {formData, onChange} = this.props;

    return (
      <Form onChange={this.onFormChange.bind(this)}
            value={formData}>
        {this.showPupil() &&
        <span>
          <InputField label={"Имя сопровождающего лица"}
            fieldName={VISA_APPLICATION_FORM_FILEDS.TRUSTEE_FIRST_NAME}
            placeholder="MARIA"
          />
          < InputField label={"Фамилия сопровождающего лица"}
            fieldName={VISA_APPLICATION_FORM_FILEDS.TRUSTEE_LAST_NAME}
            placeholder="IVANOVA"
          />
          <InputField label={"Адрес сопровождающего лица"}
            fieldName={VISA_APPLICATION_FORM_FILEDS.TRUSTEE_ADRESS}
            placeholder="Adress"
            helpText={<div>
            Указать адрес латинскими буквами, если отличается от адреса заявителя.
            </div>}
          />
          <InputField label={"Гражданство сопровождающего лица"}
            fieldName={VISA_APPLICATION_FORM_FILEDS.TRUSTEE_CITIZENSHIP}
            placeholder="RUSSIAN FEDERATION"
            helpText={<div>
            Латинскими буквами точно как в загран. паспорте.
          </div>}
          />
        </span>
        }

        <InputField label={"Номер телефона"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.NUMBER}
                    placeholder="+7 (900) 900-90-90"
                    helpText={<div>
                      Укажите телефон, по которому можно с вами связаться.
                    </div>}
        />
        <InputField label={"Email ЗАПОЛНИТЬ ПОСЛЕДНЮЮ СТРАНИЦУ ИМ ПО ДЕФОЛТУ"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.EMAIL}
                    placeholder="email@email.ru"
                    helpText={<div>
                      Укажите email, по которому можно с вами связаться.
                    </div>}
        />
        <InputField label={"Домашний адрес"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.ADRESS}
                    placeholder="Adress"
                    helpText={<div>
                      Адрес, по которому можно с вами связаться.
                    </div>}
        />

        <RadioButtonField label={"Страна пребывания, если не является страной гражданства"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.RESIDENCE_COUNTRY}
                          buttons={VISA_APPLICATION_FORM_ENUMS.BOOL}
                          helpText={<div>
                            Если гражданин РФ и проживает в РФ, то напишите нет.
                          </div>}

        />
        { this.showTargetCountryDetails() &&
        <span>
        <InputField label={"Вид на жительство или равноценный документ"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RESIDENCE_DOCUMENT_CAPTION}
                    placeholder="Название документа"
                    helpText={<div>
                      Укажите название документа, латинскими буквами.
                    </div>}
        />
        <InputField label={"Номер документа"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RESIDENCE_NUMBER}
                    placeholder="Номер документа"

        />
        <DateField label={"Действителен до"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.RESIDENCE_ENDDATE}
                   placeholder="23.07.2023г."

        />
        </span>}

        <RadioButtonField label={"Профессиональная деятельность в настоящее время"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.EMPLOYMENT_STATUS}
                          buttons={VISA_APPLICATION_FORM_ENUMS.EMPLOYMENT_STATUS}
                          helpText={<div>
                            Если гражданин РФ и проживает в РФ, то напишите нет.
                          </div>}

        />
        {this.showEmploymentStatusDetails() &&  <InputField
                    fieldName={VISA_APPLICATION_FORM_FILEDS.EMPLOYMENT_STATUS_DETAILS}
                    placeholder="WORKER"
                    helpText={<div>Указать полное наименование организации латинскими буквами.
                                          В случаях:
                                          Unemployed (Безработный) — прочерк;
                      Housewife (Домохозяйка) — прочерк;
                      Pensioners (Пенсионер) — прочерк;
                      Individual businessman или Private businessman (ИП) — полное наименование вашего ИП. Пример Individual Bisinessman Ivanov Ivan;
                      Student (Студент) — название учебного заведения и адрес;
                      Pupil (Школьник) — название школы и адрес.</div>}
        />
        }

        <InputField label={"Работодатель"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.EMPLOYER_CAPTION}
                    placeholder="Номер документа"

        />
        <InputField label={"Адрес работодателя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.EMPLOYER_ADRESS}
                    placeholder="MOSCVA, UL. LENINA, 194 – 32"
                    helpText={<div>
                      Указать латинскими буквами. Пример: MOSCVA, UL. LENINA, 194 – 32
                    </div>}

        />
        <InputField label={"Телефон работодателя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.EMPLOYER_NUMBER}
                    placeholder="+7 (900) 900-90-90"

        />

      </Form>
    );    
  }

}
