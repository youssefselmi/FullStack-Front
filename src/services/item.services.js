import axios from "axios"
import http from "../http-common"
class ItemDataService {

    getAll(){
        return http.get('/afficher')
    }
    get(_id){
        return http.get(`/${_id}`)
    }
    create(data){
        return http.post('/ajouter',data)
    }
    delete(_id){
        return http.delete(`/supprimer/${_id}`)
    }
    update(_id,data){
        return http.put(`/modifer/${_id}`,data)
    }
    catlanimal(){
        return http.get('/categorie?categorie=Animals')
    }
    catcloth(){
        return http.get('categorie?categorie=Clothes')
    }
    catelect(){
        return http.get('categorie?categorie=Electronique')
    }
    catcars(){
        return http.get('categorie?categorie=Cars')
    }
    catjard(){
        return http.get('categorie?categorie=Jardinage')
    }
    affichsugg(){
        return http.get('/njareb');
    }
}
export default new ItemDataService