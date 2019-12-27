module.exports = [
    {
        title: "Java 基础",
        collapsable: true,
        sidebarDepth: 1,
        children: [
            "basic/java-basic-oop.md",
            "basic/java-basic-lan-basic.md",
            "basic/java-basic-lan-sum.md"
        ]
    },
    {
        title: "Java 集合框架",
        collapsable: true,
        sidebarDepth: 1,
        children: [
            "collection/java-collection-all.md",
            "collection/java-collection-ArrayList.md",
            "collection/java-collection-LinkedList.md",
            "collection/java-collection-Queue&Stack.md",
            "collection/java-collection-PriorityQueue.md",
            "collection/java-map-HashMap&HashSet.md",
            "collection/java-map-LinkedHashMap&LinkedHashSet.md",
            "collection/java-map-TreeMap&TreeSet.md",
            "collection/java-map-WeakHashMap.md",
        ]
    },
    {
        title: "Java 多线程与并发",
        collapsable: true,
        sidebarDepth: 1,
        children: [
            "thread/java-thread.md",
            "thread/java-thread-status.md",
            "thread/java-thread-concurrent-basic.md",
            "thread/java-thread-concurrent-class.md",
            "thread/java-thread-threadlocal.md"
        ]
    },
    {
        title: "Java IO/NIO/AIO",
        collapsable: true,
        sidebarDepth: 1,
        children: [
            "io/java-io.md",
            "io/java-io-basic.md",
            "io/java-io-basic2.md",
            "io/java-io-basic3.md",
            "io/java-io-model.md",
            "io/java-io-nio.md",
            "io/java-io-nio-netty.md"
        ]
    },
    {
        title: "Java8 特性详解",
        collapsable: true,
        sidebarDepth: 1,
        children: [
            "java8/java8.md",
            "java8/java8-stream.md",
            "java8/java8-optional.md",
            "java8/java8-default.md",
            "java8/java8-type-anno.md",
            "java8/java8-anno-repeat.md",
            "java8/java8-type.md",
            "java8/java8-jre.md",
            "java8/java8-permgen.md",
            "java8/java8-stampedlock.md",
            "java8/java8-localdatetime.md",
            "java8/java8-javafx.md",
            "java8/java8-others.md"
        ]
    },
    {
        title: "JVM相关",
        collapsable: false,
        sidebarDepth: 0,
        children: [
            "jvm/java-jvm-classload.md",
            "jvm/java-jvm-jmm.md",
            "jvm/java-jvm-gc.md",
            "jvm/java-jvm-param.md",
            "jvm/java-jvm-oom.md"
        ]
    },
    {
        title: "Java其它相关",
        collapsable: false,
        sidebarDepth: 0,
        children: [
            "others/java-others-awesome-java.md",
            "others/java-others-better-java.md"
        ]
    }
];