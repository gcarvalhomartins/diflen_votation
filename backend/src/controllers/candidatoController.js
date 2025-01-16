import { getAllCandidatos, getCandidatoId, addCandidato, updateCandidato, deleteCandidato } from '../service/candidatoService.js';

async function getCandidatoHandler(req,res){
    const getCandidatos = await getAllCandidatos()
    return res.status(200).json(getCandidatos)
};

async function addCandidatoHandler(req,res){
    const candidato = req.body;
    const new_candidato =  await addCandidato(candidato)
    return res.status(201).json(new_candidato)
}

async function getCandidatoBiId(req,res){
    const id_candidato = req.params.id;
    const candidato = await getCandidatoId(id_candidato)
    return res.status(200).json(candidato)
}
async function updateCandidatoHandler(req,res){
    const candidato = req.body;
    const updateCandidatos = await updateCandidato(candidato)
    return res.status(200).json(updateCandidatos)
}
async function deleteCandidatoHandler(req,res){
    const candidato = req.body;
    const deleteCandidatos = await deleteCandidato(candidato)
    return res.status(200).json(deleteCandidatos)
}

export {
    getCandidatoHandler,
    addCandidatoHandler,
    getCandidatoBiId,
    updateCandidatoHandler,
    deleteCandidatoHandler
}


