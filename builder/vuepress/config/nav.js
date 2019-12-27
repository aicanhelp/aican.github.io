const common = require("./common.js");
module.exports = [
    {
        text: '数学基础',
        items: [
            {text: '基础知识', link: common.mathDir + '/basic/'},
        ]
    },
    {
        text: '计算机科学',
        items: [
            {text: '计算机基础', link: common.csDir + '/basic/'},
            {text: '数据结构与算法', link: common.csDir + '/algorithm/'},
            {text: '编程语言', link: common.csDir + '/programming/'},
            {text: '计算机网络', link: common.csDir + '/network/'},
            {text: '前端技术', link: common.csDir + '/frontend/'},
            {text: '工具', link: common.csDir + '/tools/'},
        ]
    },
    {
        text: '云计算',
        items: [
            {text: '云计算基础', link: common.cloudDir + '/basic/'},
            {text: '开发运维', link: common.cloudDir + '/devops/'}
        ]
    },
    {
        text: '大数据',
        items: [
            {text: '大数据基础', link: common.bigDataDir + '/basic/'}
        ]
    },
    {
        text: '人工智能',
        items: [
            {text: '人工智能基础', link: common.aiDir + '/basic/'},
        ]
    },
    {
        text: '应用基础技术',
        items: [
            {text: '5G', link: common.appDir + '/5G/'}
        ]
    },
    {
        text: '其他',
        items: [
            {text: '工具', link: common.otherDir + '/tools/'}
        ]
    },
    {
        text: '关于', link: common.baseDir + '/about/'
    }
];