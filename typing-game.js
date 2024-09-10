let playerScore = 0;
let displayWord = '';
let displayRomaName = '';
let countDownMinute = 2;
let time =countDownMinute*60;
let timerInterval;


function createWordObject(word, romaName) {
  return {
    word: word,
    romaName: romaName
  };
}

const words = [
  createWordObject("りんご", "ringo"),
  createWordObject("みかん", "mikan"),
  createWordObject("ばなな", "banana"),
  createWordObject("たまねぎ", "tamanegi"),
  createWordObject("きゅうり", "kyuuri"),
  createWordObject("ドーナッツ", "do-nattu"),
  createWordObject("ペットボトル", "pettobotoru"),
  createWordObject("炊飯器", "suihanki"),
  createWordObject("アメリカ合衆国", "amerikagassyuukoku"),
  createWordObject("発光ダイオード", "hakkoudaio-do"),
  createWordObject("摘出手術", "tekisyutusyuzyutu"),
  createWordObject("ぼくドラえもん", "bokudoraemon"),
  createWordObject("しょうゆ", "shouyu"),
  createWordObject("こしょう", "koshou"),
  createWordObject("チョコレート", "chokore-to"),
  createWordObject("ソファー", "sofa"),
  createWordObject("洗濯機", "sentakuki"),
  createWordObject("冷蔵庫", "reizouko"),
  createWordObject("トースター", "to-suta-"),
  createWordObject("携帯電話", "keitaidenwa"),
  createWordObject("カメラ", "kamera"),
  createWordObject("充電器", "juudenki"),
  createWordObject("カップ", "kappu"),
  createWordObject("お茶", "ocha"),
  createWordObject("コーヒー", "ko-hi-"),
  createWordObject("新聞", "shinbun"),
  createWordObject("電池", "denchi"),
  createWordObject("水筒", "suitou"),
  createWordObject("傘", "kasa"),
  createWordObject("帽子", "boushi"),
  createWordObject("手袋", "tebukuro"),
  createWordObject("鉛筆", "enpitsu"),
  createWordObject("消しゴム", "keshigomu"),
  createWordObject("ノート", "no-to"),
  createWordObject("リモコン", "rimokon"),
  createWordObject("テレビ", "terebi"),
  createWordObject("コンピュータ", "konpyu-ta"),
  createWordObject("キーボード", "ki-bo-do"),
  createWordObject("マウス", "mausu"),
  createWordObject("イヤホン", "iyahon"),
  createWordObject("モニター", "monita-"),
  createWordObject("スピーカー", "supi-ka-"),
  createWordObject("時計", "tokei"),
  createWordObject("鏡", "kagami"),
  createWordObject("靴", "kutsu"),
  createWordObject("本", "hon"),
  createWordObject("椅子", "isu"),
  createWordObject("テーブル", "te-buru"),
  createWordObject("カーテン", "ka-ten")
];

function createNewQuestion (){
  const randomWordSelect = Math.floor(Math.random()*words.length);
  const displayRandomName= words[randomWordSelect];
  displayWord = displayRandomName.word;
  displayRomaName = displayRandomName.romaName;
}


function typingStart(){ 
  document.querySelector('.typing-name')
    .innerHTML=`タイピングしてね: [${displayWord} ] `;
  document.querySelector('.typing-roma-name')
    .innerHTML =`${displayRomaName}`
  document.querySelector('.player-score')
    .innerHTML=`スコア: ${playerScore}点`;
}

function startGame(){
  playerScore= 0;
  createNewQuestion ();
  typingStart();
  countDownTimer();
  document.querySelector('.input-word').disabled = false;
  document.querySelector('.input-word').focus();
  // focusはプレイヤーがいきなり文字入力ができるようにすることらしい
  clearInterval(timerInterval);
  timerInterval=setInterval(countDownTimer,1000);

}
function resetGame(){
  playerScore= 0;
  time = countDownMinute*60;
  clearInterval(timerInterval);
  document.querySelector('.typing-name')
    .innerHTML='';
  document.querySelector('.typing-roma-name')
    .innerHTML ='';
  document.querySelector('.player-score')
    .innerHTML='';
  document.querySelector('.text-repair')
    .innerHTML ='';
  document.querySelector('.input-word')
    .value='';
  document.querySelector('.input-word')
    .disabled = true;
  document.querySelector('.count-down-timer')
    .innerHTML ='';
}
function nextQuestion(){
  playerScore+=10;
  createNewQuestion ();
  typingStart();
}

function EnterKeyGo(event){
  if(event.key==='Enter')
    typingEnter();
}

function typingEnter(){
  let playerMove=document.querySelector('.input-word')
    .value ;
  if(playerMove===displayRomaName){
    nextQuestion();
    document.querySelector('.input-word')
    .value='';    
    document.querySelector('.text-repair')
      .innerHTML =``
  }else{
    document.querySelector('.text-repair')
      .innerHTML =`入力した単語と答えが一致しません。もう一度入力してください`
    document.querySelector('.input-word')
      .value='';  
  }
}


function countDownTimer(){
  let minutes= Math.floor(time/60);
  let seconds= time%60;

  if(seconds<10){
    seconds ='0'+seconds;
  }else{
    seconds =seconds
  }

  if(time>=0){
    document.querySelector('.count-down-timer')
      .innerHTML =`タイマー ${minutes} : ${seconds}`;
    time --;
  }else{
    alert(`時間切れです。得点は${playerScore}点です`);
    resetGame();
  }
  
}
