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
console.log(`[TEST] 个人访问量：${pgcount}`)

document.addEventListener("DOMContentLoaded", function() {
    // 获取已有的总访问量
    var totalViewsElement = document.getElementById("finicount_views");
    var totalViews = totalViewsElement.innerText;
    
    if (totalViews == "[加载中...]") {
        console.warn(`[WARN] JS文件在总访问量未加载完成前就获取了总访问量(总访问量无效)`)
    }
    console.log(`[TEST] 总访问量：${totalViews}`)
    // 计算非个人访问量
    var NoPersonal = totalViews - pgcount;
    if (NoPersonal == NaN) {
        console.warn("[WARN] 非个人访问量为空值，请查看是否存在其他警告！")
    }
    console.log("[DEV:INFO] 非自己的访问量：" + NoPersonal);
});