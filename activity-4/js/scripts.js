var salutation = 'Salutations, ';
var user = 'Human';
var greeting = salutation + user;

var el = document.getElementById('greeting');
el.textContent = greeting;

var price = 99;
var studentDiscount = 0.01;
var studentPrice = price - (price * studentDiscount);
var priceList = '|Price: $' + price + ' | Student Price $' + studentPrice + '|';

var elPrice = document.getElementById('pricelist');
elPrice.textContent = priceList;
