const CARD_ANIMATION_DURATION = 1500; // match your CSS transition (1.5s)



const RoundContainer = [
  // {
  //   id: "100ml",
  //   centerText: "../global assets/Images/RoundContainer/100ml/centerText.svg",
  //   quotes: "../global assets/Images/RoundContainer/100ml/quotes.svg",
  //   dimension: "../global assets/Images/RoundContainer/100ml/dimension.svg",
  //   weight: "../global assets/Images/RoundContainer/100ml/weight.svg",
  //   grossWeight: "../global assets/Images/RoundContainer/100ml/grossWeight.svg",
  //   cartonSize: "../global assets/Images/RoundContainer/100ml/cartonSize.svg",
  //   cartonWeight:
  //     "../global assets/Images/RoundContainer/100ml/cartonWeight.svg",
  //   piecesPerCarton:
  //     "../global assets/Images/RoundContainer/100ml/PiecesPerCarton.svg",
  //   mainImage: "../global assets/Images/RoundContainer/100ml/100ml.webp",
  //   card: "../global assets/Images/RoundContainer/750mlFalt/card750ML.webp",
  //   bgColor: "#D9D5F4",
  //   topCurve: "../global assets/Images/RoundContainer/100ml/topCurve.webp",
  //   botCurve: "../global assets/Images/RoundContainer/botCurve.webp",
  // },  ../global assets/Images/RoundContainer/750mlFalt/750ml.webp
  {
    id: "250ml",
    centerText: "../global assets/Images/RoundContainer/250ml/centerText.svg",
    quotes: "../global assets/Images/RoundContainer/250ml/quotes.svg",
    dimension: "../global assets/Images/RoundContainer/250ml/dimension.svg",
    weight: "../global assets/Images/RoundContainer/250ml/weight.svg",
    grossWeight: "../global assets/Images/RoundContainer/250ml/grossWeight.svg",
    cartonSize: "../global assets/Images/RoundContainer/250ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundContainer/250ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundContainer/250ml/PiecesPerCarton.svg",
    mainImage: "../global assets/Images/RoundContainer/250ml/250ml.webp",
    card: "../global assets/Images/RoundContainer/750mlFalt/card750ML.webp",

    bgColor: "#E9C5EA",
    topCurve: "../global assets/Images/RoundContainer/250ml/topCurve.webp",
    botCurve: "../global assets/Images/RoundContainer/botCurve.webp",
  },
  {
    id: "400ml",
    centerText: "../global assets/Images/RoundContainer/400ml/centerText.svg",
    quotes: "../global assets/Images/RoundContainer/400ml/quotes.svg",
    dimension: "../global assets/Images/RoundContainer/400ml/dimension.svg",
    weight: "../global assets/Images/RoundContainer/400ml/weight.svg",
    grossWeight: "../global assets/Images/RoundContainer/400ml/grossWeight.svg",
    cartonSize: "../global assets/Images/RoundContainer/400ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundContainer/400ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundContainer/400ml/PiecesPerCarton.svg",
    mainImage: "../global assets/Images/RoundContainer/400ml/400ml.webp",
    card: "../global assets/Images/RoundContainer/1000ml/card1000ML.webp",
    bgColor: "#EBCCCD",
    topCurve: "../global assets/Images/RoundContainer/400ml/topCurve.webp",
    botCurve: "../global assets/Images/RoundContainer/botCurve.webp",
  },
  {
    id: "500ml",
    centerText: "../global assets/Images/RoundContainer/500ml/centerText.svg",
    quotes: "../global assets/Images/RoundContainer/500ml/quotes.svg",
    dimension: "../global assets/Images/RoundContainer/500ml/dimension.svg",
    weight: "../global assets/Images/RoundContainer/500ml/weight.svg",
    grossWeight: "../global assets/Images/RoundContainer/500ml/grossWeight.svg",
    cartonSize: "../global assets/Images/RoundContainer/500ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundContainer/500ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundContainer/500ml/PiecesPerCarton.svg",
    mainImage: "../global assets/Images/RoundContainer/500ml/500ml.webp",
    card: "../global assets/Images/RoundContainer/250ml/card250ML.webp",

    bgColor: "#E5E0D2",
    topCurve: "../global assets/Images/RoundContainer/500ml/topCurve.webp",
    botCurve: "../global assets/Images/RoundContainer/botCurve.webp",
  },
  // {
  //   id: "750mlTall",
  //   centerText:
  //     "../global assets/Images/RoundContainer/750mlTall/centerText.svg",
  //   quotes: "../global assets/Images/RoundContainer/750mlTall/quotes.svg",
  //   dimension: "../global assets/Images/RoundContainer/750mlTall/dimension.svg",
  //   weight: "../global assets/Images/RoundContainer/750mlTall/weight.svg",
  //   grossWeight:
  //     "../global assets/Images/RoundContainer/750mlTall/grossWeight.svg",
  //   cartonSize:
  //     "../global assets/Images/RoundContainer/750mlTall/cartonSize.svg",
  //   cartonWeight:
  //     "../global assets/Images/RoundContainer/750mlTall/cartonWeight.svg",
  //   piecesPerCarton:
  //     "../global assets/Images/RoundContainer/750mlTall/PiecesPerCarton.svg",
  //   mainImage: "../global assets/Images/RoundContainer/750mlTall/750ml.webp",
  //   card: "../global assets/Images/RoundContainer/400ml/card400ML.webp",

  //   bgColor: "#CBDBBC",
  //   topCurve: "../global assets/Images/RoundContainer/750mlTall/topCurve.webp",
  //   botCurve: "../global assets/Images/RoundContainer/botCurve.webp",
  // },
  {
    id: "750mlFalt",
    centerText:
      "../global assets/Images/RoundContainer/750mlFalt/centerText.svg",
    quotes: "../global assets/Images/RoundContainer/750mlFalt/quotes.svg",
    dimension: "../global assets/Images/RoundContainer/750mlFalt/dimension.svg",
    weight: "../global assets/Images/RoundContainer/750mlFalt/weight.svg",
    grossWeight:
      "../global assets/Images/RoundContainer/750mlFalt/grossWeight.svg",
    cartonSize:
      "../global assets/Images/RoundContainer/750mlFalt/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundContainer/750mlFalt/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundContainer/750mlFalt/PiecesPerCarton.svg",
    mainImage: "../global assets/Images/RoundContainer/750mlFalt/750ml.webp",
    card: "../global assets/Images/RoundContainer/400ml/card400ML.webp",

    bgColor: "#BADBCF",
    topCurve: "../global assets/Images/RoundContainer/750mlFalt/topCurve.webp",
    botCurve: "../global assets/Images/RoundContainer/botCurve.webp",
  },
  {
    id: "1000ml",
    centerText: "../global assets/Images/RoundContainer/1000ml/centerText.svg",
    quotes: "../global assets/Images/RoundContainer/1000ml/quotes.svg",
    dimension: "../global assets/Images/RoundContainer/1000ml/dimension.svg",
    weight: "../global assets/Images/RoundContainer/1000ml/weight.svg",
    grossWeight:
      "../global assets/Images/RoundContainer/1000ml/grossWeight.svg",
    cartonSize: "../global assets/Images/RoundContainer/1000ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundContainer/1000ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundContainer/1000ml/PiecesPerCarton.svg",
    mainImage: "../global assets/Images/RoundContainer/1000ml/1000ml.webp",
    card: "../global assets/Images/RoundContainer/500ml/card500ML.webp",

    bgColor: "#BCD3EF",
    topCurve: "../global assets/Images/RoundContainer/1000ml/topCurve.webp",
    botCurve: "../global assets/Images/RoundContainer/botCurve.webp",
  },
];

