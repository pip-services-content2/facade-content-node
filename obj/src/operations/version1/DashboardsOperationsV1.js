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
exports.DashboardsOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class DashboardsOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('dashboards', new pip_services3_commons_nodex_1.Descriptor('service-dashboards', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._dashboardsClient = this._dependencyResolver.getOneRequired('dashboards');
    }
    getDashboards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._dashboardsClient.getDashboards(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getDashboard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.route.params.user_id;
            let app = req.route.params.app;
            let kind = req.route.params.kind;
            try {
                let result = yield this._dashboardsClient.getDashboard(null, userId, app, kind);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    setDashboard(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = req.route.params.user_id;
            let app = req.route.params.app;
            let kind = req.route.params.kind;
            let dashboard = req.body || {};
            dashboard.user_id = dashboard.user_id || userId;
            dashboard.app = dashboard.app || app;
            dashboard.kind = dashboard.kind || kind;
            try {
                let result = yield this._dashboardsClient.setDashboard(null, dashboard);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteDashboards(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            try {
                yield this._dashboardsClient.deleteDashboards(null, filter);
                this.sendEmptyResult(req, res);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.DashboardsOperationsV1 = DashboardsOperationsV1;
//# sourceMappingURL=DashboardsOperationsV1.js.map