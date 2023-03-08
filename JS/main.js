let htmlevents = "";
for (let event of data.events) {
htmlevents += `<div class="card col-12 col-sm-6 col-lg-4 col-xl-3" >
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
document.querySelector('.card-group').innerHTML = htmlevents
console.log(htmlevents)