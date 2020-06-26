const msalConfig = {
  auth: {
    clientId: '9cdd197b-22e7-4889-b09b-67ebc868f828',
    redirectUri: 'https://etrace-6ad50.web.app/'
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
    forceRefresh: false
  }
};

const loginRequest = {
  scopes: [
    'openid',
    'profile',
    'user.read',
    'calendars.read'
  ]
}