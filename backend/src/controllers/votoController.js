import {  getAllVotos, getVotoId, addVoto } from '../service/votoService.js';

async function getVotoHandler(req,res){
    const get_votos = await getAllVotos()
    return res.status(200).json(get_votos)
};

async function addVotoHandler(req,res){
    const votos = req.body;
    const new_votos =  await addVoto(votos)
    return res.status(201).json(new_votos)
}

async function getVotoIdHandler(req,res){
    const id_voto = req.params.id;
    const voto = await getVotoId(id_voto)
    return res.status(200).json(voto)
}
// async function updateCandidatoHandler(req,res){
//     const candidato = req.body;
//     const updateCandidatos = await updateCandidato(candidato)
//     return res.status(200).json(updateCandidatos)
// }
// async function deleteCandidatoHandler(req,res){
//     const candidato = req.body;
//     const deleteCandidatos = await deleteCandidato(candidato)
//     return res.status(200).json(deleteCandidatos)
// }

export {
    getVotoHandler,
    addVotoHandler,
    getVotoIdHandler,
//    updateCandidatoHandler,
//    deleteCandidatoHandler
}


