const input = document.getElementById("input");
const diamond = document.getElementById("diamond");

function draw(inp) {
  if (inp) {
    let result = "";
    let end = inp.charCodeAt(0);

    if (end < 65 || end > 122 || (end >= 91 && end <= 96)) {
      return null;
    }

    let start = end >= 97 ? 97 : 65;
    let k = (end - start) * 2 + 1;
    let p1 = end - start;
    let p2 = p1;

    //rysowanie do polowy
    for (let i = start; i <= end; i++) {
      for (let j = 0; j < k; j++) {
        if (j == p1 || j == p2) {
          result += String.fromCharCode(i);
        } else {
          result += "_";
        }
      }

      p1--;
      p2++;
      result += "<br>";
    }

    end--;
    p1 += 2;
    p2 -= 2;

    for (let i = end; i >= start; i--) {
      for (let j = 0; j < k; j++) {
        if (j == p1 || j == p2) {
          result += String.fromCharCode(i);
        } else {
          result += "_";
        }
      }

      p1++;
      p2--;
      result += "<br>";
    }

    return result;
  } else {
    return null;
  }
}

input.onkeyup = function () {
  if (/^([a-z]|[A-Z])$/.test(input.value)) {
    input.style.border = "1px solid black";
    diamond.innerHTML = draw(input.value);
  } else {
    input.style.border = "1px solid red";
    diamond.innerHTML = "";
  }
};
