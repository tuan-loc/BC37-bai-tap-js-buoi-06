// Bài tập 1:
function minNumber() {
  var n = 1;
  var sum = 0;
  var count = 0;

  while (sum < 10000) {
    sum += n;
    count = n;
    n++;
  }

  var div = document.createElement("DIV");
  div.innerHTML = "Số nguyên dương nhỏ nhất: " + count;
  div.style.margin = "10px 0";
  document.getElementById("bai-01").appendChild(div);
}

// Bài tập 2:
function sum() {
  var x = +document.getElementById("numberX").value;
  var n = +document.getElementById("numberN").value;
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum += x ** i;
  }

  var div = document.createElement("DIV");
  div.innerHTML = "Tổng: " + sum;
  div.style.margin = "10px 0";
  document.getElementById("bai-02").appendChild(div);
}

// Bài tập 3:
function calcFactorial() {
  var factorialNumberN = +document.getElementById("factorialNumberN").value;
  var factorial = 1;

  for (var i = 1; i <= factorialNumberN; i++) {
    factorial *= i;
  }

  var div = document.createElement("DIV");
  div.innerHTML = "Kết quả: " + factorial;
  div.style.margin = "10px 0";
  document.getElementById("bai-03").appendChild(div);
}

// Bài tập 4:
function createDiv() {
  for (var i = 1; i <= 10; i++) {
    var div = document.createElement("DIV");
    div.style.width = "250px";
    div.style.height = "50px";
    div.style.textAlign = "center";
    div.style.lineHeight = "50px";
    div.style.color = "#fff";

    if (i % 2 === 0) {
      div.style.backgroundColor = "red";
      div.innerHTML = "Div chẵn " + i;
    } else {
      div.style.backgroundColor = "blue";
      div.innerHTML = "Div lẻ " + i;
    }
    document.getElementById("bai-04").appendChild(div);
  }
}
