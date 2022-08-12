// Credit By Sodik 
// --------------------------------------
// Instagram @tamddk
// --------------------------------------
//
var cntrol_tload = true;
var cntrol_fload = false;
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
  sodik_home();
}, 11500);
var sodik_home = () => {
  sodik_typewrite();
  var sbdy = $("body");
  sbdy.attr("sodik-home", "");
  sbdy.append('<div class="terminal"> <span class="dollar"></span> hi, nama ku Sodik <br/> <span class="dollar"></span> biasanya aku dipanggil sodik atau dik <br/> <span class="dollar"></span> aku kuliah jurusan teknik informatika <br/> <span class="dollar"></span> kemampuan ku yaitu front end, back end and clone <br/> <span class="dollar"></span> aku tipe programmer privasi, jadi yaa gini lah ga terkenal dikalangan orang-orang. sedih sihhh :\'( <br/> <span class="dollar"></span> eh iyaaa, aku hanyalah manusia biasa yang tak luput dari kesalahan dan dosa, tapi kebanyakan dosanya sihhh. tapi tenang kak, ini lagi progress hijrah :) <br/> <span class="dollar"></span> soal cinta ga usah ditanya, aku payah dalam hal itu. kalau dalam hal di ranjang ga usah ditanya langsung gas lahh ngaco. <br/> <span class="dollar"></span> kalau ada pertanyaan langsung chat aja kak ke instagram aku <a href="https://www.instagram.com/tamddk/" title="Link Instagram Tubagus Ahmad Sodik">@tamddk</a></div><audio controls autoplay="true" loop="true" hidden="hidden"> <source src="assets/sodik/v1.1/sound/toni-braxton_unbreak-my-heart.mp3" type="audio/mpeg"> </audio>');
	
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
  ronv.setAttribute = "script-sodik-typewrite";
  document.body.appendChild(ronv);
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
