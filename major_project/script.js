let weather = {
	"apiKey":"cc6178c95708084494a13720d32881c5",
	fetchWeather:function(city){fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&APPID=cc6178c95708084494a13720d32881c5")
	.then((response)=>response.json())
	.then((data)=>this.displayWeather(data));
},
displayWeather:function(data){
	const{name}=data;
	const{description}=data.weather[0];
	const{ temp,humidity}=data.main;
	const{speed}=data.wind;

	document.querySelector(".city").innerText="Weather of "+ name ;
	document.querySelector(".temp").innerText=temp+"K";
	document.querySelector(".description").innerText=description;
	document.querySelector(".humidity").innerText="Humidity : "+humidity+"%";
	document.querySelector(".wind").innerText="Wind speed: "+speed+"km/hr";
},
search:function(){
	this.fetchWeather(document.querySelector(".search-bar").value);
}
};

document.querySelector(".search button").addEventListener("click",function(){
	weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup",function(event){
	if(event.key=="Enter"){
		weather.search();
	}
})