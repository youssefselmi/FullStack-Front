import http from "../http-common"
class UserDataService {

    getAll(){
        return http.get('/dashboard')
    }
    get(_id){
        return http.get(`/${_id}`)
    }
    create(data){
        return http.post('/add',data)
    }
    delete(_id){
        return http.delete(`/delete/${_id}`)
    }
    update(_id,data){
        return http.put(`/modifier/${_id}`,data)
    }
    ban(_id){
        return http.put(`/ban/${_id}`)
    }
}
export default new UserDataService;