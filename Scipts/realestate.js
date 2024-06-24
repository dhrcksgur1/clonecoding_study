import data from "../data/realestate.json" assert {type: "json"};

let node = document.getElementsByClassName("item-cards")[0];

for (let i = 0; i < 10; i++) {

    const childNode = `
        <div class="item-card">
        <a href="${data[i].itemLink}">
        <article class="item-img-desc">
        <div class="item-img">
        <span>
        <img src=${data[i].imgLink} alt="주소">
        </span>
        </div>
        <div class="item-desc">
        <div class="item-desc-content">
        ${data[i].name}
        </div>
        <div class="item-desc-region">
        ${data[i].region}
        </div>
        <div class="item-desc-pay">
        시급 ${data[i].price}
        </div>
        </div>
        </article>
        </a>
        </div>
    `;

    node.innerHTML += childNode;
}

node = document.getElementsByClassName("item-cards")[1];

for (let i = 10; i < 20; i++) {
    const childNode = `
        <div class="item-card">
        <a href="${data[i].itemLink}">
        <article class="item-img-desc">
        <div class="item-img">
        <span>
        <img src=${data[i].imgLink} alt="주소">
        </span>
        </div>
        <div class="item-desc">
        <div class="item-desc-content">
        ${data[i].name}
        </div>
        <div class="item-desc-region">
        ${data[i].region}
        </div>
        <div class="item-desc-pay">
        시급 ${data[i].price}
        </div>
        </div>
        </article>
        </a>
        </div>
    `;
    node.innerHTML += childNode;
}