import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 

import { IApplicationsClientV1 } from 'client-applications-node';
import { RestOperations } from 'pip-services3-rpc-nodex';


export class ApplicationsOperationsV1 extends RestOperations {
    private _applicationsClient: IApplicationsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('applications', new Descriptor('service-applications', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._applicationsClient = this._dependencyResolver.getOneRequired<IApplicationsClientV1>('applications');
    }

    public async getApplications(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._applicationsClient.getApplications(null, filter, paging);
            this.sendResult(req, res, result);
        } catch(err) {
            this.sendError(req, res, err);
        }
        
    }

    public async getApplication(req: any, res: any): Promise<void> {
        let applicationId = req.route.params.application_id;

        try {
            let result = await this._applicationsClient.getApplicationById(null, applicationId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createApplication(req: any, res: any): Promise<void> {
        let application = req.body || {};

        try {
            let result = await this._applicationsClient.createApplication(null, application);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateApplication(req: any, res: any): Promise<void> {
        let applicationId = req.route.params.application_id;
        let application = req.body || {};
        application.id = applicationId;

        try {
            let result = await this._applicationsClient.updateApplication(null, application);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteApplication(req: any, res: any): Promise<void> {
        let applicationId = req.route.params.application_id;
        
        try {
            let result = await this._applicationsClient.deleteApplicationById(null, applicationId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }
}