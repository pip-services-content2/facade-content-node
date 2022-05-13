import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class MessageTemplatesOperationsV1 extends RestOperations {
    private _templatesClient;
    constructor();
    setReferences(references: IReferences): void;
    getTemplates(req: any, res: any): Promise<void>;
    getTemplate(req: any, res: any): Promise<void>;
    findTemplate(req: any, res: any): Promise<void>;
    createTemplate(req: any, res: any): Promise<void>;
    updateTemplate(req: any, res: any): Promise<void>;
    deleteTemplate(req: any, res: any): Promise<void>;
}
