import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'CarStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44391',
    redirectUri: baseUrl,
    clientId: 'CarStore_App',
    responseType: 'code',
    scope: 'offline_access CarStore',
  },
  apis: {
    default: {
      url: 'https://localhost:44391',
      rootNamespace: 'CarStore',
    },
  },
} as Environment;
