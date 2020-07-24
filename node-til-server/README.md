## development environment

- [Node.js 10.16](https://nodejs.org/en/download/releases/)

### installation procedure

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

2. Once the installation is complete, the terminal will add the 'nvm' command to the system level with the command below.

```bash
vi ~/.bashrc
```

```bash
# Enter the "i" key in the .bashrc file you opened with vi to enter write mode.
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3. Now check if the 'nvm' command in the terminal is recognized.
4. If recognized, install Node.js with the command below.

```bash
nvm install 10.16
```

5. At the end of the installation, change the version of Node.js with the command below.

```bash
nvm use 10.16
```

6. After installation, verify that the node.js version is set up well with the command below.

```bash
node -v
```

## Server Execution Procedure

1. Install Node.js locally.
2. Clone the repository and run the command below.

```bash
npm i
```

3. Enter the execution command defined in `package.json`.

```bash
npm run start
```

## API Document Verification Procedure

The application's back-end API can be found at the address below.

[http://localhost:3000/api/docs](http://localhost:3000/api/docs)

## Mongo Cloud Subscription Procedure

Data for the application is stored in the Mongo DB.
To quickly configure the lab environment, we will use the Mongo DB cloud service without installing Mongo DB locally.

[Mongo DB Cloud Services Site](https://cloud.mongodb.com/)

1. Join Mongo DB Cloud Service with the following link: [subscription page](https://cloud.mongodb.com/user#/atlas/register/accountProfile)
2. Log in with a subscribed account
3. Create a free instance. **Please select Free Tier**
4. Database Access - Create an account for database access. Example) test/1234
5. Network Access - Click the `ADD IP ADDRESS` button and click the `ALLOW ACCESS FROM ANYWHERE` button or register only the current IP as a whitelist.
6. Clusters
   1. Click the `CONNECT` button on the main page
   2. Click the Connect Your Application
   3. Select `Node.js` for `DRIVER`.
   4. Select `3.0 or later` for `VERSION`
   5. Copy Connection String and paste it to the bottom part of the `app.js` file

  ```js
  mongoose.connect('Paste it here.', {
    useNewUrlParser: true,
  });
  ```

7. Check API behavior after re-running Node.js server