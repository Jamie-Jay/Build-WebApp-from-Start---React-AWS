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

### Phase 2
#### task
##### Part 1:

Web hosting! You've made quite a few changes to your project at this point, so its time to deploy this thing.

1. In the AWS console - navigate to the "Amplify Console". [Read more about it here](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html) and then follow the [Getting Started](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html) section to connect your Github repo.

- Note: In step 1 - when you're connecting your Githbu repo, there will be a checkbox for "Using a monorepo?" - click Yes, and then add the path frontend/ to the text box.

At the end of this step, you'll have a full deployment pipeline set up, with a dashboard where you can see the details of your build process, and you can keep track of the deployment of your app.

##### Part 2:

1. Time to put it under your own domain. If you don't have your own domain name yet, [buy a cheap one off Route53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html) (you can always just use your name as your domain name which is never a bad idea)

2. Follow the guide on [setting up a custom domain](https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html) in your AWS Amplify Console with a free SSL certificate - there are guides on that page if you manage your domain with another provider.

## A4
https://github.com/intricatecloud/cs-5356-resources/blob/master/assignment-4.md

serverless usage:
- `npm install serverless-offline`
- `set AWS_ACCESS_KEY_ID=< get from IAM>`  
- `set AWS_SECRET_ACCESS_KEY=< get from IAM>`
- add plugins to yml
```
plugins:
  - serverless-offline
```
- `serverless offline`
- `serverless offline --httpPort 4000`

## A5
https://github.com/intricatecloud/cs-5356-resources/blob/master/lesson-5.md