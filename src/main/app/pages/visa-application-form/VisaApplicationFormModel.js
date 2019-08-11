import {SchengenVisa} from './screens/pasport-screen/SchengenVisa';

export const VISA_APPLICATION_FORM_FILEDS = {
  FIRST_NAME : 'firstName',
  LAST_NAME : 'lastName',
  BIRTH_LAST_NAME : 'birthLastName',
  BIRTH_DATE : 'birthDate',
  CITIZENSHIP : 'citizenship',
  BIRTH_CITIZENSHIP : 'birthCitizenship',
  GENDER : 'gender',
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
  RESIDENCE_COUNTRY : 'residenceCountry',
  RESIDENCE_DOCUMENT_CAPTION: 'residenceDocumentCaption',
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
};


export const VISA_APPLICATION_FORM_ENUMS_NAMES = {
  GENDER: {
    MAN: 'man',
    WOMAN: 'woman'
  },
  BOOL: {
    YES: 'yes',
    NO: 'no'
  },
  PAYER: {
    DECLARER: 'declarer',
    SPONSOR: 'sponsor'
  },
  PAYER_SPONSOR: {
    PUNCT4: 'punct4',
    OTHER: 'other'
  },
  FACILITIES: {
    CASH: 'cash',
    PAYHOUSE: 'payHouse',
    PAYFACILITIES: 'payFacilities',
    PAYTRANSPORT: 'payTransport',
    PAYOTHER: 'payOther'
  },
  RELATIVE_RANK: {
    SPOUSE: 'spouse',
    CHILD: 'child',
    GRANDSON: 'grandson',
    DEPENDENT: 'dependent'
  },
  PLACEMENT: {
    INVITATION: 'invitation',
    ITSELF: 'itself'
  },
  ENTRY_TYPE_COUNT: {
    ONCE: 'once',
    TWICE: 'twice',
    MULTI: 'multi'
  },
  EMPLOYMENT_STATUS: {
    UNEMPLOYED: 'unemployed',
    HOUSEWIFE: 'housewife',
    RETIREE: 'retiree',
    INDIVIDUAL_BUSINESSMAN: 'individual businessman',
    STUDENT: 'student',
    PUPIL: 'pupil',
    OTHER: 'other'
  },
  MARITAL_STATUS: {
    ALONE: 'alone',
    NOTLIVEWITHWIFE: 'notLiveWithWife',
    WIDOWER: 'widower',
    MARRIED: 'married',
    DIVORCED: 'divorced',
    NOTADULT: 'notAdult',
    OTHER: 'other'
  },
  TARGET: {
    TOURISM: 'tourism',
    BUSINESS: 'business',
    SPORT: 'sport',
    CULTURE: 'culture',
    STUDY: 'study',
    OFFICIAL: 'official',
    TREATMENT: 'treatment',
    TRANSIT: 'transit',
    VISIT: 'visit',
    AIRPORT: 'airport',
    OTHER: 'other'
  }
};

var ENUMS_NAMES = VISA_APPLICATION_FORM_ENUMS_NAMES;

