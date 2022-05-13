import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { ManagedReferences } from 'pip-services3-container-nodex';
import { TestFacadeService } from './TestFacadeService';

import { TestFactory } from './TestFactory';

export class TestReferences extends ManagedReferences {
    private _factory = new TestFactory();

    public constructor() {
        super();

        this.appendCore();
        this.appendMicroservices();
        this.appendFacade();

        this.configureService();
    }

    private appendCore(): void {
        this.put(null, this._factory);

        // this.append(new Descriptor('pip-services', 'facade-service', 'default', 'default', '*'));
    }

    private appendMicroservices(): void {
        this.append(new Descriptor('service-tags', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('service-tags', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-tags', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('service-quotes', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('service-quotes', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-quotes', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('service-files', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('service-files', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-files', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('service-tips', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('service-tips', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-tips', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('service-guides', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('service-guides', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-guides', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('service-help', 'persistence-topics', 'memory', 'default', '*'));
        this.append(new Descriptor('service-help', 'persistence-articles', 'memory', 'default', '*'));
        this.append(new Descriptor('service-help', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-help', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('service-imagesets', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('service-imagesets', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-imagesets', 'client', 'direct', 'default', '*'));
        this.append(new Descriptor('service-dashboards', 'persistence', 'memory', 'default', '*'));
        this.append(new Descriptor('service-dashboards', 'controller', 'default', 'default', '*'));
        this.append(new Descriptor('service-dashboards', 'client', 'direct', 'default', '*'));
    }

    private appendFacade(): void {
        this.append(new Descriptor('facade-content', 'service', 'test', 'default', '1.0'));
    }

    public append(descriptor: Descriptor): void {
        let component = this._factory.create(descriptor);
        this.put(descriptor, component);
    }

    private configureService(): void {
        // Configure Facade service
        let service = this.getOneRequired<TestFacadeService>(
            new Descriptor("facade-content", "service", "test", "*", "1.0")
        );
        service.configure(ConfigParams.fromTuples(
            'root_path', 'v1', //'/api/v1',
            'connection.protocol', 'http',
            'connection.host', '0.0.0.0',
            'connection.port', 3000
        ));
    }

}