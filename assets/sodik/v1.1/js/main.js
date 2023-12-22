const svg_play = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>`,
svg_pause = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z"/></svg>`;

sdk__tabs = () => {
  const tabLinks = document.querySelectorAll('[sodik-toggle="tabs-navbot"]');
  const tabContents = document.querySelector('.tAbCnt');
  
  tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const tabId = link.getAttribute('data-tabs-id');
  
      // Deactivate all tab links
      tabLinks.forEach(tab => {
        tab.classList.remove('active');
      });
  
      // Activate the clicked tab link and show the corresponding content
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


      // if (audioPlayer.paused) {
      //   isSpinning = true;
      //   audioPlayer.play();
      //   link.classList.add('spin');
      //   link.classList.remove('play');
      //   link.classList.add('pause');
      //   link.innerHTML = svg_pause;
      // } else {
      //   isSpinning = false;
      //   audioPlayer.pause();
      //   // audioPlayer.currentTime = 0;
      //   link.classList.remove('spin');
      //   link.classList.remove('pause');
      //   link.classList.add('play');
      //   link.innerHTML = svg_play;
      // }
    });
  });
  
  audioPlayer.addEventListener('ended', function() {
    playButton.classList.remove('spin pause');
    playButton.innerHTML = svg_play;
  });
}
sdk__content_beranda = () => {
  const grid = document.querySelector('.bnNbn');
    
  // Dummy image URLs
  const dummyImages = [
    'assets/sodik/v1.1/images/project/357788520_6405985159517553_232736484377875487_n.jpeg',
    'assets/sodik/v1.1/images/project/358000416_133066926481295_2551054452955949757_n.jpeg',
    'assets/sodik/v1.1/images/project/358535412_1343613206365542_303723851433371_n.jpeg',
    'assets/sodik/v1.1/images/project/355165867_812217186790986_2018410522102840516_n.jpeg',
    'assets/sodik/v1.1/images/project/355276676_203623508885576_7058097721268646893_n.jpeg',
    'assets/sodik/v1.1/images/project/355401644_995520971487061_6528705428177380416_n.jpeg',
    'assets/sodik/v1.1/images/project/346769415_261787886229663_8225605624882252095_n.jpeg',
    'assets/sodik/v1.1/images/project/346506390_263397222753366_2453509621542697631_n.jpeg',
    'assets/sodik/v1.1/images/project/346667459_839358161039162_8249952539812650518_n.jpeg',
    // Add more image URLs as needed
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
  // JavaScript code to fetch and display the IP address
  const ipAddressElement = document.querySelector('.ipAddress');

  // Using an external service to fetch IP address (Example: ipify API)
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
    if (mobilePlatforms.some(platform => userAgent.includes(platform))) {
      return 'Mobile';
    } else if (platform.startsWith('Mac')) {
      return 'Mac OS';
    } else if (platform.startsWith('Win')) {
      return 'Windows';
    } else if (platform.startsWith('Linux')) {
      return 'Linux';
    } else {
      return 'Other';
    }
  }

  // Call the function to display device info when the page loads
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
    <a href="https://www.instagram.com/tbseja"><span style="padding: 5px; font-size: 14px; font-weight: 600; color: #fff;">@tbseja</span></a>
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
      <p class="cKStbe">Berkas Saya</p>
    </div>
    <div class="evVpTa">
      <div class="ksccCe">
        <div class="hmxIoX">
          <a href="">
            <button class="aAzGYa eEzGYE">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
              <div class="jyhKVg" style="font-size: 16px; padding: 13px 0px; justify-content: start;">Download CV (Curriculum Vitae)</div>
            </button>
          </a>
        </div>
        <div class="hmxIoX">
          <a href="">
            <button class="aAzGYa eEzGYE">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
              <div class="jyhKVg" style="font-size: 16px; padding: 13px 0px; justify-content: start;">Download Resume</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  `;

  return HTML;
}
sdk__content_berita = () => {
// Fetch news articles using NewsAPI
const apiKey = 'e03b38b7ca5343e185ff7f3f63dad81c'; // Replace with your NewsAPI key
const apiUrl = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

async function fetchNews(url = "", data = {}) {
  try {
    const response = await fetch(apiUrl, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const dataArray = await response.json();
    displayNews(dataArray.articles)
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}

function displayNews(articles) {
  const newsContainer = document.querySelector('.newsContainer');
  newsContainer.innerHTML = ''; // Clear previous content

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

// Fetch and display news articles when the page loads
fetchNews();
}
sdk__content_loadscreen = () => {
  document.onreadystatechange = function () {
      if (document.readyState === 'complete') {
        // Simulate progress for demonstration purposes
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
        }, 50); // Change this time to adjust progress speed in milliseconds
      }
    };
    
}
sdk__content_loadscreen();