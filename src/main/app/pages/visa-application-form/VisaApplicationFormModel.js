import {SchengenVisa} from './screens/pasport-screen/SchengenVisa';

export const VISA_APPLICATION_FORM_FILEDS = {
  FIRST_NAME : 'firstName',
  LAST_NAME : 'lastName',
  BIRTH_LAST_NAME : 'birthLastName',
  BIRTH_DATE : 'birthDate',
  CITIZENSHIP : 'citizenship',
  BIRTH_CITIZENSHIP : 'birthCitizenship',
  FORM_GENDER : 'gender',
  MARITAL_STATUS : 'maritalStatus',
  MARITAL_STATUS_DETAILS: 'maritalStatusDetails',
  TARGET : 'target',
  TARGET_DETAILS : 'targetDetails',
  TARGET_COUNTRY : 'targetCountry',
  ENTRY_COUNTRY : 'entryCountry',
  ENTRY_TYPE_COUNT : 'entryTypeCount',
  VISA_START_DATE: 'schengenVisaStartDate',
  VISA_END_DATE: 'schengenVisaEndDate',
  BIRTH_PLACE : 'birthPlace',
  BIRTH_COUNTRY: 'birthCountry',
  // ----------------
  TRUSTEE_FIRST_NAME : 'trusteeFirstName',
  TRUSTEE_LAST_NAME : 'trusteeLastName',
  TRUSTEE_ADRESS : 'trusteeAdress',
  TRUSTEE_CITIZENSHIP : 'trusteeCitizenship',
  NUMBER:'number',
  EMAIL:'email',
  ADRESS:'adress',

  SCHENGEN_EXISTS: 'schengenExists',
  RESIDENCE_CAPTION: 'residenceCaption',
  RESIDENCE_NUMBER: 'residenceNumber',
  RESIDENCE_ENDDATE: 'residenceEndDate',
  EMPLOYMENT_STATUS :'employmentStatus',
  EMPLOYMENT_STATUS_DETAILS: 'employmentStatusDetails',
  EMPLOYER_CAPTION: 'employerCaption',
  EMPLOYER_ADRESS: 'employerAdress',
  EMPLOYER_NUMBER: 'employerNumber',

  INTERNATIONAL_PASSPORT_NUMBER: 'internationalPassportNumber',
  INTERNATIONAL_PASSPORT_STARTDATE: 'internationalPassportStartDate',
  INTERNATIONAL_PASSPORT_ENDDATE: 'internationalPassportEndDate',
  INTERNATIONAL_PASSPORT_DELIVERY_STRUCTURE: 'internationalPassportdeliveryStructure',
  SCHENGEN_VISA_START_DATE: 'schengenVisaStartDate',
  SCHENGEN_VISA_END_DATE: 'schengenVisaEndDate',
  SCHENGEN_VISA_NUMBER: 'schengenVisaNumber',

  DOCUMENTS_DATE: 'documentsDate',
  DOCUMENTS_CITY: 'documentsCity',
  DOCUMENTS_EMAIL: 'documentsEmail',

  FINGERPRINTS_EXISTS: 'fingerprintsExists',
  FINGERPRINTS_DATE: 'fingerprintsDate',

  PERMISSION_NAME: 'permissionName',
  PERMISSION_STARTDATE: 'permissionStartDate',
  PERMISSION_ENDDATE: 'permissionEndDate',

  PLACEMENT: 'placement',
  PLACEMENT_NAME: 'placementName',
  PLACEMENT_ADRESS: 'placementAdress',
  PLACEMENT_EMAIL: 'placementEmail',
  PLACEMENT_PHONE: 'placementPhone',

  INVATE_COMPANY: 'invateCompany',
  INVATE_COMPANY_NAME: 'invateCompanyName',
  INVATE_COMPANY_ADRESS: 'invateCompanyAdress',
  INVATE_COMPANY_PHONE: 'invateCompanyPhone',
  INVATE_COMPANY_CONTACT_NAME: 'invateCompanyContactName',
  INVATE_COMPANY_CONTACT_FAMILY: 'invateCompanyContactFamily',
  INVATE_COMPANY_CONTACT_PHONE: 'invateCompanyContactPhone',
  INVATE_COMPANY_CONTACT_ADRESS: 'invateCompanyContactAdress',
  INVATE_COMPANY_CONTACT_EMAIL: 'invateCompanyContactEmail',

  PAYER: 'payer',
  PAYER_SPONSOR: 'payerSponsor',
  PAYER_SPONSOR_DETAILS: 'payerSponsorDetails',

  FACILITIES: 'facilities',
  FACILITIES_DETAILS: 'facilitiesDetails',

  RELATIVE_EXISTS: 'relativeExists',
  RELATIVE_RANK: 'relativeRank',
  RELATIVE_NAME: 'relativeName',
  RELATIVE_FAMILY: 'relativeFamily',
  RELATIVE_BIRTH_DATE: 'relativeBirthDate',
  RELATIVE_PASSPORT: 'relativePassport',
  RELATIVE_CITIZENSHIP: 'relativeCitizenship',

  // TRIP_GOAL:'tripGoal',
  // TRIP_GOAL_DETAILS:'tripGoalDetails',
}

export var VISA_APPLICATION_FORM_ENUMS = {
  GENDER: ["мужской", "женский"],
  BOOL: ["Да", "Нет"],

  PAYER: ["Сам заявитель", "Спонсор"],
  PAYER_SPONSOR: ["Указанные в пункте 4", "Иные"],
  FACILITIES: [
    {
      name: "наличные деньги",
      selected: false
    },
    {
      name: "обеспечивается место пребывания",
      selected: false
    },
    {
      name: "оплачиваются все расходы во время пребывания",
      selected: false
    },
    {
      name: "Оплачивается транспорт",
      selected: false
    },
    {
      name: "иное",
      selected: false
    },
  ],
  RELATIVE_RANK: ["супруг/-а", "ребенок", "внук/-чка", "иждивенец"],
  PLACEMENT: ["Приглашение", "самостоятельное размещение\n" +
  "(отель/хостел/апартаменты)"],
  ENTRY_TYPE_COUNT:["однократного въезда","двукратного въезда","многократного въезда"],

  EMPLOYMENT_STATUS:["unemployed (безработный)","housewife (домохозяйка)","pensioners (пенсионер)","individual businessman (ип)","student (студент)","pupil (школьник)","иное"],
  MARITAL_STATUS: ["холост/незамужем", "не проживает с супругой", "вдовец/вдова", "женат/замужем", "разведен(а)", "иное"],
  TARGET : [
    {
      name: "туризм",
      selected: false
    },
    {
      name: "деловая",
      selected: false
    },
    {
      name: "спорт",
      selected: false
    },
    {
      name: "культура",
      selected: false
    },
    {
      name: "учёба",
      selected: false
    },
    {
      name: "официальная",
      selected: false
    },
    {
      name: "лечение",
      selected: false
    },
    {
      name: "транзит",
      selected: false
    },
    {
      name: "посещение родственников или друзей",
      selected: false
    },
    {
      name: "транзит через аэропорт",
      selected: false
    },
    {
      name: "иное",
      selected: false
    }
    ]
}


