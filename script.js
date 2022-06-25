let math = document.querySelector("#math");
let check = document.querySelector(".check");
let operations = document.querySelectorAll("[data-operation]");
let numbers = document.querySelectorAll("[data-number]");
let remove = document.querySelector("[data-delete]");
let clear = document.querySelector("[data-clear]");
let sqrt = document.querySelector("[data-sqrt]");
let getResult = document.querySelector("[data-get-result]");
let prevRes = document.querySelector("#previous-result");
let lastEl = "";

// clearing the result box
clear.addEventListener("click", () => {
  math.innerText = "";
  prevRes.innerText = "0";
});

// deleting items in the result box
remove.addEventListener("click", () => {
  if (math.innerText !== "") {
    let mathArr = math.innerText.split("");
    mathArr.pop();
    math.innerText = mathArr.join("");
  }
});

// typing operations
operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    if(math.innetText !== ''){
    let mathArr = math.innerText.split("");
    lastEl = mathArr[mathArr.length - 1];
    if (
      (lastEl === "+" && operation.innerText === "+") ||
      (lastEl === "-" && operation.innerText === "-") ||
      (lastEl === "*" && operation.innerText === "*") ||
      (lastEl === "/" && operation.innerText === "/") ||
      (lastEl === "%" && operation.innerText === "%")
    ) {
      math.innerText = mathArr.join("");
    } else {
      math.innerText += operation.innerText;
      lastEl = operation.innerText;
    }
    }
  });
});

// typing numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    math.innerText += number.innerText;
    lastEl = number.innerText;
  });
});

// calculating the result
getResult.addEventListener("click", () => {
  if (
    lastEl === "+" ||
    lastEl === "-" ||
    lastEl === "*" ||
    lastEl === "/" ||
    lastEl === "%" ||
    lastEl === "."
  ) {
    check.innerHTML = "&#33; Wrong Expression";
  } else {
    check.innerHTML = "";
    prevRes.innerText = eval(math.innerText).toLocaleString("en-US");
    math.innerText = "";
  }
});

// square root
sqrt.addEventListener("click", () => {
  prevRes.innerText = Math.sqrt(math.innerText).toLocaleString("en-US");
});
