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


// SHARE BUTTON LOGIC
// const shareBtn = document.getElementById('shareBtn');
// const shareMenu = document.getElementById('shareMenu');
// const copyLinkBtn = document.getElementById('copyLinkBtn');
// const copiedMsg = document.getElementById('copiedMsg');
// const shareInput = document.getElementById('shareInput');

// shareInput.value = window.location.href;

// shareBtn.addEventListener('click', function (e) {
//     e.stopPropagation();
//     const wasOpen = shareMenu.classList.contains('show');
//     document.querySelectorAll('.share-menu.show').forEach(el => el.classList.remove('show'));
//     if (!wasOpen) {
//         shareMenu.classList.add('show');
//         shareMenu.setAttribute('aria-hidden', 'false');
//         try {
//             shareInput.value = window.top.location.href;
//         } catch (e) {
//             // fallback to current window location if cross-origin blocked
//             shareInput.value = window.location.href;
//         }
//         setTimeout(() => shareInput.select(), 90);
//     } else {
//         shareMenu.classList.remove('show');
//         shareMenu.setAttribute('aria-hidden', 'true');
//     }
// });
// copyLinkBtn.addEventListener('click', function () {
//     navigator.clipboard.writeText(shareInput.value).then(function () {
//         copiedMsg.classList.add('show');
//         setTimeout(() => copiedMsg.classList.remove('show'), 1200);
//     });
//     shareInput.select();
// });

    // hide share menu on body/overlay click or Esc
    // document.addEventListener('click', e => {
    //     if (shareMenu && !shareMenu.contains(e.target) && !shareBtn.contains(e.target))
    //         shareMenu.classList.remove('show');
    // });
    // document.addEventListener('keydown', e => {
    //     if (e.key === "Escape" && shareMenu) shareMenu.classList.remove('show');
    // });


// window.addEventListener('load', function () {
//     const bgmAudio = document.getElementById('bgmAudio');
//     bgmAudio.volume = 0.15;
//     const bgmButton = document.getElementById('bgmButton');
//     let musicOn = true;

//     function toggleMusic() {
//         if (musicOn) {
//             bgmAudio.pause();
//             bgmButton.textContent = '🎵 OFF';
//             bgmButton.classList.add('off');
//             musicOn = false;
//         } else {
//             bgmAudio.play().then(function () {
//                 bgmButton.textContent = '🎵 ON';
//                 bgmButton.classList.remove('off');
//                 musicOn = true;
//             }).catch(function (error) {
//                 console.log('Could not play music:', error);
//             });
//         }
//     }

//     bgmButton.onclick = toggleMusic;

//     setTimeout(function () {
//         bgmAudio.play().catch(function (error) {
//             musicOn = false;
//             bgmButton.textContent = '🎵 OFF';
//             bgmButton.classList.add('off');
//         });
//     }, 500);

//     const goToPage1 = document.getElementById("goToPage1");

//     goToPage1.addEventListener("click", function () {
//         if ($("#flipbook").turn) {
//             $("#flipbook").turn("page", 1);
//         }

//         const audioPath = goToPage1.dataset.audioPath;
//         if (audioPath) {
//             const audio = new Audio(audioPath);
//             audio.play();
//         }
//     });

//     //  document.getElementById("whatsappShareBtn").addEventListener("click", function () {
//     //   const pageUrl = document.getElementById("shareInput").value || window.location.href;
//     //   const whatsappUrl = "https://wa.me/?text=" + encodeURIComponent(pageUrl);
//     //   window.open(whatsappUrl, "_blank");
//     // });
// });








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



 const shareBtn = document.getElementById('shareBtn');
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
            shareModal.classList.remove('hidden');
            shareOverlay.classList.remove('hidden');
            shareInput.select();
        });

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

        // document.getElementById('gmailBtn').addEventListener('click', () => {
        //     const url = encodeURIComponent(shareInput.value);
        //     window.open(`mailto:?subject=Check this out&body=${url}`, '_blank');
        // });

        // document.getElementById('linkedinBtn').addEventListener('click', () => {
        //     const url = encodeURIComponent(shareInput.value);
        //     window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        // });

        // document.getElementById('instagramBtn').addEventListener('click', () => {
        //     alert('Instagram sharing requires the app. Copy the link and share it manually.');
        // });

//         document.getElementById('instagramBtn').addEventListener('click', () => {
//     const url = encodeURIComponent(shareInput.value);
//     window.location.href = `intent://share?text=${url}#Intent;scheme=instagram;package=com.instagram.android;end`;
// });

