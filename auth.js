let identityPool = 'eu-west-1:0db40126-6908-4973-99fc-e2580be09ede'; //Cognito Identity Pool
let region = 'eu-west-1';
let poolId = 'eu-west-1_bOuCRBNUl'; //Cognito User Pool
let clientId = '3utvtepv1cbl53pn8bidpd0cnt'; //Cognito User Pool App
let appDomain = '327953370525-qs.auth.eu-west-1.amazoncognito.com';
let endpoint = 'https://7gn67vo4bk.execute-api.eu-west-1.amazonaws.com/prod'; //API Endpoint URL
let authData = {
  ClientId: clientId,
  AppWebDomain: appDomain,
  TokenScopesArray: ['openid'],
  RedirectUriSignIn: 'https://dij0nouyfvoue.cloudfront.net', //CloudFront Distribution URL
  RedirectUriSignOut: 'https://dij0nouyfvoue.cloudfront.net', //CloudFront Distribution URL
};
