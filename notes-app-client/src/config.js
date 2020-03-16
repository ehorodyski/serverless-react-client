export const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'ehorodyski-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://aop9nk4xtj.execute-api.us-east-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_X84QV0ZJ5',
    APP_CLIENT_ID: '4nnga3c3esvmmvrbl2581qfmcn',
    IDENTITY_POOL_ID: 'us-east-1:572027a6-b05b-470b-b3b5-c9da749935bd'
  },
  MAX_ATTACHMENT_SIZE: 5000000
};

export default {
  Auth: {
    manadtorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolid: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: 'notes',
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  },
}; 