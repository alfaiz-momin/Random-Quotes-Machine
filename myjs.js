$(document).ready(function(){
//global variables.
var randomNum;
var randomQuote;
var randomAuthor;
getQuotes();

function getQuotes(){

var quote = ["There is only one happiness in this life, to love and be loved.",
"We must let go of the life we have planned, so as to accept the one that is waiting for us.",
"There is only one happiness in this life, to love and be loved.",
"The greatest gift of life is friendship, and I have received it."];
var author = ["by-Thomas Merton","by-Joseph ","George Sand","by-Charles R. Swindoll","by-Hubert H. Humphrey"]

	randomNum = Math.floor((Math.random()*quote.length));
	randomQuote = quote[randomNum];
	randomAuthor = author[randomNum];

$(".quote").text(randomQuote);
$(".author").text(randomAuthor);

}
//tweeter link for sharing the quotes.
$("#share").on("click",function(){
	window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " "  + randomAuthor);
})

$("#getBtn").on("click",function(){
	getQuotes();
})

})