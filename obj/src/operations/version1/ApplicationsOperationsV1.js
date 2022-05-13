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
exports.ApplicationsOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class ApplicationsOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('applications', new pip_services3_commons_nodex_1.Descriptor('service-applications', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._applicationsClient = this._dependencyResolver.getOneRequired('applications');
    }
    getApplications(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._applicationsClient.getApplications(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getApplication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationId = req.route.params.application_id;
            try {
                let result = yield this._applicationsClient.getApplicationById(null, applicationId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createApplication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let application = req.body || {};
            try {
                let result = yield this._applicationsClient.createApplication(null, application);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateApplication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationId = req.route.params.application_id;
            let application = req.body || {};
            application.id = applicationId;
            try {
                let result = yield this._applicationsClient.updateApplication(null, application);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteApplication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let applicationId = req.route.params.application_id;
            try {
                let result = yield this._applicationsClient.deleteApplicationById(null, applicationId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.ApplicationsOperationsV1 = ApplicationsOperationsV1;
//# sourceMappingURL=ApplicationsOperationsV1.js.map