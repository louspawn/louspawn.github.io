var quotes = [	'"Computers are useless.  They can only give you answers."</p>  <footer class="blockquote-footer">Pablo Picasso',
				'"The question of whether computers can think is like the question of whether submarines can swim."</p>  <footer class="blockquote-footer">Edsger W. Dijkstra',
				'"Hardware: The parts of a computer system that can be kicked."</p>  <footer class="blockquote-footer">Jeff Pesis',
				'"19 Jan 2038 at 3:14:07 AM"</p>  <footer class="blockquote-footer">End of the word according to Unix-2^32 seconds after January 1, 1970',
				'"The function of good software is to make the complex appear to be simple."</p>  <footer class="blockquote-footer">Grady Booch',
				'"That\'s the thing about people who think they hate computers.  What they really hate is lousy programmers."</p>  <footer class="blockquote-footer">Larry Niven',
				'"To iterate is human, to recurse divine."</p>  <footer class="blockquote-footer">L. Peter Deutsch',
				'"C++ : Where friends have access to your private members."</p>  <footer class="blockquote-footer">Gavin Russell Baker',
				'"If debugging is the process of removing bugs, then programming must be the process of putting them in."</p>  <footer class="blockquote-footer">Edsger W. Dijkstra',
				'"There are two ways to write error-free programs; only the third one works."</p>  <footer class="blockquote-footer">Alan J. Perlis'];


function printRandomQuote()
{
	var randomIndex = Math.floor(Math.random() * quotes.length);
 	document.getElementById('quotes').innerHTML = "<p class=\"mb-0\">".concat(quotes[randomIndex], "</footer></p>");
}

var intervalVariable;

function setTimer()
{
	intervalVariable = setInterval(printRandomQuote, 10000);
}

function clearTimer()
{
	clearInterval(intervalVariable);
}

printRandomQuote();
setTimer();
