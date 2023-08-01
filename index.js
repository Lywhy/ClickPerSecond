// Функция обновления таймера на странице
let timeLeft = 10
function updateTimer() {
    document.querySelector(".timer").textContent = timeLeft + ' s';
}

// Функция обновления счета на странице
let score = 0
    function updateScore() {
    document.querySelector(".score").textContent = score;
}

// Функция для увеличения счета при клике на кнопку
function increaseScore() {
    score++;
    let cps = Math.round(score/10)
    updateScore();
    yourCps(cps)
}

// Функция для отображения вашего cps и информации об этом
function yourCps(cps){
    document.querySelector('.cps').textContent = `${cps}`
    if(cps <= 6){
        document.querySelector('.you').textContent = "You're slow"
        document.querySelector("img").src="https://fikiwiki.com/uploads/posts/2022-02/1644874640_40-fikiwiki-com-p-kartinki-mne-nichego-ne-nado-47.jpg";
    } else if(cps > 6 && cps <= 8){
        document.querySelector('.you').textContent = "You're fast."
        document.querySelector("img").src="https://i.pinimg.com/originals/23/fa/0f/23fa0f5850e18494ff2258ac5bd20d18.jpg";
    } else if(cps > 8 && cps <= 11){
        document.querySelector('.you').textContent = "You're very fast."
        document.querySelector("img").src="https://top10unknown.com/wp-content/uploads/2019/02/6_usain_bolt.jpg";
    } else if(cps > 11){
        document.querySelector('.you').textContent = "You're a minecrafter."
        document.querySelector("img").src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614848039_9-p-foni-minecraft-14.jpg";
    }
}

// Функция для запуска таймера
let timerInterval;
function startTimer() {
    if (timerInterval) {
      // Если таймер уже запущен, просто выходим из функции
      return;
    }
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer(); 
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          resetGame();
          congratulations()
        }
      }, 1000);
}

function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      resetGame();
    }
}

function resetGame() {
    timeLeft = 10;
    score = 0;
    updateTimer();
    updateScore();
    timerInterval = null;
    document.querySelector('.start').innerHTML = 'Start'
    document.querySelector('.start').style.width = '496px'
    
    document.querySelector('.stop').style.display = 'none';
}

function startView(){
    document.querySelector('.start').innerHTML = 'Click'
    document.querySelector('.start').style.marginRight = '40px'
    document.querySelector('.start').style.width = '100%'

    document.querySelector('.stop').style.display = 'block';
    document.querySelector('.stop').style.width = '15%%'
}

function endView(){
    document.querySelector('.start').innerHTML = 'Start'
    document.querySelector('.start').style.marginRight = '0px'
    document.querySelector('.start').style.width = '496px'

    document.querySelector('.stop').style.display = 'none';
}

// Отрисовка информации о кликах после истечения времени
function congratulations(){
    document.querySelector('.congratulations').style.display = 'block';
    document.querySelector('.content').style.display = 'none';
}

// Запусе основного функционала
document.querySelector('.start').addEventListener('click', function() {
    increaseScore();
    startTimer();
    startView()
});

// Назначение обработчика события клика на кнопку "Stop Timer"
document.querySelector('.stop').addEventListener('click', function() {
    stopTimer();
    endView()
});

// Кнопка для закрытия информации о кликах
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.congratulations').style.display = 'none';
    document.querySelector('.content').style.display = 'flex';
    endView()
})

updateTimer();
updateScore();