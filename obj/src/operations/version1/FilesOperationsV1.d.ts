import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class FilesOperationsV1 extends RestOperations {
    private _filesClient;
    constructor();
    setReferences(references: IReferences): void;
    getFileGroups(req: any, res: any): Promise<void>;
    getFiles(req: any, res: any): Promise<void>;
    getFile(req: any, res: any): Promise<void>;
    createFile(req: any, res: any): Promise<void>;
    updateFile(req: any, res: any): Promise<void>;
    deleteFile(req: any, res: any): Promise<void>;
}
