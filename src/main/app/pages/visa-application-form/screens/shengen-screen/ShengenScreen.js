import React from 'react';
import {VISA_APPLICATION_FORM_ENUMS, VISA_APPLICATION_FORM_FILEDS, VISA_APPLICATION_FORM_ENUMS_NAMES} from '../../VisaApplicationFormModel';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {Form} from '../../../../components/form/Form';
import {func, object, string} from 'prop-types';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';
import {xlp} from "../../../../helpers/helper";

export class ShengenScreen extends React.Component {
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

  showFingerprintsDate(){
      return xlp.isSelected(this.props.formData.fingerprintsExists, VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);
  }
  showPlacementDetails(){
      return xlp.isSelected(this.props.formData.placement, VISA_APPLICATION_FORM_ENUMS_NAMES.PLACEMENT.ITSELF);
  }
  showInvateCompany(){
      return xlp.isSelected(this.props.formData.invateCompany, VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);
  }
  showPayerSponsor(){
      return xlp.isSelected(this.props.formData.payer, VISA_APPLICATION_FORM_ENUMS_NAMES.PAYER.SPONSOR);
  }
  showPayerSponsorDetails(){
      return xlp.isSelected(this.props.formData.payerSponsor, VISA_APPLICATION_FORM_ENUMS_NAMES.PAYER_SPONSOR.OTHER);
  }
  showFacilitiesDetails(){
      return xlp.isSelected(this.props.formData.facilities, VISA_APPLICATION_FORM_ENUMS_NAMES.FACILITIES.PAYOTHER);
  }
  showRelativeDetails(){
      return xlp.isSelected(this.props.formData.relativeExists, VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);
  }
  render() {
    var {formData, onChange} = this.props;
    var bool1 = JSON.parse(JSON.stringify(VISA_APPLICATION_FORM_ENUMS.BOOL));
    var bool2 = JSON.parse(JSON.stringify(VISA_APPLICATION_FORM_ENUMS.BOOL));

      return (
      <Form onChange={this.onFormChange.bind(this)}
            value={formData}>
        <RadioButtonField label={"Предоставляли отпечатки пальцев?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.FINGERPRINTS_EXISTS}
                          buttons={bool1}
        />
        {this.showFingerprintsDate() &&
        <DateField label={""}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.FINGERPRINTS_DATE}
                    placeholder="23.04.2014"
                    helpText={<div>Укажите дату, если известно</div>}
        />}

        <InputField label={"Разрешение на въезд в страну конечно следования"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_NAME}
                    placeholder="Название документа"
                    helpText={<div>Укажите латинскими буквами</div>}
        />

        <DateField label={"Начала действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_STARTDATE}
                   placeholder="23.06.2017г."
                   helpText={<div>Укажите дату</div>}
        />

        <InputField label={"Окончание действия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_ENDDATE}
                    placeholder="23.06.2027г."
                    helpText={<div>Укажите дату</div>}
        />

        <RadioButtonField label={"Где останавливаетесь "}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT}
                          buttons={VISA_APPLICATION_FORM_ENUMS.PLACEMENT}
        />
        {this.showPlacementDetails() &&
        <span>
              <InputField label={"Название отеля/хостела/апартаментов"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_NAME}
                          placeholder="VASILII PUPKIN"
                          helpText={<div>Если у апартаментов нет названия — пропустите.</div>}
              />
              <InputField label={"Адрес"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_ADRESS}
                          placeholder="LATVIA"
              />
              <InputField label={"Электронная почта"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_EMAIL}
                          placeholder="dfsgkftodcgmerwm@gmail.com"
              />
              <InputField label={"Номер телефона и факса"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_PHONE}
                          placeholder="+7 (990) 900-90-90"
              />
        </span>
        }

        <RadioButtonField label={"Приглашение от компании?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY}
                          buttons={bool2}
        />
        {this.showInvateCompany() &&
        <span>
        <InputField label={"Название приглашающей компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_NAME}
                    placeholder="SKOLCOVO"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />
        <InputField label={"Адрес приглашающей компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_ADRESS}
                    placeholder="MOSCOV"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />
        <InputField label={"Номер телефона и факса компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_PHONE}
                    placeholder="+7 (990) 900-90-90"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />

        <InputField label={"Имя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_NAME}
                    placeholder="VASILII"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"Фамилия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_FAMILY}
                    placeholder="PUPKIN"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"Номер телефона и факса"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_PHONE}
                    placeholder="+7 (990) 900-90-90"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"Адрес"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_ADRESS}
                    placeholder="LATVIA"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"Электронная почта"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_EMAIL}
                    placeholder="dfsgkftodcgmerwm@gmail.com"
                    helpText={<div>Контактного лица компании</div>}
        />
        </span>}


        <RadioButtonField label={"Расходы заявителя на проезд и на пребывание покрывает"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER}
                          buttons={VISA_APPLICATION_FORM_ENUMS.PAYER}
        />
        {this.showPayerSponsor() &&
        <RadioButtonField label={"Кто является спонсором?"}
                           fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER_SPONSOR}
                           buttons={VISA_APPLICATION_FORM_ENUMS.PAYER_SPONSOR}
        />}
        {this.showPayerSponsorDetails() &&
        <InputField
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER_SPONSOR_DETAILS}
                    placeholder="Укажите спонсора"
        />
        }

        <CheckboxField label={"Средства"}
                       fieldName={VISA_APPLICATION_FORM_FILEDS.FACILITIES}
                       buttons={VISA_APPLICATION_FORM_ENUMS.FACILITIES}
        />
        {this.showFacilitiesDetails() &&
        <InputField
                    fieldName={VISA_APPLICATION_FORM_FILEDS.FACILITIES_DETAILS}
                    placeholder="Укажите средства"
        />
        }

        <RadioButtonField label={"Есть ли родство с гражданином Европейского Союза, \n" +
        "Европейского Экономического Пространства \n" +
        "или Швейцарии?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_EXISTS}
                          buttons={VISA_APPLICATION_FORM_ENUMS.BOOL}
        />
        {this.showRelativeDetails() &&
        <span>
        <RadioButtonField label={"Степень родства с гражданином Европейского Союза, \n" +
        "Европейского Экономического Пространства \n" +
        "или Швейцарии"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_RANK}
                          buttons={VISA_APPLICATION_FORM_ENUMS.RELATIVE_RANK}
        />

        <InputField label={"Имя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_NAME}
                    placeholder="IVAN"
        />
        <InputField label={"Фамилия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_FAMILY}
                    placeholder="PETROVICH"
        />
        <DateField label={"Дата рождения"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_BIRTH_DATE}
                   placeholder="31.05.1990"
        />
        <InputField label={"Номер паспорта или удостоверения личности"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_PASSPORT}
                    placeholder="4059 044945"
        />
        <InputField label={"Гражданство "}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_CITIZENSHIP}
                    placeholder="SPAIN"
        />
        </span> }

      </Form>
    );    
  }

}