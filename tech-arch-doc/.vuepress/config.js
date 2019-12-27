const nav = require("config/nav.js");
const sideBar = require("config/sidebar.js");
module.exports = {
    port: "3000",
    dest: "docs",
    ga: "UA-85414008-1",
    base: "",
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "AI Can Help",
            description: ""
        }
    },
    head: [["link", {rel: "icon", href: `/favicon.ico`}]],
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', {
            selector: 'img',
            // See: https://github.com/francoischalifour/medium-zoom#options
            options: {
                margin: 16
            }
        }]
    ],
    themeConfig: {
        docsDir: 'Java',
        editLinks: true,
        sidebarDepth: 0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav: nav,
                sidebar: sideBar
            }
        }
    }
};

function genSidebar4develop() {
    return [
        {
            title: "网络协议",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "protocol/dev-protocol-overview.md",
                "protocol/dev-protocol-osi7.md",
                "protocol/dev-protocol-ipmac.md",
                "protocol/dev-protocol-tcpip.md",
                "protocol/dev-protocol-http.md",
                "protocol/dev-protocol-udp.md",
                "protocol/dev-protocol-dns.md"
            ]
        },
        {
            title: "开发随手记",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "usage/dev-usage-overview.md",
                "usage/dev-usage-newObj.md",
                "usage/dev-usage-exe-package.md",
                "usage/dev-usage-jar-readfile.md",
                "usage/dev-usage-input-password.md",
                "usage/dev-usage-export-pdf.md",
                "usage/dev-usage-flotjs.md",
                "usage/dev-usage-zkfinger.md"
            ]
        }
    ];
}

// Alg page
function genSidebar4Alg() {
    return [
        {
            title: "数据结构基础",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "alg-basic-overview.md",
                "alg-basic-array.md",
                "alg-basic-linklist.md",
                "alg-basic-hashtable.md",
                "alg-basic-stack_queue.md",
                "alg-basic-tree-balance.md",
                "alg-basic-tree-redblack.md",
                "alg-basic-tree-search.md",
                "alg-basic-graph.md"
            ]
        },
        {
            title: "内部排序",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "alg-sort-overview.md",
                "alg-sort-x-bubble.md",
                "alg-sort-x-simple.md",
                "alg-sort-x-fast.md",
                "alg-sort-x-heap.md",
                "alg-sort-x-insert.md",
                "alg-sort-x-radix.md",
                "alg-sort-x-select.md",
                "alg-sort-x-shell.md"
            ]
        },
        {
            title: "算法思想",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "alg-core-divide-and-conquer.md",
                "alg-core-dynamic.md",
                "alg-core-greedy.md",
                "alg-core-backtracking.md",
                "alg-core-search.md"
            ]
        },
        {
            title: "安全算法",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "alg-security-degist.md",
                "alg-security-secure.md"
            ]
        },
        {
            title: "分布式系统算法",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "alg-distribute-overview.md",
                "alg-distribute-x-consistency-hash.md",
                "alg-distribute-x-paxos.md",
                "alg-distribute-x-raft.md",
                "alg-distribute-x-snowflake.md",
                "alg-distribute-x-zab.md"
            ]
        },
        {
            title: "其它算法相关",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "alg-other-mind.md"
            ]
        }
    ];

}

// About page
function genSidebar4About() {
    return [
        {
            title: "关于",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "me/about-me.md",
                "me/about-content.md",
                "me/about-content-style.md",
                "me/about-arch.md",
                "me/about-motivation.md"
            ]
        },
        {
            title: "关于 - 本文档的搭建",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "blog/blog-build-vuepress.md",
                "blog/blog-build-ci.md",
                "blog/blog-build-cd.md",
                "blog/blog-build-ssl.md"
            ]
        },
        {
            title: "关于 - 项目和探究",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "others/others-project-netscan.md",
                "others/others-research-nodered.md"
            ]
        },
        {
            title: "关于 - 读书与随笔",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "book/book-read-arch-extendable.md",
                "book/book-read-code-art.md",
                "book/book-read-code-rebuild.md",
                "book/book-read-devops-inaction.md",
                "book/book-read-offer.md",
                "book/book-read-scrum-xp.md",
            ]
        }
    ];
}

