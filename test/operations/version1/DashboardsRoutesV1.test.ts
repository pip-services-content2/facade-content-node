const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';

import { TestReferences } from '../../fixtures/TestReferences';
import { TestRestClient } from '../../fixtures/TestRestClient';
import { DashboardsOperationsV1 } from '../../../src/operations/version1/DashboardsOperationsV1';

suite('DashboardsOperationsV1', () => {
    let references: TestReferences;
    let rest: TestRestClient;

    setup(async () => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.put(new Descriptor('facade-content', 'operations', 'dashboards', 'default', '1.0'), new DashboardsOperationsV1())
        await references.open(null);
    });

    teardown(async () => {
        await references.close(null);
    });

    test('should get and set dashboards', async () => {
        let dashboard = await rest.get('/v1/dashboards/1/test/default');

        assert.isObject(dashboard);
        assert.equal(dashboard.user_id, '1');
        assert.equal(dashboard.app, 'test');
        assert.equal(dashboard.kind, 'default');

        let dashboard1 = await rest.post('/v1/dashboards/1/test/default', dashboard);

        assert.isObject(dashboard1);
        assert.equal(dashboard.id, dashboard.id);
        assert.equal(dashboard1.user_id, '1');
        assert.equal(dashboard1.app, 'test');
        assert.equal(dashboard1.kind, 'default');

    });

    test('should get dashboards', async () => {
        let page = await rest.get(
            '/v1/dashboards?paging=1&skip=0&take=2'
        );

        assert.isObject(page);
    });

    test('should delete dashboards', async () => {
        await rest.del(
            '/v1/dashboards?user_id=1'
        );
    });

});