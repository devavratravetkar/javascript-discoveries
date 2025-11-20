function makeShoppingList({
  item1 = "MILK",
  item2 = "BREAD",
  item3 = "TEA",
  extraItems = [],
  ...otherItems
} = {}) {
  // console.log(otherItems, otherItems.length, Object.keys(otherItems).length);
  
  // console.log(`Remember to buy ${item1}`);
  // console.log(`Remember to buy ${item2}`);
  // console.log(`Remember to buy ${item3}`);

  // prints the named parameters
  for (let item of [item1, item2, item3]) {
    console.log(`Remember to buy ${item}`);
  }

  //prints each item in array of extraItems
  for (let item of extraItems) {
    console.log(`Remember to buy ${item}`);
  }

  //deals with otherItems... object destructuring AND ALSO handles single string input
  if(otherItems.length === undefined && Object.keys(otherItems).length === 0){
    // console.log('otherItems EMPTY'); //do nothing
  } else {
    if(Object.keys(otherItems).length > 0){// if only a single string was passed, its first character will be represented as '0':'[first character]' in the object... so it hasOwnProperty of '0'... but for cases in which we pass {itemN:___, itemM:__, etc.}, it won't have a property of 0
      if(otherItems.hasOwnProperty('0')/*otherItems has key of 0, because it is a string that got broken down into characters due to object destructuring with keys=0,1,2... length-1 of the string*/){
        //handle the string
        let realvalue = '';
        for (let key in otherItems) {
          realvalue += otherItems[key];
        }
        console.log(`Remember to buy ${realvalue}`);
      }
      else{
        for (let key in otherItems) { //print every item in the otherItems object
        // if we didn't handle the string in the above loop, the following code would print each character on a separate line, instead of the actual word
          console.log(`Remember to buy ${otherItems[key]}`)
        }
      }
    }
  }
}

console.log("\ncase 1: empty call");
makeShoppingList();

console.log("\ncase 2: string call");
makeShoppingList('nankatai');

console.log("\ncase 3: array of strings call");
makeShoppingList(['biscuit', 'batata']);

console.log("\ncase 4: reassign default parameters");
makeShoppingList({item1: 'pastry', item2: 'polo'});

console.log("\ncase 5: reassign default + pass new ones");
makeShoppingList({item1: 'pastry', item99: 'baalushahi', item100: 'poha'});

console.log("\ncase 6: use {extraItems: [array of strings]}");
makeShoppingList({item1: 'pastry', extraItems: ['laddoo', 'gulabjamun']});