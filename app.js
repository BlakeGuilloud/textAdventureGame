var fighter = new Object();
fighter.kang = "Liu Kang";
fighter.sub = "Sub Zero";
fighter.baraka = "Baraka";

function home(){
  document.getElementById('bigLiu').style.display = "none";
  document.getElementById('bridgeR').style.display = "none";
  console.log('Liu Kang')
};
function appendLiu(){
  document.getElementById('bigLiu').style.display = "block";
  document.getElementById('bridgeR').style.display = "none";
  console.log('Liu Kang')
};

function bridgeR(){
  document.getElementById('bridgeR').style.display = "block";
  document.getElementById('open').style.display = "none";
};

function battleQuan(){
  document.getElementById('battleQuan').style.display = "block";
  document.getElementById('open').style.display = "none";
  document.getElementById('bridgeR').style.display = "none";
};

function boatR(){
  document.getElementById('boatR').style.display = "block";
  document.getElementById('open').style.display = "none";
  document.getElementById('bridgeR').style.display = "none";
};

function kitana(){
  document.getElementById('kitana').style.display = "block";
  document.getElementById('boatR').style.display = "none";
  document.getElementById('open').style.display = "none";
  document.getElementById('bridgeR').style.display = "none";
  document.getElementById('kintaro').style.display = "none";
  document.getElementById('battleQuan').style.display = "none";
};

function kintaro(){
  document.getElementById('kintaro').style.display = "block";
  document.getElementById('kitana').style.display = "none";
  document.getElementById('boatR').style.display = "none";
  document.getElementById('open').style.display = "none";
  document.getElementById('bridgeR').style.display = "none";
  document.getElementById('battleQuan').style.display = "none";
};

function purg(){
  if (purg){
    alert('NOPE');
  }
};










function appendSub(){



  console.log('SubZero')
}

function appendBaraka(){
  console.log('Baraka')
}
