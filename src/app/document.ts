export class Document {
    docName: string;
        id?: number;

    constructor(docName: string, id?: number){

        this.id = id;
        this.docName = docName;
    }
}
