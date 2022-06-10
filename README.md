> clone from sveltejs/template include typescript scss

# Inside the package
- Svelte 3+
- Typescript 3+
- Sass processor for styles
  
---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit alislin/svelte-ts#mock svelte-app
cd svelte-app
```

For include mock server
```shell
npx degit alislin/svelte-ts#mock svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Web Component

`App.svelte` 
```diff
+<svelte:options tag="my-component" immutable={true} />
```

`rollup.config.js`
```diff
		svelte({
			preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [require('autoprefixer')()]
				}
			}),
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production,
+				customElement: true
			},
		}),
```

## Mock for development

install `json-server`

```shell
npm install -g json-server
```
Use mock data from `mock/db` . 
Each API interface is a separate json file with the file name as the endpoint name. All files under the `mock/db` path are automatically loaded. Additional routes can modify `mock/routes.json`

`json-server` is enabled by default and is disabled with the following modifications. `package.json`

```diff
  "scripts": {
    "build": "rollup -c",
+   "dev": "rollup -c -w ",
-   "dev": "rollup -c -w | npm run mock",
    "start": "sirv public --no-clear",
    "check": "svelte-check --tsconfig ./tsconfig.json",
-   "mock": "json-server ./mock/file-json.js --c ./mock/json-server.json"
  },
```

Modify the listening port `json-server.json`
```json
{
    "port": 53000,
    "routes": "./mock/routes.json"
}
```

## Added fake data generation
The template has initialized the faker environment and is not enabled by default. Modify 'file-json.js' to enable faker
```diff
module.exports = () => {
    let localJsonDb = loadJsonDb();

    // add or update fake data
+   const fakeoriginalData = require('./fake/mock.js');  //import datas created in fakedata.js
+   Object.keys(fakeoriginalData).map(item => {
+       localJsonDb[item] = fakeoriginalData[item];
+   });

    return localJsonDb;
}
```
Modify the faker object `mock/fake/fakedata.js` `mock/fake/mock.js`
