var xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",
  true
);
xhr.onreadystatechange = function () {
  var responseJSON = JSON.parse(xhr.response);

  for (let i = 0; i < responseJSON.length; i++) {
    let div = document.createElement("div");

    let e1 = document.createElement("e");
    let d1 = document.createElement("div");
    d1.setAttribute("id", "d1");
    let title = document.createTextNode(responseJSON[i].title);
    e1.append(title);
    d1.appendChild(e1);

    let e2 = document.createElement("e");
    let d2 = document.createElement("div");
    d2.setAttribute("id", "d2");
    let body = document.createTextNode(responseJSON[i].body);
    e2.append(body);
    d2.appendChild(e2);

    div.appendChild(d1);
    div.appendChild(d2);

    document.getElementById("data").appendChild(div);
  }
};
xhr.send();

let btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
  let title = document.getElementById("title1");
  let body = document.getElementById("body1");
  let div = document.getElementById("data");

let html = `
<div>
<div id="d1">
${title.value}
</div>
<div id="d2">
${body.value}
</div>
</div>
`;
  div.innerHTML += html;
});
