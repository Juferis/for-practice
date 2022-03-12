import { config, CognitoIdentityServiceProvider } from 'aws-sdk';

const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
config.loadFromPath('./config.json');

const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

const params = {
  ClientId: '6ci3hqok0eektiaXXXXXXXXXXX',
  Password: '123456',
  Username: 'testUser',
  UserAttributes: [
    {
      Name: 'email',
      Value: 'juferis@naver.com', //이 메일로 인증메일이 가기 때문에 잘 적어줘야 한다.
    },
  ],
};
cognitoIdentityServiceProvider.signUp(params, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
