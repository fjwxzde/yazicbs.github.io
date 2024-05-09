// 个人访问量
var pgcount = localStorage.getItem("page_view_pgcount");
if (!pgcount) {
    pgcount = 0;
}
pgcount++;
localStorage.setItem("page_view_pgcount", pgcount);

document.addEventListener("DOMContentLoaded", function() {
    // 获取已有的总访问量
    var totalViewsElement = document.getElementById("finicount_views");
    var totalViewsText = totalViewsElement.innerText;
    // 使用正则表达式提取数字
    var totalViews = parseInt(totalViewsText.match(/\d+/)[0]);

    // 计算非个人访问量
    var NoPersonal = totalViews - pgcount;
    console.log("[DEV:INFO]非自己的访问量：" + NoPersonal);
});