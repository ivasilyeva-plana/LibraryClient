export class BookFilter {
    public writerId: string;
    public writerName: string;
    public genre: string;
    public title: string;

    constructor(writerId, writerName, genre, title) {
        this.writerId = writerId;
        this.writerName = writerName;
        this.genre = genre;
        this.title = title;
    }
}


