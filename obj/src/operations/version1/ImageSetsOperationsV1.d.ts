import { IReferences } from 'pip-services3-commons-nodex';
import { RestOperations } from 'pip-services3-rpc-nodex';
export declare class ImageSetsOperationsV1 extends RestOperations {
    private _imagesetsClient;
    constructor();
    setReferences(references: IReferences): void;
    getImageSets(req: any, res: any): Promise<void>;
    getImageSet(req: any, res: any): Promise<void>;
    createImageSet(req: any, res: any): Promise<void>;
    updateImageSet(req: any, res: any): Promise<void>;
    deleteImageSet(req: any, res: any): Promise<void>;
}