// document.getElementById('instagramBtn').addEventListener('click', () => {
//     const liveURL = encodeURIComponent(shareInput.value); // your LIVE URL here
//     window.open(`https://www.instagram.com/?url=${liveURL}`, "_blank");
// });

// document.getElementById('instagramBtn').addEventListener('click', () => {

//     const link = shareInput.value;

//     // Copy the link automatically
//     navigator.clipboard.writeText(link).then(() => {

//         // Try opening Instagram app
//         window.location.href = "instagram://app";

//         // Notify user
//         alert("Link copied! Open Instagram and paste it into your post or story.");
//     });
// });


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

    let musicOn = false;
 updateIcons();
    function updateIcons() {
        if (musicOn) {
            musicOnImg.classList.remove("hidden");
            musicOffImg.classList.add("hidden");
        } else {
            musicOnImg.classList.add("hidden");
            musicOffImg.classList.remove("hidden");
        }
    }

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
    { page: 1, title: "Cover Page", keywords: ["cover", "front", "home", "title"] },
    { page: 2, title: "Introduction", keywords: ["intro", "introduction", "about"] },
    { page: 4, title: "Chapter 1", keywords: ["chapter 1", "getting started"] },
    { page: 6, title: "Chapter 2", keywords: ["chapter 2", "features"] },
    { page: 8, title: "Chapter 3", keywords: ["chapter 3", "examples"] },
    { page: 10, title: "Conclusion", keywords: ["conclusion", "end", "summary"] },
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


// ==================== ZOOM CONTROL FUNCTIONALITY ====================

const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomSlider = document.getElementById('zoomSlider');
const zoomPercentage = document.getElementById('zoomPercentage');
const flipbookContainer = document.getElementById('flipbook');

let currentZoom = 100;

// Apply zoom to flipbook
function applyZoom(zoomLevel) {
    currentZoom = zoomLevel;
    const scale = zoomLevel / 100;

    if (flipbookContainer) {
        flipbookContainer.style.transform = `scale(${scale})`;
        flipbookContainer.style.transformOrigin = 'center center';
    }

    // Update display
    zoomPercentage.textContent = `${zoomLevel}%`;
    zoomSlider.value = zoomLevel;
    
    // Update button states
    updateButtonStates();
}

// Update button disabled states
function updateButtonStates() {
    // Disable zoom out button at 100%
    if (currentZoom <= 100) {
        zoomOutBtn.disabled = true;
        zoomOutBtn.style.opacity = '0.4';
        zoomOutBtn.style.cursor = 'not-allowed';
    } else {
        zoomOutBtn.disabled = false;
        zoomOutBtn.style.opacity = '1';
        zoomOutBtn.style.cursor = 'pointer';
    }
    
    // Disable zoom in button at maximum (150%)
    if (currentZoom >= 130) {
        zoomInBtn.disabled = true;
        zoomInBtn.style.opacity = '0.4';
        zoomInBtn.style.cursor = 'not-allowed';
    } else {
        zoomInBtn.disabled = false;
        zoomInBtn.style.opacity = '1';
        zoomInBtn.style.cursor = 'pointer';
    }
}

// Zoom In
zoomInBtn.addEventListener('click', function() {
    if (currentZoom < 130) {
        currentZoom += 5;
        applyZoom(currentZoom);
    }
});

// Zoom Out
zoomOutBtn.addEventListener('click', function() {
    if (currentZoom > 100) {
        currentZoom -= 5;
        applyZoom(currentZoom);
    }
});

// Zoom Slider
zoomSlider.addEventListener('input', function() {
    applyZoom(parseInt(this.value));
});

// Initialize button states on page load
updateButtonStates();


// Mouse Wheel Zoom (Optional - hold Ctrl/Cmd + scroll)
document.addEventListener('wheel', function(e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        
        if (e.deltaY < 0) {
            // Scroll up - zoom in
            if (currentZoom < 120) {
                currentZoom += 5;
                applyZoom(currentZoom);
            }
        } else {
            // Scroll down - zoom out
            if (currentZoom > 80) {
                currentZoom -= 5;
                applyZoom(currentZoom);
            }
        }
    }
}, { passive: false });

// Keyboard Shortcuts (Optional)
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Plus for zoom in
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')) {
        e.preventDefault();
        if (currentZoom < 120) {
            currentZoom += 10;
            applyZoom(currentZoom);
        }
    }
    
    // Ctrl/Cmd + Minus for zoom out
    if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        if (currentZoom > 80) {
            currentZoom -= 10;
            applyZoom(currentZoom);
        }
    }
    
    // Ctrl/Cmd + 0 to reset zoom
    if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        applyZoom(100);
    }
});

// Initialize
applyZoom(100);


