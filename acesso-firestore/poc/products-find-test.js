const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const cat1 = 'FlU9JwpsqwSGeXnid5mv';
const catRef = db.collection('categories').doc(cat1)

const products = db
    .collection('products')
    .where('categories', 'array-contains', catRef)
    .get();

products.then(snapshot => {
    console.log('is empty ', snapshot.empty)
    snapshot.forEach(doc => {
        console.log(doc.id, ' => ', doc.data());
        db
            .collection('products')
            .doc(doc.id)
            .collection('images')
            .get()
            .then(imgSnapshot => imgSnapshot.forEach(img => {
            console.log('img ==> ',img.id, ' => ', img.data())
        }))
    })
})