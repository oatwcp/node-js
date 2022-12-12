console.clear();

const getNumbers = (($) => {
  const nums = [...$("num-input")];

  return () => {
    return nums.map((n) => n.value);
  };
})(document.getElementsByClassName.bind(document));

const target = document.getElementById("target");
const equation = document.getElementById("equation");
const result = document.getElementById("result");

document.getElementById("solveBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const nums = getNumbers();

  if (nums.some((n) => !n.length)) {
    alert("Please enter all numbers.");
    return;
  }

  const targetNum = target.value;

  if (!targetNum.length) {
    alert("Please enter a target number.");
    return;
  }

  equation.textContent = "Solving...";

  const get24Proc = () => {
    axios
      .post("https://node-js.herokuapp.com/get24Proc", {
        targetNum: "24",
        nums: nums,
      })
      .then((resp) => {
        console.log("resp: ", resp.data);
        setTimeout(() => {
          if (resp.data) {
            equation.textContent = resp.data + " = " + targetNum;
            result.textContent = "YES";
          } else {
            equation.textContent = "";
            result.textContent = "NO";
          }
        }, 250);
      });
  };
  get24Proc();
});
