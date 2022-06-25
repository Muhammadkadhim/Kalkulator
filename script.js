let expression = document.querySelector("#expression");
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
  expression.innerText = "";
  prevRes.innerText = "0";
});

// deleting items in the result box
remove.addEventListener("click", () => {
  if (expression.innerText !== "") {
    let mathArr = expression.innerText.split("");
    mathArr.pop();
    expression.innerText = mathArr.join("");
  }
});

// typing numbers
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    expression.innerText += number.innerText;
    lastEl = number.innerText;
  });
});

// typing operations
operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    let expressionArr = expression.innerText.split("");
    lastEl = expressionArr[expressionArr.length - 1];
    if (expression.innerText.split("").length == 0) {
      return;
    } else {
      if (
        (lastEl === "+" && operation.innerText === "+") ||
        (lastEl === "-" && operation.innerText === "-") ||
        (lastEl === "*" && operation.innerText === "*") ||
        (lastEl === "/" && operation.innerText === "/") ||
        (lastEl === "%" && operation.innerText === "%") ||
        (lastEl === "*" && operation.innerText === "/") ||
        (lastEl === "/" && operation.innerText === "*") ||
        (lastEl === "%" && operation.innerText === "*") ||
        (lastEl === "%" && operation.innerText === "/") ||
        (lastEl === "*" && operation.innerText === "%") ||
        (lastEl === "/" && operation.innerText === "%")
      ) {
        expression.innerText = expressionArr.join("");
      } else {
        expression.innerText += operation.innerText;
        lastEl = operation.innerText;
      }
    }
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
    prevRes.innerText = eval(expression.innerText).toLocaleString("en-US");
    expression.innerText = "";
  }
});

// square root
sqrt.addEventListener("click", () => {
  if (expression.innerText !== "") {
    prevRes.innerText = Math.sqrt(expression.innerText).toLocaleString("en-US");
    expression.innerText = "";
  } else {
    prevRes.innerText = Math.sqrt(
      prevRes.innerText.replaceAll(",", "")
    ).toLocaleString("es-US");
  }
});
