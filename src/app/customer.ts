export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    emailAddress: string;

    constructor(id:number, firstName: string, lastName: string, username: string, password: string, emailAddress: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.emailAddress = emailAddress;
    }
}
