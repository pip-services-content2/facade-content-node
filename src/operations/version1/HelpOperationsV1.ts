import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 

import { IHelpClientV1 } from 'client-help-node';
import { RestOperations } from 'pip-services3-rpc-nodex';


export class HelpOperationsV1  extends RestOperations {
    private _helpClient: IHelpClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('help', new Descriptor('service-help', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._helpClient = this._dependencyResolver.getOneRequired<IHelpClientV1>('help');
    }

    public async getTopics(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._helpClient.getTopics(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getTopic(req: any, res: any): Promise<void> {
        let topicId = req.route.params.topic_id;

        try {
            let result = await this._helpClient.getTopicById(null, topicId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createTopic(req: any, res: any): Promise<void> {
        let topic = req.body || {};

        try {
            let result = await this._helpClient.createTopic(null, topic);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateTopic(req: any, res: any): Promise<void> {
        let topicId = req.route.params.topic_id;
        let topic = req.body || {};
        topic.id = topicId;

        try {
            let result = await this._helpClient.updateTopic(null, topic);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteTopic(req: any, res: any): Promise<void> {
        let topicId = req.route.params.topic_id;

        try {
            let result = await this._helpClient.deleteTopicById(null, topicId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getArticles(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._helpClient.getArticles(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getRandomArticle(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        
        try {
            let result = await this._helpClient.getRandomArticle(null, filter);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getArticle(req: any, res: any): Promise<void> {
        let articleId = req.route.params.article_id;
        
        try {
            let result = await this._helpClient.getArticleById(null, articleId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createArticle(req: any, res: any): Promise<void> {
        let article = req.body || {};

        try {
            let result = await this._helpClient.createArticle(null, article);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateArticle(req: any, res: any): Promise<void> {
        let articleId = req.route.params.article_id;
        let article = req.body || {};
        article.id = articleId;

        try {
            let result = await this._helpClient.updateArticle(null, article);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteArticle(req: any, res: any): Promise<void> {
        let articleId = req.route.params.article_id;
        
        try {
            let result = await this._helpClient.deleteArticleById(null, articleId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

}