// ********************************zoom in zoom out button end ********************************** */


// *************************************autoplay flipbook code start************************************ */

// ==================== AUTO PLAY WITH CONTINUOUS SMOOTH TIMELINE ====================
// const autoPlayBtn = document.getElementById('autoPlayBtn');
// const playIcon = document.getElementById('playIcon');
// const pauseIcon = document.getElementById('pauseIcon');
// const autoPlayProgressFill = document.getElementById('autoPlayProgressFill');
// const autoPlayThumb = document.getElementById('autoPlayThumb');
// const progressContainer = document.querySelector('.autoplay-progress-container');

// let isAutoPlaying = false;
// let progressInterval = null;
// let currentProgress = 0;
// const pageWaitTime = 2000;
// let totalPages = 0;
// let startTime = 0;
// let elapsedTime = 0;
// let pausedTime = 0;
// let isDragging = false;

// // Initialize
// $(document).ready(function() {
//     // Ensure totalPages is at least 1 to avoid division errors
//     totalPages = $('#flipbook').turn ? $('#flipbook').turn('pages') : 12;
//     const currentPage = $('#flipbook').turn('page') || 1;
    
//     // FIX 1: Use correct initial math
//     currentProgress = getProgressFromPage(currentPage);
//     updateProgressBar(currentProgress);
//     pausedTime = (currentProgress / 100) * getDuration();
//     elapsedTime = pausedTime;
// });

// // Helper to get total duration based on intervals (Pages - 1)
// function getDuration() {
//     const effectivePages = totalPages > 1 ? totalPages - 1 : 1;
//     return effectivePages * pageWaitTime;
// }

// // Helper to calculate percentage from page number correctly
// function getProgressFromPage(page) {
//     if (totalPages <= 1) return 100;
//     // FIX 2: Divide by (totalPages - 1) so the last page equals 100%
//     return ((page - 1) / (totalPages - 1)) * 100;
// }

// // Update progress bar and thumb position
// function updateProgressBar(percentage) {
//     const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
//     autoPlayProgressFill.style.width = `${clampedPercentage}%`;
//     autoPlayThumb.style.left = `${clampedPercentage}%`;
// }

// // Smooth progress animation
// function animateProgress() {
//     if (isDragging) return; 
    
//     const currentTime = Date.now();
//     elapsedTime = pausedTime + (currentTime - startTime);
    
//     const totalDuration = getDuration();

//     currentProgress = (elapsedTime / totalDuration) * 100;
    
//     // Prevent progress from exceeding 100% visually before the logic stops it
//     if (currentProgress > 100) currentProgress = 100;

//     updateProgressBar(currentProgress);
    
//     // Calculate target page based on time
//     const targetPage = Math.min(Math.floor(elapsedTime / pageWaitTime) + 1, totalPages);
//     const currentPage = $('#flipbook').turn('page');
    
//     if (targetPage !== currentPage && targetPage <= totalPages) {
//         $('#flipbook').turn('page', targetPage);
//     }
    
//     // Stop if we reached the end (100% or last page start)
//     if (currentProgress >= 100) {
//         // Ensure we are actually on the last page visually
//         if ($('#flipbook').turn('page') !== totalPages) {
//              $('#flipbook').turn('page', totalPages);
//         }
//         stopAutoPlay();
//         // Force bar to full 100% on finish
//         updateProgressBar(100);
//     }
// }

// // Start auto play
// function startAutoPlay() {
   
//     // Check if we are already at the end, reset to start if so
//     if (currentProgress >= 100) {
//         $('#flipbook').turn('page', 1);
//         currentProgress = 0;
//         elapsedTime = 0;
//         pausedTime = 0;
//     }
//  refreshArrows();
//     isAutoPlaying = true;
//     autoPlayBtn.classList.add('playing');
//     playIcon.classList.add('hidden');
//     pauseIcon.classList.remove('hidden');
    
//     startTime = Date.now();
    
//     // Don't reset pausedTime here, use what was saved or calculated
//     progressInterval = setInterval(animateProgress, 16);
// }

// // Stop auto play
// function stopAutoPlay() {
//     isAutoPlaying = false;
//     autoPlayBtn.classList.remove('playing');
//     playIcon.classList.remove('hidden');
//     pauseIcon.classList.add('hidden');
//         refreshArrows();
//     if (progressInterval) {
//         clearInterval(progressInterval);
//         progressInterval = null;
//     }
    
//     // Save the exact current time so we don't jump when resuming
//     pausedTime = elapsedTime; 
// }

