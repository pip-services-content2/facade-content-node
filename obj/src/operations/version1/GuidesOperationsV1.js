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
exports.GuidesOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class GuidesOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('guides', new pip_services3_commons_nodex_1.Descriptor('service-guides', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._guidesClient = this._dependencyResolver.getOneRequired('guides');
    }
    getGuides(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._guidesClient.getGuides(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getRandomGuide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            try {
                let result = yield this._guidesClient.getRandomGuide(null, filter);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getGuide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let guideId = req.route.params.guide_id;
            try {
                let result = yield this._guidesClient.getGuideById(null, guideId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createGuide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let guide = req.body || {};
            try {
                let result = yield this._guidesClient.createGuide(null, guide);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateGuide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let guideId = req.route.params.guide_id;
            let guide = req.body || {};
            guide.id = guideId;
            try {
                let result = yield this._guidesClient.updateGuide(null, guide);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteGuide(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let guideId = req.route.params.guide_id;
            try {
                let result = yield this._guidesClient.deleteGuideById(null, guideId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.GuidesOperationsV1 = GuidesOperationsV1;
//# sourceMappingURL=GuidesOperationsV1.js.map