const RoundSquareContainer = [
  {
    id: "300ml",
    centerText:
      "../global assets/Images/RoundSquareContainer/300ml/centerText.svg",
    quotes: "../global assets/Images/RoundSquareContainer/300ml/quotes.svg",
    dimension:
      "../global assets/Images/RoundSquareContainer/300ml/dimension.svg",
    weight: "../global assets/Images/RoundSquareContainer/300ml/weight.svg",
    grossWeight:
      "../global assets/Images/RoundSquareContainer/300ml/grossWeight.svg",
    cartonSize:
      "../global assets/Images/RoundSquareContainer/300ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundSquareContainer/300ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundSquareContainer/300ml/PiecesPerCarton.svg",
    mainImage:
      "../global assets/Images/RoundSquareContainer/roundSquareContainer.webp",
    bgColor: "#5A98DE",
    prev: "../global assets/Images/RoundSquareContainer/300ml/prev.svg",
    next: "../global assets/Images/RoundSquareContainer/300ml/next.svg",
  },
  {
    id: "500ml",
    centerText:
      "../global assets/Images/RoundSquareContainer/500ml/centerText.svg",
    quotes: "../global assets/Images/RoundSquareContainer/500ml/quotes.svg",
    dimension:
      "../global assets/Images/RoundSquareContainer/500ml/dimension.svg",
    weight: "../global assets/Images/RoundSquareContainer/500ml/weight.svg",
    grossWeight:
      "../global assets/Images/RoundSquareContainer/500ml/grossWeight.svg",
    cartonSize:
      "../global assets/Images/RoundSquareContainer/500ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundSquareContainer/500ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundSquareContainer/500ml/PiecesPerCarton.svg",
    mainImage:
      "../global assets/Images/RoundSquareContainer/roundSquareContainer.webp",
    bgColor: "#915ADE",
    prev: "../global assets/Images/RoundSquareContainer/500ml/prev.svg",
    next: "../global assets/Images/RoundSquareContainer/500ml/next.svg",
  },
  {
    id: "750ml",
    centerText:
      "../global assets/Images/RoundSquareContainer/750ml/centerText.svg",
    quotes: "../global assets/Images/RoundSquareContainer/750ml/quotes.svg",
    dimension:
      "../global assets/Images/RoundSquareContainer/750ml/dimension.svg",
    weight: "../global assets/Images/RoundSquareContainer/750ml/weight.svg",
    grossWeight:
      "../global assets/Images/RoundSquareContainer/750ml/grossWeight.svg",
    cartonSize:
      "../global assets/Images/RoundSquareContainer/750ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundSquareContainer/750ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundSquareContainer/750ml/PiecesPerCarton.svg",
    mainImage:
      "../global assets/Images/RoundSquareContainer/roundSquareContainer.webp",
    bgColor: "#DE5AD5",
    prev: "../global assets/Images/RoundSquareContainer/750ml/prev.svg",
    next: "../global assets/Images/RoundSquareContainer/750ml/next.svg",
  },
  {
    id: "1000ml",
    centerText:
      "../global assets/Images/RoundSquareContainer/1000ml/centerText.svg",
    quotes: "../global assets/Images/RoundSquareContainer/1000ml/quotes.svg",
    dimension:
      "../global assets/Images/RoundSquareContainer/1000ml/dimension.svg",
    weight: "../global assets/Images/RoundSquareContainer/1000ml/weight.svg",
    grossWeight:
      "../global assets/Images/RoundSquareContainer/1000ml/grossWeight.svg",
    cartonSize:
      "../global assets/Images/RoundSquareContainer/1000ml/cartonSize.svg",
    cartonWeight:
      "../global assets/Images/RoundSquareContainer/1000ml/cartonWeight.svg",
    piecesPerCarton:
      "../global assets/Images/RoundSquareContainer/1000ml/PiecesPerCarton.svg",
    mainImage:
      "../global assets/Images/RoundSquareContainer/roundSquareContainer.webp",
    bgColor: "#DE5A84",
    prev: "../global assets/Images/RoundSquareContainer/1000ml/prev.svg",
    next: "../global assets/Images/RoundSquareContainer/1000ml/next.svg",
  },
];




