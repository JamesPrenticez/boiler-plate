# How To Deploy an App in Azure using MSAL Authentication

### Overview

1. Datacom internal service desk
2. Set Up App Registrations
3. Create & Deploy Static Web App
4. Create & Deploy Serverless Function
5. Enviroment Variables

### 1. Datacom internal service desk

First you must create the following ticket:

Subject: Azure App Registrations and Resource Group

Hello,

I am working on a new project and need the following created in Azure with owner permission assigned to myself.

Applicaiton Registration (x2)

1. Workbench (UAT)
2. Workbench (Prod)

Resource Group

1. RG - Workbench

### 2. Set Up App Registration

#### 2.1 Enable OAUTH 2.0

Step 1: We need to go to the manifest so that we can issure OAUTH v2.0 JWT Tokens
[![Update the Manifest](./images/appreg_manifest.png =1100x)](./images/appreg_manifest.png)

```json
	"accessTokenAcceptedVersion": 2,
```

[https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-manifest#accesstokenacceptedversion-attribute]

#### 2.2 Expose and API and Configure Claims

Step 1: We need to create a scope for when our users connect via oauth - this can be used to handle permission however we are just going to create a generic scope for all users and admins.
[![Expose and API](./images/appreg_expose_api_1.png =1100x)](./images/appreg_expose_api_1.png)

Step 2:
[![Expose and API](./images/appreg_expose_api_2.png =1100x)](./images/appreg_expose_api_2.png)

Step 3: Now we need to allow requests from our client to our API... in this case our static web app and serverless function sit in the same place so its just a circular reference.. Head over to the overview and copy the client id
[![Expose and API](./images/appreg_expose_api_3.png =1100x)](./images/appreg_expose_api_3.png)

Step 4: Head back to expose and api and add a client application
[![Expose and API](./images/appreg_expose_api_4.png =1100x)](./images/appreg_expose_api_4.png)

https://learn.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims

#### 2.3 API Permissions

Step 1: We now need to give our newly exposed api some permissions, firstly we allow acces to our scope  
[![API Permissions](./images/appreg_api_permissions_1.png =1100x)](./images/appreg_api_permissions_1.png)

Step 2:
[![API Permissions](./images/appreg_api_permissions_2.png =1100x)](./images/appreg_api_permissions_2.png)

Step 3: Secondly we need to give our api access to microsoft graph so that we can read user details from AAD
[![API Permissions](./images/appreg_api_permissions_3.png =1100x)](./images/appreg_api_permissions_3.png)

Step 4:
[![API Permissions](./images/appreg_api_permissions_4.png =1100x)](./images/appreg_api_permissions_4.png)

Step 5:
[![API Permissions](./images/appreg_api_permissions_5.png =1100x)](./images/appreg_api_permissions_5.png)

#### 2.5 Authentication - (Call back URIS)

**NOTE: We need to come back here to add our static web app url but for now we are just going to allow for localhost**

Step 1: Add a new platform and in our case it will be a SPA for react.
[![Callback URI](./images/appreg_auth_1.png =1100x)](./images/appreg_auth_1.png)

Step 2: Provide http://localhost:3000/ and http://localhost:3000/logout for local development
[![Callback URI](./images/appreg_auth_2.png =1100x)](./images/appreg_auth_2.png)

Step 3: After you have created your static web app and got the url you can come back here and add it.
[![Callback URI](./images/appreg_auth_3.png =1100x)](./images/appreg_auth_3.png)

#### 2.6 Client Secret

Step 1: The last thing to do is create a secret we will use as an enviroment variable in the backend
[![Secret](./images/appreg_secret_1.png =1100x)](./images/appreg_secret_1.png)

Step 2: Make sure to copy it otherwise you need to delete it and create a new one.
[![Secret](./images/appreg_secret_2.png =1100x)](./images/appreg_secret_2.png)

### 3. Static Web App

Step 1: Create a new resouce and enter the following details
[![Static Web App](./images/static_web_app_1.png =1100x)](./images/static_web_app_1.png)

Step 2:
[![Static Web App](./images/static_web_app_2.png =1100x)](./images/static_web_app_2.png)

Step 3: // TODO DEPLOYMNET add a picture for the automatic deployment that happens here

### 4. Serverless Function

Step 1: Again pretty straight foward just create a resource and enter the deatils
[![Serverless Function](./images/serverless_function.png =1100x)](./images/serverless_function.png)

In an ideal world we would create a deployment pipeline for the backend.... however we need permissions to do this... So... instead we are just going to push from VSCode.

Step 2: Inside VSCode Make sure you have the Azure Extension
[![Serverless Function Deployment](./images/serverless_function_1.png =1100x)](./images/serverless_function_1.png)

Step 3:
[![Serverless Function Deployment](./images/serverless_function_2.png =1100x)](./images/serverless_function_2.png)

Step 4:
[![Serverless Function Deployment](./images/serverless_function_3.png =1100x)](./images/serverless_function_3.png)

Step 5:
[![Serverless Function Deployment](./images/serverless_function_4.png =1100x)](./images/serverless_function_4.png)

Step 6:
[![Serverless Function Deployment](./images/serverless_function_5.png =1100x)](./images/serverless_function_5.png)

Step 7: Vist your URL
(workbench-be)[https://workbench-be.azurewebsites.net/]

### 6. Enable CORS fro the backend

Step 1: An important step and a gotcha is to enable CORS for our serverless function
[![Serverless Function CORS](./images/serverless_function_CORS.png =1100x)](./images/serverless_function_CORS.png)

### 5. Enviroment Variables

### Backend

Step 1: Starting with our backend we need to add the following enviroment variables to Azure.
[x] CONNECTION_STRING
[x] ENVIROMENT
[x] FLASK_APP
[x] FLASK_DEBUG
[x] SECRET_KEY (not the MSAL one just some randoms chars)
[x] MSAL_CLIENT_ID
[x] MSAL_CLIENT_SECRET
[x] MSAL_TENANT_ID
[x] MSAL_SCOPE
[x] MSAL_ENDPOINT

[![Enviroment Variables Backend](./images/env_backend_1.png =1100x)](./images/env_backend_1.png)

Step 2: Make sure to save
[![Enviroment Variables Backend](./images/env_backend_2.png =1100x)](./images/env_backend_2.png)

### Frontend

Step 1: Head over to ADO and go to the library
[![Enviroment Variables Frontend](./images/env_frontend_1.png =1100x)](./images/env_frontend_1.png)

Step 2:
[![Enviroment Variables Frontend](./images/env_frontend_2.png =1100x)](./images/env_frontend_2.png)

[x] VITE_CLIENT_ID
[x] VITE_AUTHORITY
[x] VITE_REDIRECT_URI
[x] VITE_SCOPES
[x] VITE_BASE_URL
[x] VITE_BASE_URL_API
[x] VITE_ENVIRONMENT
[x] VITE_USE_MOCK_DATA

Step 3:
[![Enviroment Variables Frontend](./images/env_frontend_3.png =1100x)](./images/env_frontend_3.png)

Step 4: We head over to our pipeline and edit it to include the enviroment variables
[![Enviroment Variables Frontend](./images/env_frontend_4.png =1100x)](./images/env_frontend_4.png)

CONGRATULATIONS ! You are all setup.