export const VISA_APPLICATION_FORM_ENUMS = {
  GENDER: [
    { name: ENUMS_NAMES.GENDER.MAN, label: 'мужской' },
    { name: ENUMS_NAMES.GENDER.WOMAN, label: 'женский' }
  ],
  BOOL: [
    { name: ENUMS_NAMES.BOOL.YES, label: 'Да' },
    { name: ENUMS_NAMES.BOOL.NO, label: 'Нет' }
  ],
  PAYER: [
    { name: ENUMS_NAMES.PAYER.DECLARER, label: 'Сам заявитель' },
    { name: ENUMS_NAMES.PAYER.SPONSOR, label: 'Спонсор' }
  ],
  PAYER_SPONSOR: [
    { name: ENUMS_NAMES.PAYER_SPONSOR.PUNCT4, label: 'Указанные в пункте 4' },
    { name: ENUMS_NAMES.PAYER_SPONSOR.OTHER, label: 'Иные' }
  ],
  FACILITIES: [
    {
      name: ENUMS_NAMES.FACILITIES.CASH,
      label: 'наличные деньги',
      selected: false
    },
    {
      name: ENUMS_NAMES.FACILITIES.PAYHOUSE,
      label: 'обеспечивается место пребывания',
      selected: false
    },
    {
      name: ENUMS_NAMES.FACILITIES.PAYFACILITIES,
      label: 'оплачиваются все расходы во время пребывания',
      selected: false
    },
    {
      name: ENUMS_NAMES.FACILITIES.PAYTRANSPORT,
      label: 'Оплачивается транспорт',
      selected: false
    },
    {
      name: ENUMS_NAMES.FACILITIES.PAYOTHER,
      label: 'иное',
      selected: false
    },
  ],
  RELATIVE_RANK: [
    { name: ENUMS_NAMES.RELATIVE_RANK.SPOUSE, label: 'супруг/-а' },
    { name: ENUMS_NAMES.RELATIVE_RANK.CHILD, label: 'ребенок' },
    { name: ENUMS_NAMES.RELATIVE_RANK.GRANDSON, label: 'внук/-чка' },
    { name: ENUMS_NAMES.RELATIVE_RANK.DEPENDENT, label: 'иждивенец' }
  ],
  PLACEMENT: [
    { name: ENUMS_NAMES.PLACEMENT.INVITATION, label: 'Приглашение' },
    { name: ENUMS_NAMES.PLACEMENT.ITSELF, label: "самостоятельное размещение\n" +"(отель/хостел/апартаменты)"}
  ],
  ENTRY_TYPE_COUNT: [
    { name: ENUMS_NAMES.ENTRY_TYPE_COUNT.ONCE, label: 'однократного въезда' },
    { name: ENUMS_NAMES.ENTRY_TYPE_COUNT.TWICE, label: 'двукратного въезда' },
    { name: ENUMS_NAMES.ENTRY_TYPE_COUNT.MULTI, label: 'многократного въезда'}
  ],
  EMPLOYMENT_STATUS: [
    { name: ENUMS_NAMES.EMPLOYMENT_STATUS.UNEMPLOYED, label: 'unemployed (безработный)' },
    { name: ENUMS_NAMES.EMPLOYMENT_STATUS.HOUSEWIFE, label: 'housewife (домохозяйка)' },
    { name: ENUMS_NAMES.EMPLOYMENT_STATUS.RETIREE, label: 'retiree (пенсионер)' },
    { name: ENUMS_NAMES.EMPLOYMENT_STATUS.INDIVIDUAL_BUSINESSMAN, label: 'individual businessman (ип)' },
    { name: ENUMS_NAMES.EMPLOYMENT_STATUS.STUDENT, label: 'student (студент)' },
    { name: ENUMS_NAMES.EMPLOYMENT_STATUS.PUPIL, label: 'pupil (школьник)' },
    { name: ENUMS_NAMES.EMPLOYMENT_STATUS.OTHER, label: 'иное' }
  ],
  MARITAL_STATUS: [
    { name: ENUMS_NAMES.MARITAL_STATUS.ALONE, label: 'холост/незамужем' },
    { name: ENUMS_NAMES.MARITAL_STATUS.NOTLIVEWITHWIFE , label: 'не проживает с супругой' },
    { name: ENUMS_NAMES.MARITAL_STATUS.WIDOWER, label: 'вдовец/вдова' },
    { name: ENUMS_NAMES.MARITAL_STATUS.MARRIED, label: 'женат/замужем' },
    { name: ENUMS_NAMES.MARITAL_STATUS.DIVORCED, label: 'разведен(а)' },
    { name: ENUMS_NAMES.MARITAL_STATUS.NOTADULT, label: 'несовершеннолетний' },
    { name: ENUMS_NAMES.MARITAL_STATUS.OTHER, label: 'иное' }
  ],
  TARGET : [
    {
      name: ENUMS_NAMES.TARGET.TOURISM,
      label: "туризм",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.BUSINESS,
      label: "деловая",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.SPORT,
      label: "спорт",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.CULTURE,
      label: "культура",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.STUDY,
      label: "учёба",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.OFFICIAL,
      label: "официальная",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.TREATMENT,
      label: "лечение",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.TRANSIT,
      label: "транзит",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.VISIT,
      label: "посещение родственников или друзей",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.AIRPORT,
      label: "транзит через аэропорт",
      selected: false
    },
    {
      name: ENUMS_NAMES.TARGET.OTHER,
      label: "иное",
      selected: false
    }
  ]
};



