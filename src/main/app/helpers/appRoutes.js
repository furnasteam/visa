export function createHomeRoute() {
  return '/';
}

export function createFullDocumentsListRoute() {
  return '/spisok-dokumentov-na-vizu-v-ispaniyu-2019';
}

export function createDocumentsListRoute(userType) {
  return `/documents/${userType}`;
}

export function createVisaApplicationFormRoute() {
  return `/visa-application-form`;
}