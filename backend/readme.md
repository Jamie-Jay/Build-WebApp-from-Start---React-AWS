## This is for AWS 

### Phase 1
#### task
1. Set up [Multi-Factor authentication](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html#enable-virt-mfa-for-root) for your account 
2. Work your way through the serverless AWS [getting started guide](https://www.serverless.com/framework/docs/providers/aws/guide/intro/), and then create your serverless backend using nodejs - check out the [express dynamodb example](https://www.serverless.com/examples/aws-node-express-dynamodb-api/) (I'll be working with code examples primarily with javascript)
3. Take a look at some of the code provided in the DynamoDB example.
4. Create an endpoint that responds to a GET request to $YOUR_URL_HERE/whoami with your username as JSON "{ "username": "da335" }"


#### Steps to setup serverless in cmd
1. `npm serverless`  
`set AWS_ACCESS_KEY_ID=< get from IAM>`  
`set AWS_SECRET_ACCESS_KEY=< get from IAM>`
2. install and save the serverless files in local folder, -n is the folder name:  
`serverless install -u https://github.com/serverless/examples/tree/master/aws-node-express-dynamodb-api -n  aws-node-express-dynamodb-api`  
**need to remember the "endpoints" url**
3. cd to the new folder:  
`cd aws-node-express-dynamodb-api`
4. install dependencies:  
`npm install`
5. `serverless deploy -v`  
(-v to see more what is going on)
6. add data (note the " in cmd line):  
`curl -X POST https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/users --header "Content-Type: application/json" --data-raw "{\"name\": \"John\", \"userId\": \"some\"}"`  
`xxxxxxxxxx` is the endpoints url in step 2
7. query in browser:  
`https://4hxufq3wde.execute-api.us-east-1.amazonaws.com/dev/users/some`  
then get response `{"userId":"some","name":"John"}`
8. modify the handler.js

#### PS: for this task, my url to post username:
- `curl -X POST https://olbincrtnj.execute-api.us-east-1.amazonaws.com/dev/whoami  --header "Content-Type: application/json" --data-raw "{\"username\": \"hg457\"}"`
- browser url: `https://olbincrtnj.execute-api.us-east-1.amazonaws.com/dev/whoami/hg457`