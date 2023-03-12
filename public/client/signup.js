// 2023-03-12 File setup

const dom_input_name = document.getElementById("input_name");
const dom_input_id = document.getElementById("input_id");
const dom_input_pw = document.getElementById("input_pw");
const dom_input_pwCheck = document.getElementById("input_pwCheck");

const dom_btn_idCheck = document.getElementById("btn_idCheck");
const dom_btn_done = document.getElementById("btn_done");

async function idCheck(input_id) {
  const data = {
    type: "checkID",
    body: input_id,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const req = await fetch("/api/users", options);
  console.log("POST request sent!");
  const res = await req.json();

  console.log(res);
}

dom_btn_idCheck.addEventListener("click", () => {
  idCheck(dom_input_id.value);
});
