// 比較対象の配列
const names = ["たろう", "じろう", "はなこ", "ゆうこ"];

document
  .getElementById("checkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // ページリロード防止
    const result = document.getElementById("result");

    //自分のやり方
    result.innerText = "";
    // const input = document.getElementById("inputName").value.trim();
    const input = [...document.querySelectorAll(`input[name="name"]:checked`)];

    input.map((x) => {
      console.log(x.value);
      const resultp = document.createElement("p");
      if (names.includes(x.value)) {
        resultp.innerText = `「${x.value}」はいます！`;
        resultp.style.color = "green";
      } else {
        resultp.innerText = `「${x.value}」はいません！`;
        resultp.style.color = "red";
      }
      result.appendChild(resultp);
    });

    //先生のやり方
    // const checkboxs = document.querySelectorAll(`input[name="name"]:checked`);
    // const selected = Array.from(checkboxs).map((cb) => cb.value);

    // const matched = selected.filter((name) => names.includes(name));

    // if (matched.length > 0) {
    //   result.textContent = `一致した名前:${matched.join(",")}`;
    // } else {
    //   result.textContent = `一致しませんでした`;
    // }

    // if (names.includes(input)) {
    //   result.textContent = `「${input}」はいます！`;
    //   result.style.color = "green";
    // } else {
    //   result.textContent = `「${input}」はいません！`;
    //   result.style.color = "red";
    // }
  });
