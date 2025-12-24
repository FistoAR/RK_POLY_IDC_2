const navToggle = document.getElementById('navToggle');
const tocNav = document.getElementById('tocNav');
const navOverlay = document.getElementById('navOverlay');

function openMenu() {
    navToggle.classList.add('open');
    tocNav.classList.add('show');
    navOverlay.classList.add('show');
    navToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    navToggle.classList.remove('open');
    tocNav.classList.remove('show');
    navOverlay.classList.remove('show');
    navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (tocNav.classList.contains('show')) closeMenu();
    else openMenu();
});

// Click outside to close
document.addEventListener('click', (e) => {
    const isMenuVisible = tocNav.classList.contains('show');
    const isClickInsideMenu = tocNav.contains(e.target);
    const isClickOnToggle = navToggle.contains(e.target);
    
    if (isMenuVisible && !isClickInsideMenu && !isClickOnToggle) {
        closeMenu();
    }
});

// Prevent clicks inside menu from closing it
tocNav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Close when clicking overlay
navOverlay.addEventListener('click', closeMenu);

// Close when clicking menu links
document.querySelectorAll('.toc-list a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && tocNav.classList.contains('show')) {
        closeMenu();
    }
});


function updateActiveThumbnail(currentPage) {
    document.querySelectorAll('.tb-link').forEach(item => {
        const itemPage = parseInt(item.dataset.page);

        // Remove old active
        item.classList.remove('active');

        // Match if the item page equals the current flipbook page
        if (itemPage === currentPage) {
            item.classList.add('active');
        }
    });
}

// When clicking a thumbnail
document.querySelectorAll('.tb-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const pageNumber = parseInt(this.dataset.page);
        const audioPath = this.dataset.audioPath;

        // Navigate to flipbook page
        if ($('#flipbook').turn) {
            $('#flipbook').turn('page', pageNumber);
        }

        // Update active thumbnail
        updateActiveThumbnail(pageNumber);

        // Play audio if available
        if (audioPath) {
            const audio = new Audio(audioPath);
            audio.play().catch(err => console.log('Audio play failed:', err));
        }

        closeMenu();
    });
});

// Detect page change automatically in flipbook
$('#flipbook').bind("turned", function(event, page) {
    updateActiveThumbnail(page);
});

// Run once on page load
document.addEventListener("DOMContentLoaded", () => {
    const firstPage = $('#flipbook').turn('page');
    updateActiveThumbnail(firstPage);
});






// ************************bottom thumnail code start ------------------------------------- -->
const navToggle1 = document.getElementById('navToggle1');
const tocNav1 = document.getElementById('tocNav1');
const navOverlay1 = document.getElementById('navOverlay1');
function openMenu1() {
    navToggle1.classList.add('open');
    tocNav1.classList.add('show');
    navOverlay1.classList.add('show');
    navToggle1.setAttribute('aria-expanded', 'true');
}1
function closeMenu1() {
    navToggle1.classList.remove('open');
    tocNav1.classList.remove('show');
    navOverlay1.classList.remove('show');
    navToggle1.setAttribute('aria-expanded', 'false');
}
navToggle1.addEventListener('click', function () {
    if (tocNav1.classList.contains('show')) closeMenu1();
    else openMenu1();
});
navOverlay1.addEventListener('click', closeMenu1);
document.querySelectorAll('.toc-list1 a').forEach(link => {
    link.addEventListener('click', closeMenu1);
});
// Keyboard: ESC to close
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") closeMenu1();
});




// // Set your current page number (dynamic)
// let currentPage = 4; // example: you are on page 4-5

// document.addEventListener("DOMContentLoaded", () => {

//     // Apply active based on current page
//     document.querySelectorAll(".tb-link").forEach(item => {
//         if (item.getAttribute("data-page") == currentPage) {
//             item.classList.add("active");
//         }
//     });

//     // On click update active thumbnail
//     document.querySelectorAll('.tb-link').forEach(item => {
//         item.addEventListener('click', function () {

//             // Remove previous active
//             document.querySelectorAll('.tb-link')
//                 .forEach(el => el.classList.remove('active'));

//             // Add active to clicked item
//             this.classList.add('active');

