
const CustomEvents = () => {

  /*
    JS позволяет нам создавать собственные события.
    Синтаксис:
      Обязательное только имя события:
      new Event('eventName', {bubbles: true, cancelable: false});

      Кастом ивент еще имеет доп. поле "detail", через которое можно
      передать данные:
      new CustomEvent("userLogin", { detail: {...} });

  */

  // let itea_event = new Event('build');

  // let itea_customEvent = new CustomEvent("userLogin", {
  //   detail: {
  //     username: "davidwalsh",
  //     itea: {
  //       woohoo: true
  //     }
  //   }
  // });


  // console.log( 'itea_event', itea_event, 'itea_customEvent', itea_customEvent)

  // Абстрактный пример:
  let myElement = document.createElement('button');
      myElement.innerText = 'Custom Event!';
      myElement.addEventListener("userLogin", function(e) {
        console.info("Event is: ", e);
        console.info("Custom data is: ", e.detail);
        myElement.style.backgroundColor = 'blue';
      });
  
      myElement.addEventListener('click', function(){
        myElement.dispatchEvent(itea_customEvent);
      });
      document.body.appendChild(myElement);

  // Реальный пример:

  // let message__container = document.getElementById('message__container');
  // let messageAuthor = document.getElementById('messageAuthor');
  // let messageText = document.getElementById('messageText');
  // let messageSendBtn = document.getElementById('messageSendBtn');

  //     messageSendBtn.addEventListener('click', function(){
  //       let author = messageAuthor.value;
  //       let text = messageText.value;
  //       let MessageSendEvent = new CustomEvent("messageSend", {
  //         detail: {
  //           author: author,
  //           message: text
  //         }
  //       });
  //       message__container.dispatchEvent(MessageSendEvent);
  //     });

  //     message__container.addEventListener('messageSend', function(event){
  //       let { author, message } = event.detail;
  //       console.log(event);
  //       let messageNode = document.createElement('div');
  //           messageNode.innerHTML = `<div class="message"><b>${author}:</b> ${message}</div>`;
  //       message__container.appendChild(messageNode);
  //     });

}; // custom events end!

export default CustomEvents;