export function getEnumOptions(enumType, enumTranslation) {
  map(keys(enumType), key => ({
    label: enumTranslation[key],
    name: enumType[key]
  }))
}
export const VISA_APPLICATION_FORM_ENUMS_LABELS = {
  GENDER: {
    [ENUMS_NAMES.GENDER.MAN]: 'мужской',
    [ENUMS_NAMES.GENDER.WOMAN]: 'женский'
  },
  BOOL: {
    [ENUMS_NAMES.BOOL.YES] : 'Да',
    [ENUMS_NAMES.BOOL.NO] : 'Нет'
  },
  PAYER: {
    [ENUMS_NAMES.PAYER.DECLARER] : 'Сам заявитель',
    [ENUMS_NAMES.PAYER.SPONSOR]: 'Спонсор'
  },
  PAYER_SPONSOR: {
    [ENUMS_NAMES.PAYER_SPONSOR.PUNCT4] : 'Указанные в пункте 4',
    [ENUMS_NAMES.PAYER_SPONSOR.OTHER] : 'Иные'
  },
  FACILITIES: {
    [ENUMS_NAMES.FACILITIES.CASH]: 'наличные деньги',
    [ENUMS_NAMES.FACILITIES.PAYHOUSE] : 'обеспечивается место пребывания',
    [ENUMS_NAMES.FACILITIES.PAYFACILITIES]: 'оплачиваются все расходы во время пребывания',
    [ENUMS_NAMES.FACILITIES.PAYTRANSPORT]: 'Оплачивается транспорт',
    [ENUMS_NAMES.FACILITIES.PAYOTHER]: 'иное'
  },
  RELATIVE_RANK: {
    [ENUMS_NAMES.RELATIVE_RANK.SPOUSE]: 'супруг/-а',
    [ENUMS_NAMES.RELATIVE_RANK.CHILD]: 'ребенок',
    [ENUMS_NAMES.RELATIVE_RANK.GRANDSON]: 'внук/-чка',
    [ENUMS_NAMES.RELATIVE_RANK.DEPENDENT]: 'иждивенец'
  },
  PLACEMENT: {
    [ENUMS_NAMES.PLACEMENT.INVITATION] : 'Приглашение',
    [ENUMS_NAMES.PLACEMENT.ITSELF]: "самостоятельное размещение\n" +"(отель/хостел/апартаменты)"
  },
  ENTRY_TYPE_COUNT: {
    [ENUMS_NAMES.ENTRY_TYPE_COUNT.ONCE] : 'однократного въезда',
    [ENUMS_NAMES.ENTRY_TYPE_COUNT.TWICE] : 'двукратного въезда',
    [ENUMS_NAMES.ENTRY_TYPE_COUNT.MULTI] : 'многократного въезда'
  },
  EMPLOYMENT_STATUS: {
    [ENUMS_NAMES.EMPLOYMENT_STATUS.UNEMPLOYED]: 'unemployed (безработный)',
    [ENUMS_NAMES.EMPLOYMENT_STATUS.HOUSEWIFE]: 'housewife (домохозяйка)',
    [ENUMS_NAMES.EMPLOYMENT_STATUS.RETIREE]: 'retiree (пенсионер)',
    [ENUMS_NAMES.EMPLOYMENT_STATUS.INDIVIDUAL_BUSINESSMAN]: 'individual businessman (ип)',
    [ENUMS_NAMES.EMPLOYMENT_STATUS.STUDENT]: 'student (студент)',
    [ENUMS_NAMES.EMPLOYMENT_STATUS.PUPIL]: 'pupil (школьник)',
    [ENUMS_NAMES.EMPLOYMENT_STATUS.OTHER] : 'иное'
  },
  MARITAL_STATUS: {
    [ENUMS_NAMES.MARITAL_STATUS.ALONE]: 'холост/незамужем',
    [ENUMS_NAMES.MARITAL_STATUS.NOTLIVEWITHWIFE ]: 'не проживает с супругой',
    [ENUMS_NAMES.MARITAL_STATUS.WIDOWER]: 'вдовец/вдова',
    [ENUMS_NAMES.MARITAL_STATUS.MARRIED]: 'женат/замужем',
    [ENUMS_NAMES.MARITAL_STATUS.DIVORCED]: 'разведен(а)',
    [ENUMS_NAMES.MARITAL_STATUS.NOTADULT]: 'несовершеннолетний',
    [ENUMS_NAMES.MARITAL_STATUS.OTHER]: 'иное'
  },
  TARGET : {
    [ENUMS_NAMES.TARGET.TOURISM]: "туризм",
    [ENUMS_NAMES.TARGET.BUSINESS]: "деловая",
    [ENUMS_NAMES.TARGET.SPORT]: "спорт",
    [ENUMS_NAMES.TARGET.CULTURE]: "культура",
    [ENUMS_NAMES.TARGET.STUDY]: "учёба",
    [ENUMS_NAMES.TARGET.OFFICIAL]: "официальная",
    [ENUMS_NAMES.TARGET.TREATMENT]: "лечение",
    [ENUMS_NAMES.TARGET.TRANSIT]: "транзит",
    [ENUMS_NAMES.TARGET.VISIT]: "посещение родственников или друзей",
    [ENUMS_NAMES.TARGET.AIRPORT]: "транзит через аэропорт",
    [ENUMS_NAMES.TARGET.OTHER]: "иное"
  }
};


