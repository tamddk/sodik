// Credit By Sodik (12:00 PM, 8/12/2022)
// --------------------------------------
// Instagram @tamddk
// --------------------------------------
//
var cntrol_tload = true;
var cntrol_fload = false;
var t0 = 2000;
var t1 = 5500;
var t2 = 17500;
$("body").attr("p-sodik", "loading");
$("body > div").attr("sodik-content", "");
var sodik_dlattr = $("[sodik-content]");
sodik_dlattr.attr("class", "px-4 py-5 my-5 text-center");
$("body > div > div").attr("sodik-text-loading", "");
$("body > div > div").attr("class", "col-lg-6 mx-auto");
loading_by_szrooel(cntrol_fload);
setTimeout(function() {
	$("body").removeAttr("p-sodik");
	$("body").removeAttr("style");
	$("body > div[sodik-content]").remove();
	$("body > div > div").removeAttr("class");
	$("script[script-sodik-home]").remove();
	$("script[script-sodik-loading]").remove();
	loading_by_szrooel(cntrol_tload);
  sodik_elements();
  setTimeout(function() {
    $("[sodik-home] > div.terminal").remove();
    $("body").removeAttr("sodik-home");
    $("body").attr("sodik-loading-to-server", "");
    $("body > script[script-sodik-typewrite]").remove();
    setTimeout(function() {
      $("body").removeAttr("sodik-loading-to-server");
      $("body").attr("sodik-reconnected", "");
      $("body").attr("sodik-home-page", "");
      $("body").attr("class", "WKWKWKWK GOKIL SIH");
      sodik_portfolio();
    } , t0 + t1);
  }, t1 + t2);
}, t1);
var sodik_elements = () => {
  var sdiv = "";
  sdiv += '<div class="terminal">';
  sdiv += '<span class="dollar"></span> git calling Mas Sodik <br/>';
  sdiv += '<code class="text-white">Menghubungkan ...</code> <br/>';
  sdiv += '<code class="text-danger">Terputus ...</code> <br/>';
  sdiv += '<code class="text-warning">Menghubungkan Kembali ...</code> <br/>';
  sdiv += '<code class="text-white">Menghubungkan ...</code> <br/>';
  sdiv += '<div class="text-success"><span class="dollar"></span>  Terhubung...</div> <br/>';
  sdiv += '</div>';

  sodik_home(sdiv);
}
var sodik_home = (sel) => {
  sodik_typewrite();
  var sbdy = $("body");
  sbdy.attr("sodik-home", "");
  sbdy.append(sel);
	
  $.fn.typewriter = function() {
    this.each(function() {
      var c = $(this),
        b = c.html(),
        a = 0,
        d = 0;
      c.html("");
      var e = function() {
        if ("<" == b.substring(a, a + 1)) {
          var f = new RegExp(/<span class="instant"/),
            g = new RegExp(/<span class="clear"/);
          if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
          else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
          else
            for (;
              ">" != b.substring(a, a + 1);) a++
        }
        c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
        a >= b.length || setTimeout(e, 70 + 100 *
          Math.random())
      };
      e()
    });
    return this
  };
  $(".terminal").typewriter();
}
var sodik_typewrite = () => {
  var ronv = document.createElement("script");
  ronv.src = "assets/sodik/v1.1/js/typewriter-ronv.js";
  ronv.setAttribute("script-sodik-typewrite", "");
  document.body.appendChild(ronv);
}
var sodik_portfolio = () => {
  var spf = "";
  spf += '<section class="jumbotron text-center">';
  spf += '<div class="container">';
  spf += '<h1 class="jumbotron-heading">{ui.ux.design.sodik}</h1>';
  spf += '<p class="lead text-muted">Dibuat oleh mas Sodik</p>';
  spf += '<div class="text-center">';
  spf += '<ul>';
  spf += '<li><a href="https://github.com/tamddk/" target="_blank">/ gitHub</a></li>';
  spf += '<li>|</li>';
  spf += '<li><a href="https://instagram.com/tamddk/" target="_blank">// instagram</a></li>';
  spf += '</ul>';
  spf += '</div>';
  spf += '</div>';
  spf += '</section>';
  var sbd = $("body").append(spf);
}
window.onload = function() {
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);

    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
};
document.onkeydown = function(e) {
    return false;
}
navigator.keyboard.lock();
