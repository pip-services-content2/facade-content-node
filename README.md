# Facade Operations for Infrastructure Pip.Services in Node.js

This module contains REST operations for [Client Facade](https://github.com/pip-services3-nodex/pip-services3-rpc-nodex).
Using these operations developers are able to create facades and fill them with pre-built REST operations for:

* Files
* User guides
* User tips
* Inspirational quotes
* Search tags
* Image sets

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [REST Protocol V1](doc/RestProtocolV1.md)

## Install

Add dependency to the facade and operations into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "facade-content-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Create facade service
```typescript
import { RestService } from 'pip-services3-rpc-nodex'

export class MyFacadeServiceV1 extends RestService {
    ...
}
```

Get or create operations and register routes in the facade service
```typescript
import { FilesOperations } from 'facade-content-node';

export class MyFacadeServiceV1 extends MainFacadeService {

    public register() {
        let files = new FilesOperations();
        this.registerRoute('get', '/files', null, (req, res) => logging.getFiles(req, res));
        this.registerRoute('get', '/files/:file_id', null, (req, res) => logging.getFile(req, res));
        this.registerRoute('post', '/files', null, (req, res) => logging.createFile(req, res));
        this.registerRoute('update', '/files/:file_id', null, (req, res) => logging.updateFile(req, res));
        this.registerRoute('del', '/file/:file_id', null, (req, res) => logging.deleteFile(req, res));
    }

}
```

Instantiate and configure facade. After that create microservice clients and set references to the facade.
When everything is ready, run the facade.
```typescript
let myFacade = new MyFacadeServiceV1();
myFacade.configure(ConfigParams.fromTuples(
    'connection.protocol', 'http',
    'connection.host', '0.0.0.0',
    'connection.port', 8080
));

let filesClient = new FilesHttpClientV1();
filesClient.configure(ConfigParams.fromTuples(
    'connection.protocol', 'http',
    'connection.host', 'localhost',
    'connection.port', 8082
));

let references = References.fromTuples(
    new Descriptor('service-files', 'client', 'http', 'default', '1.0'), filesClient
);
myFacade.setReferences(references)

await myFacade.open(null);
```

Alternatively to manual instantiation and cross-referencing you can use Pip.Services container
and instantiate the whole facade using simple configuration:
```yaml
---
-descriptor: service-files:client:http:default:1.0
 connection:
   protocol: http
   host: localhost
   port: 8082

-descriptor: my-facade:service:facade:default:1.0
 connection:
   protocol: http
   host: 0.0.0.0
   port: 8080
```

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