//
// export function getEnumOptions(enumType, enumTranslation) {
//   map(keys(enumType), key => ({
//     label: enumTranslation[key],
//     name: enumType[key]
//   }))
// }
// export const VISA_APPLICATION_FORM_ENUMS_LABELS = {
//   GENDER: {
//     [ENUMS_NAMES.GENDER.MAN]: 'мужской',
//     [ENUMS_NAMES.GENDER.WOMAN]: 'женский'
//   },
//   BOOL: {
//     [ENUMS_NAMES.BOOL.YES] : 'Да',
//     [ENUMS_NAMES.BOOL.NO] : 'Нет'
//   },
//   PAYER: {
//     [ENUMS_NAMES.PAYER.DECLARER] : 'Сам заявитель',
//     [ENUMS_NAMES.PAYER.SPONSOR]: 'Спонсор'
//   },
//   PAYER_SPONSOR: {
//     [ENUMS_NAMES.PAYER_SPONSOR.PUNCT4] : 'Указанные в пункте 4',
//     [ENUMS_NAMES.PAYER_SPONSOR.OTHER] : 'Иные'
//   },
//   FACILITIES: {
//     [ENUMS_NAMES.FACILITIES.CASH]: 'наличные деньги',
//     [ENUMS_NAMES.FACILITIES.PAYHOUSE] : 'обеспечивается место пребывания',
//     [ENUMS_NAMES.FACILITIES.PAYFACILITIES]: 'оплачиваются все расходы во время пребывания',
//     [ENUMS_NAMES.FACILITIES.PAYTRANSPORT]: 'Оплачивается транспорт',
//     [ENUMS_NAMES.FACILITIES.PAYOTHER]: 'иное'
//   },
//   RELATIVE_RANK: {
//     [ENUMS_NAMES.RELATIVE_RANK.SPOUSE]: 'супруг/-а',
//     [ENUMS_NAMES.RELATIVE_RANK.CHILD]: 'ребенок',
//     [ENUMS_NAMES.RELATIVE_RANK.GRANDSON]: 'внук/-чка',
//     [ENUMS_NAMES.RELATIVE_RANK.DEPENDENT]: 'иждивенец'
//   },
//   PLACEMENT: {
//     [ENUMS_NAMES.PLACEMENT.INVITATION] : 'Приглашение',
//     [ENUMS_NAMES.PLACEMENT.ITSELF]: "самостоятельное размещение\n" +"(отель/хостел/апартаменты)"
//   },
//   ENTRY_TYPE_COUNT: {
//     [ENUMS_NAMES.ENTRY_TYPE_COUNT.ONCE] : 'однократного въезда',
//     [ENUMS_NAMES.ENTRY_TYPE_COUNT.TWICE] : 'двукратного въезда',
//     [ENUMS_NAMES.ENTRY_TYPE_COUNT.MULTI] : 'многократного въезда'
//   },
//   EMPLOYMENT_STATUS: {
//     [ENUMS_NAMES.EMPLOYMENT_STATUS.UNEMPLOYED]: 'unemployed (безработный)',
//     [ENUMS_NAMES.EMPLOYMENT_STATUS.HOUSEWIFE]: 'housewife (домохозяйка)',
//     [ENUMS_NAMES.EMPLOYMENT_STATUS.RETIREE]: 'retiree (пенсионер)',
//     [ENUMS_NAMES.EMPLOYMENT_STATUS.INDIVIDUAL_BUSINESSMAN]: 'individual businessman (ип)',
//     [ENUMS_NAMES.EMPLOYMENT_STATUS.STUDENT]: 'student (студент)',
//     [ENUMS_NAMES.EMPLOYMENT_STATUS.PUPIL]: 'pupil (школьник)',
//     [ENUMS_NAMES.EMPLOYMENT_STATUS.OTHER] : 'иное'
//   },
//   MARITAL_STATUS: {
//     [ENUMS_NAMES.MARITAL_STATUS.ALONE]: 'холост/незамужем',
//     [ENUMS_NAMES.MARITAL_STATUS.NOTLIVEWITHWIFE ]: 'не проживает с супругой',
//     [ENUMS_NAMES.MARITAL_STATUS.WIDOWER]: 'вдовец/вдова',
//     [ENUMS_NAMES.MARITAL_STATUS.MARRIED]: 'женат/замужем',
//     [ENUMS_NAMES.MARITAL_STATUS.DIVORCED]: 'разведен(а)',
//     [ENUMS_NAMES.MARITAL_STATUS.NOTADULT]: 'несовершеннолетний',
//     [ENUMS_NAMES.MARITAL_STATUS.OTHER]: 'иное'
//   },
//   TARGET : {
//     [ENUMS_NAMES.TARGET.TOURISM]: "туризм",
//     [ENUMS_NAMES.TARGET.BUSINESS]: "деловая",
//     [ENUMS_NAMES.TARGET.SPORT]: "спорт",
//     [ENUMS_NAMES.TARGET.CULTURE]: "культура",
//     [ENUMS_NAMES.TARGET.STUDY]: "учёба",
//     [ENUMS_NAMES.TARGET.OFFICIAL]: "официальная",
//     [ENUMS_NAMES.TARGET.TREATMENT]: "лечение",
//     [ENUMS_NAMES.TARGET.TRANSIT]: "транзит",
//     [ENUMS_NAMES.TARGET.VISIT]: "посещение родственников или друзей",
//     [ENUMS_NAMES.TARGET.AIRPORT]: "транзит через аэропорт",
//     [ENUMS_NAMES.TARGET.OTHER]: "иное"
//   }
// };

