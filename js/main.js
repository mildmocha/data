import products from "../data.json" assert{type: 'json'}
//assert {type:'json'} - 외부파일이 json 이라고 확실하게 명시
console.log(products)
const button = document.querySelector('button')




//li만들어서 ul에 넣어주는 함수
const createItem = (product) => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const span = document.createElement('span');
    // 한국 원화는 보조 통화 단위를 사용하지 않음



    img.setAttribute('src', product.img)
    li.id = product.id;
    p.className = 'name';
  
    p.innerHTML = product.name
   
    const price= new Intl.NumberFormat('ko-KR', { 
        style: 'currency', currency: 'KRW' 
    }).format(product.price)
   

    span.className = 'price'
    span.innerText = price;


    li.append(img, p, span)
    ul.append(li)
}

//만든 li들을 반복되게
const importData = () => {
    products.data.map((product) => {
        if(document.getElementById(product.id)) { //무한생성 방지
            return 0;
        }
        createItem(product);
    })

}

button.addEventListener('click', importData);