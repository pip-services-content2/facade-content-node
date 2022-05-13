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
exports.TagsOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class TagsOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('tags', new pip_services3_commons_nodex_1.Descriptor('service-tags', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._tagsClient = this._dependencyResolver.getOneRequired('tags');
    }
    getTags(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let partyId = req.route.params.party_id;
            try {
                let result = yield this._tagsClient.getTags(null, partyId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    setTags(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let partyId = req.route.params.party_id;
            let tags = req.body || {};
            tags.id = partyId;
            try {
                let result = yield this._tagsClient.setTags(null, tags);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    recordTags(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let partyId = req.route.params.party_id;
            let tags = req.body || [];
            try {
                let result = yield this._tagsClient.recordTags(null, partyId, tags);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.TagsOperationsV1 = TagsOperationsV1;
//# sourceMappingURL=TagsOperationsV1.js.map