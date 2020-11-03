// create variable for the welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

//concat
var welcome = greeting + name + message

// create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// get element with id of 'greeting'and update
var el = document getElementById('greeting')
el.textContent = welcome;

// get the element that has an id of 'userSign' and update
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// get element with id of 'tiles' and update
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// get element with id of 'subTotal' and update
var elTiles = document.getElementById('subTotal');
elTiles.textContent = '$' + subTotal;

// get element with id of 'shipping' and update
var elTiles = document.getElementById('shipping');
elTiles.textContent = '$' + shipping;

// get element with id of 'grandTotal' and update
var elTiles = document.getElementById('grandTotal');
elTiles.textContent = '$' + grandTotal;
