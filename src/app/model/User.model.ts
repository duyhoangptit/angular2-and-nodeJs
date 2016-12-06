
export class User{
    public id: number;
    /* username */
    public username: string;
    /* password */
    public password: string;
    /* enable */
    public enable: number;
    /* email */
    public email: string;

    public setComment(data: any){
        this.id = data["id"];
        this.username = data["username"];
        this.password = data["password"];
        this.enable = data["enable"];
        this.email = data["email"];
    }
}