const OvalContainer = [
  {
    id: "ovalSmall",
    centerText: "../global assets/Images/OvalContainer/oval-250ml/oval-250ml-container-text.svg",
     quotes: "../global assets/Images/OvalContainer/oval-250ml/center-caption.svg",
    dimension: "../global assets/Images/OvalContainer/oval-250ml/dimention.svg",
    weight: "../global assets/Images/OvalContainer/oval-250ml/weight.svg",
    grossWeight: "../global assets/Images/OvalContainer/oval-250ml/gross-weight.svg",
    cartonSize: "../global assets/Images/OvalContainer/oval-250ml/carton-size.svg",
    cartonWeight: "../global assets/Images/OvalContainer/oval-250ml/carton-weight.svg",
    piecesPerCarton:
      "../global assets/Images/OvalContainer/oval-250ml/pieces-per-carton.svg",
    mainImage: "../global assets/Images/OvalContainer/oval-250ml/250-container.webp",
    bgColor: "../global assets/Images/OvalContainer/oval-250ml/bottom-bg.webp",
  },
  {
    id: "ovalMedium",
    centerText: "../global assets/Images/OvalContainer/oval-500ml/oval-500ml-container-text.svg",
     quotes: "../global assets/Images/OvalContainer/oval-500ml/center-caption.svg",
    dimension: "../global assets/Images/OvalContainer/oval-500ml/dimension.svg",
    weight: "../global assets/Images/OvalContainer/oval-500ml/weight.svg",
    grossWeight: "../global assets/Images/OvalContainer/oval-500ml/gross-weight.svg",
    cartonSize: "../global assets/Images/OvalContainer/oval-500ml/carton-size.svg",
    cartonWeight:
      "../global assets/Images/OvalContainer/oval-500ml/carton-weight.svg",
    piecesPerCarton:
      "../global assets/Images/OvalContainer/oval-500ml/pieces-per-carton.svg",
    mainImage: "../global assets/Images/OvalContainer/oval-500ml/500-container.webp",
    bgColor: "../global assets/Images/OvalContainer/oval-500ml/bottom-bg.webp",
  },
  // add more ovals if needed
];





