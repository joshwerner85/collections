var total = 0;
var average = 0;

function averageNum(array){
	total += array.price;
	console.log('this should be the '+total);
	
	return total;
}


items.forEach(averageNum);


	average = (total /items.length).toFixed(2);
console.log('the average price is '+average);

 
// use array.filter to find items that cost between $14.00 and $18.00
var filteredNum = items.filter(function(currentValue){
	//Checking if the currency is in USD
	if(currentValue.currency_code === 'USD'){
		//Checking if the currency listed is in USD
		if(parseFloat(currentValue.price) > 14 && parseFloat(currentValue.price) < 18) {
			return true;
		}
	} else {
		return false;
	}
});
console.log(filteredNum);
 



// function priceFilter(array2){
// 	if(parseFloat(array2.price) >=





// // console.log(items.filter.length);
// console.log(price.filter[10]);




// var sortedPriceListing = items.filter(function(currentValue) {
//  //Checking if the currency listed is in USD
//  if(currentValue.currency_code === 'USD'){
//    //Checking if the price is within the pre-determined range
//    if (parseFloat(currentValue.price) > 14 && parseFloat(currentValue.price) < 18) {
//      return true;
//    } 
//  } else {
//    return false;
//  }  
// });
// console.log(sortedPriceListing);