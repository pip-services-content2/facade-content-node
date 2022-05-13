import { IReferences } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex'; 
import { RestOperations } from 'pip-services3-rpc-nodex';

import { IMessageTemplatesClientV1 } from 'client-msgtemplates-node';


export class MessageTemplatesOperationsV1  extends RestOperations {
    private _templatesClient: IMessageTemplatesClientV1;

    public constructor() {
        super();

        this._dependencyResolver.put('msgtemplates', new Descriptor('pip-services-msgtemplates', 'client', '*', '*', '1.0'));
    }

    public setReferences(references: IReferences): void {
        super.setReferences(references);

        this._templatesClient = this._dependencyResolver.getOneRequired<IMessageTemplatesClientV1>('msgtemplates');
    }

    public async getTemplates(req: any, res: any): Promise<void> {
        let filter = this.getFilterParams(req);
        let paging = this.getPagingParams(req);

        try {
            let result = await this._templatesClient.getTemplates(null, filter, paging);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async getTemplate(req: any, res: any): Promise<void> {
        let templateId = req.route.params.template_id;

        try {
            let result = await this._templatesClient.getTemplateById(null, templateId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async findTemplate(req: any, res: any): Promise<void> {
        let idOrName = req.param('id_or_name');

        try {
            let result = await this._templatesClient.getTemplateByIdOrName(null, idOrName);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async createTemplate(req: any, res: any): Promise<void> {
        let template = req.body || {};

        try {
            let result = await this._templatesClient.createTemplate(null, template);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async updateTemplate(req: any, res: any): Promise<void> {
        let templateId = req.route.params.template_id;
        let template = req.body || {};
        template.id = templateId;

        try {
            let result = await this._templatesClient.updateTemplate(null, template);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }

    public async deleteTemplate(req: any, res: any): Promise<void> {
        let templateId = req.route.params.template_id;

        try {
            let result = await this._templatesClient.deleteTemplateById(null, templateId);
            this.sendResult(req, res, result);
        } catch (err) {
            this.sendError(req, res, err);
        }
    }
}