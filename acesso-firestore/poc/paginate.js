const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const pageSize = 3;

let lastPageItem = ''; //deve ser atribuído dinamicamente por pagina

const categories = db
                    .collection('categories')
                    .orderBy('category')
                    .limit(pageSize+1)
                    .startAfter(lastPageItem)
                    .get();
categories.then(snapshot => {
    console.log('is empty ', snapshot.empty)
    let total = 0;
    snapshot.forEach(doc => {
        if(total < pageSize){
            console.log(doc.id, ' => ', doc.data())
        }
        total++;
    })
    if(total > pageSize){
        console.log('hasNext')
    } else{
        console.log('doesnt have next')
    }
})