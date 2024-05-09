// 个人访问量
var pgcount = localStorage.getItem("page_view_pgcount");
if (!pgcount) {
    pgcount = 0;
}
pgcount++;
localStorage.setItem("page_view_pgcount", pgcount);
console.log(`[TEST]个人访问量：${pgcount}`)

document.addEventListener("DOMContentLoaded", function() {
    // 获取已有的总访问量
    var totalViewsElement = document.getElementById("finicount_views");
    var totalViewsText = totalViewsElement.innerText;
    // 使用正则表达式提取数字
    var totalViews = parseInt(totalViewsText.match(/\d+/)[0]);
    
    console.log(`[TEST]总访问量：${totalViews}`)
    // 计算非个人访问量
    var NoPersonal = totalViews - pgcount;
    console.log("[DEV:INFO]非自己的访问量：" + NoPersonal);
});