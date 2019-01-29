import find from 'lodash/find';
import keys from 'lodash/keys';
import includes from 'lodash/includes';

export const DocumentTag = {
  OLDER_18: 'OLDER_18',
  HOTEL: 'HOTEL',
  HOSTEL: 'HOSTEL',
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  INVITE_RUS: 'INVITE_RUS',
  INVITE_EU: 'INVITE_EU',
  PLANE: 'PLANE',
  TRAIN: 'TRAIN',
  BUS: 'BUS',
  SHIP: 'SHIP',
  CAR: 'CAR',
  DRIVER: 'DRIVER',
  WORKER: 'WORKER',
  STUDENT: 'STUDENT',
  BUSINESSMAN: 'BUSINESSMAN',
  PENSIONER: 'PENSIONER',
  SPONSOR: 'SPONSOR',
  SELF_PAID: 'SELF_PAID'
};

export const DocumentTagTranslation = {
  [DocumentTag.OLDER_18]: 'старше 18 лет',
  [DocumentTag.HOTEL]: 'отель',
  [DocumentTag.HOSTEL]: 'хостел',
  [DocumentTag.APARTMENT]: 'квартира',
  [DocumentTag.HOUSE]: 'дома',
  [DocumentTag.INVITE_RUS]: 'приглашение РФ',
  [DocumentTag.INVITE_EU]: 'приглашение ЕС',
  [DocumentTag.PLANE]: 'самолет',
  [DocumentTag.TRAIN]: 'поезд',
  [DocumentTag.BUS]: 'автобус',
  [DocumentTag.SHIP]: 'пароход',
  [DocumentTag.CAR]: 'автомобиль',
  [DocumentTag.DRIVER]: 'водитель',
  [DocumentTag.WORKER]: 'работник',
  [DocumentTag.STUDENT]: 'студент',
  [DocumentTag.BUSINESSMAN]: 'ИП',
  [DocumentTag.PENSIONER]: 'пенсионер',
  [DocumentTag.SPONSOR]: 'спонсор',
  [DocumentTag.SELF_PAID]: 'платит сам за себя'
};

export const DocumentTagGroups = {
  AGE: [DocumentTag.OLDER_18],
  ACCOMMODATION: [DocumentTag.HOTEL, DocumentTag.HOSTEL, DocumentTag.APARTMENT, DocumentTag.HOUSE, DocumentTag.INVITE_EU, DocumentTag.INVITE_RUS],
  TRANSPORT: [DocumentTag.PLANE, DocumentTag.TRAIN, DocumentTag.BUS, DocumentTag.SHIP, DocumentTag.CAR, DocumentTag.DRIVER],
  PROFESSION: [DocumentTag.WORKER, DocumentTag.STUDENT, DocumentTag.BUSINESSMAN, DocumentTag.PENSIONER],
  PAYER: [DocumentTag.SPONSOR, DocumentTag.SELF_PAID]
};

export function getTagGroup(tag) {
  return find(keys(DocumentTagGroups), groupName => includes(DocumentTagGroups[groupName], tag));
}