const Mongoose = require('mongoose')
const Cartao = Mongoose.model('cartaoCredito')
// const Cartao = Mongoose.model('Empregados')

exports.listarCartoes = async (req, res)=>{
    console.log('Server@jarvis >> Listar Cartões')
    try{
        await Cartao.find((err, doc)=>{
            if (err) return console.log('Mongoose@jarvis >> mongo erro: \n' + err)
            if (doc){
                console.log('Dados Encontrados: ' +  doc)
                res.send({status: 'OK', doc: doc})    
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
            bandeira : req.params.bandeira,
            pais : req.params.pais
        }
        
        var dados = Cartao(cartao)
        console.log(cartao)
        await dados.save((err, achados)=>{
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

exports.editarCartao = async (req, res)=>{
    try {
        
        var id = req.params.id

        var mes = req.params.mesVencimento
        var ano = req.params.anoVencimento
        var dataVencimento = mes + '/' + ano
        var cartao = {
            numero : req.params.numero,
            dataVencimento : dataVencimento,
            csv : req.params.csv,
            nomeDono : req.params.nomeDono,
            bandeira : req.params.bandeira,
            pais: req.params.pais
        }
        
        await Cartao.findByIdAndUpdate(id, cartao, {new: true}, (err, doc)=>{
            if(err) { 
                console.log('Erro ao atualizar\n' + err)
                res.send({erro: err}) 
            }
            else if(doc){
                res.send({status: 'OK', doc: doc})
                console.log('Atualizado com sucesso:\n' + doc)  
            }
            else res.send({status: 'Doc did not found'}) 
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
                    res.send({status: 'OK', doc: doc})
                }
                else res.send({status: 'Doc did not found'})
            })       
        }
        else res.send({status: 'Failed'}) 



    } catch (error) {
        console.log('Erro ao apagar: ' + error)
        res.send({status: 'Failed'}) 
    }
}

exports.find = async (req, res)=>{
    try {
        var query = {_id: req.params.id}
        console.log('Buscar documento: ')
        if(Mongoose.isValidObjectId(query._id)){ //Se for um id valido, apaga
            Cartao.findById(query._id, (err, doc)=>{
                if (err) console.log('Doc did not found')
                else if(doc){
                    console.log('Documento encontrado: ' + doc)
                    res.send({status: 'OK', doc: doc})
                }
                else req.send({status: 'Failed'})
            })
        }
        else res.send({status: 'Failed'}) 


    } catch (error) {
        res.send({status: 'Failed'}) 
        console.log('Não encontrou nenhum documento')
    }
}
