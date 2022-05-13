import { DefaultContainerFactory } from 'pip-services3-container-nodex';

import { TagsServiceFactory } from 'service-tags-node';
import { TagsClientFactory } from 'client-tags-node';
import { QuotesServiceFactory } from 'service-quotes-node';
import { QuotesClientFactory } from 'client-quotes-node';
import { AttachmentsServiceFactory } from 'service-attachments-node';
import { AttachmentsClientFactory } from 'client-attachments-node';
import { FilesServiceFactory } from 'service-files-node';
import { FilesClientFactory } from 'client-files-node';
import { TipsServiceFactory } from 'service-tips-node';
import { TipsClientFactory } from 'client-tips-node';
import { GuidesServiceFactory } from 'service-guides-node';
import { GuidesClientFactory } from 'client-guides-node';
import { HelpServiceFactory } from 'service-help-node';
import { HelpClientFactory } from 'client-help-node';
import { DashboardsServiceFactory } from 'service-dashboards-node';
import { DashboardsClientFactory } from 'client-dashboards-node';
import { ImageSetsServiceFactory } from 'service-imagesets-node';
import { ImageSetsClientFactory } from 'client-imagesets-node';

import { ContentFacadeFactory } from '../../src/build/ContentFacadeFactory';
import { TestFacadeFactory } from './TestFacadeFactory';

export class TestFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new ContentFacadeFactory);
        this.add(new TestFacadeFactory);

        this.add(new TagsServiceFactory);
        this.add(new TagsClientFactory);
        this.add(new QuotesServiceFactory);
        this.add(new QuotesClientFactory);
        this.add(new AttachmentsServiceFactory);
        this.add(new AttachmentsClientFactory);
        this.add(new FilesServiceFactory);
        this.add(new FilesClientFactory);
        this.add(new TipsServiceFactory);
        this.add(new TipsClientFactory);
        this.add(new GuidesServiceFactory);
        this.add(new GuidesClientFactory);
        this.add(new HelpServiceFactory);
        this.add(new HelpClientFactory);
        this.add(new ImageSetsServiceFactory);
        this.add(new ImageSetsClientFactory);
        this.add(new DashboardsServiceFactory);
        this.add(new DashboardsClientFactory);
    }

}
