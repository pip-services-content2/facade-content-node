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
exports.HelpOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class HelpOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('help', new pip_services3_commons_nodex_1.Descriptor('service-help', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._helpClient = this._dependencyResolver.getOneRequired('help');
    }
    getTopics(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._helpClient.getTopics(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let topicId = req.route.params.topic_id;
            try {
                let result = yield this._helpClient.getTopicById(null, topicId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let topic = req.body || {};
            try {
                let result = yield this._helpClient.createTopic(null, topic);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let topicId = req.route.params.topic_id;
            let topic = req.body || {};
            topic.id = topicId;
            try {
                let result = yield this._helpClient.updateTopic(null, topic);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let topicId = req.route.params.topic_id;
            try {
                let result = yield this._helpClient.deleteTopicById(null, topicId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getArticles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._helpClient.getArticles(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getRandomArticle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            try {
                let result = yield this._helpClient.getRandomArticle(null, filter);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getArticle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let articleId = req.route.params.article_id;
            try {
                let result = yield this._helpClient.getArticleById(null, articleId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createArticle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let article = req.body || {};
            try {
                let result = yield this._helpClient.createArticle(null, article);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateArticle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let articleId = req.route.params.article_id;
            let article = req.body || {};
            article.id = articleId;
            try {
                let result = yield this._helpClient.updateArticle(null, article);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteArticle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let articleId = req.route.params.article_id;
            try {
                let result = yield this._helpClient.deleteArticleById(null, articleId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.HelpOperationsV1 = HelpOperationsV1;
//# sourceMappingURL=HelpOperationsV1.js.map