let currentIndex = 0;
let autoplayInterval;
let inactivityTimeout;
let isAnimating = false;
let autoplayActive = true;
const AUTOPLAY_DELAY = 5000;
const INACTIVITY_DELAY = 5000;

const track = document.getElementById("carousel-track");
let cards = [];
let currentCardIndex = 0;

const positions = [
  { x: -80, y: 12, scale: 0.7, opacity: 0.95, z: 1, rotate: -30 },
  { x: -48, y: 0, scale: 0.85, opacity: 0.95, z: 2, rotate: -10 },
  { x: 0, y: -12, scale: 1, opacity: 1, z: 5, rotate: 0 },
  { x: 48, y: 0, scale: 0.85, opacity: 0.95, z: 2, rotate: 10 },
  { x: 80, y: 12, scale: 0.7, opacity: 0.95, z: 1, rotate: 30 },
  { scale: 0, opacity: 0, z: 0, rotate: 0 },
  { scale: 0, opacity: 0, z: 0, rotate: 0 },
];

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector('img[src*="RKLogo"]');
  const topText = document.querySelector('[data-img="topText"]');

  if (logo) logo.classList.add("logo-animate");
  if (topText) topText.classList.add("top-text-animate");

  initCarousel();
});

function createCards() {
  RoundContainer.forEach((product, index) => {
    const el = document.createElement("div");
    el.className = "carousel-card";
    el.innerHTML = `<img src="${product.card}" />`;

    track.appendChild(el);
    cards.push(el);
  });

  setTimeout(() => {
    cards.forEach((card, index) => {
      card.classList.add("initial-animate");
      card.style.animationDelay = `${0.6 + index * 0.12}s`;
    });
  }, 100);

  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.remove("initial-animate");
      card.style.animationDelay = "";
      card.style.opacity = "1";
    });
    applyPositions();
  }, 2800);
}

