export default function getJSON(pageNumber) {
  if (pageNumber == 1) {
    return {
      '1_family': '1_family',
      '2_previosFamily': '2_previosFamily',
      '3_name': '3_name',
      '4_birthDate': '4_birthDate',
      '5_birthPlace': '5_birthPlace',
      '6_birth_Country': '6_birth_Country',
      '7_citizenship': '7_citizenship',
      '7_birth_Citizenship': '7_birth_Citizenship',
      '8_birth_country': [0, 1],
      '9_maritalStatus': [0, 1, 2, 3, 4, 5],
      '10_birthCountry': '10_birthCountry',
      '11_personalNumber': '11_personalNumber',
      '12_pasportType': [0, 1, 2, 3, 4, 5],
      '13_docNumber': '13_docNumber',
      '14_docStartDate': '14_docStartDate',
      '15_docEndDate': '15_docEndDate',
      '16_docIssuedBy': '16_docIssuedBy',
      '17_adress_email': '17_adress_email',
      '17_telNumber': '18_telNumber',
      '18_liveCounty': [0, 1],
      '18_liveCounty_2': '18_liveCounty_2',
      '18_liveCounty_3': '18_liveCounty_3',
      '18_liveCounty_4': '18_liveCounty_4',
      '19_profession': '19_profession',
    }
  }
  else if (pageNumber == 2) {
    return {
      '20_employer': '20_employer',
      '21_target': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      '21_target_other': '21_target_other',
      '22_targetCountry': '22_targetCountry',
      '23_enterCountry': '23_enterCountry',
      '24_entryCount': [0, 1, 2],
      '25_duration': '25_duration',
      '26_schengen': [0, 1],
      '26_schengenStart': '26_schengenStart',
      '26_schengenEnd': '26_schengenEnd',
      '27_prints': [0, 1],
      '27_printsDate': '27_printsDate',
      '28_permExpired': '28_permExpired',
      '28_permStartDate': '28_permStartDate',
      '28_permEndDate': '28_permEndDate',
      '29_entryStartDate': '29_entryStartDate',
      '30_entryEndDate': '30_entryEndDate',
      '31_invatePerson': '31_invatePerson',
      '31_invatePersonAdress': '31_invatePersonAdress',
      '31_invatePersonPhone': '31_invatePersonPhone',
    }
  }
  else if (pageNumber == 3) {
    return {
      '32_attractingCompany': '32_attractingCompany',
      '32_attractingCompanyPhone': '32_attractingCompanyPhone',
      '32_attractingCompanyAdress': '32_attractingCompanyAdress',
      '33_costs': '33_costs',
      '33_costs_left': [0, 1, 2, 3, 4, 5, 6],
      '33_costs_right': [0, 1, 2, 3, 4, 5, 6, 7],
      '33_costs_left_details': '33_costs_left_details',
      '33_costs_right_details': '33_costs_right_details',
      '34_ES_citizen': '34_ES_citizen',
      '34_ES_citizen_family': '34_ES_citizen_family',
      '34_ES_citizenName': '34_ES_citizenName',
      '34_ES_citizen_birthday': '34_ES_citizen_birthday',
      '34_ES_citizen_citizenship': '34_ES_citizen_citizenship',
      '34_ES_citizen_passport': '34_ES_citizen_passport',
      '35_citMarried': [0, 1, 2, 3],
      '36_placeAndDate': '36_placeAndDate',
      '37_sign': '37_sign',
      'sign_2': 'sign_2',
      'sign_3': 'sign_3'
    }
  }
  else if (pageNumber == 4) {
    return {
      'dateAndPlace': 'dateAndPlace',
      'sign_1': 'sign_1',
    }
  }
}