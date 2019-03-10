/*
  Задание: Модуль создания плейлиста, используя паттерн Обсервер.

  У вас есть данные о исполнителях и песнях. Задание делится на три модуля:
    1. Список исполнителей и песен (Находится слева) - отуда можно включить
    песню в исполнение иди добавить в плейлист.
    Если песня уже есть в плейлисте, дважды добавить её нельзя.

    2. Плейлист (Находится справа) - список выбраных песен, песню можно удалить,
    или запустить в исполнение. Внизу списка должен выводиться блок, в котором
    пишет суммарное время проигрывания всех песен в плейлисте.

    3. Отображает песню которая проигрывается.

    4. + Бонус: Сделать прогресс пар того как проигрывается песня
    с возможностью его остановки.
*/

const MusicList = [
  {
    title: 'Rammstain',
    songs: [
      {
        id: 1,
        name: 'Du Hast',
        time: [3, 12]
      },
      {
        id: 2,
        name: 'Ich Will',
        time: [5, 1]
      },
      {
        id: 3,
        name: 'Mutter',
        time: [4, 15]
      },
      {
        id: 4,
        name: 'Ich tu dir weh',
        time: [5, 13]
      },
      {
        id: 5,
        name: 'Rammstain',
        time: [3, 64]
      }
    ]
  },
  {
    title: 'System of a Down',
    songs: [
      {
        id: 6,
        name: 'Toxicity',
        time: [4, 22]
      },
      {
        id: 7,
        name: 'Sugar',
        time: [2, 44]
      },
      {
        id: 8,
        name: 'Lonely Day',
        time: [3, 19]
      },
      {
        id: 9,
        name: 'Lost in Hollywood',
        time: [5, 9]
      },
      {
        id: 10,
        name: 'Chop Suey!',
        time: [2, 57]
      }
    ]
  },
  {
    title: 'Green Day',
    songs: [
      {
        id: 11,
        name: '21 Guns',
        time: [4, 16]
      },
      {
        id: 12,
        name: 'Boulevard of broken dreams!',
        time: [6, 37]
      },
      {
        id: 13,
        name: 'Basket Case!',
        time: [3, 21]
      },
      {
        id: 14,
        name: 'Know Your Enemy',
        time: [4, 11]
      }
    ]
  },
  {
    title: 'Linkin Park',
    songs: [
      {
        id: 15,
        name: 'Numb',
        time: [3, 11]
      },
      {
        id: 16,
        name: 'New Divide',
        time: [4, 41]
      },
      {
        id: 17,
        name: 'Breaking the Habit',
        time: [4, 1]
      },
      {
        id: 18,
        name: 'Faint',
        time: [3, 29]
      }
    ]
  }
]

import { Observable, Observer } from '../application/observer/Observer';

export const MusicBox = () => {
  const MusicBox = document.getElementById('MusicBox');
  MusicList.map(Artist => {
    let node = document.createElement('div');
    node.className = "node";
    node.setAttribute('data-title', `${Artist.title}`)
    const nodeSongs = document.createElement('ul');
    node.innerHTML = `<h4>${Artist.title}</h4>`;
    MusicBox.appendChild(node);
    node.appendChild(nodeSongs);
    Artist.songs.map(song => {
      let nodeSong = document.createElement('li');
      nodeSong.setAttribute('data-id', `${song.id}`)
      nodeSong.className = "song";
      nodeSong.innerHTML = `
      <span>${song.name}</span>
      <button class="play" style="cursor: pointer">Play</button>
      <button class="playList" style="cursor: pointer">add to playlist</button>
      `;
      let playListBtn = nodeSong.querySelector('.playList');
      playListBtn.addEventListener('click', (e) => {
        let id = e.target.closest('.song').dataset.id;
        console.log(id);
        observable.sendMessage(id);
      });
      let playBtn = nodeSong.querySelector('.play');
      playBtn.addEventListener('click', plays)
      nodeSongs.appendChild(nodeSong);
    })
  });
}

let observable = new Observable();

let allMusic = [];
MusicList.map(artist => artist.songs.map(item => {
  let song = {
    id: item.id,
    artist: artist.title,
    name: item.name,
    time: item.time
  };
  allMusic.push(song);
  song = '';
}));
console.log(allMusic);

let PlayList = [];

let playListObs = new Observer((id) => {
  let filtredToMusic = allMusic.filter(key => Number(key.id) === Number(id));
  console.log('filtredToMusic', filtredToMusic)
  if (PlayList.filter(key => Number(key.id) === Number(id)) != '') {
    alert('Эта дорожка уже есть в плей листе')
  }
  else {
    PlayList.push(filtredToMusic[0]);
  }
  renderPlayList();
});

observable.addObserver(playListObs);

function renderPlayList() {
  let playListElem = document.getElementById('MusicPlayList');
  let message;
  if (PlayList.length === 0) {
    message = 'В плей листе пусто';
  } else {
    let SumMin = PlayList.reduce((prev, current) => {
      return prev += current.time[0];
    }, 0);
    let SumSec = PlayList.reduce((prev, current) => {
      return prev += current.time[1];
    }, 0);
    let minutes = SumMin + Math.floor(SumSec / 60);
    let seconds = SumSec - Math.floor(SumSec / 60) * 60;
    console.log('SumMin', SumMin);
    console.log('SumSec', SumSec);
    console.log('minutes', minutes);
    console.log('seconds', seconds);
    message = `В плей листе ${PlayList.length} песен, продолжительностью ${minutes} минут ${seconds} секунд `;

  }
  playListElem.innerHTML = `<ol></ol><h4>${message}</h4>`;

  let ol = playListElem.querySelector('ol');
  ol.className = "playListOl";
  PlayList.map(item => {
    let li = document.createElement('li');
    li.setAttribute('data-id', `${item.id}`);
    li.className = "song";
    li.innerHTML = `
            <span>${item.artist} - ${item.name} [${item.time}]</span>
            <button class="playLi" style="cursor: pointer">Play</button>
            <button class="remove" style="cursor: pointer">remove</button>
            `;
    let playBtn = li.querySelector('.playLi');
    playBtn.addEventListener('click', plays)
    let playDel = li.querySelector('.remove');
    playDel.addEventListener('click', remove)
    ol.appendChild(li);
  });
}

function plays(e) {
  let id = e.target.closest('.song').dataset.id;
  let filtredToMusic = allMusic.filter(key => Number(key.id) === Number(id));
  let songName = document.querySelector('.song__name');
  let songCreator = document.querySelector('.song__creator');
  let songDuration = document.querySelector('.song__duration');
  songName.innerHTML = `${filtredToMusic[0].name}`;
  songCreator.innerHTML = `${filtredToMusic[0].artist}`;
  songDuration.innerHTML = `${filtredToMusic[0].time}`;
}

function remove(e) {
  let id = e.target.closest('.song').dataset.id;
  let node = e.target.closest('.playListOl');
  node.removeChild(e.target.closest('.song'));
  PlayList.splice(PlayList.findIndex((item) => item.id === id), 1);
  console.log('PlayList', PlayList);
}


export default MusicBox;
