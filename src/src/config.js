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
function initFirebase() {
// Set the configuration for your app
// TODO: Replace with your project's config object
  console.log("Firebase is configured");
  var config = {
    apiKey: "AIzaSyC7AgmU23b2qTRkFqbpH6rYeZ1O4dKFebU",
    authDomain: "https://etrace-6ad50.web.app/",
    databaseURL: "https://etrace-6ad50.firebaseio.com/",
    storageBucket: "etrace-6ad50.appspot.com"
  };
  firebase.initializeApp(config);

// Get a reference to the database service
  //var database = firebase.database();
}