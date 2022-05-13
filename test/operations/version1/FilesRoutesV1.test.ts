const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';

import { TestReferences } from '../../fixtures/TestReferences';
import { TestRestClient } from '../../fixtures/TestRestClient';
import { FilesOperationsV1 } from '../../../src/operations/version1/FilesOperationsV1';

suite('FilesOperationsV1', () => {
    let references: TestReferences;
    let rest: TestRestClient;

    setup(async () => {
        rest = new TestRestClient();
        references = new TestReferences();
        references.put(new Descriptor('facade-content', 'operations', 'files', 'default', '1.0'), new FilesOperationsV1())
        await references.open(null);
    });

    teardown(async () => {
        await references.close(null);
    });

    test('should get files', async () => {
        let page = await rest.get(
            '/v1/files?paging=1&skip=0&take=2'
        );

        assert.isObject(page);
    });

    test('should get file groups', async () => {
        let page = await rest.get(
            '/v1/files/groups?paging=1&skip=0&take=2'
        );

        assert.isObject(page);
    });

});