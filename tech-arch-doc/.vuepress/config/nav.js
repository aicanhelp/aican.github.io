const common = require("common");
module.exports = [
    {
        text: '数学基础',
        items: [
            {text: '基础知识', link: mathDir + '/basic/overview.md'},
        ]
    },
    {
        text: '计算机科学',
        items: [
            {text: '计算机基础', link: csDir + '/basic/overview.md'},
            {text: '数据结构与算法', link: csDir + '/algorithm/overview.md'},
            {text: '编程语言', link: csDir + '/programming/overview.md'},
            {text: '计算机网络', link: csDir + '/network/overview.md'},
            {text: '前端技术', link: csDir + '/frontend/overview.md'},
            {text: '工具', link: csDir + '/tools/overview.md'},
        ]
    },
    {
        text: '云计算',
        items: [
            {text: '云计算基础', link: cloudDir + '/basic/overview.md'},
            {text: '开发运维', link: cloudDir + '/devops/overview.md'}
        ]
    },
    {
        text: '大数据',
        items: [
            {text: '大数据基础', link: bigDataDir + '/basic/overview.md'}
        ]
    },
    {
        text: '人工智能',
        items: [
            {text: '人工智能基础', link: aiDir + '/basic/overview.md'},
        ]
    },
    {
        text: '应用基础技术',
        items: [
            {text: '5G', link: appDir + '/5G/overview.md'}
        ]
    },
    {
        text: '其他',
        items: [
            {text: '工具', link: otherDir + '/tools/overview.md'}
        ]
    },
    {
        text: '关于', link: baseDir+'/about/about.md'
    }
];