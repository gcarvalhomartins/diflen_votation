import { json } from "express"

const candidato = []

function getAllCandidato(){
    return candidato
}

function addCandidato(new_candidato){
    const { id_category, name_candidato} = new_candidato
    candidato.push({ id_category,  name_candidato })
    return { menssage:"Candidato adicionado com sucesso =) "}

}

export {
    getAllCandidato,
    addCandidato
}

