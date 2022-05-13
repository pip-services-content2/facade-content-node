import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 

import { IGuidesClientV1 } from 'client-guides-node';
import { RestOperations } from 'pip-services3-rpc-nodex';

export class GuidesOperationsV1  extends RestOperations {
    private _guidesClient: IGuidesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('guides', new Descriptor('service-guides', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._guidesClient = this._dependencyResolver.getOneRequired<IGuidesClientV1>('guides');
    }

    public async getGuides(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._guidesClient.getGuides(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getRandomGuide(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);

        try {
            let result = await this._guidesClient.getRandomGuide(null, filter);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getGuide(req: any, res: any): Promise<void> {
        let guideId = req.route.params.guide_id;

        try {
            let result = await this._guidesClient.getGuideById(null, guideId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createGuide(req: any, res: any): Promise<void> {
        let guide = req.body || {};

        try {
            let result = await this._guidesClient.createGuide(null, guide);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateGuide(req: any, res: any): Promise<void> {
        let guideId = req.route.params.guide_id;
        let guide = req.body || {};
        guide.id = guideId;
        
        try {
            let result = await this._guidesClient.updateGuide(null, guide);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteGuide(req: any, res: any): Promise<void> {
        let guideId = req.route.params.guide_id;

        try {
            let result = await this._guidesClient.deleteGuideById(null, guideId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }
}