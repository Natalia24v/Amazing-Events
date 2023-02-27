let htmlevents = "";
for (let event of data.events) {
htmlevents += `<section class="cardSect">
<div class="card-group">
    <div class="card">
      <img src="${event.image}" class="card-img-top">
      <div class="card-body"><h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="footCard">
        <p class="card-text"><small class="text-muted">${event.price}</small></p>
        <a class="ver" href="./details.html"><strong>ver mas</strong></a>
      </div>
      </div>
    </div>`
}
console.log(htmlevents)