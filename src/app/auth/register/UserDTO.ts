export class UserDTO {
    public name: String;
    public email: String;
    public phone: String;
    public username: String;
    public password: String;


    constructor(name?: String, email?: String, phone?: String, username?: String, password?: String) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
    }
}
