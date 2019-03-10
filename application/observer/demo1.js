import { Observable, Observer } from './Observer';

const Demo1 = () => {
  console.log( 'DEMO 1 ONLINE');
  let observable = new Observable();
  let obs1 = new Observer( (msg) => console.log(msg));
  let obs2 = new Observer( (msg) => console.warn(msg));
  let obs3 = new Observer( (msg) => console.error(msg));

  observable.addObserver( obs1 );
  observable.addObserver( obs2 );
  observable.addObserver( obs3 );

  // console.log( observable );
  observable.sendMessage('hello');
  //  Проверим абстрактно как оно работает:
  setTimeout(
    ()=>{
      // оправим сообщение, с текущей датой:
      observable.sendMessage('Now is' + new Date());
    }, 2000
  );
};

export default Demo1;
