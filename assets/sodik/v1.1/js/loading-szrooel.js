//
// --------------------------------------
// Credit By szrooel, Modified By Sodik (12:00 PM, 8/12/2022)
// --------------------------------------
//
var loading_by_szrooel = (option_loading) => {
	if (!option_loading) {
		var alphabet, letter_count, el, word, finished, incrementer;
		alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "#", "$", "*", "&", "_", "+", "?", ">",".","<");
		letter_count = 0;
		el = $("[sodik-content] > [sodik-text-loading]");
		word = el.html().trim();
		finished = false;

		el.html("");
		for (var i = 0; i < word.length; i++) {
		  el.append("<span>"+word.charAt(i)+"</span>");
		}

		setTimeout(write, 75);
		incrementer = setTimeout(inc, 1000);

		function write() {
		  for (var i = letter_count; i < word.length; i++) {
		    var c = Math.floor(Math.random() * 47);
		    if ($('span').contents().length == 0) {

		    } else {
		    	$("span")[i].innerHTML = alphabet[c];
		    }
		  }
		  if (!finished) {
		    setTimeout(write, 75);
		  }
		}

		function inc() {
		  if ($('span').contents().length == 0) {

		  } else {
		  	$("span")[letter_count].innerHTML = word[letter_count];
		  }
		  $("span:eq("+letter_count+")").addClass("glow");
		  letter_count++;
		  if (letter_count >= word.length) {
		    finished = true;
		    setTimeout(reset, 1500);
		  } else {
		    setTimeout(inc, 1000);
		  }
		}

		function reset() {
		  letter_count = 0;
		  finished = false;
		  setTimeout(inc, 1000);
		  setTimeout(write, 75);
		  $("span").removeClass("glow");
		}
	}
}