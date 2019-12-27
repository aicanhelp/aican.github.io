(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{256:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"elasticsearch-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch-原理"}},[s._v("#")]),s._v(" ElasticSearch - 原理")]),s._v(" "),a("p",[s._v("传统关系型数据库的行和列存储，这相当于是把一个表现力丰富的对象挤压到一个非常大的电子表格中：你必须将这个对象扁平化来适应表结构--通常一个字段>对应一列--而且又不得不在每次查询时重新构造对象。")]),s._v(" "),a("p",[s._v("Elasticsearch 是 面向文档 的，意味着它存储整个对象或 文档_。Elasticsearch 不仅存储文档，而且 _索引 每个文档的内容使之可以被检索。在 Elasticsearch 中，你 对文档进行索引、检索、排序和过滤--而不是对行列数据。这是一种完全不同的思考数据的方式，也是 Elasticsearch 能支持复杂全文检索的原因。")]),s._v(" "),a("h3",{attrs:{id:"集群相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群相关"}},[s._v("#")]),s._v(" 集群相关")]),s._v(" "),a("ul",[a("li",[s._v("节点、主节点、主分片、副本分片")])]),s._v(" "),a("p",[s._v("一个运行中的 Elasticsearch 实例称为一个 节点，而集群是由一个或者多个拥有相同 cluster.name 配置的节点组成， 它们共同承担数据和负载的压力。"),a("strong",[s._v("当有节点加入集群中或者从集群中移除节点时，集群将会重新平均分布所有的数据。")])]),s._v(" "),a("p",[s._v("当一个节点被选举成为主节点时， 它将负责管理集群范围内的所有变更，例如增加、删除索引，或者增加、删除节点等。 而主节点并不需要涉及到文档级别的变更和搜索等操作，所以当集群只拥有一个主节点的情况下，即使流量的增加它也不会成为瓶颈。 任何节点都可以成为主节点。集群状态存在于集群中的每个节点，包括客户端节点。但只有主节点被允许更新集群状态，然后向所有集群中的所有节点发布一个新的版本。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("集群状态 是一种数据结构，贮存下列集群级别的信息：\n1.集群级别的设置\n2.集群中的节点\n3.索引以及它们的设置、映射、分析器、预热器（Warmers）和别名\n4.与每个索引关联的分片以及它们分配到的节点\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("每个节点上都有若干分片（即可以有主分片也可以有副分片）。")])]),s._v(" "),a("p",[s._v("作为用户，我们可以将请求发送到集群中的任何节点，包括主节点。 每个节点都知道任意文档所处的位置，并且能够将我们的请求直接转发到存储我们所需文档的节点。 无论我们将请求发送到哪个节点，它都能负责从各个包含我们所需文档的节点收集回数据，并将最终结果返回給客户端。 Elasticsearch 对这一切的管理都是透明的。")]),s._v(" "),a("ul",[a("li",[s._v("集群健康命令：")])]),s._v(" "),a("p",[s._v("curl -XGET 'localhost:9200/_cluster/health?pretty'")]),s._v(" "),a("p",[s._v("Elasticsearch 是利用分片将数据分发到集群内各处的。分片是数据的容器，文档保存在分片内，分片又被分配到集群内的各个节点里。 当你的集群规模扩大或者缩小时， Elasticsearch 会自动的在各节点中迁移分片，使得数据仍然均匀分布在集群里。")]),s._v(" "),a("p",[a("strong",[s._v("在索引建立的时候就已经确定了主分片数，但是副本分片数可以随时修改。")])]),s._v(" "),a("ul",[a("li",[s._v("水平扩容")])]),s._v(" "),a("p",[s._v("创建更多的副本分片，提供服务（读操作——搜索和返回数据——可以同时被主分片 或 副本分片所处理），提高系统的吞吐量。")]),s._v(" "),a("p",[s._v("https://www.elastic.co/guide/cn/elasticsearch/guide/current/_scale_horizontally.html")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('PUT /blogs/_settings\n{\n   "number_of_replicas" : 2\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"分布式文档存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式文档存储"}},[s._v("#")]),s._v(" 分布式文档存储")]),s._v(" "),a("p",[s._v("当我们创建文档时，被存储到哪一个主分片？有一个公式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("shard = hash(routing) % number_of_primary_shards\n\n注：routing 是一个可变值，默认是文档的 _id ，也可以设置成一个自定义的值。number_of_primary_shards 是主分片的个数。 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("p",[a("strong",[s._v("新建、更新和删除 请求都是 写 操作， 必须在主分片上面完成之后才能被复制到相关的副本分片。")]),s._v("\nhttps://www.elastic.co/guide/cn/elasticsearch/guide/current/distrib-write.html")])]),s._v(" "),a("li",[a("p",[s._v("**当主分片把更改转发到副本分片时， 它不会转发更新请求。 相反，它转发完整文档的新版本。\n** https://www.elastic.co/guide/cn/elasticsearch/guide/current/_partial_updates_to_a_document.html")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("读取请求，协调节点在每次请求的时候将选择不同的副本分片来达到负载均衡；通过轮询所有的副本分片。")]),s._v("\nhttps://www.elastic.co/guide/cn/elasticsearch/guide/current/distrib-read.html")])])]),s._v(" "),a("p",[s._v("注：在分布式系统中，对结果排序的成本随分页的深度成指数上升。这就是 web 搜索引擎对任何查询都不要返回超过 1000 个结果的原因。")]),s._v(" "),a("h3",{attrs:{id:"倒排索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#倒排索引"}},[s._v("#")]),s._v(" 倒排索引")]),s._v(" "),a("p",[s._v("Elasticsearch 使用一种称为 倒排索引 的结构，它适用于快速的全文搜索。一个倒排索引由文档中所有不重复词的列表构成，对于其中每个词，有一个包含它的文档列表。\nhttps://www.elastic.co/guide/cn/elasticsearch/guide/current/inverted-index.html")]),s._v(" "),a("h3",{attrs:{id:"分布式检索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式检索"}},[s._v("#")]),s._v(" 分布式检索")]),s._v(" "),a("p",[s._v("当一个节点接收搜索请求时，这个节点就变成了协调节点。 这个节点的任务是广播查询请求到所有相关分片并将它们的响应整合成全局排序后的结果集合，这个结果集合会返回给客户端。\nhttps://www.elastic.co/guide/cn/elasticsearch/guide/current/_query_phase.html")]),s._v(" "),a("p",[s._v("对于楼梯式的翻页，随着页号越大，效率越差。每个分片在本地执行查询请求并且创建一个长度为 from + size 的优先队列，也就是说，每个分片创建的结果集足够大，均可以满足全局的搜索请求。 分片返回一个轻量级的结果列表到协调节点，它仅包含文档 ID 集合以及任何排序需要用到的值，例如 _score 。协调节点将这些分片级的结果合并到自己的有序优先队列里，它代表了全局排序结果集合。至此查询过程结束。")]),s._v(" "),a("h3",{attrs:{id:"过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[s._v("#")]),s._v(" 过滤器")]),s._v(" "),a("p",[s._v("例子：https://www.elastic.co/guide/cn/elasticsearch/guide/current/_finding_exact_values.html#_internal_filter_operation")]),s._v(" "),a("p",[s._v("在内部，Elasticsearch 会在运行非评分查询的时执行多个操作：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查找匹配文档.")]),s._v(" "),a("p",[s._v("term 查询在倒排索引中查找 XHDK-A-1293-#fJ3 然后获取包含该 term 的所有文档。本例中，只有文档 1 满足我们要求。")])]),s._v(" "),a("li",[a("p",[s._v("创建 bitset.")]),s._v(" "),a("p",[s._v('过滤器会创建一个 bitset （一个包含 0 和 1 的数组），它描述了哪个文档会包含该 term 。每一个文档都会有一个二进制数字。匹配上的文档的标志位是 1 。本例中，bitset 的值为 [1,0,0,0] ，因为只有4个文档。在内部，它表示成一个 "roaring bitmap"，可以同时对稀疏或密集的集合进行高效编码。')]),s._v(" "),a("p",[s._v("bitset是一个标志位数组，表示有或没有，猜测应该有一个对应的文档id号的数组，数组的下标可以做关联。")])]),s._v(" "),a("li",[a("p",[s._v("迭代 bitset(s)")]),s._v(" "),a("p",[s._v("一旦为每个查询生成了 bitsets ，Elasticsearch 就会循环迭代 bitsets 从而找到满足所有过滤条件的匹配文档的集合。执行顺序是启发式的，但一般来说先迭代稀疏的 bitset （因为它可以排除掉大量的文档）。")])])]),s._v(" "),a("p",[a("strong",[s._v("理论上非评分查询先于评分查询执行。非评分查询任务旨在降低那些将对评分查询计算带来更高成本的文档数量，从而达到快速搜索的目的。从概念上记住非评分计算是首先执行的，这将有助于写出高效又快速的搜索请求。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);