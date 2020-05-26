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
                res.send({Save: 'OK'})
            }
        })
    }catch(e){
        console.log('Erro ao escrever no banco de dados: ' + e)
    }
}

exports.editarCartao = async (req, res)=>{
    try {
        
        var query = {id: req.params.id}
        var newDate = { bandeira: 'Visa'}

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
        
        await Cartao.findOneAndUpdate(query, dados, {new: 'true'}, (err, doc)=>{
            if(err) return console.log('Erro ao atualizar')
            else{
                res.send({Update: 'OK', Document: doc})
                console.log('Atualizado com sucesso:\n' + doc)  
            } 
        })
        
    } catch (error) {
        
    }
}

exports.apagarCartao = async (req, res)=> {
    try {
        var query = {_id: req.params.id}
        console.log('Deletar')
        if(Mongoose.isValidObjectId(query._id)){ //Se for um id valido, apaga
            await Cartao.findOneAndDelete(query, (err, doc)=>{
                if(err) console.log('Erro ao apagar: ' + err)
                else if(doc){
                    console.log('Documento apagado com sucesso!!!' + doc)
                    res.send({Delete: 'OK', Document: doc})
                }
                else res.send({Delete: 'Doc did not found'})
            })       
        }
        else res.send({Delete: 'Failed'}) 



    } catch (error) {
        console.log('Erro ao apagar: ' + error)
    }
}
