const common = require("../../common.js");
const buildSidebar = common.buildSidebar;
module.exports = {
    path: common.aiDir + "/cv",
    sideBar: [
        buildSidebar("视觉基础",
            [
                buildSidebar("算法1", ['/']),
                buildSidebar("算法2", ['/'])
            ]
        ),
        buildSidebar("算法", ['/'])
    ]
};