function applyPositions() {
  cards.forEach((card, i) => {
    let pos = (i - currentCardIndex + cards.length) % cards.length;

    if (pos >= positions.length) pos = 5;

    const p = positions[pos];

    card.style.transform = `
      translate(-50%, -50%) 
      translateX(${p.x || 0}%)
      translateY(${p.y || 0}%)
      scale(${p.scale})
      rotate(${p.rotate || 0}deg)
    `;
    card.style.opacity = p.opacity;
    card.style.zIndex = p.z;
    card.style.transition = "all 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
  });
}

function initCarousel() {
  createCards();
  applyPositions();
  updateContent(currentIndex, false);
  startAutoplay();

  // document.getElementById("prevBtn")?.addEventListener("click", () => {
  //   if (!isAnimating) {
  //     navigatePrev();
  //     handleUserInteraction();
  //   }
  // });
  const prevBtn = document.getElementById("prevBtn");

prevBtn?.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  if (!isAnimating) {
    navigatePrev();
    handleUserInteraction();
  }
});


document.getElementById("nextBtn")?.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  if (!isAnimating) {
    navigateNext();
    handleUserInteraction();
  }
});

}




function handleUserInteraction() {
  // Immediately stop current autoplay interval
  stopAutoplay();

  autoplayActive = false;
  clearTimeout(inactivityTimeout);

  inactivityTimeout = setTimeout(() => {
    autoplayActive = true;
    startAutoplay();
  }, INACTIVITY_DELAY);
}


function navigateNext() {
  if (isAnimating) return;

  isAnimating = true;
  currentIndex = (currentIndex + 1) % RoundContainer.length;
  currentCardIndex = (currentCardIndex + 1) % cards.length;

  // Start cards/content animation
  applyPositions();
  updateContent(currentIndex, true);

  // Trigger spotlight slightly after start (no independent long timeout)
  setTimeout(() => {
    rotateSpotlight();
  }, 200);

  // Release lock when everything is done
  setTimeout(() => {
    isAnimating = false;
  }, CARD_ANIMATION_DURATION);
}

function navigatePrev() {
  if (isAnimating) return;

  isAnimating = true;
  currentIndex = (currentIndex - 1 + RoundContainer.length) % RoundContainer.length;
  currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;

  applyPositions();
  updateContent(currentIndex, true);

  setTimeout(() => {
    rotateSpotlight();
  }, 200);

  setTimeout(() => {
    isAnimating = false;
  }, CARD_ANIMATION_DURATION);
}


function animateCurves(product) {
  const topCurve = document.querySelector(".topCurve");
  const botCurve = document.querySelector(".botcurve");

  topCurve.classList.remove("slide-in");
  botCurve.classList.remove("slide-in");

  topCurve.classList.add("slide-out");
  botCurve.classList.add("slide-out");

  setTimeout(() => {
    topCurve.src = product.topCurve;
    botCurve.src = product.botCurve;

    topCurve.classList.remove("slide-out");
    botCurve.classList.remove("slide-out");

    setTimeout(() => {
      topCurve.classList.add("slide-in");
      botCurve.classList.add("slide-in");
    }, 50);
  }, 500);
}

function animateContent(elements, fadeIn = true) {
  elements.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      if (fadeIn) {
        setTimeout(() => {
          element.classList.remove("content-fade-out");
        }, 300);
        // element.classList.add(`stagger-animate-${(index % 3) + 1}`);

        // setTimeout(() => {
        //   element.classList.remove(`stagger-animate-${(index % 3) + 1}`);
        // }, 500 + index * 100);
      } else {
        element.classList.add("content-fade-out");
      }
    }
  });
}

