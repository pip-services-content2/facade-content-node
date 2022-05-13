import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 
import { RestOperations } from 'pip-services3-rpc-nodex';

import { IDashboardsClientV1 } from 'client-dashboards-node';


export class DashboardsOperationsV1  extends RestOperations {
    private _dashboardsClient: IDashboardsClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('dashboards', new Descriptor('service-dashboards', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._dashboardsClient = this._dependencyResolver.getOneRequired<IDashboardsClientV1>('dashboards');
    }

    public async getDashboards(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._dashboardsClient.getDashboards(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getDashboard(req: any, res: any): Promise<void> {
        let userId = req.route.params.user_id;
        let app = req.route.params.app;
        let kind = req.route.params.kind;

        try {
            let result = await this._dashboardsClient.getDashboard(null, userId, app, kind);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async setDashboard(req: any, res: any): Promise<void> {
        let userId = req.route.params.user_id;
        let app = req.route.params.app;
        let kind = req.route.params.kind;

        let dashboard = req.body || {};
        dashboard.user_id = dashboard.user_id || userId;
        dashboard.app = dashboard.app || app;
        dashboard.kind = dashboard.kind || kind;

        try {
            let result = await this._dashboardsClient.setDashboard(null, dashboard);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteDashboards(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);

        try {
            await this._dashboardsClient.deleteDashboards(null, filter);
            this.sendEmptyResult(req, res)
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

}