import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 
import { RestOperations } from 'pip-services3-rpc-nodex';

import { IQuotesClientV1 } from 'client-quotes-node';



export class QuotesOperationsV1  extends RestOperations {
    private _quotesClient: IQuotesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('quotes', new Descriptor('service-quotes', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._quotesClient = this._dependencyResolver.getOneRequired<IQuotesClientV1>('quotes');
    }


    public async getQuotes(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);
        
        try {
            let result = await this._quotesClient.getQuotes(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getRandomQuote(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);

        try {
            let result = await this._quotesClient.getRandomQuote(null, filter);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getQuote(req: any, res: any): Promise<void> {
        let quoteId = req.route.params.quote_id;

        try {
            let result = await this._quotesClient.getQuoteById(null, quoteId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createQuote(req: any, res: any): Promise<void> {
        let quote = req.body || {};

        try {
            let result = await this._quotesClient.createQuote(null, quote);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateQuote(req: any, res: any): Promise<void> {
        let quoteId = req.route.params.quote_id;
        let quote = req.body || {};
        quote.id = quoteId;
        
        try {
            let result = await this._quotesClient.updateQuote(null, quote);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteQuote(req: any, res: any): Promise<void> {
        let quoteId = req.route.params.quote_id;

        try {
            let result = await this._quotesClient.deleteQuoteById(null, quoteId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }
}