function updateContent(index, animate = true) {
  const product = RoundContainer[index];
  const container = document.querySelector(".page > div");

  if (!animate) {
    container.style.backgroundColor = product.bgColor;
    updateAllImages(product);
    document.querySelector(".topCurve").src = product.topCurve;
    document.querySelector(".botcurve").src = product.botCurve;
    return;
  }

  const contentElements = [
    '[data-img="centerText"]',
    '[data-img="quotes"]',
    '[data-img="grade"]',
    '[data-img="dimension"]',
    '[data-img="weight"]',
    '[data-img="grossWeight"]',
    '[data-img="cartonSize"]',
    '[data-img="cartonWeight"]',
    '[data-img="piecesPerCarton"]',
    '[data-img="mainImage"]',
    
  ];

  animateContent(contentElements, false);
  animateCurves(product);

  setTimeout(() => {
    container.style.backgroundColor = product.bgColor;
    updateAllImages(product);

    setTimeout(() => {
      animateContent(contentElements, true);

      const mainImage = document.querySelector('[data-img="mainImage"]');
      if (mainImage) {
        mainImage.classList.add("main-image-animate");
        setTimeout(() => {
          mainImage.classList.remove("main-image-animate");
        }, 700);
      }
    }, 100);
  }, 300);
}

function updateAllImages(product) {
  document.querySelector('[data-img="centerText"]').src = product.centerText;
  document.querySelector('[data-img="quotes"]').src = product.quotes;
  document.querySelector('[data-img="dimension"]').src = product.dimension;
  document.querySelector('[data-img="weight"]').src = product.weight;
  document.querySelector('[data-img="grossWeight"]').src = product.grossWeight;
  document.querySelector('[data-img="cartonSize"]').src = product.cartonSize;
  document.querySelector('[data-img="cartonWeight"]').src =
    product.cartonWeight;
  document.querySelector('[data-img="piecesPerCarton"]').src =
    product.piecesPerCarton;
  document.querySelector('[data-img="mainImage"]').src = product.mainImage;
}

function startAutoplay() {
  stopAutoplay();
  if (!autoplayActive) return;          // extra safety

  autoplayInterval = setInterval(() => {
    if (!isAnimating) {
      navigateNext();
    }
  }, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
}



window.addEventListener("beforeunload", () => {
  stopAutoplay();
  clearTimeout(inactivityTimeout);
  // stopRSAutoplay();
  clearTimeout(inactivityRSTimeout);
});

// ------------------------------------------------------------------- Page 3 Start ------------------------------------------

function rotateSpotlight() {
  const spotlightWrapper = document.querySelector(".spotlight-wrapper");
  setTimeout(() => {
    spotlightWrapper.classList.add("rotating");
  }, 900);
  setTimeout(() => {
    spotlightWrapper.classList.remove("rotating");
  }, 3000);
}

let currentRSIndex = 0;
let isRSAnimating = false;
let autoplayRSInterval;
let inactivityRSTimeout;
let autoplayRSActive = true;
const AUTOPLAY_RS_DELAY = 5000;
const INACTIVITY_RS_DELAY = 5000;

function startRSAutoplay() {
  if (autoplayRSActive) {
    setTimeout(() => {
      autoplayRSInterval = setInterval(() => {
        if (!isRSAnimating) {
          navigateRSNext();
        }
      }, AUTOPLAY_RS_DELAY);
    }, 2000);
  }
}

function initRoundSquareNavigation() {
  // Select buttons by their NEW unique IDs
  const prevBtn = document.getElementById("prevBtnRS");
  const nextBtn = document.getElementById("nextBtnRS");

  if (prevBtn && nextBtn) {
    // Use pointerdown instead of click for better mobile support
    prevBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (!isRSAnimating) {
        navigateRSPrev();
        handleRSUserInteraction();
      }
    });

    nextBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (!isRSAnimating) {
        navigateRSNext();
        handleRSUserInteraction();
      }
    });
  }

  updateRSContent(currentRSIndex, false);
  startRSAutoplay();
}


