document.addEventListener("DOMContentLoaded", () => {
    initializeHot();
});

document.addEventListener("pjax:complete", () => {
    initializeHot();
});

function initializeHot() {
    const url = "[你的 PHP 脚本地址，如 https://api.everfu.cn/hot/]";
    const e = document.getElementById("card-hotpost");
    if (e) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let rank = 0;
            data.forEach(item => {
                rank++;
                const hotItem = document.createElement("a");
                hotItem.classList.add("hot-post-link");
                hotItem.setAttribute("href", item.url);
                hotItem.innerHTML = `<span class="post-rank rank-${rank == 1 ? "1" : "2"}">${rank}</span><div class="post-title-container"><span class="post-title">${item.title}</span></div>`;
                e.appendChild(hotItem);
            });
        });
        }
    }