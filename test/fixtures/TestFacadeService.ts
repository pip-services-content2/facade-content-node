import { Descriptor } from 'pip-services3-commons-nodex';
import { RestService } from 'pip-services3-rpc-nodex';

import { TagsOperationsV1 } from '../../src/operations/version1/TagsOperationsV1';
import { QuotesOperationsV1 } from '../../src/operations/version1/QuotesOperationsV1';
import { TipsOperationsV1 } from '../../src/operations/version1/TipsOperationsV1';
import { GuidesOperationsV1 } from '../../src/operations/version1/GuidesOperationsV1';
import { HelpOperationsV1 } from '../../src/operations/version1/HelpOperationsV1';
import { ImageSetsOperationsV1 } from '../../src/operations/version1/ImageSetsOperationsV1';
import { FilesOperationsV1 } from '../../src/operations/version1/FilesOperationsV1';
import { MessageTemplatesOperationsV1 } from '../../src/operations/version1/MessageTemplatesOperationsV1';
import { DashboardsOperationsV1 } from '../../src/operations/version1/DashboardsOperationsV1';

export class TestFacadeService extends RestService {

    public constructor() {
        super();

        this._baseRoute = 'v1';

        this._dependencyResolver.put('quotes', new Descriptor("facade-content", "operations", "quotes", "*", "1.0"));
        this._dependencyResolver.put('tags', new Descriptor("facade-content", "operations", "tags", "*", "1.0"));
        this._dependencyResolver.put('tips', new Descriptor("facade-content", "operations", "tips", "*", "1.0"));
        this._dependencyResolver.put('guides', new Descriptor("facade-content", "operations", "guides", "*", "1.0"));
        this._dependencyResolver.put('help', new Descriptor("facade-content", "operations", "help", "*", "1.0"));
        this._dependencyResolver.put('imagesets', new Descriptor("facade-content", "operations", "imagesets", "*", "1.0"));
        this._dependencyResolver.put('files', new Descriptor("facade-content", "operations", "files", "*", "1.0"));
        this._dependencyResolver.put('msgtemplates', new Descriptor("facade-content", "operations", "msgtemplates", "*", "1.0"));
        this._dependencyResolver.put('dashboards', new Descriptor("facade-content", "operations", "dashboards", "*", "1.0"));
    }

