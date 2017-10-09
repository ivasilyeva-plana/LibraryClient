export class PageInfo {
    public pageNumber: number;
    public pageSize: number;
    public totalItems: number;
    public totalPages: number;


    constructor(pageNumber, pageSize, totalItems, totalPages) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.totalItems = totalItems;
        this.totalPages = totalPages;
    }
}


