import find from 'lodash/find';
import keys from 'lodash/keys';
import includes from 'lodash/includes';

export const DocumentTag = {
  OLDER_18: 'OLDER_18',
  YOUNGER_18: 'YOUNGER_18',
  BOOKING: 'BOOKING',
  INVITE: 'INVITE',
  TICKET: 'TICKET',
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
  [DocumentTag.YOUNGER_18]: 'младше 18 лет',
  [DocumentTag.BOOKING]: 'бронь размещения',
  [DocumentTag.INVITE]: 'приглашение',
  [DocumentTag.TICKET]: 'бронь билета',
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
  AGE: [DocumentTag.OLDER_18, DocumentTag.YOUNGER_18],
  ACCOMMODATION: [DocumentTag.BOOKING, DocumentTag.INVITE],
  TRANSPORT: [DocumentTag.TICKET, DocumentTag.CAR, DocumentTag.DRIVER],
  PROFESSION: [DocumentTag.WORKER, DocumentTag.STUDENT, DocumentTag.BUSINESSMAN, DocumentTag.PENSIONER],
  PAYER: [DocumentTag.SPONSOR, DocumentTag.SELF_PAID]
};

export function getTagGroup(tag) {
  return find(keys(DocumentTagGroups), groupName => includes(DocumentTagGroups[groupName], tag));
}