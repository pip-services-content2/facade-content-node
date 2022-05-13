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
exports.ImageSetsOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class ImageSetsOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('imagesets', new pip_services3_commons_nodex_1.Descriptor('service-imagesets', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._imagesetsClient = this._dependencyResolver.getOneRequired('imagesets');
    }
    getImageSets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._imagesetsClient.getImageSets(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getImageSet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let imagesetId = req.route.params.imageset_id;
            try {
                let result = yield this._imagesetsClient.getImageSetById(null, imagesetId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createImageSet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let imageset = req.body || {};
            try {
                let result = yield this._imagesetsClient.createImageSet(null, imageset);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateImageSet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let imagesetId = req.route.params.imageset_id;
            let imageset = req.body || {};
            imageset.id = imagesetId;
            try {
                let result = yield this._imagesetsClient.updateImageSet(null, imageset);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteImageSet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let imagesetId = req.route.params.imageset_id;
            try {
                let result = yield this._imagesetsClient.deleteImageSetById(null, imagesetId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.ImageSetsOperationsV1 = ImageSetsOperationsV1;
//# sourceMappingURL=ImageSetsOperationsV1.js.map