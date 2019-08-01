# bettor app

A very simple App with authentication and odds calculator.

The app has two states, one is stateless, which resides on the stateless-auth branch, and the other is statefull, which resides on the statefull-auth branch. Eventually the app is not configurable as multistate app. If you prefer stateless authentication checkout to stateless-auth branch, and if you prefer statefull authentication checkout to statefull-auth branch.

The app uses online service mlab.com where the database resides. Feel free to choose any other option for managing mongoDB database system.

On the root folder application please find the .env.examplpe file, and assign accordingly. After that rename the file to .env or .env.local to run the development version of the app.

Find the appropriate commands beneath for running and inspecting the app.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