function handleRSUserInteraction() {
  autoplayRSActive = false;

  clearTimeout(inactivityRSTimeout);

  inactivityRSTimeout = setTimeout(() => {
    autoplayRSActive = true;
    startRSAutoplay();
  }, INACTIVITY_RS_DELAY);
}

function navigateRSNext() {
  if (isRSAnimating) return;

  isRSAnimating = true;
  currentRSIndex = (currentRSIndex + 1) % RoundSquareContainer.length;

  updateRSContent(currentRSIndex, true);

  setTimeout(() => {
    isRSAnimating = false;
  }, 1000); // Reduced from 1200ms
}

function navigateRSPrev() {
  if (isRSAnimating) return;

  isRSAnimating = true;
  currentRSIndex =
    (currentRSIndex - 1 + RoundSquareContainer.length) %
    RoundSquareContainer.length;

  updateRSContent(currentRSIndex, true);

  setTimeout(() => {
    isRSAnimating = false;
  }, 1000); // Reduced from 1200ms
}

function updateRSContent(index, animate = true) {
  const product = RoundSquareContainer[index];
  const container = document
    .querySelectorAll(".page")[2]
    ?.querySelector(".container");

  if (!container) return;

  // No animation - just set directly
  if (!animate) {
    container.style.backgroundColor = product.bgColor;
    updateRSImages(product);
    return;
  }

  const contentElements = container.querySelectorAll("[data-img]");

  // Step 1: Fade out all elements
  contentElements.forEach((el) => {
    el.classList.remove("fade-in");
    el.classList.add("fade-out");
  });

  // Step 2: Rotate spotlight slightly delayed
  setTimeout(() => {
    rotateSpotlight();
  }, 200);

  // Step 3: Update content mid-transition
  setTimeout(() => {
    container.style.backgroundColor = product.bgColor;
    updateRSImages(product);

    // Step 4: Fade in with stagger
    setTimeout(() => {
      contentElements.forEach((el, index) => {
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
        el.style.animationDelay = `${index * 0.04}s`;
      });

      // Clean up after animation
      setTimeout(() => {
        contentElements.forEach((el) => {
          el.classList.remove("fade-in");
          el.style.animationDelay = "";
        });
      }, 800);
    }, 50);
  }, 400);
}


function updateRSImages(product) {
  const container = document.querySelectorAll(".page")[2];
  if (!container) return;

  // Update content images
  const centerText = container.querySelector('[data-img="centerText"]');
  const quotes = container.querySelector('[data-img="quotes"]');
  const dimension = container.querySelector('[data-img="dimension"]');
  const weight = container.querySelector('[data-img="weight"]');
  const grossWeight = container.querySelector('[data-img="grossWeight"]');
  const cartonSize = container.querySelector('[data-img="cartonSize"]');
  const cartonWeight = container.querySelector('[data-img="cartonWeight"]');
  const piecesPerCarton = container.querySelector('[data-img="piecesPerCarton"]');
  const mainImage = container.querySelector('[data-img="mainImage"]');
  
  // Update button images - FIXED
  const prevImg = container.querySelector('[data-img="prev"]');
  const nextImg = container.querySelector('[data-img="next"]');

  if (centerText) centerText.src = product.centerText;
  if (quotes) quotes.src = product.quotes;
  if (dimension) dimension.src = product.dimension;
  if (weight) weight.src = product.weight;
  if (grossWeight) grossWeight.src = product.grossWeight;
  if (cartonSize) cartonSize.src = product.cartonSize;
  if (cartonWeight) cartonWeight.src = product.cartonWeight;
  if (piecesPerCarton) piecesPerCarton.src = product.piecesPerCarton;
  if (mainImage) mainImage.src = product.mainImage;
  if (prevImg) prevImg.src = product.prev;
  if (nextImg) nextImg.src = product.next;
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initRoundSquareNavigation);
} else {
  initRoundSquareNavigation();
}




// --------------------------------------------------------------------page 3 end------------------------------------
// ---------------------------- Page 4: Oval Container ----------------------------

