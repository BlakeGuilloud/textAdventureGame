var fighter = new Object();
fighter.kang = "Liu Kang";
fighter.sub = "Sub Zero";
fighter.baraka = "Baraka";

function home(){
  document.getElementById('bigLiu').style.display = "none";
  document.getElementById('bigSub').style.display = "none";

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



function homeS(){
  document.getElementById('bigSub').style.display = "none";
  console.log('Sub Zero')
};

function appendSub(){
  document.getElementById('bigSub').style.display = "block";
  document.getElementById('bridgeS').style.display = "none";
  document.getElementById('frozenLake').style.display = "none";
  document.getElementById('freeze').style.display = "none";
  document.getElementById('finishHim').style.display = "none";
  document.getElementById('continueS').style.display = "none";
  document.getElementById('attackS').style.display = "none";
  console.log('SubZero')
}

function bridgeS(){
  document.getElementById('bridgeS').style.display = "block";
  document.getElementById('openS').style.display = "none";
}

function frozenLake(){
  document.getElementById('frozenLake').style.display = "block";
  document.getElementById('bridgeS').style.display = "none";
  document.getElementById('openS').style.display = "none";
}

function freeze(){
  document.getElementById('freeze').style.display = "block";
  document.getElementById('bridgeS').style.display = "none";
}

function finishHim(){
  document.getElementById('finishHim').style.display = "block";
  document.getElementById('freeze').style.display = "none";
}

function continueS(){
  document.getElementById('continueS').style.display = "block";
  document.getElementById('freeze').style.display = "none";
}

function attackS() {
  document.getElementById('attackS').style.display = "block";
  document.getElementById('continueS').style.display = "none";
}



function appendBaraka(){
  console.log('Baraka')
}
