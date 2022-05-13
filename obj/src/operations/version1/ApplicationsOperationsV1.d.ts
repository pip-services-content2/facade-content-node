import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class ApplicationsOperationsV1 extends RestOperations {
    private _applicationsClient;
    constructor();
    setReferences(references: IReferences): void;
    getApplications(req: any, res: any): Promise<void>;
    getApplication(req: any, res: any): Promise<void>;
    createApplication(req: any, res: any): Promise<void>;
    updateApplication(req: any, res: any): Promise<void>;
    deleteApplication(req: any, res: any): Promise<void>;
}
