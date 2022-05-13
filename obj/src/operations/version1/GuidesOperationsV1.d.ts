import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class GuidesOperationsV1 extends RestOperations {
    private _guidesClient;
    constructor();
    setReferences(references: IReferences): void;
    getGuides(req: any, res: any): Promise<void>;
    getRandomGuide(req: any, res: any): Promise<void>;
    getGuide(req: any, res: any): Promise<void>;
    createGuide(req: any, res: any): Promise<void>;
    updateGuide(req: any, res: any): Promise<void>;
    deleteGuide(req: any, res: any): Promise<void>;
}
