import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = function (data) {
  localStorage.setItem(
    TIME_KEY,
    JSON.stringify(data.seconds)
  );

  let time = Number(localStorage.getItem(TIME_KEY));
  console.log(time);
};
player.on('timeupdate', throttle(currentTime, 1000));

player
  .setCurrentTime(localStorage.getItem(TIME_KEY));

