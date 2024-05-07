export class Experience {
    public destination: number;
    public name: String;
    public email: String;
    public contact: String;
    public gender: String;
    public experience: String;
    public rating: number;
    public datetime: Date;
    
    constructor(destination: number, name: String, email: String, contact: String, gender: String, experience: String, rating: number, datetime: Date) {
        this.destination = destination;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.gender = gender;
        this.experience = experience;
        this.rating = rating;
        this.datetime = datetime;
    }
}