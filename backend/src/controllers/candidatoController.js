import { Router } from 'express';
import { getAllCandidatos, getCandidatoId, addCandidato, updateCandidato, deleteCandidato , getCandidatoAndCategory} from '../service/candidatoService.js';

async function getCandidatoHandler(req,res){
    console.log(req.route)
    try{
        const getCandidatos = await getAllCandidatos()
        return res.status(200).json(getCandidatos)
    }catch(error){
        console.error("Erro ao buscar candidatos",error)
        res.status(400).json({message: "Nao foi encontrado candidatos"})
    }

    
};

async function addCandidatoHandler(req,res){
    console.log(req.route)
    try{
        
        const candidato = req.body;
        const new_candidato =  await addCandidato(candidato)
        return res.status(201).json(new_candidato)
    
    }catch(error){

        console.error("Erro ao adicionar candidato",error)
        res.status(400).json({message: "Nao foi possivel adicionar candidato"})
    
    }
    
}

async function getCandidatoBiId(req,res){
    console.log(req.route)
    try{
        
        const id_candidato = req.params.id;
        const candidato = await getCandidatoId(id_candidato)
        return res.status(200).json(candidato)

    }catch(error){

        console.error("Erro ao buscar candidato por id",error)
        res.status(400).json({message: "Nao foi encontrado candidato"})
    }
    
}

async function getCandidatoAndCategoryHandler(req,res){
    console.log(req.route)
    try {
        const candidatoAndCategory = await getCandidatoAndCategory()
        return res.status(200).json(candidatoAndCategory)

    }catch(error){
        console.error("Erro ao buscar candidato e categoria",error)
    }
}


async function updateCandidatoHandler(req,res){
    console.log(req.route)
    try{
        const candidato = req.body;
        const updateCandidatos = await updateCandidato(candidato)
        return res.status(200).json(updateCandidatos)

    }catch(error){

        console.error("Erro ao atualizar candidato",error)
        res.status(400).json({message: "Nao foi possivel encontrar candidato"})
    
    }
    
}
async function deleteCandidatoHandler(req,res){
    console.log(req.route)
    try{
        const candidato = req.body;
        const deleteCandidatos = await deleteCandidato(candidato)
        return res.status(200).json(deleteCandidatos)

    }catch(error){
        console.error("Erro ao deletar candidato",error)
        res.status(400).json({message: "Nao foi possivel encontrar candidato"})
    }
    
}

export {
    getCandidatoHandler,
    addCandidatoHandler,
    getCandidatoBiId,
    updateCandidatoHandler,
    deleteCandidatoHandler,
    getCandidatoAndCategoryHandler
}


