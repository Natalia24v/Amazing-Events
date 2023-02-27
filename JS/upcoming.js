let htmlEvents = "";
for (let event of data.events) {
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    console.log(currentDate);
    console.log(eventDate);
    if (eventDate < currentDate) {
       console.log('pasado');
    } else {
        console.log('futuro')
    }

}
console.log(htmlEvents);