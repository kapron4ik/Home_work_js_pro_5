/*
  Задание:  Открыть файл task1.html в папке паблик и настроить светофоры в
            соответсвии с правилавми ниже:

  1. Написать кастомные события которые будут менять статус светофора:
  - start: включает зеленый свет
  - stop: включает красный свет
  - night: включает желтый свет, который моргает с интервалом в 1с.
  И зарегистрировать каждое через addEventListener на каждом из светофоров.

  2.  Сразу после загрузки на каждом светофоре вызывать событие night, для того,
      чтобы включить режим "нерегулируемого перекрестка" (моргающий желтый).

  3.  По клику на любой из светофоров нунжо включать на нем поочередно красный (не первый клик)
      или зеленый (на второй клик) цвет соотвественно.
      Действие нужно выполнить только диспатча событие зарегистрированое в пункте 1.

  4.  + Бонус: На кнопку "Start Night" повесить сброс всех светофоров с их текущего
      статуса, на мигающий желтые.
      Двойной, тройной и более клики на кнопку не должны вызывать повторную
      инициализацию инвервала.

*/

const CustomEvents = () => {


    let start = new Event ('color');
    let night = new Event ('night');

    let myElements = [].slice.call(document.getElementsByClassName('trafficLight'));
    myElements.map(key => {
        key.addEventListener('color', function(e) {
            let circle = key.getElementsByClassName('trafficLight__circle');
            clearInterval(myInterval);
            if (circle[0].style.backgroundColor == '' && circle[2].style.backgroundColor == ''){
                circle[0].style.backgroundColor = 'red'; 
            } else if (circle[0].style.backgroundColor == 'red'){
                circle[2].style.backgroundColor = 'green';
                circle[0].style.backgroundColor = ''
            } else { 
                circle[0].style.backgroundColor = 'red';
                circle[2].style.backgroundColor = '';
            }
        });

        key.addEventListener('click', function(){
            key.dispatchEvent(start);
        });

        key.addEventListener('night', function(e) {
            let circle = key.getElementsByClassName('trafficLight__circle');
            circle[0].style.backgroundColor = '';
            circle[2].style.backgroundColor = '';
            myInterval
        });
    
        document.addEventListener ('DOMContentLoaded', function(){
            document.dispatchEvent(night);
        });

        const myInterval = setInterval(function(){
            let circle = key.getElementsByClassName('trafficLight__circle');
            circle[1].style.backgroundColor = 'orange';
            setTimeout(function(){circle[1].style.backgroundColor = ''},1000)
        }, 2000);

    })

    // let startNight = document.getElementById('Do');
    // startNight.addEventListener ('click', function(){
    //     let myElements = [].slice.call(document.getElementsByClassName('trafficLight'));
    //     myElements.map(key => {
    //         let circle = key.getElementsByClassName('trafficLight__circle');
    //         circle[0].style.backgroundColor = '';
    //         circle[2].style.backgroundColor = '';
    //         const myInterval = setInterval(function(){
    //             let circle = key.getElementsByClassName('trafficLight__circle');
    //             circle[1].style.backgroundColor = 'orange';
    //             setTimeout(function(){circle[1].style.backgroundColor = ''},1000)
    //         }, 2000);
    //         myInterval  
    //     })
    // });

}; // custom events end!

export default CustomEvents;
