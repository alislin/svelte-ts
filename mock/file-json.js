const mockFolder = './mock/db'; //mock json path folder
const fs = require('fs');
const path = require('path');
module.exports = () => {
    let localJsonDb = loadJsonDb();

    // add or update fake data
    // const fakeoriginalData = require('./fake/mock.js');  //import datas created in fakedata.js
    // Object.keys(fakeoriginalData).map(item => {
    //     localJsonDb[item] = fakeoriginalData[item];
    // });

    return localJsonDb;
}

function loadJsonDb() {
    // Get mock data
    const filePath = path.resolve(mockFolder);
    return fileDisplay(filePath);
}

function fileDisplay(filePath) {
    var data = {};
    let fileList = [];
    // Return filelist on based of filePath
    const files = fs.readdirSync(filePath);
    files.forEach((filename) => {
        // Get filename's absolute path
        let filedir = path.join(filePath, filename);
        // Get the file information according to the file path and return an fs.Stats object
        let stats = fs.statSync(filedir);
        let isFile = stats.isFile(); // files
        let isDir = stats.isDirectory(); //files folder
        if (isFile) {
            fileList.push(path.basename(filedir, '.json'));
            fileList.forEach(item => {
                data[item] = getjsonContent(item);
            })
        }
        if (isDir) {
            fileDisplay(filedir);
        }
    })
    return data;
}

function getjsonContent(path) {
    let newpath = `${mockFolder}/${path}.json`;
    let result = JSON.parse(fs.readFileSync(newpath));
    return result;
}