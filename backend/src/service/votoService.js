import { json } from "express"
import { category } from "../models/Category.js"
import  { candidato } from "../models/Candidato.js"
import voto from "../models/Voto.js";


async function getAllVotos(){
    const votos = await voto.findAll();
    return votos 
}

async function addVoto( newVoto ){
    const { name_voto, telefone, email, mais_gostou, menos_gostou, candidato_1, candidato_2 , candidato_3, candidato_4, candidato_5, candidato_6, candidato_7, candidato_8, candidato_9, candidato_10, candidato_11, candidato_12, candidato_13 } = newVoto
    
    try{
        const votos = await voto.create({
            name_voto, telefone, email, mais_gostou, menos_gostou, candidato_1, candidato_2 , candidato_3, candidato_4, candidato_5, candidato_6, candidato_7, candidato_8, candidato_9, candidato_10, candidato_11, candidato_12, candidato_13
        })
       console.log("Candidato adicionado com sucesso:",votos)
        return votos

    }catch(error){
        console.error("Erro na candidato service:", error)
    }
}

async function getVotoId(id){
    const voto_id = parseInt(id)
    const votos_id = await voto.findByPk(voto_id)
    return votos_id
}


// async function updateCandidato(candidatoObj) {
    
//     try {
//         const { id } = candidatoObj;
//         const id_candidato = await getVotoId(id);
//         if(!id_candidato){
//             throw new Error("Candidato nao encontrada")
//         }
        
//         await candidato.update(candidatoObj,{ where: { id: id }});
//       //  console.log("Categoria atualizada com sucesso:", candidato);
//         return candidato

//     }catch (error) {
//         console.error("Erro ao atualizar categoria, service",error)
//         throw(error)
//     }
// }

// async function deleteCandidato(candidatoObj) {
//     try {
//         const { id } = candidatoObj
//         const id_category = await getVotoId(id)
//         if(!id_category){
//             throw new Error("Categoria nao encontrada")
//         }

//         await candidato.destroy({ where: { id: id }});
//       //  console.log("Categoria deletada com sucesso:",candidato);
//         return candidato

//     }catch(error){
//         console.error("Erro ao deletar candidato", error)
//         throw(error)
//     }
// }


export { 
    getAllVotos,
    getVotoId,
    addVoto,
   // updateCandidato,
   // deleteCandidato
}
