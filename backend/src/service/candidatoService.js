import { json } from "express"
import candidato from "../models/Candidato.js";


async function getAllCandidatos(){
    const candidatos = await candidato.findAll();
    return candidatos 
}

async function addCandidato( newCandidato ){
    
    const { category_id,candidato_name } = newCandidato
    
    const candidatos = await candidato.create({
        category_id, candidato_name
    })
    if(!candidatos){
        throw new Error('Erro ao adicionar candidato')
    }
     //   console.log("Candidato adicionado com sucesso:",candidatos)
    return candidatos

}

async function getCandidatoId(id){
    const convert_id = parseInt(id)
    const candidatos_Id = await candidato.findByPk(convert_id)

    if(!candidatos_Id){
        throw new Error("Candidato nao encontrada")
    }

    return candidatos_Id
}

async function updateCandidato(candidatoObj) {
    
        const { id } = candidatoObj;
        const id_candidato = await getCandidatoId(id);
        if(!id_candidato){
            throw new Error("Candidato nao encontrada")
        }
        
        await candidato.update(candidatoObj,{ where: { id: id }});
      //  console.log("Categoria atualizada com sucesso:", candidato);
        return candidato
}

async function deleteCandidato(candidatoObj) {
    
    const { id } = candidatoObj
    const id_category = await getCandidatoId(id)
    if(!id_category){
        throw new Error("Categoria nao encontrada")
    }

    await candidato.destroy({ where: { id: id }});
      //  console.log("Categoria deletada com sucesso:",candidato);
    return candidato

}


export { 
    getAllCandidatos,
    getCandidatoId,
    addCandidato,
    updateCandidato,
    deleteCandidato
}
