import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class TipsOperationsV1 extends RestOperations {
    private _tipsClient;
    constructor();
    setReferences(references: IReferences): void;
    getTips(req: any, res: any): Promise<void>;
    getRandomTip(req: any, res: any): Promise<void>;
    getTip(req: any, res: any): Promise<void>;
    createTip(req: any, res: any): Promise<void>;
    updateTip(req: any, res: any): Promise<void>;
    deleteTip(req: any, res: any): Promise<void>;
}
