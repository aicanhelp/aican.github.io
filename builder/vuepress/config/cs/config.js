const common = require("../common.js");
const algorithm = require("./algorithm/config.js");
module.exports = {
    docDir: common.baseDir + '/CS',
    path: common.basePath + '/CS',
    nav: {
        text: '计算机科学',
        items: [
            {text: '基础知识', link: this.path + '/basic/'},
            {text: '算法与数据结构', link: this.path + '/algorithm/'},
            {text: '编程语言', link: this.path + '/programming/'},
            {text: '计算机网络', link: this.path + '/network/'},
        ]
    },
    sideBar: {
        "/content/CS/algorithm/": algorithm.sidebar
    }
};