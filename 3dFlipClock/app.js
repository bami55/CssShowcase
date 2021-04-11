$('#time').val('5');

const setClock = time =>
  $('.clock').FlipClock(time, {
    countdown: true,
    clockFace: 'MinuteCounter'
  });

const getTimer = () => {
  const settingTime = $('#time').val();
  if (settingTime) {
    return settingTime * 60;
  } else {
    return 0;
  }
};

document.addEventListener('DOMContentLoaded', event => {
  setClock(getTimer());
});

$('#btnSetting').click(function(e) {
  setClock(getTimer());
});
