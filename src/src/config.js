const msalConfig = {
  auth: {
    clientId: '9cdd197b-22e7-4889-b09b-67ebc868f828',
    redirectUri: 'http://localhost:8080'
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