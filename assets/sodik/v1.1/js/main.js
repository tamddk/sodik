/*
*
* Create By Mas Sodik
*        00:30     23/12/2023
*
*
*   Website Porofolio
*
*
* Menerima Jasa Build Website Pelajar/Bisnis/Company
*
* Hubungi lewat IG kami @project_sodik
*
*
* Stay In Bandung
*
*
*/
const svg_play = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>`,
svg_pause = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg>`;
sdk__tabs = () => {
  const tabLinks = document.querySelectorAll('[sodik-toggle="tabs-navbot"]');
  const tabContents = document.querySelector('.tAbCnt');
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const tabId = link.getAttribute('data-tabs-id');
      tabLinks.forEach(tab => {
        tab.classList.remove('active');
      });
      link.classList.add('active');
      if(tabId === "86182742") {
        sdk__content_default();
      } else if(tabId === "86457829"){
        tabContents.innerHTML = sdk__content_p2();
      }
    });
  });
  sdk__music();
}
sdk__music = () => {
  const playButton = document.querySelectorAll('.sdk-btn-music');
  const audioPlayer = document.querySelector('.audioPlayer');
  let isSpinning = false;
  let isAudioPlaying = false;
  playButton.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      link.classList.add('start');
      if (!isAudioPlaying) {
        audioPlayer.play();
        isAudioPlaying = true;
        if (!isSpinning) {
          link.style.backgroundRepeat = 'round';
          link.style.backgroundImage = 'url(assets/sodik/v1.1/music/1703071240.jpg)';
          link.classList.remove('pause');
          link.classList.add('play');
          isSpinning = true;
        }
        link.innerHTML = svg_pause;
      } else {
        audioPlayer.pause();
        isAudioPlaying = false;
        if (isSpinning) {
          link.classList.remove('play');
          link.classList.add('pause');
          isSpinning = false;
        }
        link.innerHTML = svg_play;
      }
    });
  });
  
  audioPlayer.addEventListener('ended', function() {
    playButton.classList.remove('spin pause');
    playButton.innerHTML = svg_play;
  });
}
sdk__content_beranda = () => {
  const grid = document.querySelector('.bnNbn');
  const dummyImages = [
    'assets/sodik/v1.1/images/project/357788520_6405985159517553_232736484377875487_n.jpeg',
    'assets/sodik/v1.1/images/project/358000416_133066926481295_2551054452955949757_n.jpeg',
    'assets/sodik/v1.1/images/project/358535412_1343613206365542_303723851433371_n.jpeg',
    'assets/sodik/v1.1/images/project/355276676_203623508885576_7058097721268646893_n.jpeg',
    'assets/sodik/v1.1/images/project/355165867_812217186790986_2018410522102840516_n.jpeg',
    'assets/sodik/v1.1/images/project/355401644_995520971487061_6528705428177380416_n.jpeg',
    'assets/sodik/v1.1/images/project/346769415_261787886229663_8225605624882252095_n.jpeg',
    'assets/sodik/v1.1/images/project/346506390_263397222753366_2453509621542697631_n.jpeg',
    'assets/sodik/v1.1/images/project/346667459_839358161039162_8249952539812650518_n.jpeg',
  ];
  dummyImages.forEach(imageUrl => {
    const post = document.createElement('div');
    post.className = 'post';
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add("img-showing");
    img.setAttribute('data-showing-images', imageUrl);
    img.setAttribute('crossorigin', 'anonymous');
    img.setAttribute('decoding', 'auto')
    post.appendChild(img);
    grid.appendChild(post);
  });
  sdk__content_modal();
}
sdk__content_trackIp = () => {
  const ipAddressElement = document.querySelector('.ipAddress');
  fetch('https://api.ipify.org?format=json').then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;
      ipAddressElement.textContent = ipAddress;
    })
    .catch(error => {
      ipAddressElement.textContent = '0.0.0.0';
    });
}
sdk__content_track_device = () => {
  const deviceInfoElement = document.querySelector('.deviceInfo');
  function displayDeviceInfo() {
    const userAgent = navigator.userAgent;
    const deviceType = navigator.platform;
    const os = getOS(userAgent);
    deviceInfoElement.innerHTML = os + ' / '+ deviceType;
  }
  function getOS(userAgent) {
    const platform = navigator.platform;
    const mobilePlatforms = ['iPhone', 'iPad', 'iPod', 'Android'];
    if (platform.startsWith('Mac')) {
      return 'Mac OS';
    } else if (platform.startsWith('Win')) {
      return 'Windows';
    } else if (platform.startsWith('Linux')) {
      return 'Linux';
    } else if (platform.startsWith('Android')) {
      return 'Android';
    } else if (platform.startsWith('Iphone')) {
      return 'Iphone';
    } else if (platform.startsWith('Ipad')) {
      return 'Ipad';
    } else if (platform.startsWith('Ipod')) {
      return 'Ipod';
    } else {
      return 'Other';
    }
  }
  return displayDeviceInfo();
}
sdk__content_modal = () => {
  const modalToggle = document.querySelectorAll('.img-showing');
  const modalCloseToggle = document.querySelectorAll('.modal-close');
  const modalContentImages = document.querySelector('.modal-images');
  modalToggle.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.getElementById('myModal');
      modal.style.display = 'flex';
      const displayImages = link.getAttribute('src');
      modalContentImages.setAttribute('src', displayImages);
    });
  });
  modalCloseToggle.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
    });
  });
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}
sdk__content_default = () => {
  const tabContents = document.querySelector('.tAbCnt');
  tabContents.innerHTML = sdk__content_p1();
  sdk__content_trackIp();
  sdk__content_track_device();
  sdk__content_beranda();
  sdk__content_berita();
}
sdk__content_p1 = () => {
  var HTML = `
  <div class="gGlLPE hsIiSc hsBiSc">
  <div class="bYiMCO">
    <div class="kwKhFT">
      <p class="jiLRhl iNpRNL ipAddress" color="texasRose">0.0.0.0</p>
      <p class="kxfCZS boJtMN" color="disabled">IP Address</p>
    </div>
    <div class="kwKhFT">
      <p class="fIFUKO evJeaB deviceInfo" color="mango">null</p>
      <p class="kxfCZS boJtMN" color="disabled">Your Device</p>
    </div>
  </div>
</div>
<div class="gFrak">
  <div class="kogSp">
    <div class="hFpNrm">
      <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: 84px; height: 84px; background: none; opacity: 1; border: 0px; border-radius: 100%; margin: 0px; padding: 0px; position: relative;">
        <img alt="icon home" src="assets/sodik/v1.1/images/owner/IMG_20231214_022957.jpg" decoding="async" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
      </span>
    </div>
  </div>
  <div class="jpsKOb">
    <h1 class="dWBcVa dDdYaP" color="neutral">Tubagus Ahmad Sodik, S.Kom</h1>
    <p font-style="italic" color="neutral" class="jcWcq jghYxn">Selamat datang dihalaman portfolio pribadi saya, saya harap anda menemukan sesuatu yang anda cari dihalaman page portfolio saya.</p>
    <p font-style="italic" color="neutral" class="jeWeq">"Saya sangat senang jika seseorang mengunjungi halaman portfolio saya."</p>
  </div>
</div>
<div class="igScEJ">
  <div class="iOtxNW">
    <p class="cKStbe">The results of my work</p>
  </div>
  <div class="container bnNbn"></div>
</div>
<div class="newSPPr">
  <div class="iOtxNW">
    <p class="cKStbe">Berita Terkini</p>
  </div>
  <div class="newsContainer"></div>
</div>
  `;
  return HTML;
}
sdk__content_p2 = () => {
  var HTML = `
  <div class="dWnBKs">
    <div class="iOtxNW">
      <p class="cKStbe">Social Media</p>
    </div>  
    <div class="evVpTa">
      <div class="ksccCe">
        <div class="hmxIoX">
          <a href="https://www.linkedin.com/in/sodikun" class="aAzGYa eEzGYE">
            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            <div class="jyhKVg" style="font-size: 16px; padding: 1px 5px 1px; justify-content: start;">Linkedin</div>
          </a>
          <a href="https://www.instagram.com/tbhmdsdk" class="aAzGYa eEzGYE">
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <div class="jyhKVg" style="font-size: 16px; padding: 1px 5px 1px; justify-content: start;">Instagram</div>
          </a>
        </div>
      </div>
    </div>
    <div class="iOtxNW">
      <p class="cKStbe">Berkas Saya</p>
    </div>
    <div class="evVpTa">
      <div class="ksccCe">
        <div class="hmxIoX">
        <form method="GET" action="assets/sodik/v1.1/berkas/CV_Tubagus_Ahmad_Sodik.pdf">
            <button type="submit" class="aAzGYa eEzGYE">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
              <div class="jyhKVg" style="font-size: 16px; padding: 13px 0px; justify-content: start;">Download CV (Curriculum Vitae)</div>
            </button>
          </form>
        </div>
        <div class="hmxIoX">
          <form method="GET" action="assets/sodik/v1.1/berkas/Resume_Tubagus_Ahmad_Sodik.pdf">
            <button type="submit" class="aAzGYa eEzGYE">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
              <div class="jyhKVg" style="font-size: 16px; padding: 13px 0px; justify-content: start;">Download Resume</div>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="iOtxNW">
      <p class="cKStbe">List Project Pribadi</p>
    </div>
    <div class="evVpTa">
      <div class="ksccCe">
        <div class="hmxIoX">
          <a href="https://www.shaitamacoffee.com" class="aAzGYa eEzGYE">
            <i class="fab fa-link" aria-hidden="true"></i>
            <div class="jyhKVg" style="font-size: 16px; padding: 1px 5px 1px; justify-content: start;">Shaitama Coffee</div>
          </a>
        </div>
        <div class="hmxIoX">
          <a href="https://www.toko.shaitamacoffee.com" class="aAzGYa eEzGYE">
            <i class="fab fa-link" aria-hidden="true"></i>
            <div class="jyhKVg" style="font-size: 16px; padding: 1px 5px 1px; justify-content: start;">Toko Shaitama Coffee</div>
          </a>
        </div>
        <div class="hmxIoX">
          <a href="https://www.roastery.shaitamacoffee.com" class="aAzGYa eEzGYE">
            <i class="fab fa-link" aria-hidden="true"></i>
            <div class="jyhKVg" style="font-size: 16px; padding: 1px 5px 1px; justify-content: start;">Roastery Shaitama Coffee</div>
          </a>
        </div>
        <div class="hmxIoX">
          <a href="https://www.hpanel.shaitamacoffee.com" class="aAzGYa eEzGYE">
            <i class="fab fa-link" aria-hidden="true"></i>
            <div class="jyhKVg" style="font-size: 16px; padding: 1px 5px 1px; justify-content: start;">Hpanel Shaitama Coffee</div>
          </a>
        </div>
        <div class="hmxIoX">
          <a href="https://tikitagroups.vercel.app/" class="aAzGYa eEzGYE">
            <i class="fab fa-link" aria-hidden="true"></i>
            <div class="jyhKVg" style="font-size: 16px; padding: 1px 5px 1px; justify-content: start;">Tikita Coffee</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  `;
  return HTML;
}
sdk__content_berita = () => {
  const apiUrl = 'https://saurav.tech/NewsAPI/everything/cnn.json';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      const dataArr = JSON.parse(xhr.response);
      displayNews(dataArr.articles);
    } else {
      console.log('The request failed!');
    }
  };
  xhr.open('GET', apiUrl);
  xhr.send();
  function displayNews(articles) {
    const newsContainer = document.querySelector('.newsContainer');
    newsContainer.innerHTML = '';
    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
      const title = document.createElement('h2');
      title.textContent = article.title;
      const author = document.createElement('p');
      author.textContent = `Author: ${article.author || 'Unknown'}`;
      const description = document.createElement('p');
      description.textContent = article.description;
      const link = document.createElement('a');
      link.href = article.url;
      link.setAttribute('target', '_blank');
      link.textContent = 'Read more';
      articleElement.appendChild(title);
      articleElement.appendChild(author);
      articleElement.appendChild(description);
      articleElement.appendChild(link);
      newsContainer.appendChild(articleElement);
    });
  }
}
sdk__content_loadscreen = () => {
  document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        let width = 0;
        const progressBar = document.querySelector('.progress-bar');
        const loadingText = document.querySelector('p');
        const interval = setInterval(function () {
          width += 1;
          progressBar.style.width = width + '%';
          loadingText.textContent = `Loading... ${width}%`;
          if (width >= 100) {
            clearInterval(interval);
            document.querySelector('.loader-wrapper').style.display = 'none';
            document.querySelector('.loader-main').remove();
            document.querySelector('#__sodik-dev').remove();
            sdk__content_default();
            sdk__tabs();
          }
        }, 50);
      }
    };
}
sdk__content_loadscreen();