const Carros = require('../../models/Carros')
module.exports = {

    async store(req, res) {
        const {nome, tipo, montadora, ano} = req.body

        let car = await Carros.findOne({nome, tipo, montadora, ano})
        console.log(car)

        if(!car){

        car = await Carros.create({
            nome,
            tipo,
            montadora,
            ano,
        })}

        return res.json(car)
    },

    async index(req, res){
        const car = await Carros.find({ Carros})
        console.log(car)

        return res.json(car)
    },

    async show(req, res) {
        const {nome, tipo, montadora} = req.query

        if (nome) {
            const query = await Carros.find({nome: nome})

            return res.json(query)

        }

        else if (tipo) {
            const query = await Carros.find({ tipo: tipo })

            return res.json(query)
        }

        if (montadora) {
            const query = await Carros.find({montadora: montadora})

            return res.json(query)
        }
        
    },

    async update(req, res) {

        const { nome,tipo,montadora,ano } = req.body
        const fields = await Carros.findByIdAndUpdate( req.params.id,
            {nome:nome, tipo:tipo, montadora:montadora, ano:ano},
            {omitUndefined: true, new: true})

        return res.json(fields)

    },

    async  destroy(req, res) {
        
        let del = await Carros.findByIdAndDelete(req.params.id)

        return res.json(del)
    }


}

/*
index => metodo para retornar uma listagem
show => retornar uma única listagem especifica
store => criar um dado
update = > alterar
destroy => remover


Trata de como o modelo será servido.
Diz o que cada função irá fazer quando for chamada e retorna um json para a api.


*/