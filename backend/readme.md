## This is for AWS 

### Phase 1
1. Set up [Multi-Factor authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html#enable-virt-mfa-for-root) for your account 
2. Work your way through the serverless AWS [getting started guide](https://www.serverless.com/framework/docs/providers/aws/guide/intro/), and then create your serverless backend using nodejs - check out the [express dynamodb example](https://www.serverless.com/examples/aws-node-express-dynamodb-api/) (I'll be working with code examples primarily with javascript)
3. Take a look at some of the code provided in the DynamoDB example.
4. Create an endpoint that responds to a GET request to $YOUR_URL_HERE/whoami with your username as JSON "{ "username": "da335" }"
