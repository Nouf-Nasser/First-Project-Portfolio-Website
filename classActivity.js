Class City {
function(cityName, cityPop, country) {
   this.cityName = cityName
   this.cityPop = cityPop
   this.country = country
}
printDetails=()=>{
   console.log(`This city name is ${this.cityName} its population is around ${this.cityPop} and it is located in ${this.country}`)
}
}
const city1 = new City('Riyadh', '5 Million', 'Saudi Arabia')
city1.printDetails();