//             // Update currentPage variable
//             currentPage = this.getAttribute("data-page");
//         });
//     });
// });



// ************************bottom thumnail code end  ------------------------------------- -->





// ****************************share button navbar functionality start************************** 

 var triggerIcon = document.getElementById('navMenuBarMobile');
  var overlay = document.getElementById('navMobileOverlay');

  function setIcon(iName) {
    if (iName == 'menu') {
      triggerIcon.src = '../global assets/icons/doted-icon.svg';
      triggerIcon.style.scale = 1;
      triggerIcon.style.transform = 'translateY(-50%)';
    }
    else if (iName == 'close') {
      triggerIcon.src = '../global assets/bottom-navbar/close-icon.svg';
      triggerIcon.style.scale = .7;
      triggerIcon.style.transform = 'translateY(-65%)';
    }
    else triggerIcon.src = '';
  }

  function openOverlay() {
    if (overlay.classList.contains('nav-mobile-overlay--visible')) {
      overlay.classList.remove('nav-mobile-overlay--visible');
      setIcon('menu');
    }
    else {
      overlay.classList.add('nav-mobile-overlay--visible');
      setIcon('close');
    }
  }

  function closeOverlay() {
    overlay.classList.remove('nav-mobile-overlay--visible');
    setIcon('menu');
  }

  triggerIcon.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    openOverlay();
  });


  overlay
    .querySelector('.nav-mobile-overlay__backdrop')
    .addEventListener('click', closeOverlay);

 const shareBtn = document.getElementById('shareBtn');
 const navMobileShareIcon = document.getElementById('navMobileShareIcon');
        const shareModal = document.getElementById('shareModal');
        const shareOverlay = document.getElementById('shareOverlay');
        const closeBtn = document.getElementById('closeBtn');
        const shareInput = document.getElementById('shareInput');
        const copyBtn = document.getElementById('copyBtn');
        const copiedMsg = document.getElementById('copiedMsg');

        // Set link
        shareInput.value = window.top.location.href;

        // Open modal
        shareBtn.addEventListener('click', () => {
            showShareMenu();
        });
       

        function showShareMenu() {
            shareModal.classList.remove('hidden');
            shareOverlay.classList.remove('hidden');
            shareInput.select();
        }

        // Close modal
        const closeModal = () => {
            shareModal.classList.add('hidden');
            shareOverlay.classList.add('hidden');
        };

        closeBtn.addEventListener('click', closeModal);
        shareOverlay.addEventListener('click', closeModal);

        // Copy link
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(shareInput.value).then(() => {
                copiedMsg.classList.remove('hidden');
                setTimeout(() => copiedMsg.classList.add('hidden'), 1500);
            });
        });

        // Social share functions
        document.getElementById('whatsappBtn').addEventListener('click', () => {
            const url = encodeURIComponent(shareInput.value);
            window.open(`https://wa.me/?text=${url}`, '_blank');
        });

        document.getElementById('twitterBtn').addEventListener('click', () => {
            const url = encodeURIComponent(shareInput.value);
            window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
        });

        document.getElementById('facebookBtn').addEventListener('click', () => {
            const url = encodeURIComponent(shareInput.value);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        });

        // LinkedIn Share
document.getElementById('linkedInBtn').addEventListener('click', () => {
    const url = encodeURIComponent(shareInput.value);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
});


// mobile share
const mobileShareModal = document.getElementById('shareModalMobile');
const mobileShareOverlay = document.getElementById('shareOverlayMobile');
const mobileShareCloseBtn = document.getElementById('shareCloseBtnMobile');

const mobileShareLinkInput = document.getElementById('shareInputMobile');
const mobileCopyLinkBtn = document.getElementById('copyBtnMobile');
const mobileCopiedToast = document.getElementById('copiedMsgMobile');

// Set link
mobileShareLinkInput.value = window.top.location.href;

// Open modal
navMobileShareIcon.addEventListener('click', showMobileShareMenu);

function showMobileShareMenu() {
closeOverlay();
  mobileShareModal.classList.remove('hidden');
  mobileShareOverlay.classList.remove('hidden');
  mobileShareLinkInput.select();
}

