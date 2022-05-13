import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 
import { RestOperations } from 'pip-services3-rpc-nodex';

import { ITipsClientV1 } from 'client-tips-node';


export class TipsOperationsV1  extends RestOperations {
    private _tipsClient: ITipsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('tips', new Descriptor('service-tips', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._tipsClient = this._dependencyResolver.getOneRequired<ITipsClientV1>('tips');
    }

    public async getTips(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._tipsClient.getTips(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getRandomTip(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);

        try {
            let result = await this._tipsClient.getRandomTip(null, filter);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getTip(req: any, res: any): Promise<void> {
        let tipId = req.route.params.tip_id;

        try {
            let result = await this._tipsClient.getTipById(null, tipId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createTip(req: any, res: any): Promise<void> {
        let tip = req.body || {};

        try {
            let result = await this._tipsClient.createTip(null, tip);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateTip(req: any, res: any): Promise<void> {
        let tipId = req.route.params.tip_id;
        let tip = req.body || {};
        tip.id = tipId;

        try {
            let result = await this._tipsClient.updateTip(null, tip);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteTip(req: any, res: any): Promise<void> {
        let tipId = req.route.params.tip_id;

        try {
            let result = await this._tipsClient.deleteTipById(null, tipId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

}