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
		if(parseFloat(currentValue.price) >= 14 && parseFloat(currentValue.price) <= 18) {
			return true;
		}
	} else {
		return false;
	}
});
console.log('Items that cost between $14.00 USD and $18.00 USD:');
console.log(filteredNum);
 



 // use array.filter to find items that cost between $14.00 and $18.00
var filteredNum = items.filter(function(currentValue){
	//Checking if the currency is in USD
	if(currentValue.currency_code === 'GBP'){
		 
	console.log(currentValue.title);
	console.log(currentValue.price);
	console.log(currentValue.title + ' costs €'+currentValue.price);
	}
});
 


// 1. Pick out the items that have wood as one of their tags
var woodItems = items.filter(containsWood);

var woodItemTitles = woodItems.map(getTitle);

console.log(woodItemTitles);

// Determine if an item has wood in its list of tags

// Input: A single item (type = object)
function containsWood(item){
    // 1. Seach the materials of the item
    // 2. If materials contains "wood" 
    if(item.materials.indexOf('wood') !== -1){
            return true;
    } else {
          return false;
    }
    
        // 2a. return true
            

        // 2b. if the materials doesn't contain wood
            
}

// Output: true if it contains wood, otherwise false (type = boolean)

// 2.Convert the items from step 1 to just a list of titles
// woodItems.map(title);

// 3. Return or display the list

// Pull the title from an item
// Input: a single item (type = object)
function getTitle(item){
    return item.title;
            
}

// Question 5 
// going through each item and running the 8 or more
items.forEach(eightOrMore);
// creating a function and giving it the currentValue argument
function eightOrMore(currentValue) {
	// saying if each array or materials has more than eight items, then console.log the statements below
	if(currentValue.materials.length >= 8){
		console.log(currentValue.title);
		console.log(currentValue.materials);
	}

}

// Question 6 
// Show me how to calculate how many items were made by their sellers
var seller = 0;
// going through each item and running theSeller function
items.forEach(theSeller);
//creating a function and giving it the currentValue argument
function theSeller (currentValue){
//asking if currentvalue.who_made is equal to i_did and if so then seller should increa
	if(currentValue.who_made === 'i_did'){
		seller++;
	} 
}

console.log(seller);
console.log(seller + 'were made by their sellers');



// var totalViews = 0;
// var averageViews = 0;

// function averageNum(array){
// 	total += array.views;
// 	console.log('this should be the '+total);
	
// 	return total;
// }


// items.forEach(averageNum);


// 	average = (total /items.length).toFixed(2);
// console.log('the average price is '+average);
//  