const admin = require('firebase-admin')

const serviceAccount = require('../firestore.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

const db = admin.firestore()

const productId = 'FP61bR61NVSONNF9BeIX'

const productRef = db.collection('products').doc(productId)

db
    .collection('products')
    .doc(productId)
    .collection('images')
    .get()
    .then(imgSnapshot => {
    const exclusoes = []
    imgSnapshot.forEach(img => {
        exclusoes.push(db.collection('products').doc(productId).collection('images').doc(img.id).delete())
    })
        return Promise.all(exclusoes)
    })
    .then(() => {
        return productRef.delete()
    })
    .then(() => {
        console.log('everything was deleted')
    })