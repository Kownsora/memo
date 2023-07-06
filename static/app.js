async function createMemo(value) {
  console.log("입력값은 :", value);
  const res = await fetch("/memos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: new Date(),
      content: value,
    }),
  });
  const jsonRes = await res.json();
  console.log(jsonRes); //결과값
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("#memo-input");
  createMemo(input.value);
  input.value = ""; //입력 후 초기화
}

const form = document.querySelector("#memo-form");
form.addEventListener("submit", handleSubmit);
