### Angular / Express.js Azure AD

Read my blog post on how to configure this applications in Azure. - 
[Azure AD with Angular and Express.js](https://shammelburg.medium.com)

**This a refactored approach to my blog post (above).**

To get started, you'll need to have 2 apps registered within your Azure AD.

- a front-end app
- and a back-end app

Each app has to be configured correctly for this to work. 



### Requirements
**Angular**

Set the required fields in `azure-ad-front-end/src/environments/environment.ts` file

```
azure: {
    tenantId: '...', // required
    auth: {
      clientId: '{front-end-client-id}', // required
      redirectUri: 'http://localhost:4200/'
    }
  },
  api: {
    uri: 'http://localhost:3000',
    scope: ['api://{express-client-id}/access_as_user'] // required
  }
```

**Express.js**

Rename `.env.example` to `.env` and set the requried fields

```
AZURE_TENANT_ID= // required
AZURE_CLIENT_ID={back-end-client-id} // required
```


