const common = require("../../common.js");
const buildSidebar = common.buildSidebar;
module.exports = {
    path: common.aiDir + "/basic",
    sideBar: [
        buildSidebar("视觉基础",
            [
                buildSidebar("算法1", ['basic.md']),
                buildSidebar("算法2", ['/'])
            ]
        ),
        buildSidebar("算法", ['/'])
    ]
};