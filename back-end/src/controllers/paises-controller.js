const Mongoose = require('mongoose')
const paises = Mongoose.model('paises')

exports.listarPaises = async (req, res)=>{

    try{
        paises.find((err, achados)=>{
            if (err) return console.log('Mongoose@jarvis >> mongo erro: \n' + err)
            if (achados){
                console.log(achados)
                res.send(achados)    
            }
        })
    }catch(e){
        return console.log('Server@jarvis >> mongo erro: \n' + e)
    }

}


