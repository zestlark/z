
document.body.innerHTML = '<div id="z_design"></div>';
var svgContainer = document.getElementById("z_design");
var svgUrl = "https://cdn.jsdelivr.net/gh/zl-manage/z@master/Group%2013.svg";

const z_style_link_href = 'https://cdn.jsdelivr.net/gh/zl-manage/z/z_design.css';


let z_ads_style_link = document.createElement("link")
z_ads_style_link.rel = "stylesheet";
z_ads_style_link.href = z_style_link_href;
document.head.appendChild(z_ads_style_link)


fetch(svgUrl)
    .then(response => response.text())
    .then(svgCode => {
        svgContainer.innerHTML = svgCode;
        svgContainer.style.transition = "all 1s";
        setTimeout(() => svgContainer.style.opacity = "0", 4000)
        setTimeout(() => svgContainer.style.display = "none", 5000)
    })
    .catch(error => {
        console.error("Failed to fetch SVG:", error);
    });

