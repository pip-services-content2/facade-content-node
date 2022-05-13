"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTemplatesOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class MessageTemplatesOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('msgtemplates', new pip_services3_commons_nodex_1.Descriptor('pip-services-msgtemplates', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._templatesClient = this._dependencyResolver.getOneRequired('msgtemplates');
    }
    getTemplates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._templatesClient.getTemplates(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getTemplate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let templateId = req.route.params.template_id;
            try {
                let result = yield this._templatesClient.getTemplateById(null, templateId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    findTemplate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let idOrName = req.param('id_or_name');
            try {
                let result = yield this._templatesClient.getTemplateByIdOrName(null, idOrName);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createTemplate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let template = req.body || {};
            try {
                let result = yield this._templatesClient.createTemplate(null, template);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateTemplate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let templateId = req.route.params.template_id;
            let template = req.body || {};
            template.id = templateId;
            try {
                let result = yield this._templatesClient.updateTemplate(null, template);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteTemplate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let templateId = req.route.params.template_id;
            try {
                let result = yield this._templatesClient.deleteTemplateById(null, templateId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.MessageTemplatesOperationsV1 = MessageTemplatesOperationsV1;
//# sourceMappingURL=MessageTemplatesOperationsV1.js.map