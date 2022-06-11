let window_height = window.innerHeight;
let window_width = window.innerWidth;
const z_style_link_href = 'https://cdn.jsdelivr.net/gh/zl-manage/z@latest/z_ads_style.css';

let z_ads_json = JSON.parse('{ "ads" : [' + '{ "name":"zestlark" , "type":"popup","link":"http://zestlark.ml","content":"visit zestlark official website to see more awesome projects link this","image":"https://ouch-cdn2.icons8.com/UuHlQCP5syRwWoo7gNVK8YfOPP0k8zs3u1ZhlpKoBnE/rs:fit:256:192/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTM2/LzNiZjZmMjY3LWQ1/NzAtNDVlNi1iMDE2/LTdhZjg0MjUyZjdh/YS5wbmc.png" }]}');

let z_json_content, z_json_link, z_json_image;
for (let z_ads_i = 0; z_ads_i < z_ads_json.ads.length; z_ads_i++) {
    z_json_content = z_ads_json.ads[z_ads_i].content;
    z_json_link = z_ads_json.ads[z_ads_i].link;
    z_json_image = z_ads_json.ads[z_ads_i].image;
}

let z_ads_box = document.createElement("div");
z_ads_box.classList.add('z-ads-box');

let z_ads_popup = document.createElement("div");
z_ads_popup.classList.add('z-ads-popup');

let z_ads_p = document.createElement("p");

let z_ads_span1 = document.createElement("span");
z_ads_span1.innerHTML = z_json_content;

let z_ads_span2 = document.createElement("span");
let z_ads_a1 = document.createElement("a");
let z_ads_a2 = document.createElement("a");
z_ads_a1.innerHTML = 'VISIT';
z_ads_a1.classList.add('z-btn-visit');
z_ads_a1.href = z_json_link;
z_ads_a2.innerHTML = 'CLOSE';
z_ads_a2.addEventListener("click", function (e) {
    z_ads_box.style.transition = "500ms";
    z_ads_box.style.opacity="0";
    setTimeout(() => {
        document.body.removeChild(z_ads_box)
    }, 500)
})
z_ads_a2.classList.add('z-btn-close');

z_ads_span2.appendChild(z_ads_a1);
z_ads_span2.appendChild(z_ads_a2);

let z_ads_img = document.createElement("img");
z_ads_img.src = z_json_image;

z_ads_p.appendChild(z_ads_span1);
z_ads_p.appendChild(z_ads_span2);
z_ads_popup.appendChild(z_ads_p);
z_ads_popup.appendChild(z_ads_img);
z_ads_box.appendChild(z_ads_popup);

let z_ads_style_link = document.createElement("link")
z_ads_style_link.rel = "stylesheet";
z_ads_style_link.href=z_style_link_href;
document.head.appendChild(z_ads_style_link)
// const z_ada_date = new Date();
// console.log(z_ada_date.getDate() +''+ z_ada_date.getMonth() +''+ z_ada_date.getFullYear() + '' + z_ada_date.getMinutes())

let z_cache_data = sessionStorage.getItem("z_cache_data");

if (window_height > 499 && window_width > 270) {
    if (!z_cache_data) {
        sessionStorage.setItem("z_cache_data", "visited")
        setTimeout(() => {
            document.body.appendChild(z_ads_box)
        }, 2000)
    }
}
