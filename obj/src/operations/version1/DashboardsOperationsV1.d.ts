import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class DashboardsOperationsV1 extends RestOperations {
    private _dashboardsClient;
    constructor();
    setReferences(references: IReferences): void;
    getDashboards(req: any, res: any): Promise<void>;
    getDashboard(req: any, res: any): Promise<void>;
    setDashboard(req: any, res: any): Promise<void>;
    deleteDashboards(req: any, res: any): Promise<void>;
}
