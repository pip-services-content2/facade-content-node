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
exports.FilesOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class FilesOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('files', new pip_services3_commons_nodex_1.Descriptor('service-files', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._filesClient = this._dependencyResolver.getOneRequired('files');
    }
    getFileGroups(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._filesClient.getGroups(null, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getFiles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._filesClient.getFilesByFilter(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let fileId = req.route.params.file_id;
            try {
                let result = yield this._filesClient.getFileById(null, fileId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let file = req.body || {};
            try {
                let result = yield this._filesClient.createFile(null, file);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let fileId = req.route.params.file_id;
            let file = req.body || {};
            file.id = fileId;
            try {
                let result = yield this._filesClient.updateFile(null, file);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let fileId = req.route.params.file_id;
            try {
                let result = yield this._filesClient.deleteFileById(null, fileId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.FilesOperationsV1 = FilesOperationsV1;
//# sourceMappingURL=FilesOperationsV1.js.map