// Close modal
function closeMobileShareMenu() {
  mobileShareModal.classList.add('hidden');
  mobileShareOverlay.classList.add('hidden');
}

mobileShareCloseBtn.addEventListener('click', closeMobileShareMenu);
mobileShareOverlay.addEventListener('click', closeMobileShareMenu);

// Copy link
mobileCopyLinkBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(mobileShareLinkInput.value).then(() => {
    mobileCopiedToast.classList.remove('hidden');
    setTimeout(() => mobileCopiedToast.classList.add('hidden'), 1500);
  });
});

// Social shares
document.getElementById('waShareMobile').addEventListener('click', () => {
  const url = encodeURIComponent(mobileShareLinkInput.value);
  window.open(`https://wa.me/?text=${url}`, '_blank');
});

document.getElementById('twShareMobile').addEventListener('click', () => {
  const url = encodeURIComponent(mobileShareLinkInput.value);
  window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
});

document.getElementById('fbShareMobile').addEventListener('click', () => {
  const url = encodeURIComponent(mobileShareLinkInput.value);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
});

document.getElementById('lnShareMobile').addEventListener('click', () => {
  const url = encodeURIComponent(mobileShareLinkInput.value);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
});



        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });





        // ****************************share button navbar functionality end************************** 
window.addEventListener('load', function () {
    const bgmAudio = document.getElementById('bgmAudio');
    bgmAudio.volume = 0.15;

    const bgmButton = document.getElementById('bgmButton');
    const musicOnImg = document.getElementById('musicOnImg');
    const musicOffImg = document.getElementById('musicOffImg');

    const mobileAudioIcon = document.getElementById('navMobileAudioIcon');
    const MOBILE_MUSIC_ON_SRC = "../global assets/icons/music-on-icon.svg";
    const MOBILE_MUSIC_OFF_SRC = "../global assets/icons/music-off-icon.svg";


    let musicOn = true;
 updateIcons();
    function updateIcons() {
        if (musicOn) {
            musicOnImg.classList.remove("hidden");
            musicOffImg.classList.add("hidden");
            mobileAudioIcon.src = MOBILE_MUSIC_ON_SRC;

        } else {
            musicOnImg.classList.add("hidden");
            musicOffImg.classList.remove("hidden");
            mobileAudioIcon.src = MOBILE_MUSIC_OFF_SRC;

        }
    }

    mobileAudioIcon.addEventListener('click', toggleMusic);


    function toggleMusic() {
        if (musicOn) {
            bgmAudio.pause();
            musicOn = false;
        } else {
            bgmAudio.play().catch(function (error) {
                console.log('Could not play music:', error);
                return;
            });
            musicOn = true;
        }

        updateIcons();
    }

    bgmButton.onclick = toggleMusic;

    // Auto play after load
    setTimeout(function () {
        bgmAudio.play().catch(function () {
            musicOn = false;
        });
        updateIcons();
    }, 500);

    document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    musicOn = true;
    toggleMusic()
  }
  else {
    musicOn = false;
    toggleMusic()
  }
});

bgmAudio.addEventListener('pause', () => {
    musicOn = false;
    updateIcons();
});

bgmAudio.addEventListener('play', () => {
    musicOn = true;
    updateIcons();
});


});



// *********************home button start**************
    const goToPage1 = document.getElementById("goToPage1");

    goToPage1.addEventListener("click", function () {
        if ($("#flipbook").turn) {
            $("#flipbook").turn("page", 1);
        }

        const audioPath = goToPage1.dataset.audioPath;
        if (audioPath) {
            const audio = new Audio(audioPath);
            audio.play();
        }
    });


    // *********************home button end**************




$('#flipbook').bind('turned', function (event, page, view) {

  // ✅ UPDATE PAGE COUNTER WITH LAST PAGE FIX
  const totalPages = $('#flipbook').turn('pages');
  const pageNoElement = document.getElementById('page-no');
  
  if (pageNoElement) {
      if (page === 1) {
          // First page (cover)
          pageNoElement.textContent = `1 / ${totalPages}`;
      } else if (page === totalPages) {
          // Last page (back cover) - show single number
          pageNoElement.textContent = `${totalPages} / ${totalPages}`;
      } else if (page % 2 === 0) {
          // Even page - show as spread
          pageNoElement.textContent = `${page}-${page + 1} / ${totalPages}`;
      } else {
          // Odd page - show as spread
          pageNoElement.textContent = `${page - 1}-${page} / ${totalPages}`;
      }
  }
  
  // Update active thumbnail (your existing code)
  updateActiveThumbnail(page);
});






