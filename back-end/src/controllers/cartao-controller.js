const Mongoose = require('mongoose')
const Cartao = Mongoose.model('cartaoCredito')
// const Cartao = Mongoose.model('Empregados')

exports.listarCartoes = async (req, res)=>{
    console.log('Server@jarvis >> Listar Cartões')
    try{
        Cartao.find((err, achados)=>{
            if (err) return console.log('Mongoose@jarvis >> mongo erro: \n' + err)
            if (achados){
                console.log(achados)
                res.send(achados)    
            }
            
        })
    }
    catch(e){
        return console.log('Server@jarvis >> mongo erro: \n' + e)
    }
}

exports.adicionarCartao = async (req, res) =>{
    try{
        
        var cartao = {
            numero : req.params.numero,
            dataVencimento : req.params.dataVencimento,
            csv : req.params.csv,
            nomeDono : req.params.nomeDono,
            bandeira : req.params.bandeira
        }
        
        var dados = Cartao(cartao)
        console.log(cartao)
        dados.save((err, achados)=>{
            if (err) return console.log('Erro ao salvar os dados: ' + err)
            else {
                console.dir(achados)
                res.send({status: 'OK'})
            }
        })
    }catch(e){
        console.log('Erro ao escrever no banco de dados: ' + e)
    }
}
