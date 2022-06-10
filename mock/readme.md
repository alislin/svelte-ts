<!--
 * @Author: Lin Ya
 * @Date: 2022-06-09 15:54:44
 * @LastEditors: Lin Ya
 * @LastEditTime: 2022-06-09 15:56:29
 * @Description: file content
-->
## 初始化和启动
```shell
# 初始化，安装
npm install -g json-server

# 启动
json-server file-json.js -c json-server.json
```
每一个API接口，为独立的json文件，文件名为终结点名称。会自动加载 `mock/db` 路径下的所有文件。附加路由可以修改 `routes.json`

默认已经启用 `json-server`，通过以下修改可禁用 `package.json`

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

修改监听端口 `json-server.json`
```json
{
    "port": 53000,
    "routes": "./mock/routes.json"
}
```

## 增加 fake 数据生成
模板已经初始化 faker 环境，默认没有启用。修改 `file-json.js` 可以启用 faker
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
修改 faker 对象 `fake/fakedata.js` `fake/mock.js`


Mock for development

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
Modify the faker object 'fake/fakedata.js' 'fake/mock.js'
