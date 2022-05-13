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
exports.QuotesOperationsV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class QuotesOperationsV1 extends pip_services3_rpc_nodex_1.RestOperations {
    constructor() {
        super();
        this._dependencyResolver.put('quotes', new pip_services3_commons_nodex_1.Descriptor('service-quotes', 'client', '*', '*', '1.0'));
    }
    setReferences(references) {
        super.setReferences(references);
        this._quotesClient = this._dependencyResolver.getOneRequired('quotes');
    }
    getQuotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            let paging = this.getPagingParams(req);
            try {
                let result = yield this._quotesClient.getQuotes(null, filter, paging);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getRandomQuote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filter = this.getFilterParams(req);
            try {
                let result = yield this._quotesClient.getRandomQuote(null, filter);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    getQuote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let quoteId = req.route.params.quote_id;
            try {
                let result = yield this._quotesClient.getQuoteById(null, quoteId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    createQuote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let quote = req.body || {};
            try {
                let result = yield this._quotesClient.createQuote(null, quote);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    updateQuote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let quoteId = req.route.params.quote_id;
            let quote = req.body || {};
            quote.id = quoteId;
            try {
                let result = yield this._quotesClient.updateQuote(null, quote);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
    deleteQuote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let quoteId = req.route.params.quote_id;
            try {
                let result = yield this._quotesClient.deleteQuoteById(null, quoteId);
                this.sendResult(req, res, result);
            }
            catch (err) {
                this.sendError(req, res, err);
            }
        });
    }
}
exports.QuotesOperationsV1 = QuotesOperationsV1;
//# sourceMappingURL=QuotesOperationsV1.js.map