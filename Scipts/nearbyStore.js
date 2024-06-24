import data from "../data/nearbyStore.json" assert {type: "json"};

const nearbyStoresList = document.getElementById('nearbyStoresList');

createStoreItems(data, 8);

function createStoreItems(jsonObj, iterate) {
    for (let i = 0; i < iterate; i++) {

        // <li> 태그 생성
        const listItem = document.createElement('li');
        // clasList.add로 클래스를 추가함.
        listItem.classList.add('col-12', 'col-md-6');

        // <li> 자식태그로 <a>생성해서 넘어가는 링크 저장
        const storeLink = document.createElement('a');
        storeLink.href = '../Routes/town_detail.html';
        storeLink.classList.add('nearby_store_item', 'd-flex');

        // <img> 넣을 <div>만듬
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('store_item_thumbnail', 'rounded-circle');

        // <img> 만들어서 json데이터에 있는 이미지 링크 넣어줌
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = jsonObj[i].thumbnail;
        thumbnailImg.alt = "";

        // img를 div에 div를 a의 자식 링크로 만듬
        thumbnailDiv.appendChild(thumbnailImg);
        storeLink.appendChild(thumbnailDiv);

        // 객체 정보가 들어갈 div 생성
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('store_item_content');

        // div 생성해서 가게 이름과 지역 json데이터로 불러옴
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('store_item_content_title');
        titleDiv.innerHTML = `
            <span class="fw-bold">${jsonObj[i].title}</span>
            <span>${jsonObj[i].region}</span>
        `;

        // div생성후 가게 소개 json으로 불러옴
        const truncTwolineDiv = document.createElement('div');
        truncTwolineDiv.classList.add('text-trunc_twoline', 'mb-2');
        truncTwolineDiv.textContent = jsonObj[i].content;

        // 리뷰, 단골 수는 랜덤으로 생성
        const review = Math.floor(Math.random() * 500) + 1;
        const regularCustomer = Math.floor(Math.random() * 500) + 1;


        const moreDiv = document.createElement('div');
        moreDiv.classList.add('store_item_content_more');
        moreDiv.innerHTML = `
            <span>후기 ${review}</span>
            <i class="bi bi-dot"></i>
            <span>단골 ${regularCustomer}</span>
            <i class="bi bi-dot"></i>
            <span>${jsonObj[i].kind}</span>
        `;

        // 가게이름, 소개, 리뷰 등 정보들의 div가 같은 하나의 div에 들어가면서 가게에 대한 정보를 나타내는 div생성
        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(truncTwolineDiv);
        contentDiv.appendChild(moreDiv);

        // 위에 div가 a에 자식태그로 들어오고 a는 li태그 에 들어오면서 하나의 li태그가 만들어짐 이후,
        //nearbyStoresList라는 id로받아온 변수(이것은 ul태크임)에 li가 반복해서 들어가면서 화면에 출력됨
        storeLink.appendChild(contentDiv);
        listItem.appendChild(storeLink);
        nearbyStoresList.appendChild(listItem);
    }
}
