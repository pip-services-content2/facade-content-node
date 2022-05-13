import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 
import { RestOperations } from 'pip-services3-rpc-nodex';

import { ITagsClientV1 } from 'client-tags-node';



export class TagsOperationsV1  extends RestOperations {
    private _tagsClient: ITagsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('tags', new Descriptor('service-tags', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._tagsClient = this._dependencyResolver.getOneRequired<ITagsClientV1>('tags');
    }

    public async getTags(req: any, res: any): Promise<void> {
        let partyId = req.route.params.party_id;

        try {
            let result = await this._tagsClient.getTags(null, partyId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async setTags(req: any, res: any): Promise<void> {
        let partyId = req.route.params.party_id;
        let tags = req.body || {};
        tags.id = partyId;

        try {
            let result = await this._tagsClient.setTags(null, tags);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async recordTags(req: any, res: any): Promise<void> {
        let partyId = req.route.params.party_id;
        let tags = req.body || [];

        try {
            let result = await this._tagsClient.recordTags(null, partyId, tags);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

}