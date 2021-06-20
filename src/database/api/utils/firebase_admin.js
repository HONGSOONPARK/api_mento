var admin = require("firebase-admin");
var serviceAccount = require("../../../../firebase_sdk.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
