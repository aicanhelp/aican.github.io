(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"关于文档-文档的自动部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于文档-文档的自动部署"}},[t._v("#")]),t._v(" 关于文档 - 文档的自动部署")]),t._v(" "),a("blockquote",[a("p",[t._v("本文主要介绍 当前文档是如何在我自己的服务器自动编译部署的。@pdai")])]),t._v(" "),a("h3",{attrs:{id:"文档编译和部署流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档编译和部署流程"}},[t._v("#")]),t._v(" 文档编译和部署流程")]),t._v(" "),a("p",[a("img",{attrs:{src:"/_images/blog/blog-ssl-cd-1.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建"}},[t._v("#")]),t._v(" 搭建")]),t._v(" "),a("blockquote",[a("p",[t._v("之前购买了一个低配的阿里云虚拟机，系统是CentOS 7.x。")])]),t._v(" "),a("h4",{attrs:{id:"安装nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nodejs"}},[t._v("#")]),t._v(" 安装NodeJS")]),t._v(" "),a("ul",[a("li",[t._v("添加yum源")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://rpm.nodesource.com/setup_10.x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("yum install")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其它方式可以参考此文 https://blog.csdn.net/bbwangj/article/details/82253785")]),t._v(" "),a("h4",{attrs:{id:"清理原有部分服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清理原有部分服务"}},[t._v("#")]),t._v(" 清理原有部分服务")]),t._v(" "),a("blockquote",[a("p",[t._v("之前服务器上搭建过gitlab-ee，jenkins，httpd等，由于我自己的代码托管已经切换至github的私有仓库，所以现在需要清理下；不需要清理的，请略过。")])]),t._v(" "),a("ul",[a("li",[t._v("清理gitlab-ee")])]),t._v(" "),a("p",[t._v("https://blog.csdn.net/huhuhuemail/article/details/80519433")]),t._v(" "),a("ul",[a("li",[t._v("清理httpd")])]),t._v(" "),a("p",[t._v("https://www.cnblogs.com/richardcastle/p/8296166.html")]),t._v(" "),a("h4",{attrs:{id:"安装nginx和配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx和配置"}},[t._v("#")]),t._v(" 安装Nginx和配置")]),t._v(" "),a("ul",[a("li",[t._v("安装")])]),t._v(" "),a("p",[t._v("https://www.centos.bz/2018/01/centos-7%EF%BC%8C%E4%BD%BF%E7%94%A8yum%E5%AE%89%E8%A3%85nginx/")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("配置开机自启\nhttps://www.cnblogs.com/jepson6669/p/9131217.html")])]),t._v(" "),a("li",[a("p",[t._v("配置nginx.conf")])])]),t._v(" "),a("p",[t._v("https://www.cnblogs.com/alvin-niu/p/9502286.html")]),t._v(" "),a("ul",[a("li",[t._v("配置firewalld")])]),t._v(" "),a("p",[t._v("https://blog.csdn.net/benchem/article/details/79605598")]),t._v(" "),a("h4",{attrs:{id:"部署项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署项目"}},[t._v("#")]),t._v(" 部署项目")])])}),[],!1,null,null,null);s.default=n.exports}}]);