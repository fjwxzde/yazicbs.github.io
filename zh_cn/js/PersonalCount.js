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

window.onload = function() {
    // 定义MutationObserver回调函数
    var observer = new MutationObserver(function(mutationsList, observer) {
        for (var mutation of mutationsList) {
            if (mutation.type === 'childList') {
                // 获取已有的总访问量
                var totalViewsElement = document.getElementById("finicount_views");
                var totalViews = totalViewsElement.innerText;
                
                if (!isNaN(totalViews)) {
                    console.log(`[TEST] 总访问量：${totalViews}`)
                    // 计算非个人访问量
                    var NoPersonal = parseInt(totalViews) - pgcount;
                    if (isNaN(NoPersonal)) {
                        console.warn("[WARN] 非个人访问量为空值，请查看是否存在其他警告！")
                    }
                    console.log("[DEV:INFO] 非自己的访问量：" + NoPersonal);
                    // 停止监听
                    observer.disconnect();
                }
            }
        }
    });
    
    // 监听<span id="finicount_views"></span>元素内容的变化
    observer.observe(document.getElementById('finicount_views'), { childList: true });
};
