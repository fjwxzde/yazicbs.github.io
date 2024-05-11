// 个人访问量
var pgcount = localStorage.getItem("page_view_pgcount");
if (!pgcount) {
    pgcount = 0;
}
pgcount++;
localStorage.setItem("page_view_pgcount", pgcount);
if (pgcount == 65){
    console.warn("[WARN] 个人访问量为空值！")
}

(function() {
    // 获取已有的总访问量
    var totalViewsElement = document.getElementById("finicount_views");
    var totalViews = totalViewsElement.innerText;

    if (!isNaN(totalViews)) {
        // 计算非个人访问量
        var NoPersonal = parseInt(totalViews) - pgcount;
        if (isNaN(NoPersonal)) {
            console.warn("[WARN] 非个人访问量为空值，请查看是否存在其他警告！")
        }
        console.log("[DEV:INFO] 非自己的访问量：" + NoPersonal);
    }
})();