// Dev-spec page
function genSidebar4Devspec() {
    return [
        {
            title: "开发原则,流程,协议",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "spec/dev-rules.md",
                "spec/dev-cap-base.md",
                "spec/dev-workflow.md",
                "spec/dev-opensource.md",
                "spec/dev-knowledge.md"
            ]
        },
        {
            title: "代码规范",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "code-style/code-style-alibaba.md",
                "code-style/code-style-twitter.md"
            ]
        },
        {
            title: "设计模式",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "pattern/1_overview.md",
                "pattern/2_singleton.md",
                "pattern/3_simple_factory.md",
                "pattern/4_factory_method.md",
                "pattern/5_abstract_factory.md",
                "pattern/6_builder.md",
                "pattern/7_prototype.md",
                "pattern/8_facade.md",
                "pattern/9_adapter.md",
                "pattern/10_bridge.md",
                "pattern/11_compsite.md",
                "pattern/12_decorator.md",
                "pattern/13_flyweight.md",
                "pattern/14_proxy.md",
                "pattern/15_chain.md",
                "pattern/16_strategy.md",
                "pattern/17_template.md",
                "pattern/18_command.md",
                "pattern/19_observer.md",
                "pattern/20_visitor.md",
                "pattern/21_state.md",
                "pattern/22_interpreter.md",
                "pattern/23_iterator.md",
                "pattern/24_mediator.md",
                "pattern/25_memento.md"
            ]
        }
    ];
}

// DevOPS page
function genSidebar4Devops() {
    return [
        {
            title: "开发工具",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "tool/tool.md",
                "tool/tool-git.md",
                "tool/tool-ide.md",
                "tool/tool-maven.md",
                "tool/tool-jenkins-gitlab.md"
            ]
        },
        {
            title: "Linux",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "linux/linux.md",
                "linux/linux-usage.md",
                "linux/linux-curl.md",
                "linux/linux-service.md"
            ]
        },
        {
            title: "容器化 - Docker",
            collapsable: false,
            sidebarDepth: 0,
            children: []
        },
        {
            title: "容器编排 - Kubernetes",
            collapsable: false,
            sidebarDepth: 0,
            children: []
        },
        {
            title: "服务网格 - Service Mesh",
            collapsable: false,
            sidebarDepth: 0,
            children: []
        }
    ];
}

// DB page
function genSidebar4DB() {
    return [
        {
            title: "数据库基础和原理",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "sql/sql-db.md",
                "sql/sql-db-theory.md",
                "sql/sql-db-transaction.md"
            ]
        },
        {
            title: "SQL 语言",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "sql-lan/sql-lan.md",
                "sql-lan/sql-lan-pratice.md",
                "sql-lan/sql-lan-leetcode.md",
                "sql-lan/sql-lan-optimize.md"
            ]
        },
        {
            title: "SQL - MySQL",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "sql-mysql/sql-mysql-theory.md",
                "sql-mysql/sql-mysql-engine.md",
                "sql-mysql/sql-mysql-b-tree.md",
                "sql-mysql/sql-mysql-performance.md",
                "sql-mysql/sql-mysql-devide.md",
                "sql-mysql/sql-mysql-slave.md"
            ]
        },
        {
            title: "NoSQL - ElasticSearch",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "nosql-es/elasticsearch.md",
                "nosql-es/elasticsearch-theory.md",
                "nosql-es/elasticsearch-setup.md",
                "nosql-es/elasticsearch-dsl.md",
                "nosql-es/elasticsearch-wrapper-query.md"
            ]
        },
        {
            title: "NoSQL - MongoDB",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "nosql-mongo/mongo.md",
                "nosql-mongo/mongo-performance-improve.md"
            ]
        }

    ];
}

function _getSidebarPage(_pagePath) {
    return _getSidebarGroups(_pagePath,
        ["Java 基础", "Java 集合框架", "Java IO/NIO/AIO"],
        ["basic/", "collection/", 'io/'],
        [
            ["java-basic-oop.md", "java-basic-lan-basic.md", "java-basic-lan-sum.md"],
            ["java-collection-all.md", "java-collection-ArrayList.md", "java-collection-LinkedList.md",
                "java-collection-Queue&Stack.md", "java-collection-PriorityQueue.md", "java-map-HashMap&HashSet.md",
                "java-map-LinkedHashMap&LinkedHashSet.md", "java-map-TreeMap&TreeSet.md", "java-map-WeakHashMap.md",
            ],
            [
                "java-io.md",
                "java-io-basic.md",
                "java-io-basic2.md",
                "java-io-basic3.md",
                "java-io-model.md",
                "java-io-nio.md",
                "java-io-nio-netty.md"
            ]
        ]
    );
}

function _getSidebarGroups(_pagePath, _titles, _pathPrefixs, _contents) {
    var groups = [];
    for (var i = 0; i < _ti.length; i++) {
        groups.push(_getSidebarGroup(_pagePath, _titles[i], _pathPrefixs[i], _contents[i]));
    }
    return groups;
}

function _getSidebarGroup(_pagePath, _title, _prefixPath, _content) {
    var content = [];
    for (var i = 0; i < _content.length; i++) {
        content.push(_pagePath + _prefixPath + _content[i]);
    }
    return {
        title: _title,
        collapsable: false,
        sidebarDepth: 0,
        children: content
    };
}
