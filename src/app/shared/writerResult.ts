import { Writer } from "./writer";
import { PageInfo } from "./pageInfo";

export class WriterResult {
    public writers: Writer[];
    public pageInfo: PageInfo;

    constructor(writers, pageInfo) {
        this.writers = writers;
        this.pageInfo = pageInfo;
    }
}