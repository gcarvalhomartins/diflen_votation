import { getAllCandidato, addCandidato } from '../service/candidatoService.js'

async function getCandidatoHandler(req,res) {
    const getAllCandidatoService = await getAllCandidato()
    return res.status(200).json(getAllCandidatoService)
}

async function addCandidatoHandler(req,res){
    const candidato = req.body
    const new_candidato =  await addCandidato(candidato)
    return res.status(201).json(new_candidato)
}

export {
    getCandidatoHandler,
    addCandidatoHandler
}