// // Toggle auto play
// autoPlayBtn.addEventListener('click', function() {
//     if (isAutoPlaying) {
//         stopAutoPlay();
//     } else {
//         startAutoPlay();
//     }
// });

// // ✅ DRAGGABLE THUMB FUNCTIONALITY
// let startDragX = 0;

// autoPlayThumb.addEventListener('mousedown', function(e) {
//     isDragging = true;
//     startDragX = e.clientX;
//     if (isAutoPlaying) stopAutoPlay();
//     e.preventDefault();
// });

// document.addEventListener('mousemove', function(e) {
//     if (!isDragging) return;
    
//     const containerRect = progressContainer.getBoundingClientRect();
//     const offsetX = e.clientX - containerRect.left;
//     const percentage = (offsetX / containerRect.width) * 100;
    
//     currentProgress = Math.min(Math.max(percentage, 0), 100);
//     updateProgressBar(currentProgress);
    
//     // Update page based on progress
//     const targetPage = Math.max(1, Math.ceil((currentProgress / 100) * totalPages));
    
//     // Only turn if the page is different to prevent stutter
//     if ($('#flipbook').turn && $('#flipbook').turn('page') !== targetPage) {
//         $('#flipbook').turn('page', targetPage);
//     }
// });

// document.addEventListener('mouseup', function() {
//     if (isDragging) {
//         isDragging = false;
//         // FIX 3: Recalculate time based on correct duration math
//         pausedTime = (currentProgress / 100) * getDuration();
//         elapsedTime = pausedTime;
//     }
// });

// // Click on progress bar to jump
// progressContainer.addEventListener('click', function(e) {
//     if (isDragging) return;
    
//     const rect = this.getBoundingClientRect();
//     const offsetX = e.clientX - rect.left;
//     const percentage = (offsetX / rect.width) * 100;
    
//     currentProgress = Math.min(Math.max(percentage, 0), 100);
//     updateProgressBar(currentProgress);
    
//     const targetPage = Math.max(1, Math.ceil((currentProgress / 100) * totalPages));
//     if ($('#flipbook').turn) {
//         $('#flipbook').turn('page', targetPage);
//     }
    
//     // FIX 4: Recalculate time based on correct duration math
//     pausedTime = (currentProgress / 100) * getDuration();
//     elapsedTime = pausedTime;
    
//     if (isAutoPlaying) {
//         stopAutoPlay();
//     }
// });

// // Update on page turn
// $('#flipbook').bind('turned', function(event, page) {
//     const totalPagesCount = $('#flipbook').turn('pages');
//     const pageNoElement = document.getElementById('page-no');
    
//     // Update Page Number Display (your existing code)
//     if (pageNoElement) {
//         if (page === 1) {
//             pageNoElement.textContent = `1 / ${totalPagesCount}`;
//         } else if (page === totalPagesCount) {
//             pageNoElement.textContent = `${totalPagesCount} / ${totalPagesCount}`;
//         } else if (page % 2 === 0) {
//             pageNoElement.textContent = `${page}-${page + 1} / ${totalPagesCount}`;
//         } else {
//             pageNoElement.textContent = `${page - 1}-${page} / ${totalPagesCount}`;
//         }
//     }
    
//     // Assuming updateActiveThumbnail exists in your other code
//     if(typeof updateActiveThumbnail === 'function') {
//         updateActiveThumbnail(page);
//     }
    
//     // FIX 5: The Main Fix for "Jumping"
//     // Only force-update the progress bar if we are NOT auto-playing.
//     // If we are auto-playing, the timer handles the bar smoothly.
//     // If we just paused, we want to keep the exact fractional time, so we don't update here either.
//     // We only update here if the user manually flipped the page (swipe/corner click).
    
//     if (!isAutoPlaying && !isDragging) {
//         // We calculate the "Ideal" progress for this page
//         const idealPageProgress = getProgressFromPage(page);
        
//         // Calculate the difference between where the bar is NOW vs where the page is
//         const diff = Math.abs(currentProgress - idealPageProgress);
        
//         // If the difference is large (e.g., > 5%), assume manual page turn and snap the bar.
//         // If difference is small, it's likely just a pause event, so keep the exact position.
//         if (diff > (100 / totalPages) / 2) {
//             currentProgress = idealPageProgress;
//             updateProgressBar(currentProgress);
//             pausedTime = (currentProgress / 100) * getDuration();
//             elapsedTime = pausedTime;
//         }
//     }
// });
// */*************************************autoplay flipbook code end************************************ */


// ***********************************download code start******************************************

const downloadBtn = document.getElementById("download-btn");
const downloadPopup = document.getElementById("downloadPopup");

downloadBtn.addEventListener("click", () => {

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
});
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
