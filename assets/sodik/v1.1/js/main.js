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
  <div class="evVpTa">
    <div class="MenuStyled__Menu-tfdk7q-1 ksccCe">
      <div class="MenuStyled__MenuItemButton-tfdk7q-3 hmxIoX">
        <button class="eEzGYE">
          <div class="jyhKVg" style="font-size: 16px; padding: 13px 0px; justify-content: start;">Bantuan</div>
          <div color="#000" class="cZKzfj"></div>
        </button>
        <span style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"></span>
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

async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayNews(data.articles)
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
document.addEventListener("DOMContentLoaded", (event) => { fetchNews(); });
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