// *****************************search icon code*******************************

// ==================== SEARCH MODAL FUNCTIONALITY ====================
// ==================== SEARCH MODAL - CLICK OUTSIDE TO CLOSE ====================

const searchIcon = document.querySelector('img[alt="search-icon"]');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const closeSearchModal = document.getElementById('closeSearchModal');

// Define your pages with search keywords
const pages = [
    { page: 1, title: "Home page", keywords: ["cover", "front", "home", "title", "rkpoly", "1" , ""] },
    { page: 2, title: "Introduction", keywords: ["intro", "introduction", "about us", "2"] },
    { page: 3, title: "Chapter 1", keywords: ["chapter 1", "getting started", "3", "table of content"] },
    { page: 4, title: "Chapter 2", keywords: ["chapter 2", "features", "4", "round containers"] },
    { page: 5, title: "Chapter 3", keywords: ["chapter 3", "examples", "5", "round square containers"] },
    { page: 6, title: "Introduction", keywords: ["intro", "introduction", "about", "6", "oval containers"] },
    { page: 7, title: "Chapter 1", keywords: ["chapter 1", "getting started", "7", "sweet box containers"] },
    { page: 8, title: "Chapter 2", keywords: ["chapter 2", "features", "8", "sweet box 5 side iml container"] },
    { page: 9, title: "Chapter 3", keywords: ["chapter 3", "examples", "9", "tub containers"] },
    { page: 10, title: "Conclusion", keywords: ["conclusion", "end", "summary", "10", "contact us"] },
];

// ✅ CLOSE SEARCH FUNCTION
const closeSearch = () => {
    searchModal.classList.remove('show');
    searchModal.classList.add('hidden');
    searchInput.value = '';
    searchResults.innerHTML = '<p class="text-gray-500 text-center">Type to search pages...</p>';
};

// ✅ OPEN SEARCH MODAL
if (searchIcon) {
    searchIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent immediate closure
        searchModal.classList.remove('hidden');
        
        requestAnimationFrame(() => {
            searchModal.classList.add('show');
        });
        
        searchInput.focus();
    });
}

// ✅ CLOSE BUTTON CLICK
if (closeSearchModal) {
    closeSearchModal.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSearch();
    });
}

// ✅ CLICK OUTSIDE MODAL TO CLOSE - THIS IS THE KEY!
document.addEventListener('click', (e) => {
    // Check if modal is visible
    const isModalVisible = !searchModal.classList.contains('hidden');
    
    // Check if click is inside modal or on search icon
    const isClickInsideModal = searchModal.contains(e.target);
    const isClickOnSearchIcon = searchIcon && searchIcon.contains(e.target);
    
    // Close if clicking outside and modal is open
    if (isModalVisible && !isClickInsideModal && !isClickOnSearchIcon) {
        closeSearch();
    }
});

// ✅ PREVENT CLICKS INSIDE MODAL FROM CLOSING IT
searchModal.addEventListener('click', (e) => {
    e.stopPropagation();
});

// ✅ ESC KEY TO CLOSE
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !searchModal.classList.contains('hidden')) {
        closeSearch();
    }
});

// ✅ SEARCH FUNCTIONALITY
function runSearch() {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        searchResults.innerHTML = '<p class="text-gray-500 text-center">Type to search pages...</p>';
        return;
    }

    const filtered = pages.filter(page =>
        page.title.toLowerCase().includes(query) ||
        page.keywords.some(kw => kw.toLowerCase().includes(query))
    );

    if (filtered.length === 0) {
        searchResults.innerHTML = '<p class="text-gray-500 text-center">No results found</p>';
        return;
    }

    searchResults.innerHTML = filtered.map(page => `
        <div class="search-result-item p-3 hover:bg-gray-700 cursor-pointer border-b rounded" data-page="${page.page}">
            <div class="text-white font-semibold text-[.9vw]">${page.title}</div>
            <div class="text-gray-400 text-[.7vw]">Page ${page.page}</div>
        </div>
    `).join('');

    // Add click events to results
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const pageNum = parseInt(item.dataset.page);
            if ($('#flipbook').turn) {
                $('#flipbook').turn('page', pageNum);
            }
            closeSearch();
        });
    });
}

// ✅ SEARCH INPUT - TYPE TO FILTER
if (searchInput) {
    searchInput.addEventListener('input', runSearch);

    // Enter key to navigate to first result
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const firstResult = document.querySelector('.search-result-item');
            if (firstResult) firstResult.click();
        }
    });
}

// ✅ SEARCH BUTTON CLICK
document.getElementById("SearchModal")?.addEventListener("click", (e) => {
    e.stopPropagation();
    runSearch();
    const firstResult = document.querySelector('.search-result-item');
    if (firstResult) firstResult.click();
});

// *****************************search icon code end*******************************



// *********************************zoom in zoom out button start ********************************** */


// ***********************************download code start******************************************

const downloadBtn = document.getElementById("download-btn");
const navMobileDownloadIcon = document.getElementById("navMobileDownloadIcon");
const downloadPopup = document.getElementById("downloadPopup");

downloadBtn.addEventListener("click", () => {
    startDownload();
});
navMobileDownloadIcon.addEventListener("click", () => {
    startDownload();
});

function startDownload() {
    
    // 1. Show notification popup
    downloadPopup.classList.remove("hidden");
    setTimeout(() => {
        downloadPopup.classList.add("opacity-100");
    }, 10);

    // 2. Auto-hide popup after 2 seconds
    setTimeout(() => {
        downloadPopup.classList.remove("opacity-100");
        setTimeout(() => downloadPopup.classList.add("hidden"), 300);
    }, 2000);

    // 3. Trigger PDF download
    const link = document.createElement("a");
    link.href = "../global assets/500ml Round.pdf";   // <<-- put your PDF file path
    link.download = ".pdf";                 // <<-- filename user will download
    document.body.appendChild(link);
    link.click();
    link.remove();
}
// ***********************************download code end******************************************

// const searchModal1 = document.getElementById("searchModal");
// const searchIcon1 = document.querySelector('img[alt="search-icon"]');
// const closeSearchModal1 = document.getElementById("closeSearchModal");

// // OPEN MODAL WITH ANIMATION
// searchIcon1.addEventListener("click", () => {
//     searchModal1.classList.remove("hidden");

//     // allow browser to apply display change
//     requestAnimationFrame(() => {
//         searchModal1.classList.add("show");
//     });
// });

// // CLOSE MODAL WITH ANIMATION
// closeSearchModal1.addEventListener("click", () => {
//     searchModal1.classList.remove("show");

//     // after animation ends, hide it
//     searchModal1.addEventListener(
//         "transitionend",
//         () => {
//             searchModal1.classList.add("hidden");
//         },
//         { once: true }
//     );
// });




document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.svg-container').forEach(container => {
    const src = container.getAttribute('data-src');
    if (src) {
      fetch(src)
        .then(response => {
          if (!response.ok) throw new Error(`Failed to load ${src}`);
          return response.text();
        })
        .then(svgText => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
          const svgEl = svgDoc.querySelector("svg");
          if (svgEl) {
            // Clean up SVG dimensions
            svgEl.removeAttribute("width");
            svgEl.removeAttribute("height");
            svgEl.style.width = "100%";
            svgEl.style.height = "100%";
            svgEl.style.cursor = "pointer";
            svgEl.classList.add("line-reveal9"); // keep your reveal animation
          }
          container.innerHTML = svgEl ? svgEl.outerHTML : svgText;
        })
        .catch(err => console.error("SVG Load Error:", err));
    }
  });
});




// ************************ Zoom In Zoom Out Code Start ******************************

// ==================== ZOOM CONTROL FUNCTIONALITY ====================
// 🔥 BULLETPROOF ZOOM SYSTEM - FIXED WHEEL DIRECTION
// 🔥 BESTOMECH ZOOM SYSTEM - EXACT COPY ADAPTED (WHEEL FIXED)

// ************************ Zoom In Zoom Out Code Start ******************************
// 🔥 BULLETPROOF ZOOM SYSTEM WITH ALERTS + PERFECT SCROLLBAR HIDE

const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomSlider = document.getElementById('zoomSlider');
const zoomPercentage = document.getElementById('zoomPercentage');
const flipbookContainer = document.getElementById('flipbook');
const wrapper = document.querySelector('.flipbook-scroll-wrapper');

let currentZoom = 100;
let isZoomed = false;
let isFlipping = false;

// ==================== 🔥 DYNAMIC ZOOM ALERT SYSTEM ====================
function showZoomAlert(message) {
    // Create overlay
    let overlay = document.getElementById('zoom-alert-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'zoom-alert-overlay';
        overlay.style.cssText = `
            position: fixed; inset: 0; background: rgba(0,0,0,0.6);
            z-index: 999999999; opacity: 0; transition: opacity 0.3s ease;
            backdrop-filter: blur(8px); pointer-events: none;
        `;
        document.body.appendChild(overlay);
    }

    // Create alert box
    let alertBox = document.getElementById('zoom-alert-box');
    if (!alertBox) {
        alertBox = document.createElement('div');
        alertBox.id = 'zoom-alert-box';
        alertBox.style.cssText = `
            position: fixed; top: 25%; left: 50%; transform: translateX(-50%) translateY(0);
            background: linear-gradient(135deg, #1a365d, #2c5282); color: white;
            padding: 25px 35px; border-radius: 20px; font-size: 18px; font-weight: 600;
            z-index: 9999999999; box-shadow: 0 25px 50px rgba(0,0,0,0.5);
            opacity: 0; transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
            text-align: center; border: 3px solid rgba(255,255,255,0.3); min-width: 320px;
            font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        `;
        document.body.appendChild(alertBox);
    }

    alertBox.innerHTML = `
        <div style="font-size: 20px; margin-bottom: 12px; font-weight: 700;">${message}</div>
        <div style="font-size: 14px; opacity: 0.9;">Zoom out first (Ctrl+0 or zoom buttons)</div>
    `;
    
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'auto';
    alertBox.style.opacity = '1';
    alertBox.style.transform = 'translateX(-50%) translateY(-10px) scale(1.02)';

    clearTimeout(alertBox.hideTimer);
    alertBox.hideTimer = setTimeout(() => {
        alertBox.style.opacity = '0';
        alertBox.style.transform = 'translateX(-50%) translateY(20px) scale(0.95)';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.style.pointerEvents = 'none', 400);
    }, 3500);
}

// ==================== PERFECT ZOOM FUNCTION ====================
function applyZoom(zoomLevel) {
    currentZoom = zoomLevel;
    const scale = zoomLevel / 100;
    isZoomed = scale !== 1;

    if (flipbookContainer) {
        flipbookContainer.style.transform = `scale(${scale})`;
        flipbookContainer.style.transformOrigin = 'top center';
        flipbookContainer.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        flipbookContainer.style.pointerEvents = isZoomed ? 'none' : 'auto';
    }

    if (wrapper) {
        // 🔥 PERFECT SCROLLBAR LOGIC
        if (isZoomed && scale > 1) {
            // SHOW SCROLLBAR ONLY WHEN ZOOMED > 100%
            wrapper.classList.add('zoomed');
            wrapper.classList.remove('no-scrollbar');
            wrapper.scrollTop = 0;
            wrapper.style.overflowY = 'auto';  // Force enable
        } else {
            // HIDE SCROLLBAR - 100% OR LESS
            wrapper.classList.remove('zoomed');
            wrapper.classList.add('no-scrollbar');
            wrapper.style.overflowY = 'hidden';
            wrapper.scrollTop = 0;
        }
    }

    zoomPercentage.textContent = zoomLevel + '%';
    zoomSlider.value = zoomLevel;

    // Button states
    if (zoomOutBtn) zoomOutBtn.style.opacity = zoomLevel <= 100 ? '0.4' : '1';
    if (zoomInBtn) zoomInBtn.style.opacity = zoomLevel >= 130 ? '0.4' : '1';
    
    console.log(`📏 Zoom: ${zoomLevel}% | Scrollbar: ${isZoomed ? 'ON' : 'OFF'}`);
}

// ==================== 🔥 TOC/NAVIGATION BLOCKERS ====================
function blockZoomedAction(e, message) {
    if (!isZoomed) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    showZoomAlert(message);
    return false;
}

// 🔥 TABLE OF CONTENTS (navToggle/navToggle1)
['navToggle', 'navToggle1'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', (e) => blockZoomedAction(e, 'Table of contents blocked while zoomed<br>Please zoom out first'), true);
    }
});

// 🔥 SEARCH
document.querySelectorAll('img[alt="search-icon"], #searchIconDesktop').forEach(el => {
    el.addEventListener('click', (e) => blockZoomedAction(e, 'Search blocked while zoomed<br>Please zoom out first'), true);
});

// 🔥 THUMBNAILS
document.querySelectorAll('.tb-link').forEach(link => {
    link.addEventListener('click', (e) => blockZoomedAction(e, 'Page jump blocked while zoomed<br>Please zoom out first'), true);
});

// ==================== BUTTONS + WHEEL ====================
zoomInBtn.onclick = () => { if (currentZoom < 130) applyZoom(currentZoom + 5); };
zoomOutBtn.onclick = () => { if (currentZoom > 100) applyZoom(currentZoom - 5); };
zoomSlider.oninput = (e) => applyZoom(parseInt(e.target.value, 10));

// Wheel zoom
let wheelTimeout;
document.addEventListener('wheel', (e) => {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        clearTimeout(wheelTimeout);
        const delta = e.deltaY > 0 ? -5 : +5;
        const newZoom = Math.max(100, Math.min(130, currentZoom + delta));
        applyZoom(newZoom);
        wheelTimeout = setTimeout(() => {}, 50);
    }
}, { passive: false });

// Keyboard
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && !e.target.closest('.zoom-control-container')) {
        e.preventDefault();
        if (e.key === '+' || e.key === '=') applyZoom(Math.min(130, currentZoom + 5));
        else if (e.key === '-') applyZoom(Math.max(100, currentZoom - 5));
        else if (e.key === '0') applyZoom(100);
    }
});

// ==================== 🔥 PERFECT SCROLLBAR CONTROL ====================
function hideScrollbarDuringFlip() {
    if (wrapper && !isZoomed) wrapper.classList.add('no-scrollbar');
}

function ensureNoScrollbar() {
    if (wrapper && !isZoomed) {
        wrapper.classList.add('no-scrollbar');
        wrapper.classList.remove('zoomed');
    }
}

// 🔥 ALL FLIP EVENTS - BULLETPROOF
if (flipbook) {
    flipbook.bind('start', hideScrollbarDuringFlip);
    flipbook.bind('turning', hideScrollbarDuringFlip);
    flipbook.bind('turned', function(event, page) {
        setTimeout(ensureNoScrollbar, 450); // 🔥 Perfect timing - no right scrollbar
    });
}

// 🔥 Wheel block during flips
wrapper.addEventListener('wheel', (e) => {
    if (isFlipping || !isZoomed) {
        e.preventDefault();
        return false;
    }
}, { passive: false });

// ==================== BLOCK FLIPPING WHEN ZOOMED ====================
function blockFlipWhenZoomed(e) {
    if (!isZoomed) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    showZoomAlert('Page flip blocked while zoomed<br>Zoom out first (Ctrl+0)');
    return false;
}

// Turn.js events
$('#flipbook').bind('start turning', function(e) {
    if (isZoomed) {
        e.preventDefault();
        return false;
    }
});

// DOM blocks
document.querySelectorAll('.ui-arrow-control, .tb-link').forEach(el => {
    el.addEventListener('click', blockFlipWhenZoomed, true);
});
if (flipbookContainer) {
    ['click', 'mousedown', 'touchstart'].forEach(ev => {
        flipbookContainer.addEventListener(ev, blockFlipWhenZoomed, true);
    });
}

// 🏁 INIT
setTimeout(() => applyZoom(100), 1500);
console.log('✅ Zoom system with alerts + scrollbar fix loaded!');
