import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class HelpOperationsV1 extends RestOperations {
    private _helpClient;
    constructor();
    setReferences(references: IReferences): void;
    getTopics(req: any, res: any): Promise<void>;
    getTopic(req: any, res: any): Promise<void>;
    createTopic(req: any, res: any): Promise<void>;
    updateTopic(req: any, res: any): Promise<void>;
    deleteTopic(req: any, res: any): Promise<void>;
    getArticles(req: any, res: any): Promise<void>;
    getRandomArticle(req: any, res: any): Promise<void>;
    getArticle(req: any, res: any): Promise<void>;
    createArticle(req: any, res: any): Promise<void>;
    updateArticle(req: any, res: any): Promise<void>;
    deleteArticle(req: any, res: any): Promise<void>;
}
