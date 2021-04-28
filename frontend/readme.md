## This is an React App

### Phase 1
1. Work your way through create-react-app [getting started guide](https://create-react-app.dev/docs/getting-started/). When you see your hello page, create your first initial commit and push that to your main branch on Github.
2. Create your apps main landing page + what the user should see once they're signed in with dummy data and/or dummy buttons.
3. [Use Bulma](https://bulma.io/) to make something that looks even halfway decent. Read and walk through their [Overview page](https://bulma.io/documentation/overview/) to add Bulma to your site. You can also use bootstrap (if you already know how to use that)


### phase 2
1. Create a Firebase application by going to the [Firebase console](https://console.firebase.google.com/u/0/) and sign in with a Google account.
2. Create a new project and follow the prompts. Google Analytics is not required to be enabled for our purposes.
3. When you're on your Project Overview page, follow the Getting Started prompt to create a web app
    1. At the end of the process, instead of copying the entire HTML snippet, all you need to copy & paste is the variable named `firebaseConfig`
    2. Paste that variable into your App.js file in your React project
4. Go to the Authentication page and enable Email & Password authentication
5. Back in your React app (inside the frontend/ folder), install [react-firebaseui](https://www.npmjs.com/package/react-firebaseui) by doing `npm install --save react-firebaseui` and `npm install --save firebase`
    1. Take a look at [this code snippet in the README](https://www.npmjs.com/package/react-firebaseui#using-firebaseauth-with-local-state) of the documentation for how to set it up. Here's what to look out for
        1. react-firebaseui & firebase has been imported into the file
        2. Firebase is initialized with a config - this is the same as the `firebaseConfig` variable we copy/pasted in step 3.2
        3. A state called `isSignedIn` is defined
        4. `uiConfig` is used to configure firebaseui
            1. The example shows how you can add social login, but since we just enabled Email & Password authentication, we'll replace those 2 values with `firebase.auth.EmailAuthProvider.PROVIDER_ID`
        5. A listener is created that listens for changes in sign in state from Firebase, and updates your React component state with the new value
            1. You can additionally save that  `user` object in your React component's state so that you can use it later.
        6. In the render function, `<StyledFirebaseAuth />` is added to the signed in view with 2 props
        7. If you've misconfigured firebase or firebaseui, there will be error messages printed to the developer console (see here for a guide on how to use [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)) in the browser to help point you in the right direction.
6. At the end of this process, you should be able to sign up & sign in and show the user the signed in view based on their signed in state.

Note: I use this guide https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial