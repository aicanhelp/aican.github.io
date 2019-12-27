module.exports = {
    basePath: '/content',
    baseDir: 'content',
    buildSidebar: function buildSidebar(title, children) {
        return {
            title: title,
            collapsable: true,
            sidebarDepth: 1,
            children: children
        }
    }
};
