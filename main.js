const btn = document.getElementById("pushBtn");
const img = document.getElementById("viewImg");
const skip = document.getElementById("skipBtn");

let imgNum = 0;
const data = [
    { img: "./img/slide1.png", text: "春へ" },
    { img: "./img/slide2.png", text: "夏へ" },
    { img: "./img/slide3.png", text: "秋へ" },
    { img: "./img/slide4.png", text: "冬へ" }
];

btn.textContent = data[imgNum].text;
img.setAttribute("src", data[imgNum].img);

btn.addEventListener("click", () => {
    if (imgNum === 3) {
        imgNum = 0;
    } else {
        imgNum++;
    }
    img.setAttribute("src", data[imgNum].img);
    btn.textContent = data[imgNum].text;
});

// スキップボタン
skip.addEventListener("click", () => {
    // selectタグの取得
    let season = document.querySelector("select");
    
    let num = season.value;
    img.setAttribute("src", data[num].img);
    btn.textContent = data[num].text;
});