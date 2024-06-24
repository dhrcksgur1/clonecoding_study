import data from "../data/fleamarketData.json" assert {type: "json"};

const node = document.createElement('div');
// const textNode = document.createTextNode('Hello World');
// node.appendChild(textNode);

document.getElementsByClassName('fleamarket-items')[0].appendChild(node);

// getElements - 복수형이다. 리스트 반환하므로 인덱스로 접근하자
// document.getElementsByClassName('fleamarket-item')[0].appendChild(node);
const fleamarketItemsList = document.getElementsByClassName('fleamarket-items-list')[0];

createItem(data, 12);

function createItem(jsonObj, iterate) {
    for (let i = 0; i < iterate; i++) {
        const article = document.createElement('article');
        const aLink = document.createElement('a');

        // 좋아요 채팅 개수 랜덤 생성
        const randomLikes = Math.floor(Math.random() * 100) + 1;
        const randomchats = Math.floor(Math.random() * 10) + 1;

        // 아이템별 세부내용 생성
        const itemImg =
            `<div class="item-photo">
        <img alt="${jsonObj[i].name}" src=${jsonObj[i].imgLink}>
        </div>`;

        const itemDesc =
            `<div class="item-desc">
        <h2 class="item-title">${jsonObj[i].name}</h2>
        <div class="item-price">${jsonObj[i].price}</div>
        <div class="item-region-name">${jsonObj[i].region}</div>
        <div class="item-counts">
        <span> 관심 ${randomLikes} </span> . <span> 채팅 ${randomchats} </span>
        </div>
        </div>`;

        // 페이지에 생성한 내용 추가하기
        aLink.innerHTML = itemImg;
        aLink.innerHTML += itemDesc;
        article.setAttribute('class', 'item-card');
        aLink.setAttribute('class', 'item-img-desc');
        aLink.href = `${jsonObj[i].itemLink}`;
        article.appendChild(aLink);
        fleamarketItemsList.appendChild(article);
    }
}