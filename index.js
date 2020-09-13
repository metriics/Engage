let datetimeDiv = document.getElementById('date-time')
let catButton = document.getElementById('give-cat')
let nasaAPIkey = "aAJTxRIsIKl2WEnVBYIUNaL9FExOjvNfAXDddVC8"

// get time & date
fetch('http://worldclockapi.com/api/json/est/now')
.then(res => res.json())
.then(dt => {
	let weekDay = dt.dayOfTheWeek
	if (weekDay.includes("Wednesday")) {
		datetimeDiv.innerHTML += `<h1> It's ${weekDay} my dudes. </h1>`
	}
	else {
		datetimeDiv.innerHTML += `<h1> It's ${weekDay}. </h1>`
	}
})

// get daily astronomy photo
fetch('https://api.nasa.gov/planetary/apod?api_key='.concat(nasaAPIkey))
.then(res => res.json())
.then(imgotd => {
	document.body.style.backgroundImage = `url('${imgotd.hdurl}')`;
	document.body.style.backgroundPosition = "center";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "cover";
})

// button to get cat picture
catButton.addEventListener("click", evt => {
	let catDiv = document.getElementById('cat-pic')

	fetch('https://api.thecatapi.com/v1/images/search?')
	.then(res => res.json())
	.then(cats => {
		cats.forEach(cat => {
			catDiv.innerHTML = `<h3>I gotchu: </h3>
			<img src="${cat.url}" alt="kitty"/>`
		});
	})
})