    public register(): void {
        let quotes = this._dependencyResolver.getOneOptional<QuotesOperationsV1>('quotes');
        if (quotes) {
            this.registerRoute('get', '/quotes', null, (req, res) => quotes.getQuotes(req, res));
            this.registerRoute('get', '/quotes/random', null, (req, res) => quotes.getRandomQuote(req, res));
            this.registerRoute('get', '/quotes/:quote_id', null, (req, res) => quotes.getQuote(req, res));
            this.registerRoute('post', '/quotes', null, (req, res) => quotes.createQuote(req, res));
            this.registerRoute('put', '/quotes/:quote_id', null, (req, res) =>quotes.updateQuote(req, res));
            this.registerRoute('del', '/quotes/:quote_id', null, (req, res) =>quotes.deleteQuote(req, res));
        }

        let tags = this._dependencyResolver.getOneOptional<TagsOperationsV1>('tags');
        if (tags) {
            this.registerRoute('get', '/tags/:party_id', null, (req, res) => tags.getTags(req, res));
            this.registerRoute('post', '/tags/:party_id', null, (req, res) => tags.setTags(req, res));
            this.registerRoute('put', '/tags/:party_id', null, (req, res) => tags.recordTags(req, res));
        }

        let tips = this._dependencyResolver.getOneOptional<TipsOperationsV1>('tips');
        if (tips) {
            this.registerRoute('get', '/tips', null, (req, res) => tips.getTips(req, res));
            this.registerRoute('get', '/tips/random', null, (req, res) => tips.getRandomTip(req, res));
            this.registerRoute('get', '/tips/:tip_id', null, (req, res) => tips.getTip(req, res));
            this.registerRoute('post', '/tips', null, (req, res) => tips.createTip(req, res));
            this.registerRoute('put', '/tips/:tip_id', null, (req, res) =>tips.updateTip(req, res));
            this.registerRoute('del', '/tips/:tip_id', null, (req, res) =>tips.deleteTip(req, res));
        }

        let guides = this._dependencyResolver.getOneOptional<GuidesOperationsV1>('guides');
        if (guides) {
            this.registerRoute('get', '/guides', null, (req, res) => guides.getGuides(req, res));
            this.registerRoute('get', '/guides/random', null, (req, res) => guides.getRandomGuide(req, res));
            this.registerRoute('get', '/guides/:guide_id', null, (req, res) => guides.getGuide(req, res));
            this.registerRoute('post', '/guides', null, (req, res) => guides.createGuide(req, res));
            this.registerRoute('put', '/guides/:guide_id', null, (req, res) =>guides.updateGuide(req, res));
            this.registerRoute('del', '/guides/:guide_id', null, (req, res) =>guides.deleteGuide(req, res));
        }

        let help = this._dependencyResolver.getOneOptional<HelpOperationsV1>('help');
        if (help) {
            this.registerRoute('get', '/help/topics', null, (req, res) => help.getTopics(req, res));
            this.registerRoute('get', '/help/topics/:topic_id', null, (req, res) => help.getTopic(req, res));
            this.registerRoute('post', '/help/topics', null, (req, res) => help.createTopic(req, res));
            this.registerRoute('put', '/help/topics/:topic_id', null, (req, res) =>help.updateTopic(req, res));
            this.registerRoute('del', '/help/topics/:topic_id', null, (req, res) =>help.deleteTopic(req, res));

            this.registerRoute('get', '/help/articles', null, (req, res) => help.getArticles(req, res));
            this.registerRoute('get', '/help/articles/random', null, (req, res) => help.getRandomArticle(req, res));
            this.registerRoute('get', '/help/articles/:article_id', null, (req, res) => help.getArticle(req, res));
            this.registerRoute('post', '/help/articles', null, (req, res) => help.createArticle(req, res));
            this.registerRoute('put', '/help/articles/:article_id', null, (req, res) =>help.updateArticle(req, res));
            this.registerRoute('del', '/help/articles/:article_id', null, (req, res) =>help.deleteArticle(req, res));
        }
        
        let imagesets = this._dependencyResolver.getOneOptional<ImageSetsOperationsV1>('imagesets');
        if (imagesets) {
            this.registerRoute('get', '/imagesets', null, (req, res) => imagesets.getImageSets(req, res));
            this.registerRoute('get', '/imagesets/:imageset_id', null, (req, res) => imagesets.getImageSet(req, res));
            this.registerRoute('post', '/imagesets', null, (req, res) => imagesets.createImageSet(req, res));
            this.registerRoute('put', '/imagesets/:imageset_id', null, (req, res) =>imagesets.updateImageSet(req, res));
            this.registerRoute('del', '/imagesets/:imageset_id', null, (req, res) =>imagesets.deleteImageSet(req, res));
        }

        let files = this._dependencyResolver.getOneOptional<FilesOperationsV1>('files');
        if (files) {
            this.registerRoute('get', '/files', null, (req, res) => files.getFiles(req, res));
            this.registerRoute('get', '/files/groups', null, (req, res) => files.getFileGroups(req, res));
            this.registerRoute('get', '/files/:file_id', null, (req, res) => files.getFile(req, res));
            this.registerRoute('post', '/files', null, (req, res) => files.createFile(req, res));
            this.registerRoute('put', '/files/:file_id', null, (req, res) =>files.updateFile(req, res));
            this.registerRoute('del', '/files/:file_id', null, (req, res) =>files.deleteFile(req, res));
        }

        let messageTemplates = this._dependencyResolver.getOneOptional<MessageTemplatesOperationsV1>('msgtemplates');
        if (messageTemplates) {
            this.registerRoute('get', '/msg_templates', null, (req, res) => messageTemplates.getTemplates(req, res));
            this.registerRoute('get', '/msg_templates/find', null, (req, res) => messageTemplates.findTemplate(req, res));
            this.registerRoute('get', '/msg_templates/:template_id', null, (req, res) => messageTemplates.getTemplate(req, res));
            this.registerRoute('post', '/msg_templates', null, (req, res) => messageTemplates.createTemplate(req, res));
            this.registerRoute('put', '/msg_templates/:template_id', null, (req, res) =>messageTemplates.updateTemplate(req, res));
            this.registerRoute('del', '/msg_templates/:template_id', null, (req, res) =>messageTemplates.deleteTemplate(req, res));
        }

        let dashboards = this._dependencyResolver.getOneOptional<DashboardsOperationsV1>('dashboards');
        if (dashboards) {
            this.registerRoute('get', '/dashboards', null, (req, res) => dashboards.getDashboards(req, res));
            this.registerRoute('get', '/dashboards/:user_id/:app/:kind', null, (req, res) => dashboards.getDashboard(req, res));
            this.registerRoute('post', '/dashboards/:user_id/:app/:kind', null, (req, res) => dashboards.setDashboard(req, res));
            this.registerRoute('del', '/dashboards', null, (req, res) => dashboards.deleteDashboards(req, res));
        }
    }

}