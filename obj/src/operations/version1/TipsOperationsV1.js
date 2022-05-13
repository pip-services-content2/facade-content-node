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
exports.TipsOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class TipsOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('tips', new pip_services3_commons_nodex_1.Descriptor('service-tips', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._tipsClient = this._dependencyResolver.getOneRequired('tips');
    }
    getTips(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._tipsClient.getTips(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getRandomTip(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            try {
                let result = yield this._tipsClient.getRandomTip(null, filter);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getTip(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tipId = req.route.params.tip_id;
            try {
                let result = yield this._tipsClient.getTipById(null, tipId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createTip(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tip = req.body || {};
            try {
                let result = yield this._tipsClient.createTip(null, tip);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateTip(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tipId = req.route.params.tip_id;
            let tip = req.body || {};
            tip.id = tipId;
            try {
                let result = yield this._tipsClient.updateTip(null, tip);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteTip(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tipId = req.route.params.tip_id;
            try {
                let result = yield this._tipsClient.deleteTipById(null, tipId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.TipsOperationsV1 = TipsOperationsV1;
//# sourceMappingURL=TipsOperationsV1.js.map