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
        // caminho: /cartoes/adicionarCartao/:numero/:mesVencimento/:anoVencimento/:csv/:nomeDono/:bandeira'
        //ex: http://192.168.0.104:3001/cartoes/adicionarCartao/11111111111/05/27/426/Paulo/Master
        var mes = req.params.mesVencimento
        var ano = req.params.anoVencimento
        var dataVencimento = mes + '/' + ano
        var cartao = {
            numero : req.params.numero,
            dataVencimento : dataVencimento,
            csv : req.params.csv,
            nomeDono : req.params.nomeDono,
            bandeira : req.params.bandeira
        }
        
        var dados = Cartao(cartao)
        console.log(cartao)
        await dados.save((err, achados)=>{
            if (err) return console.log('Erro ao salvar os dados: ' + err)
            else {
                console.dir(achados)
                res.send({Sava: 'OK'})
            }
        })
    }catch(e){
        console.log('Erro ao escrever no banco de dados: ' + e)
    }
}

exports.editarCartao = async (req, res)=>{
    try {
        var query = {numero: '4245 2158 2789 635'}
        var newDate = { bandeira: 'Visa'}

        await Cartao.findOneAndUpdate(query, newDate, {new: 'true'}, (err, doc)=>{
            if(err) return console.log('Erro ao atualizar')
            else{
                res.send({Update: 'OK', Document: doc})
                console.log('Atualizado com sucesso:\n' + doc)  
            } 
        })
        
    } catch (error) {
        
    }
}
