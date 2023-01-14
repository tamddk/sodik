// Credit By Sodik (12:00 PM, 8/12/2022)
// --------------------------------------
// Instagram @tamddk
// --------------------------------------
//
var cntrol_tload = true;
var cntrol_fload = false;
var t0 = 2000;
var t1 = 5500;
var t2 = 15000;
var urlPages = window.location.href;
$("body").attr("p-sodik", "loading");
$("body > div").attr("sodik-content", "");
var sodik_dlattr = $("[sodik-content]");
sodik_dlattr.attr("class", "px-4 py-5 my-5 text-center");
$("body > div > div").attr("sodik-text-loading", "");
$("body > div > div").attr("class", "col-lg-6 mx-auto");
loading_by_szrooel(cntrol_fload);
setTimeout(function () {
  $("body").removeAttr("p-sodik");
  $("body").removeAttr("style");
  $("body > div[sodik-content]").remove();
  $("body > div > div").removeAttr("class");
  $("script[script-sodik-home]").remove();
  $("script[script-sodik-loading]").remove();
  loading_by_szrooel(cntrol_tload);
  sodik_elements();
  setTimeout(function () {
    $("[sodik-home] > div.terminal").remove();
    $("body").removeAttr("sodik-home");
    $("body").attr("sodik-loading-to-server", "");
    $("body > script[script-sodik-typewrite]").remove();
    setTimeout(function () {
      $("body").removeAttr("sodik-loading-to-server");
      $("body").attr("sodik-reconnected", "");
      $("body").attr("sodik-home-page", "");
      $("body").attr(
        "class",
        "WKWKWKWK GOKIL SIH SI MAS SODIK INI UGHHH SO CUTE BINGITSSS"
      );
      sodik_portfolio();
    }, t0 + t1);
  }, t1 + t2);
}, t1);
var sodik_elements = () => {
  var sdiv = "";
  sdiv += '<div class="terminal">';
  sdiv +=
    '<code class="text-success">Sodik@Sodik-PC</code> <code style="color: purple;">MINGW64</code><code class="text-warning"> / </code> <br/>';
  sdiv +=
    '<code class="text-white">$ cd c:\\Users\\Sodik\\AppData\\Local\\Sodik-Project</code> <br/>';
  sdiv +=
    '<code class="text-success">Sodik@Sodik-PC</code> <code style="color: purple;">MINGW64</code><code class="text-warning"> /Users/Sodik/AppData/Local/Sodik-Project </code> <br/>';
  sdiv +=
    '<code class="text-white">$ git clone https://github.com/tamddk/sodik</code> <br/>';
  sdiv +=
    '<code class="text-white">Cloning into ' + "'sodik'" + "...</code> <br/>";
  sdiv +=
    '<code class="text-white">remote: Enumerating objects: 19, done.</code> <br/>';
  sdiv +=
    '<code class="text-white">remote: Counting objects: 100% (19/19), done.</code> <br/>';
  sdiv +=
    '<code class="text-white">remote: Compressing objects: 100% (12/12), done.</code> <br/>';
  sdiv +=
    '<code class="text-white">remote: Total 2492 (delta 8), reused 16 (delta 7), pack-reused 2473</code> <br/>';
  sdiv +=
    '<code class="text-white">Receiving objects: 100% (2492/2492), 26.85 MiB | 277.00 KiB/s, done.</code> <br/>';
  sdiv +=
    '<code class="text-white">Resolving deltas: 100% (305/305), done.</code> <br/>';
  sdiv +=
    '<code class="text-success">Sodik@Sodik-PC</code> <code style="color: purple;">MINGW64</code><code class="text-warning"> /Users/Sodik/AppData/Local/Sodik-Project </code> <br/>';
  sdiv += '<code class="text-white">$</code> <br/>';
  sdiv += "</div>";

  sodik_home(sdiv);
};
var sodik_home = (sel) => {
  sodik_typewrite();
  var sbdy = $("body");
  sbdy.attr("sodik-home", "");
  sbdy.append(sel);

  $.fn.typewriter = function () {
    this.each(function () {
      var c = $(this),
        b = c.html(),
        a = 0,
        d = 0;
      c.html("");
      var e = function () {
        if ("<" == b.substring(a, a + 1)) {
          var f = new RegExp(/<span class="instant"/),
            g = new RegExp(/<span class="clear"/);
          if (b.substring(a, b.length).match(f))
            a += b.substring(a, b.length).indexOf("</span>") + 7;
          else if (b.substring(a, b.length).match(g))
            (d = a), (a += b.substring(a, b.length).indexOf("</span>") + 7);
          else for (; ">" != b.substring(a, a + 1); ) a++;
        }
        c.html(b.substring(d, a++) + (a & 1 ? "|" : ""));
        a >= b.length || setTimeout(e, 50 * Math.random());
      };
      e();
    });
    return this;
  };
  $(".terminal").typewriter();
};
var sodik_typewrite = () => {
  var ronv = document.createElement("script");
  ronv.src = "assets/sodik/v1.1/js/typewriter-ronv.js";
  ronv.setAttribute("script-sodik-typewrite", "");
  document.body.appendChild(ronv);
};
var sodik_portfolio = () => {
  var spf = "";
  spf += '<section class="jumbotron text-center">';
  spf += '<div class="container">';
  spf +=
    '<img src="assets/sodik/v1.1/images/pristel.gif" width="155" height="111"></img>';
  spf += '<h1 class="jumbotron-heading">{ui.ux.design.sodik}</h1>';
  spf += '<p class="lead text-muted">Dibuat oleh mas Sodik</p>';
  spf += '<div class="text-center">';
  spf += "<ul>";
  spf +=
    '<li><a href="https://github.com/tamddk/" target="_blank">/ gitHub</a></li>';
  spf += "<li>|</li>";
  spf +=
    '<li><a href="https://instagram.com/tamddk/" target="_blank">// instagram</a></li>';
  spf += "<li>|</li>";
  spf +=
    '<li><a href="https://www.linkedin.com/in/sodikun/" target="_blank">/// Linkedin</a></li>';
  spf += "</ul>";
  spf += "<ul>";
  spf +=
    '<li>|<a href="https://drive.google.com/file/d/1L2A01Y6KDnfZXKT3qJc0DKdFDRz5hb23/view?usp=sharing" target="_blank"> Download My Resume</a>|</li>';
  spf += "</ul>";
  spf += "</div>";
  spf += "</div>";
  spf += "</section>";
  spf +=
    '<div class="jancuk pristel nih boss" style="text-align: center;"></div>';
  $("body").append(spf);
  setTimeout(function () {
    sodik_audioPlayer();
    sodik_valPageBrowser();
  }, 500);
};
sodik_audioPlayer = () => {
  const audioStream = new Audio(urlPages);
  audioStream.volume = 100 / 100;
  var suh = "";
  suh +=
    '<audio controls autoplay loop><source src="' +
    urlPages +
    'assets/sodik/v1.1/sound/100100100011100111000111111110101101001010010010101010010101.mp3" type="audio/mp3"/></audio>';
  suh +=
    '<iframe width="1" height="1" src="https://www.youtube.com/watch?v=lbpAu1ZNw8M" allow="autoplay" style="display:none"></iframe>';
  $(".jancuk.pristel.nih.boss").append(suh);
};
sodik_valPageBrowser = () => {
  let isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome) {
    $("iframe").remove();
  } else {
    $("audio").remove();
  }
};
window.onload = function () {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );

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

console.log("%c CREDIT BY: TUBAGUS AHMAD SODIK", "color: red; font-size:35px;");

document.onkeydown = function (e) {
  return false;
};

navigator.keyboard.lock();
