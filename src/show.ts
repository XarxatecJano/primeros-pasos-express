import { IDeliverable } from "./iDeliverable";

export class Show implements IDeliverable{
    #title: string;
    #seasons: number = 3;
    #delivered: boolean = false;
    #gender: string;
    #author: string;
    constructor(title: string,seasons: number, gender: string, author: string){
        this.#title = title;
        this.#seasons = seasons;
        this.#gender = gender;
        this.#author = author;
    }
    get title(){
        return this.#title;
    }
    set title(newTitle: string){
        this.#title = newTitle;
    }
    get seasons(){
        return this.#seasons;
    }
    set seasons(newSeasons: number){
        this.#seasons = newSeasons;
    }
    get gender(){
        return this.#gender;
    }
    set gender(newGender: string){
        this.#gender = newGender;
    }
    get author(){
        return this.#author;
    }
    set author(newAuthor: string){
        this.#author = newAuthor;
    }
    
    toString(){
        return `Name: ${this.#title}\nSeasons: ${this.#seasons}\nGender: ${this.#gender}\nAuthor: ${this.#author}`;
    }
    
    deliver(): void {
        this.#delivered = true;
    }

    return(): void {
        this.#delivered = false;
    }

    isDelivered(): boolean {
        return this.#delivered;
    }

    compareTo(objectToCompare: Show): Show {
        let longestShow: Show = this;
        if (this.#seasons < objectToCompare.#seasons) longestShow=objectToCompare;
        return longestShow;
    }
}

const miShow:Show = new Show("Friends", 7, "comedy", "Jano");
console.log(miShow.toString());
