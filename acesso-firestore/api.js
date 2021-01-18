const categories = require('./categories')

const testes = async() => {
    /*
    await categories.create({
        category: 'Nova categoria organizada'
    })
    */
    //await categories.update('RR6YnIGi6nF7Mv8MelfL', { category: 'Games++'})
    //await categories.remove('kWrXnG3a7fpT76g7WAmU')
    //await categories.remove('NDjn0LzvClUyMTY8e04G')
    //const cats2 = await categories.findAll();
    //console.log(cats2)

    const cats = await categories.findAllPaginated({pageSize: 3, startAfter: 'Eletrônicos'});
    console.log(cats)
}

/*
categories
    .findAll()
    .then(res => {
        console.log(res)
})
*/

testes();