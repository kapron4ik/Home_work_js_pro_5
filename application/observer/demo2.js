import { Observable, Observer } from './Observer';

const Demo2 = () => {

  /*
    Рассмотрим на примере интернет магазина:
  */
  console.log( 'DEMO 2');
  let Products = [
    {
      id: 1,
      name: 'Samsung Galaxy S8 ',
      price: 21999,
      imageLink: 'https://i1.rozetka.ua/goods/1894533/samsung_galaxy_s8_64gb_black_images_1894533385.jpg'
    },
    {
      id: 2,
      name: 'Apple AirPort Capsule',
      price: 10700,
      imageLink: 'https://i1.rozetka.ua/goods/3330569/apple_a1470_me177_images_3330569615.jpg'
    },
    {
      id: 3,
      name: 'Apple iPhone X',
      price: 35999,
      imageLink: 'https://i1.rozetka.ua/goods/2433231/apple_iphone_x_64gb_silver_images_2433231297.jpg'
    },
    {
      id: 4,
      name: 'LG G6 Black ',
      price: 15999,
      imageLink: 'https://i1.rozetka.ua/goods/1892329/copy_lg_lgh845_acistn_58d8fc4a87d51_images_1892329834.jpg'
    }
  ];

  // Создадим наблюдателя:
  let observable = new Observable();
  // Трех обсерверов:
  let basketObs = new Observer( function(id){
    let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );
        Cart.push( filtredToBasket[0] );
        renderBasket();
  });
  let serverObs = new Observer( (id) => {
      let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );
      let msg = `Товар ${filtredToBasket[0].name} добавлен в корзину`;
      console.log( msg );
  });
  let iconObs = new Observer( (id) => {
      let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );
      let products__cart = document.getElementById('products__cart');
          products__cart.innerText = Cart.length;
  });

  let warnObs = new Observer( (id) => {
    console.warn('WARN:', id);
  })

  observable.addObserver( basketObs );
  observable.addObserver( serverObs );
  observable.addObserver( iconObs );
  observable.addObserver( warnObs );

  // Render Data - - - - - - - - - - - -
  let Cart = [];
  let products__row = document.getElementById('products__row');

  function renderBasket(){
    let cartElem = document.getElementById('cart');
    let message;
        if( Cart.length === 0 ){
          message = 'У вас в корзине пусто';
        } else {
          let Sum = Cart.reduce( (prev, current) => {
            return prev += Number(current.price);
          }, 0);
          message = `У вас в корзине ${Cart.length} товаров, на сумму: ${Sum} грн.`;
        }
        cartElem.innerHTML = `<h2>${message}</h2><ol></ol>`;

        let ol = cartElem.querySelector('ol');
        Cart.map( item => {
          let li = document.createElement('li');
              li.innerText = `${item.name} (${item.price} грн.)`;
              ol.appendChild(li);
        });
  }

  Products.map( item => {
    let product = document.createElement('div');
        product.className = "product";
        product.innerHTML =
        `<div class="product__image">
            <img src="${item.imageLink}"/>
          </div>
          <div class="product__name">${item.name}</div>
          <div class="product__price">${item.price} грн.</div>
          <div class="product__action">
            <button class="product__buy" data-id=${item.id}> Купить </button>
          </div>`;
        let buyButton = product.querySelector('.product__buy');
            buyButton.addEventListener('click', (e) => {
              let id = e.target.dataset.id;
              observable.sendMessage(id);
            });
        products__row.appendChild(product);
  });

  renderBasket();
};

export default Demo2;
