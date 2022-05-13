import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class TagsOperationsV1 extends RestOperations {
    private _tagsClient;
    constructor();
    setReferences(references: IReferences): void;
    getTags(req: any, res: any): Promise<void>;
    setTags(req: any, res: any): Promise<void>;
    recordTags(req: any, res: any): Promise<void>;
}
