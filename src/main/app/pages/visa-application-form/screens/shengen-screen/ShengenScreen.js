import React from 'react';
import {VISA_APPLICATION_FORM_ENUMS, VISA_APPLICATION_FORM_FILEDS, VISA_APPLICATION_FORM_ENUMS_NAMES} from '../../VisaApplicationFormModel';
import {CheckboxField} from '../../../../components/form/fields/checkbox-field/CheckboxField';
import {Form} from '../../../../components/form/Form';
import {func, object, string} from 'prop-types';
import {DateField} from '../../../../components/form/fields/date-field/DateField';
import {InputField} from '../../../../components/form/fields/input-field/InputField';
import {RadioButtonField} from '../../../../components/form/fields/radio-button-field/RadioButtonField';

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
      return this.props.formData.fingerprintsExists == (VISA_APPLICATION_FORM_FILEDS.FINGERPRINTS_EXISTS + '_' + VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);
  }
  showPlacementDetails(){
      return this.props.formData.placement == (VISA_APPLICATION_FORM_FILEDS.PLACEMENT + '_' + VISA_APPLICATION_FORM_ENUMS_NAMES.PLACEMENT.ITSELF);
  }
  showInvateCompany(){
      return this.props.formData.invateCompany == (VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY  + '_' + VISA_APPLICATION_FORM_ENUMS_NAMES.BOOL.YES);
  }
  showPayerSponsor(){
      return this.props.formData.payer == (VISA_APPLICATION_FORM_FILEDS.PAYER  + '_' + VISA_APPLICATION_FORM_ENUMS_NAMES.PAYER.SPONSOR);
  }
  showPayerSponsorDetails(){
      return this.props.formData.payerSponsor == (VISA_APPLICATION_FORM_FILEDS.PAYER_SPONSOR  + '_' + VISA_APPLICATION_FORM_ENUMS_NAMES.PAYER_SPONSOR.OTHER);
  }
  showFacilitiesDetails(){
    var res;
      if(this.props.formData.facilities){
        res = this.props.formData.facilities.find((el)=>{
          if(el.name == VISA_APPLICATION_FORM_ENUMS_NAMES.FACILITIES.PAYOTHER)
            return el;
        });
      }
      return res && res.selected;
  }

  showRelativeDetails(){
    return this.props.formData.relativeExists == "relativeExists_Да";
  }
  render() {
    var {formData, onChange} = this.props;
    return (
      <Form onChange={this.onFormChange.bind(this)}
            value={formData}>
        <RadioButtonField label={"1. Предоставляли отпечатки пальцев?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.FINGERPRINTS_EXISTS}
                          buttons={VISA_APPLICATION_FORM_ENUMS.BOOL}
        />
        {this.showFingerprintsDate() &&
        <DateField label={""}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.FINGERPRINTS_DATE}
                    placeholder="23.04.2014"
                    helpText={<div>Укажите дату, если известно</div>}
        />}

        <InputField label={"2. Разрешение на въезд в страну конечно следования"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_NAME}
                    placeholder="Название документа"
                    helpText={<div>Укажите латинскими буквами</div>}
        />

        <DateField label={"2.1 Начала действия"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_STARTDATE}
                   placeholder="23.06.2017г."
                   helpText={<div>Укажите дату</div>}
        />

        <InputField label={"2.2 Окончание действия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PERMISSION_ENDDATE}
                    placeholder="23.06.2027г."
                    helpText={<div>Укажите дату</div>}
        />

        <RadioButtonField label={"3. Где останавливаетесь "}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT}
                          buttons={VISA_APPLICATION_FORM_ENUMS.PLACEMENT}
        />
        {this.showPlacementDetails() &&
        <span>
              <InputField label={"4. Название отеля/хостела/апартаментов"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_NAME}
                          placeholder="VASILII PUPKIN"
                          helpText={<div>Если у апартаментов нет названия — пропустите.</div>}
              />
              <InputField label={"5. Адрес"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_ADRESS}
                          placeholder="LATVIA"
              />
              <InputField label={"6. Электронная почта"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_EMAIL}
                          placeholder="dfsgkftodcgmerwm@gmail.com"
              />
              <InputField label={"7. Номер телефона и факса"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PLACEMENT_PHONE}
                          placeholder="+7 (990) 900-90-90"
              />
        </span>
        }

        <RadioButtonField label={"4. Приглашение от компании?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY}
                          buttons={VISA_APPLICATION_FORM_ENUMS.BOOL}
        />
        {this.showInvateCompany() &&
        <span>
        <InputField label={"5. Название приглашающей компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_NAME}
                    placeholder="SKOLCOVO"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />
        <InputField label={"6. Адрес приглашающей компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_ADRESS}
                    placeholder="MOSCOV"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />
        <InputField label={"7. Номер телефона и факса компании"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_PHONE}
                    placeholder="+7 (990) 900-90-90"
                    helpText={<div>Если была та же самая, оставьте пустым.</div>}
        />

        <InputField label={"8. Имя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_NAME}
                    placeholder="VASILII"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"9. Фамилия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_FAMILY}
                    placeholder="PUPKIN"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"10. Номер телефона и факса"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_PHONE}
                    placeholder="+7 (990) 900-90-90"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"11. Адрес"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_ADRESS}
                    placeholder="LATVIA"
                    helpText={<div>Контактного лица компании</div>}
        />
        <InputField label={"12. Электронная почта"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.INVATE_COMPANY_CONTACT_EMAIL}
                    placeholder="dfsgkftodcgmerwm@gmail.com"
                    helpText={<div>Контактного лица компании</div>}
        />
        </span>}


        <RadioButtonField label={"13. Расходы заявителя на проезд и на пребывание покрывает"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER}
                          buttons={VISA_APPLICATION_FORM_ENUMS.PAYER}
        />
        {this.showPayerSponsor() &&
        <RadioButtonField label={"14. Кто является спонсором?"}
                           fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER_SPONSOR}
                           buttons={VISA_APPLICATION_FORM_ENUMS.PAYER_SPONSOR}
        />}
        {this.showPayerSponsorDetails() &&
        <InputField
                    fieldName={VISA_APPLICATION_FORM_FILEDS.PAYER_SPONSOR_DETAILS}
                    placeholder="Укажите спонсора"
        />
        }

        <CheckboxField label={"15.  Средства"}
                       fieldName={VISA_APPLICATION_FORM_FILEDS.FACILITIES}
                       buttons={VISA_APPLICATION_FORM_ENUMS.FACILITIES}
        />
        {this.showFacilitiesDetails() &&
        <InputField
                    fieldName={VISA_APPLICATION_FORM_FILEDS.FACILITIES_DETAILS}
                    placeholder="Укажите средства"
        />
        }

        <RadioButtonField label={"16. Есть ли родство с гражданином Европейского Союза, \n" +
        "Европейского Экономического Пространства \n" +
        "или Швейцарии?"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_EXISTS}
                          buttons={VISA_APPLICATION_FORM_ENUMS.BOOL}
        />
        {this.showRelativeDetails() &&
        <span>
        <RadioButtonField label={"17. Степень родства с гражданином Европейского Союза, \n" +
        "Европейского Экономического Пространства \n" +
        "или Швейцарии"}
                          fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_RANK}
                          buttons={VISA_APPLICATION_FORM_ENUMS.RELATIVE_RANK}
        />

        <InputField label={"18. Имя"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_NAME}
                    placeholder="IVAN"
        />
        <InputField label={"19. Фамилия"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_FAMILY}
                    placeholder="PETROVICH"
        />
        <DateField label={"20. Дата рождения"}
                   fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_BIRTH_DATE}
                   placeholder="31.05.1990"
        />
        <InputField label={"21. Номер паспорта или удостоверения личности"}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_PASSPORT}
                    placeholder="4059 044945"
        />
        <InputField label={"22. Гражданство "}
                    fieldName={VISA_APPLICATION_FORM_FILEDS.RELATIVE_CITIZENSHIP}
                    placeholder="SPAIN"
        />
        </span> }

      </Form>
    );    
  }

}