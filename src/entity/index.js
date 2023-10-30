
class LoginResponse{
    jwt;
    constructor(obj){
        this.jwt = obj.jwt;
    }
}
class User {
    username;
    constructor(obj){
        this.username = obj.username;
    }
}
export {
    LoginResponse,
    User
}