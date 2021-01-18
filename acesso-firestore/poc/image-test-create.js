const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const productId = 'FP61bR61NVSONNF9BeIX';
const imageRef = db
    .collection('products')
    .doc(productId)
    .collection('images')
    .doc()

imageRef
    .set({
        description: 'my description',
        url: 'my image url'
})
    .then(res => {
        console.log(res)
})


