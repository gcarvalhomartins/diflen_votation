import { json } from "express"
import candidato from "../models/Candidato.js";


async function getAllCandidatos(){
    const candidatos = await candidato.findAll();
    return candidatos 
}

async function addCandidato( newCandidato ){
    const { category_id ,candidato_name } = newCandidato
    
    try{
        const candidatos = await candidato.create({
            category_id, candidato_name
        })
        console.log("Candidato adicionado com sucesso:",candidatos)
        return candidatos

    }catch(error){
        console.error("Erro na candidato service:", error)
    }
}

async function getCandidatoId(id){
    const convert_id = parseInt(id)
    const candidatos_Id = await candidato.findByPk(convert_id)
    return candidatos_Id
}

async function updateCandidato(candidatoObj) {
    
    try {
        const { id } = candidatoObj;
        const id_candidato = await getCandidatoId(id);
        if(!id_candidato){
            throw new Error("Candidato nao encontrada")
        }
        
        await candidato.update(candidatoObj,{ where: { id: id }});
        console.log("Categoria atualizada com sucesso:", candidato);
        return candidato

    }catch (error) {
        console.error("Erro ao atualizar categoria, service",error)
        throw(error)
    }
}

async function deleteCandidato(candidatoObj) {
    try {
        const { id } = candidatoObj
        const id_category = await getCandidatoId(id)
        if(!id_category){
            throw new Error("Categoria nao encontrada")
        }

        await candidato.destroy({ where: { id: id }});
        console.log("Categoria deletada com sucesso:",candidato);
        return candidato

    }catch(error){
        console.error("Erro ao deletar candidato", error)
        throw(error)
    }
}


export { 
    getAllCandidatos,
    getCandidatoId,
    addCandidato,
    updateCandidato,
    deleteCandidato
}
