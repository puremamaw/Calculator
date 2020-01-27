document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        initialize();
    }
};

function initialize() {

    var btnNumber = [];
    btnNumber[0] = document.querySelector("#zeroBtn");
    btnNumber[1] = document.querySelector("#oneBtn");
    btnNumber[2] = document.querySelector("#twoBtn");
    btnNumber[3] = document.querySelector("#threeBtn");
    btnNumber[4] = document.querySelector("#fourBtn");
    btnNumber[5] = document.querySelector("#fiveBtn");
    btnNumber[6] = document.querySelector("#sixBtn");
    btnNumber[7] = document.querySelector("#sevenBtn");
    btnNumber[8] = document.querySelector("#eightBtn");
    btnNumber[9] = document.querySelector("#nineBtn");

    var btnOperation = [];
    btnOperation[0] = document.querySelector("#addBtn");
    btnOperation[1] = document.querySelector("#subtractBtn");
    btnOperation[2] = document.querySelector("#multiplyBtn");
    btnOperation[3] = document.querySelector("#divideBtn");
    btnOperation[4] = document.querySelector("#clearBtn");
    btnOperation[5] = document.querySelector("#equalsBtn");
    btnOperation[6] = document.querySelector("#backBtn");

    querySelectorOnClick(btnNumber, btnOperation);
    clear();
}


function querySelectorOnClick(btnNumber, btnOperation) {

    var p = document.querySelector("#input");
    var h = document.querySelector("#historyTxtBox");
    var ans;

    
    btnNumber[0].onclick = function () {
        p.value += btnNumber[0].value;
    }
    btnNumber[1].onclick = function () {
        p.value += btnNumber[1].value;
    }
    btnNumber[2].onclick = function () {
        p.value += btnNumber[2].value;
    }
    btnNumber[3].onclick = function () {
        p.value += btnNumber[3].value;
    }
    btnNumber[4].onclick = function () {
        p.value += btnNumber[4].value;
    }
    btnNumber[5].onclick = function () {
        p.value += btnNumber[5].value;
    }
    btnNumber[6].onclick = function () {
        p.value += btnNumber[6].value;
    }
    btnNumber[7].onclick = function () {
        p.value += btnNumber[7].value;
    }
    btnNumber[8].onclick = function () {
        p.value += btnNumber[8].value;
    }
    btnNumber[9].onclick = function () {
        p.value += btnNumber[9].value;
    }

    btnOperation[0].onclick = function () {
        p.value += btnOperation[0].value;
    }

    btnOperation[1].onclick = function () {
        p.value += btnOperation[1].value;
    }

    btnOperation[2].onclick = function () {
        p.value += btnOperation[2].value;
    }

    btnOperation[3].onclick = function () {
        p.value += btnOperation[3].value;
    }

    btnOperation[4].onclick = function () {
        p.value = "";
    }

    btnOperation[5].onclick = function () {

        var holder = p.value;

        ans = (+eval(p.value));
        p.value = ans;  

        if(isNaN(parseInt(holder)))
            holder += "";
        else
            h.value += holder + '=' + ans + '\n';
    }

    btnOperation[6].onclick = function () {
        var x = p.value;
        if (x.length > 0) {
            x = x.substring(0, x.length - 1);
            p.value = x;
        }
    }
}

function clear() {
    var h = document.querySelector("#historyTxtBox");
    var bc = document.querySelector("#clearHistoryBtn");
    bc.onclick = function () {
        h.value = "";
    }
}



