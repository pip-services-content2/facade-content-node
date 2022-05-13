import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 

import { IImageSetsClientV1 } from 'client-imagesets-node';
import { RestOperations } from 'pip-services3-rpc-nodex';

export class ImageSetsOperationsV1  extends RestOperations {
    private _imagesetsClient: IImageSetsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('imagesets', new Descriptor('service-imagesets', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._imagesetsClient = this._dependencyResolver.getOneRequired<IImageSetsClientV1>('imagesets');
    }


    public async getImageSets(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._imagesetsClient.getImageSets(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getImageSet(req: any, res: any): Promise<void> {
        let imagesetId = req.route.params.imageset_id;

        try {
            let result = await this._imagesetsClient.getImageSetById(null, imagesetId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createImageSet(req: any, res: any): Promise<void> {
        let imageset = req.body || {};

        try {
            let result = await this._imagesetsClient.createImageSet(null, imageset);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateImageSet(req: any, res: any): Promise<void> {
        let imagesetId = req.route.params.imageset_id;
        let imageset = req.body || {};
        imageset.id = imagesetId;

        try {
            let result = await this._imagesetsClient.updateImageSet(null, imageset);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteImageSet(req: any, res: any): Promise<void> {
        let imagesetId = req.route.params.imageset_id;

        try {
            let result = await this._imagesetsClient.deleteImageSetById(null, imagesetId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }
}