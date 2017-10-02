export class Book {
    public bookId: number;
    public title: string;
    public genre: string;
    public published: Date;
    public writerId: string;
    public writerName: string;


    constructor(id, title, genre, published, writerId, writerName) {
        this.bookId = id;
        this.title = title;
        this.genre = genre;
        this.published = published;
        this.writerId = writerId;
        this.writerName = writerName;
    }
}


