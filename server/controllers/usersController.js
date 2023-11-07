import { db } from "../db.js";
import  pessoa  from "../models/pessoa.js";
 
const getPessoas = async (req, res) => {
    const pessoas = await pessoa.findAll({})

    res.status(200).json({
        pessoas: pessoas
    })
}

const createPessoa = async (req, res) => {
    const{name, number} = req.body

    if(!name || !number){
        res.status(422).json({message: "por favor preencha os campos corretamente"})
        return
    }

    try {
        const newPessoa = await pessoa.create({name: name, number: number})
        res.status(200).json({message:`contato criado com sucesso ${newPessoa}`})
    } catch (err) {
        res.status(500).json({message: err})
    }
}

const editPessoa = async (req, res) =>{
    const pessoaId = req.params.id

    const{name, number} = req.body

    try {
        await pessoa.update({name: name, number: number}, {where:{id: pessoaId}})
        res.status(200).json({message: "pessoa atualizada com sucesso"})
    } catch (error) {
        res.status(500).json({message:"Nao foi possivel atualizar o usuario", error})
    }
}

const deletePessoa = async (req, res) =>{
    const pessoaId = req.params.id

    try {
        await pessoa.destroy({where:{id: pessoaId}})
        res.status(200).json({message: "pessoa deletada com sucesso"})
    } catch (error) {
        res.status(500).json({message:"Nao foi possivel deletar o usuario", error})
    }
}


export {getPessoas, createPessoa, editPessoa, deletePessoa}