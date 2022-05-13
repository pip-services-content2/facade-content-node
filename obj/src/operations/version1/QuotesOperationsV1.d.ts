import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class QuotesOperationsV1 extends RestOperations {
    private _quotesClient;
    constructor();
    setReferences(references: IReferences): void;
    getQuotes(req: any, res: any): Promise<void>;
    getRandomQuote(req: any, res: any): Promise<void>;
    getQuote(req: any, res: any): Promise<void>;
    createQuote(req: any, res: any): Promise<void>;
    updateQuote(req: any, res: any): Promise<void>;
    deleteQuote(req: any, res: any): Promise<void>;
}
