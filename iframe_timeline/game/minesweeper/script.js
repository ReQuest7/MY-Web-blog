var start = document.querySelector('#start');
var table = document.querySelector('#mineTable')
var mineDifficulty = 0;
var bomb = 0;
var bombId = [];
var finishCount = 0;
var checkBomb = 0;
var checkAll = 0;

var num;
num = Number(num);


start.onclick = function setGame() {

    num = parseInt(document.getElementById("size").value);
  
    easyTable()
    makeButton()
    time()

        
}


function easyTable() {
    
    var mTable = '';




    var tableCnt = -1;
    
    for( var i = 0; i <= num * num - 1; i++) {
        tableCnt++
        tableCnt %= num;
        if( tableCnt == 0 ) {
            mTable += "<tr>" + selectEasyBomb(i)
        }
        else if ( tableCnt == num - 1) {
            mTable += selectEasyBomb(i) + "</tr>"
        }
        else{
            mTable += selectEasyBomb(i)
        }
    }

  
    mineTable.innerHTML += mTable;
    
    gameBoard.innerHTML = '';

    flag(i)
}

function selectEasyBomb(i) {
    
    bomb = Math.floor(Math.random() * 5);
    
    if(bomb == 0) {
        bombId.push(i);
        checkBomb++
        console.log(checkBomb + "checkBomb")
        return "<td id='cell" + i + "'>" + "</td>"
    }
    else {
        return "<td id='cell" + i + "'>" + "</td>"
    }
}

function nearBombNumber(i) {

    var bombNum = document.getElementById("cell" + i);

    var bombcnt = 0;

    for( var j = 0; j < bombId.length; j++) {
        if( bombId[j] == i ) {
            bombcnt = '💣';
            break;
        }
        else {

            if ( i == 0 ) {
                if( bombId[j] == i + 1) {
                    bombcnt++
                }
                if( bombId[j] == i + num) {
                    bombcnt++
                }
                if( bombId[j] == i + (num + 1) ) {
                    bombcnt++
                }

            }

            else if( i == num - 1 ) {
                if( bombId[j] == i - 1) {
                    bombcnt++
                }
                if( bombId[j] == i + (num - 1)) {
                    bombcnt++
                }
                if( bombId[j] == i + num ) {
                    bombcnt++
                }
            }

            else if( i == num * (num - 1) ) {
                if( bombId[j] == i - num) {
                    bombcnt++
                }
                if( bombId[j] == i - (num - 1)) {
                    bombcnt++
                }
                if( bombId[j] == i + 1) {
                    bombcnt++
                }
            }

            else if( i == num * num - 1 ) {
                if( bombId[j] == i - 1) {
                    bombcnt++
                }
                if( bombId[j] == i - num) {
                    bombcnt++
                }
                if( bombId[j] == i - (num + 1) ) {
                    bombcnt++
                }
            }
            
            else if( i < num ) {
                if( bombId[j] == i - 1) {
                    bombcnt++
                }
                if( bombId [j] == i + (num - 1)){
                    bombcnt++
                }    
                if( bombId[j] == i + num) {
                    bombcnt++
                }
                if( bombId[j] == i + (num + 1)) {
                    bombcnt++
                }
                if( bombId[j] == i + 1) {
                    bombcnt++
                }
            }
            
            else if( i % num == 0 ) {
                if( bombId[j] == i - num) {
                    bombcnt++
                }
                if( bombId[j] == i - (num - 1)) {
                    bombcnt++
                }
                if( bombId[j] == i + 1) {
                    bombcnt++
                }
                if( bombId[j] == i + num) {
                    bombcnt++
                }
                if( bombId[j] == i +( num + 1)) {
                    bombcnt++
                }
            }

            else if( i % num == num - 1 ) {
                if( bombId[j] == i - num) {
                    bombcnt++
                }
                if( bombId[j] == i - (num + 1)) {
                    bombcnt++
                }
                if( bombId[j] == i - 1) {
                    bombcnt++
                }
                if( bombId[j] == i + (num - 1)) {
                    bombcnt++
                }
                if( bombId[j] == i + num) {
                    bombcnt++
                }
            }

            else if( i > num * (num - 1) && i < num * num) {
                if( bombId[j] == i - 1) {
                    bombcnt++
                }
                if( bombId[j] == i - (num + 1)) {
                    bombcnt++
                }
                if( bombId[j] == i - num) {
                    bombcnt++
                }
                if( bombId[j] == i - (num - 1)) {
                    bombcnt++
                }
                if( bombId[j] == i + 1) {
                    bombcnt++
                }
            }

            else {
                if( bombId[j] == i - (num + 1)) {
                    bombcnt++
                }
                if( bombId[j] == i - num) {
                    bombcnt++
                }
                if( bombId[j] == i - (num - 1)) {
                    bombcnt++
                }
                if( bombId[j] == i - 1) {
                    bombcnt++
                }
                if( bombId[j] == i + 1) {
                    bombcnt++
                }
                if( bombId[j] == i + (num - 1)) {
                    bombcnt++
                }
                if( bombId[j] == i + num) {
                    bombcnt++
                }
                if( bombId[j] == i + (num + 1)) {
                    bombcnt++
                }
            }
        }
    }
    

        
    bombNum.innerText = bombcnt;

    bombcnt = 0;
    
    
    openTable(i)
    finish()

    
}

function makeButton() {

    for( var bid = 0; bid <= num * num - 1; bid++) {
        var mButton = document.getElementById("cell" + bid);
        

        var button = '';

                

        button += "<button  id='button" + bid + "' onclick='flagOn(" + bid + ")'>" + "</button>"
            
            
        mButton.innerHTML = button;
        
    }
    
}   




function openTable(i) {

  
    for( var k = 0; k <= bombId.length; k++  ) {
        if( i == bombId[k]) {
            clearInterval(start)
            table.innerHTML = '';

            alert("boom!")
        }

    }

    
       
    
                
    
   

}








var start;
var etime;

    // timer
   

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    start = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        etime = display.textContent = minutes + ":" + seconds;

        if (++timer < 0) {
            timer = duration;
        }
    }, 1000);
}

 function time() {
    var fiveMinutes = 0,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


//flag

var setFlag = document.querySelector('#flagOn');

var fButton = "";


function flag(i)  {
    
    fButton += "<input type='checkbox' name='flagButton' id='flagCheckbox'><label for='flagCheckbox'>Flag</label>"  




    setFlag.innerHTML = fButton;

}



function flagOn(i) {    
   var checkFlag = document.getElementsByName("flagButton")[0].checked;
   if(checkFlag) {
    sFlag(i);
   }
   else open(i);
}

function sFlag(i) {


    var setflag = document.getElementById("button" + i);
    setflag.onclick = settingFlag(i)
    
    

}

function open(i) {
    var b = document.getElementById("button" + i);
    b.onclick = nearBombNumber(i)
    checkAll++
    console.log(checkAll + "checkAll")
}

function settingFlag(_i) {
    var settflag = document.getElementById("button" + _i);

    settflag.innerHTML = '🚩'
    finishCount++
    checkAll++
    console.log(checkAll + "checkAll")
    console.log(finishCount + "fin")
}

function finish() {
    if( checkAll == Number(num * num - 1)){
        if( checkBomb == finishCount) {
            clearInterval(start)
            alert("축하드립니다! " + etime + "동안 폭탄 해체에 성공하셨습니다.");
        }
    }
}



