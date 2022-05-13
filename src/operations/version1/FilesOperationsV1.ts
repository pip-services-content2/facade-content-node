import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 

import { IFilesClientV1 } from 'client-files-node';

import { RestOperations } from 'pip-services3-rpc-nodex';

export class FilesOperationsV1  extends RestOperations {
    private _filesClient: IFilesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('files', new Descriptor('service-files', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._filesClient = this._dependencyResolver.getOneRequired<IFilesClientV1>('files');
    }

    public async getFileGroups(req: any, res: any): Promise<void> {
        let paging = this.getPagingParams(req);

        try {
            let result = await this._filesClient.getGroups(null, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getFiles(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._filesClient.getFilesByFilter(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getFile(req: any, res: any): Promise<void> {
        let fileId = req.route.params.file_id;

        try {
            let result = await this._filesClient.getFileById(null, fileId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createFile(req: any, res: any): Promise<void> {
        let file = req.body || {};

        try {
            let result = await this._filesClient.createFile(null, file);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateFile(req: any, res: any): Promise<void> {
        let fileId = req.route.params.file_id;
        let file = req.body || {};
        file.id = fileId;

        try {
            let result = await this._filesClient.updateFile(null, file);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteFile(req: any, res: any): Promise<void> {
        let fileId = req.route.params.file_id;

        try {
            let result = await this._filesClient.deleteFileById(null, fileId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

}