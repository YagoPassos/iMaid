const Mongoose = require('mongoose')
const paises = Mongoose.model('paises')

exports.listarPaises = async (req, res)=>{

    try{
        paises.find((err, doc)=>{
            if (err) return console.log('Mongoose@jarvis >> mongo erro: \n' + err)
            if (doc){
                console.log('Paises encontrados')
                res.send({status: 'OK', doc: doc})    
            }
        })
    }catch(e){
        return console.log('Server@jarvis >> mongo erro: \n' + e)
    }

}