let ovalCurrentIndex = 0;
let ovalIsAnimating = false;

function ovalUpdateImages(product) {
  const container = document.getElementById("ovalContainerPage");
  if (!container) return;

  const centerText = container.querySelector('[data-oval="centerText"]');
  const quotes = container.querySelector('[data-oval="quotes"]');
  const dimension = container.querySelector('[data-oval="dimension"]');
  const weight = container.querySelector('[data-oval="weight"]');
  const grossWeight = container.querySelector('[data-oval="grossWeight"]');
  const cartonSize = container.querySelector('[data-oval="cartonSize"]');
  const cartonWeight = container.querySelector('[data-oval="cartonWeight"]');
  const piecesPerCarton = container.querySelector(
    '[data-oval="piecesPerCarton"]'
  );
  const mainImage = container.querySelector('[data-oval="mainImage"]');
    const bgColor = container.querySelector('[data-oval="bgColor"]');

  if (centerText) centerText.src = product.centerText;
  if (quotes) quotes.src = product.quotes;
  if (dimension) dimension.src = product.dimension;
  if (weight) weight.src = product.weight;
  if (grossWeight) grossWeight.src = product.grossWeight;
  if (cartonSize) cartonSize.src = product.cartonSize;
  if (cartonWeight) cartonWeight.src = product.cartonWeight;
  if (piecesPerCarton) piecesPerCarton.src = product.piecesPerCarton;
  if (mainImage) mainImage.src = product.mainImage;
   if (bgColor) bgColor.src = product.bgColor;
}

function ovalApplyAnimation(direction) {
  const container = document.getElementById("ovalContainerPage");
  if (!container) return;

  const elements = container.querySelectorAll("[data-oval]");
  elements.forEach((el) => {
    el.classList.remove(
      "oval-fade-out",
      "oval-slide-in-right",
      "oval-slide-in-left"
    );
  });

  // fade out old content
  elements.forEach((el) => {
    el.classList.add("oval-fade-out");
  });

  const product = OvalContainer[ovalCurrentIndex];

  // mid-transition: update content
  setTimeout(() => {
    container.style.backgroundColor = product.bgColor;
    ovalUpdateImages(product);

    // enter from left or right
    elements.forEach((el) => {
      el.classList.remove("oval-fade-out");
      if (direction === "next") {
        el.classList.add("oval-slide-in-right");
      } else {
        el.classList.add("oval-slide-in-left");
      }
    });

    // clean classes after animation
    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.remove("oval-slide-in-right", "oval-slide-in-left");
      });
      ovalIsAnimating = false;
    }, 550);
  }, 150);
}

function ovalGoNext() {
  if (ovalIsAnimating) return;
  ovalIsAnimating = true;

  ovalCurrentIndex = (ovalCurrentIndex + 1) % OvalContainer.length;
  ovalApplyAnimation("next");
}

function ovalGoPrev() {
  if (ovalIsAnimating) return;
  ovalIsAnimating = true;

  ovalCurrentIndex =
    (ovalCurrentIndex - 1 + OvalContainer.length) % OvalContainer.length;
  ovalApplyAnimation("prev");
}

function initOvalContainerNavigation() {
  const container = document.getElementById("ovalContainerPage");
  if (!container || !OvalContainer.length) return;

  // initial content without animation
  const initialProduct = OvalContainer[ovalCurrentIndex];
  container.style.backgroundColor = initialProduct.bgColor;
  ovalUpdateImages(initialProduct);

  const prevBtn = document.getElementById("ovalPrevBtn");
  const nextBtn = document.getElementById("ovalNextBtn");

  if (prevBtn) {
    prevBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      ovalGoPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      ovalGoNext();
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOvalContainerNavigation);
} else {
  initOvalContainerNavigation();
}

// -------------------------- end Page 4: Oval Container --------------------------

// --------------------------------------------------------------------page 4 start------------------------------------




// --------------------------------------------------------------------page 4 end------------------------------------