const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const doc = db.collection('categories').doc('AdWeqxgwzE9xNlYrqrMA');
doc.delete()
    .then(snap => {
    console.log(snap);
})
