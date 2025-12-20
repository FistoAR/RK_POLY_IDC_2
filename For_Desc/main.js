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
     lightboxUrl: "../lightBox/index.html#250-ml-round-container" 
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
     lightboxUrl: "../lightBox/index.html#400-ml-round-container" 
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
     lightboxUrl: "../lightBox/index.html#500-ml-round-container" 
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
     lightboxUrl: "../lightBox/index.html#750-ml-round-container" 
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
     lightboxUrl: "../lightBox/index.html#1000-ml-round-container" 
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
     lightboxUrl: "../lightBox/index.html#300-ml-round-sqare-container" 
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
     lightboxUrl: "../lightBox/index.html#500-ml-round-sqare-container"
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
     lightboxUrl: "../lightBox/index.html#750-ml-round-sqare-container"
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
     lightboxUrl: "../lightBox/index.html#1000-ml-round-sqare-container"
  },
];




 
const OvalContainer = [
  {
    id: "ovalSmall",
    centerText: "../global assets/Images/OvalContainer/oval-250ml/oval-250ml-container-text.svg",
     quotes: "../global assets/Images/OvalContainer/oval-250ml/center-caption.svg",
     grade: "../global assets/Images/OvalContainer/grade.svg",
    dimension: "../global assets/Images/OvalContainer/oval-250ml/dimention.svg",
    weight: "../global assets/Images/OvalContainer/oval-250ml/weight.svg",
    grossWeight: "../global assets/Images/OvalContainer/oval-250ml/gross-weight.svg",
    cartonSize: "../global assets/Images/OvalContainer/oval-250ml/carton-size.svg",
    cartonWeight: "../global assets/Images/OvalContainer/oval-250ml/carton-weight.svg",
    piecesPerCarton:
      "../global assets/Images/OvalContainer/oval-250ml/pieces-per-carton.svg",
    mainImage: "../global assets/Images/OvalContainer/oval-250ml/250-container.webp",
    bgColor: "../global assets/Images/OvalContainer/oval-250ml/bottom-bg.webp",
    backgroundColor: "#D8855C",
    lightboxUrl: "../lightBox/index.html#250-ml-oval-container"
  },
  {
    id: "ovalMedium",
    centerText: "../global assets/Images/OvalContainer/oval-500ml/oval-500ml-container-text.svg",
     quotes: "../global assets/Images/OvalContainer/oval-500ml/center-caption.svg",
      grade: "../global assets/Images/OvalContainer/grade.svg",
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
    backgroundColor: "#BFCC6B",
    lightboxUrl: "../lightBox/index.html#500-ml-oval-container"
  },
  {
   id: "ovalLarge",
    centerText: "../global assets/Images/OvalContainer/oval-1000ml/oval-1000ml-container-text.webp",
     quotes: "../global assets/Images/OvalContainer/oval-1000ml/center-caption.svg",
      grade: "../global assets/Images/OvalContainer/grade.svg",
    dimension: "../global assets/Images/OvalContainer/oval-1000ml/dimension.svg",
    weight: "../global assets/Images/OvalContainer/oval-1000ml/weight.svg",
    grossWeight: "../global assets/Images/OvalContainer/oval-1000ml/gross-weight.svg",
    cartonSize: "../global assets/Images/OvalContainer/oval-1000ml/carton-size.svg",
    cartonWeight:
      "../global assets/Images/OvalContainer/oval-1000ml/carton-weight.svg",
    piecesPerCarton:
      "../global assets/Images/OvalContainer/oval-1000ml/pieces-per-carton.svg",
    mainImage: "../global assets/Images/OvalContainer/oval-1000ml/1000-container.webp",
    bgColor: "../global assets/Images/OvalContainer/oval-1000ml/bottom-bg.webp",
    backgroundColor: "#92BC56",
    lightboxUrl: "../lightBox/index.html#1000-ml-oval-container"
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
  { x: -70, y: 12, scale: 0.6, opacity: 0.95, z: 1, rotate: -30 },
  { x: -40, y: 0, scale: 0.7, opacity: 0.95, z: 2, rotate: -10 },
  { x: 0, y: -12, scale: 1, opacity: 1, z: 5, rotate: 0 },
  { x: 40, y: 0, scale: 0.7, opacity: 0.95, z: 2, rotate: 10 },
  { x: 70, y: 12, scale: 0.6, opacity: 0.95, z: 1, rotate: 30 },
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
    e.stopPropagation();
  if (!isAnimating) {
    navigatePrev();
    handleUserInteraction();
  }
});
 
 
document.getElementById("nextBtn")?.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  e.stopPropagation();
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
  const secondBg = document.getElementById("pageSecondColor");
 
 
  if (!animate) {
    container.style.backgroundColor = product.bgColor;
    secondBg.style.backgroundColor = product.secondBgColor;
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
    secondBg.style.backgroundColor = product.secondBgColor;
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
   const lightboxLink = document.querySelector('a[href*="lightBox"]');
  if (lightboxLink && product.lightboxUrl) {
    lightboxLink.href = product.lightboxUrl;
  }
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

let spotlightTimeoutAdd, spotlightTimeoutRemove;
let spotlightDisabled = false;
 
 
function rotateSpotlight() {
  if (spotlightDisabled) return; // do nothing if disabled
 
  const spotlightWrapper = document.querySelector(".spotlight-wrapper");
 
  // Clear any previous timeouts
  clearTimeout(spotlightTimeoutAdd);
  clearTimeout(spotlightTimeoutRemove);
 
  spotlightTimeoutAdd = setTimeout(() => {
    spotlightWrapper.classList.add("rotating");
  }, 900);
 
  spotlightTimeoutRemove = setTimeout(() => {
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
let firstAnimateSpeed = 1750;
let secondAnimateSpeed = 2000;
 
function stopRSAutoplay() {
  clearInterval(autoplayRSInterval);
  autoplayRSInterval = null;
}
 
function startRSAutoplay() {
  stopRSAutoplay(); // ⬅ important: prevent stacking
 
  if (!autoplayRSActive) return;
 
  autoplayRSInterval = setInterval(() => {
    if (!isRSAnimating) {
      navigateRSNext();
    }
  }, AUTOPLAY_RS_DELAY);
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
 
  // STOP autoplay immediately
  stopRSAutoplay();
 
  // STOP any spotlight animation
  spotlightDisabled = true; // disable new rotations
  const spotlightWrapper = document.querySelector(".spotlight-wrapper");
  spotlightWrapper.classList.remove("rotating");
  clearTimeout(spotlightTimeoutAdd);
  clearTimeout(spotlightTimeoutRemove);
 
  clearTimeout(inactivityRSTimeout);
 
  // Resume autoplay after inactivity
  inactivityRSTimeout = setTimeout(() => {
    autoplayRSActive = true;
    spotlightDisabled = false; // enable spotlight again
    startRSAutoplay();
    firstAnimateSpeed = 1750;
    secondAnimateSpeed = 2000;
  }, INACTIVITY_RS_DELAY);
}
 
function navigateRSNext() {
  if (isRSAnimating) return;
 
  isRSAnimating = true;
  currentRSIndex = (currentRSIndex + 1) % RoundSquareContainer.length;
 
  firstAnimateSpeed = 100;
  secondAnimateSpeed = 200;
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
 
    firstAnimateSpeed = 100;
    secondAnimateSpeed = 200;
  updateRSContent(currentRSIndex, true);
 
  setTimeout(() => {
    isRSAnimating = false;
  }, 1000); // Reduced from 1200ms
}
 
function updateRSContent(index, animate = true) {
  const product = RoundSquareContainer[index];
  const container = document.querySelector(".rsContainerPage").querySelector(".container");
 
  if (!container) return;
 
  // No animation - just set directly
  if (!animate) {
    container.style.backgroundColor = product.bgColor;
    updateRSImages(product);
    return;
  }
 
  const contentElements = container.querySelectorAll(
  '[data-img]:not([data-img="prev"]):not([data-img="next"])'
);
 
 
  // Step 1: Fade out all elements
  contentElements.forEach((el) => {
    setTimeout(() => {
      resetRevealAnimation(el);
      el.classList.add("fade-out");
      void el.offsetWidth; // force reflow
    }, 1750);
  });
 
 
 
  // Step 2: Rotate spotlight slightly delayed
  setTimeout(() => {
    rotateSpotlight();
  }, 200);
 
 
  // Step 3: Update content mid-transition
setTimeout(() => {
  container.style.backgroundColor = product.bgColor;
  updateRSImages(product);
 
  // Step 4: Fade in after fade-out is done
  setTimeout(() => {
    contentElements.forEach((el) => {
      // resetRevealAnimation(el); // remove fade-out & previous classes
      applyRevealAnimation(el); // trigger reveal animation
     
    });
  }, 100); // give fade-out 200ms to complete
 
}, 2000);
 
}
 
function applyRevealAnimation(el) {
  const type = el.dataset.img;
 
  el.classList.remove(
    "reveal-left",
    "reveal-right",
    "reveal-top",
    "reveal-pop"
  );
 
  if (["dimension", "weight", "grossWeight"].includes(type)) {
    el.classList.add("reveal-left");
  } else if (
    ["cartonSize", "cartonWeight", "piecesPerCarton"].includes(type)
  ) {
    el.classList.add("reveal-right");
  } else if (type === "mainImage") {
    el.classList.add("reveal-top");
  } else if (["centerText", "quotes"].includes(type)) {
    el.classList.add("reveal-pop");
  }
 
}
 
function resetRevealAnimation(el) {
  el.classList.remove(
    "fade-out",
    "reveal-left",
    "reveal-right",
    "reveal-top",
    "reveal-pop"
  );
  el.classList.add("fade-out");
  // Force reflow so browser forgets previous animation
  void el.offsetWidth;
}
 
function updateRSImages(product) {
  const container = document.querySelector(".rsContainerPage");
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
 
   const rsLightboxLink = document.getElementById('rs-360-link');
  if (rsLightboxLink && product.lightboxUrl) {
    rsLightboxLink.href = product.lightboxUrl;
  }
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
 
setTimeout(() => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRoundSquareNavigation);
  } else {
    initRoundSquareNavigation();
  }
}, 500);
 



// --------------------------------------------------------------------page 3 end------------------------------------
// ---------------------------- Page 4: Oval Container ----------------------------
 
let ovalCurrentIndex = 0;
let ovalIsAnimating = false;
 
let ovalAutoInterval = null;
const OVAL_AUTO_DELAY = 5000; // 5 seconds
 
function ovalUpdateImages(product) {
  const container = document.getElementById("ovalContainerPage");
  if (!container) return;
 
  const centerText = container.querySelector('[data-oval="centerText"]');
  const quotes = container.querySelector('[data-oval="quotes"]');
  const grade = container.querySelector('[data-oval="grade"]');
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
    const ovalBgColor = document.getElementById('pageOvalBgColor');

      const ovalLightboxLink = document.getElementById('oval-360-link');
  if (ovalLightboxLink && product.lightboxUrl) {
    ovalLightboxLink.href = product.lightboxUrl;
  }
 
  if (centerText) centerText.src = product.centerText;
  if (quotes) quotes.src = product.quotes;
  if (grade) grade.src = product.grade;
  if (dimension) dimension.src = product.dimension;
  if (weight) weight.src = product.weight;
  if (grossWeight) grossWeight.src = product.grossWeight;
  if (cartonSize) cartonSize.src = product.cartonSize;
  if (cartonWeight) cartonWeight.src = product.cartonWeight;
  if (piecesPerCarton) piecesPerCarton.src = product.piecesPerCarton;
  if (mainImage) mainImage.src = product.mainImage;
  if (ovalBgColor) ovalBgColor.style.backgroundColor = product.backgroundColor;
  //  if (bgColor) bgColor.src = product.bgColor;
}
 
function ovalApplyAnimation() {
  const container = document.getElementById("ovalContainerPage");
  if (!container) return;
 
  const allElements = container.querySelectorAll("[data-oval]");
  const mainImage = container.querySelector('[data-oval="mainImage"]');
  const otherElements = [...allElements].filter(el => el !== mainImage);
 
  // RESET
  allElements.forEach(el => {
    el.classList.remove(
      "oval-fade-out",
      "oval-reveal-top",
      "oval-reveal-bottom"
    );
  });
 
  // FADE OUT
  allElements.forEach(el => el.classList.add("oval-fade-out"));
 
  const product = OvalContainer[ovalCurrentIndex];
 
  // ⏱ wait for fade-out to finish
  setTimeout(() => {
    ovalUpdateImages(product);
 
    // REMOVE FADE
    allElements.forEach(el => el.classList.remove("oval-fade-out"));
 
    // REVEAL
    otherElements.forEach(el => el.classList.add("oval-reveal-top"));
    if (mainImage) mainImage.classList.add("oval-reveal-bottom");
 
    // CLEANUP AFTER REVEAL FINISHES
    setTimeout(() => {
      allElements.forEach(el => {
        el.classList.remove(
          "oval-reveal-top",
          "oval-reveal-bottom"
        );
      });
      ovalIsAnimating = false;
    }, 520); // must match animation duration
 
  }, 250); // must match fade-out duration
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
 
  // initial content
  const initialProduct = OvalContainer[ovalCurrentIndex];
  container.style.backgroundColor = initialProduct.bgColor;
  ovalUpdateImages(initialProduct);
 
  const prevBtn = document.getElementById("ovalPrevBtn");
  const nextBtn = document.getElementById("ovalNextBtn");
 
  if (prevBtn) {
    prevBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      stopOvalAutoPlay();
      ovalGoPrev();
      startOvalAutoPlay();
    });
  }
 
  if (nextBtn) {
    nextBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      stopOvalAutoPlay();
      ovalGoNext();
      startOvalAutoPlay();
    });
  }
 
  // ▶️ START AUTO PLAY
  startOvalAutoPlay();
}
 
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOvalContainerNavigation);
} else {
  initOvalContainerNavigation();
}
 
 
 
function startOvalAutoPlay() {
  stopOvalAutoPlay(); // prevent duplicates
  ovalAutoInterval = setInterval(() => {
    if (!ovalIsAnimating) {
      ovalGoNext();
    }
  }, OVAL_AUTO_DELAY);
}
 
function stopOvalAutoPlay() {
  if (ovalAutoInterval) {
    clearInterval(ovalAutoInterval);
    ovalAutoInterval = null;
  }
}
 
// -------------------------- end Page 4: Oval Container --------------------------

// --------------------------------------------------------------------page 5 sweet box start------------------------------------

// ====================================================================
// Page 5 - SweetBox Container
// ====================================================================

 
const SweetBox = [
  {
    id: "sweetbox250g",
    centerText: "../global assets/Images/SweetBox/250G-sweet-box/sweet-box-250g-text.webp",
    caption: "../global assets/Images/SweetBox/250G-sweet-box/caption.svg",
    grade: "../global assets/Images/SweetBox/grade.svg",
    dimension: "../global assets/Images/SweetBox/250G-sweet-box/dimension.svg",
    weight: "../global assets/Images/SweetBox/250G-sweet-box/weight.svg",
    grossWeight: "../global assets/Images/SweetBox/250G-sweet-box/gross-weight.svg",
    cartonSize: "../global assets/Images/SweetBox/250G-sweet-box/carton-size.svg",
    cartonWeight: "../global assets/Images/SweetBox/250G-sweet-box/carton-weight.svg",
    piecesPerCarton: "../global assets/Images/SweetBox/250G-sweet-box/pieces-per-carton.svg",
    mainImage: "../global assets/Images/SweetBox/250G-sweet-box/sweetbox-250g.webp",
    bgImage: "../global assets/Images/SweetBox/250G-sweet-box/background.webp",
    nextBtn: "../global assets/Images/SweetBox/250G-sweet-box/250-next-btn.svg",
    prevBtn: "../global assets/Images/SweetBox/250G-sweet-box/250-prev-btn.svg",
     lightboxUrl: "../lightBox/index.html#250-gms-sweet"
  },
  {
    id: "sweetbox500g",
    centerText: "../global assets/Images/SweetBox/500G-sweet-box/sweet-box-500g-text.webp",
    caption: "../global assets/Images/SweetBox/500G-sweet-box/caption.svg",
    grade: "../global assets/Images/SweetBox/grade.svg",
    dimension: "../global assets/Images/SweetBox/500G-sweet-box/dimension.svg",
    weight: "../global assets/Images/SweetBox/500G-sweet-box/weight.svg",
    grossWeight: "../global assets/Images/SweetBox/500G-sweet-box/gross-weight.svg",
    cartonSize: "../global assets/Images/SweetBox/500G-sweet-box/carton-size.svg",
    cartonWeight: "../global assets/Images/SweetBox/500G-sweet-box/carton-weight.svg",
    piecesPerCarton: "../global assets/Images/SweetBox/500G-sweet-box/pieces-per-carton.svg",
    mainImage: "../global assets/Images/SweetBox/500G-sweet-box/sweetbox-500g.webp",
    bgImage: "../global assets/Images/SweetBox/500G-sweet-box/background.webp",
    nextBtn: "../global assets/Images/SweetBox/500G-sweet-box/500-next-btn.svg",
    prevBtn: "../global assets/Images/SweetBox/500G-sweet-box/500-prev-btn.svg",
    lightboxUrl: "../lightBox/index.html#500-gms-sweet"
  },
  {
    id: "sweetbox1000g",
    centerText: "../global assets/Images/SweetBox/1000G-sweet-box/sweet-box-1000g-text.webp",
    caption: "../global assets/Images/SweetBox/1000G-sweet-box/caption.svg",
    grade: "../global assets/Images/SweetBox/grade.svg",
    dimension: "../global assets/Images/SweetBox/1000G-sweet-box/dimension.svg",
    weight: "../global assets/Images/SweetBox/1000G-sweet-box/weight.svg",
    grossWeight: "../global assets/Images/SweetBox/1000G-sweet-box/gross-weight.svg",
    cartonSize: "../global assets/Images/SweetBox/1000G-sweet-box/carton-size.svg",
    cartonWeight: "../global assets/Images/SweetBox/1000G-sweet-box/carton-weight.svg",
    piecesPerCarton: "../global assets/Images/SweetBox/1000G-sweet-box/pieces-per-carton.svg",
    mainImage: "../global assets/Images/SweetBox/1000G-sweet-box/sweetbox-1000g.webp",
    bgImage: "../global assets/Images/SweetBox/1000G-sweet-box/background.webp",
    nextBtn: "../global assets/Images/SweetBox/1000G-sweet-box/1000-next-btn.svg",
    prevBtn: "../global assets/Images/SweetBox/1000G-sweet-box/1000-prev-btn.svg",
    lightboxUrl: "../lightBox/index.html#1000-gms-sweet"
  },
  // Add more sweetbox variants here if needed
];
 
let sweetboxCurrentIndex = 0;
let sweetboxIsAnimating = false;
let sweetboxAutoInterval = null;
const SWEETBOXAUTODELAY = 5000; // 5 seconds
 
/**
 * Update all images for the current sweetbox product
 */
function sweetboxUpdateImages(product) {
  const container = document.getElementById("sweetboxContainerPage");
  // if (!container) return;
 
  const centerText = container.querySelector("[data-sweetbox='centerText']");
  const caption = container.querySelector("[data-sweetbox='caption']");
  const grade = container.querySelector("[data-sweetbox='grade']");
  const dimension = container.querySelector("[data-sweetbox='dimension']");
  const weight = container.querySelector("[data-sweetbox='weight']");
  const grossWeight = container.querySelector("[data-sweetbox='grossWeight']");
  const cartonSize = container.querySelector("[data-sweetbox='cartonSize']");
  const cartonWeight = container.querySelector("[data-sweetbox='cartonWeight']");
  const piecesPerCarton = container.querySelector("[data-sweetbox='piecesPerCarton']");
  const mainImage = container.querySelector("[data-sweetbox='mainImage']");
  const bgImage = container.querySelector("[data-sweetbox='bgImage']");
  const nextBtn = document.getElementById('sweetboxNextBtn');
  const prevBtn = document.getElementById('sweetboxPrevBtn');
 
      const sbLightboxLink = document.getElementById('sb-360-link');
  if (sbLightboxLink && product.lightboxUrl) {
    sbLightboxLink.href = product.lightboxUrl;
  }
  if (centerText) centerText.src = product.centerText;
  if (caption) caption.src = product.caption;
  if (grade) grade.src = product.grade;
  if (dimension) dimension.src = product.dimension;
  if (weight) weight.src = product.weight;
  if (grossWeight) grossWeight.src = product.grossWeight;
  if (cartonSize) cartonSize.src = product.cartonSize;
  if (cartonWeight) cartonWeight.src = product.cartonWeight;
  if (piecesPerCarton) piecesPerCarton.src = product.piecesPerCarton;
  if (mainImage) mainImage.src = product.mainImage;
  if (bgImage) bgImage.src = product.bgImage;
  if (nextBtn) nextBtn.src = product.nextBtn;
  if (prevBtn) prevBtn.src = product.prevBtn;
}
 
/**
 * Apply animation based on direction
 * @param {string} direction - 'next' or 'prev'
 */
function sweetboxApplyAnimation(direction) {
  const container = document.getElementById("sweetboxContainerPage");
  if (!container) return;
 
  // Select all animated elements (not background)
  const elements = container.querySelectorAll(
    "[data-sweetbox]:not([data-fade-only])"
  );
  // const fadeOnlyElements = container.querySelectorAll("[data-fade-only]");
 
  // RESET all classes
  [...elements].forEach((el) => {
    el.classList.remove(
      "sweetbox-fade-out",
      "sweetbox-slide-in-next",
      "sweetbox-slide-in-prev",
      "sweetbox-fade-only-out",
      "sweetbox-fade-only-in"
    );
  });
 
  // FADE OUT
  elements.forEach((el) => el.classList.add("sweetbox-fade-out"));
  // fadeOnlyElements.forEach((el) => el.classList.add("sweetbox-fade-only-out"));
 
  const product = SweetBox[sweetboxCurrentIndex];
 
  setTimeout(() => {
    // Update images
    sweetboxUpdateImages(product);
 
    // SLIDE IN based on direction
    elements.forEach((el) => {
      el.classList.remove("sweetbox-fade-out");
      el.classList.add(
        direction === "next" ? "sweetbox-slide-in-next" : "sweetbox-slide-in-prev"
      );
    });
 
    // FADE-only elements
    // fadeOnlyElements.forEach((el) => {
    //   el.classList.remove("sweetbox-fade-only-out");
    //   el.classList.add("sweetbox-fade-only-in");
    // });
 
    // Clean up animation classes
    setTimeout(() => {
      [...elements].forEach((el) => {
        el.classList.remove(
          "sweetbox-slide-in-next",
          "sweetbox-slide-in-prev",
          "sweetbox-fade-only-in"
        );
      });
      sweetboxIsAnimating = false;
    }, 600); // Match animation duration
  }, 400); // Wait for fade out
}
 
/**
 * Navigate to next sweetbox
 */
function sweetboxGoNext() {
  if (sweetboxIsAnimating) return;
  sweetboxIsAnimating = true;
  sweetboxCurrentIndex = (sweetboxCurrentIndex + 1) % SweetBox.length;
  sweetboxApplyAnimation("next");
}
 
/**
 * Navigate to previous sweetbox
 */
function sweetboxGoPrev() {
  if (sweetboxIsAnimating) return;
  sweetboxIsAnimating = true;
  sweetboxCurrentIndex =
    (sweetboxCurrentIndex - 1 + SweetBox.length) % SweetBox.length;
  sweetboxApplyAnimation("prev");
}
 
/**
 * Initialize SweetBox Container Navigation
 */
function initSweetBoxNavigation() {
  const container = document.getElementById("sweetboxContainerPage");
  if (!container || !SweetBox.length) return;
 
  // Set initial content
  const initialProduct = SweetBox[sweetboxCurrentIndex];
  sweetboxUpdateImages(initialProduct);
 
  // Bind button events
  const prevBtn = document.getElementById("sweetboxPrevBtn");
  const nextBtn = document.getElementById("sweetboxNextBtn");
 
  if (prevBtn) {
    prevBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      stopSweetboxAutoPlay();
      sweetboxGoPrev();
      startSweetboxAutoPlay();
    });
  }
 
  if (nextBtn) {
    nextBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      stopSweetboxAutoPlay();
      sweetboxGoNext();
      startSweetboxAutoPlay();
    });
  }
 
  // Start autoplay
  startSweetboxAutoPlay();
}
 
/**
 * Start autoplay
 */
function startSweetboxAutoPlay() {
  stopSweetboxAutoPlay(); // Prevent duplicates
  sweetboxAutoInterval = setInterval(() => {
    if (!sweetboxIsAnimating) {
      sweetboxGoNext();
      console.log("its animate")
    }
  }, SWEETBOXAUTODELAY);
}
 
/**
 * Stop autoplay
 */
function stopSweetboxAutoPlay() {
  if (sweetboxAutoInterval) {
    clearInterval(sweetboxAutoInterval);
    sweetboxAutoInterval = null;
  }
}
 
// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSweetBoxNavigation);
} else {
  initSweetBoxNavigation();
}
 
 

// ======================== End Page 5 SweetBox Container ========================



// --------------------------------------------------------------------page 5 sweet box end------------------------------------




// ***********************************************page 7 tub container start *******************************

// ====================================================================
// Page 7 - Tub Container
// ====================================================================

 
const TubContainer = [
  {
    id: "tub250g",
    centerText: "../global assets/Images/TubContainer/tub-container-250g/tub-container-250g-text.webp",
    caption: "../global assets/Images/TubContainer/tub-container-250g/caption.svg",
    grade: "../global assets/Images/TubContainer/grade.svg",
    dimension: "../global assets/Images/TubContainer/tub-container-250g/dimension.svg",
    weight: "../global assets/Images/TubContainer/tub-container-250g/weight.svg",
    grossWeight: "../global assets/Images/TubContainer/tub-container-250g/gross-weight.svg",
    cartonSize: "../global assets/Images/TubContainer/tub-container-250g/carton-size.svg",
    cartonWeight: "../global assets/Images/TubContainer/tub-container-250g/carton-weight.svg",
    piecesPerCarton: "../global assets/Images/TubContainer/tub-container-250g/pieces-per-carton.svg",
    mainImage: "../global assets/Images/TubContainer/tub-container-250g/tub-container-250g-container-img.webp",
    topBg: "../global assets/Images/TubContainer/tub-container-250g/top-bg.webp",
    nextBtn: "../global assets/Images/TubContainer/tub-250-next-btn.svg",
    prevBtn: "../global assets/Images/TubContainer/tub-250-prev-btn.svg",
     lightboxUrl: "../lightBox/index.html#250-gms-tub-container"
  },
  {
    id: "tub500g",
    centerText: "../global assets/Images/TubContainer/tub-container-500g/tub-container-500g-text.webp",
    caption: "../global assets/Images/TubContainer/tub-container-500g/caption.svg",
    grade: "../global assets/Images/TubContainer/tub-container-500g/grade.svg",
    dimension: "../global assets/Images/TubContainer/tub-container-500g/dimension.svg",
    weight: "../global assets/Images/TubContainer/tub-container-500g/weight.svg",
    grossWeight: "../global assets/Images/TubContainer/tub-container-500g/gross-weight.svg",
    cartonSize: "../global assets/Images/TubContainer/tub-container-500g/carton-size.svg",
    cartonWeight: "../global assets/Images/TubContainer/tub-container-500g/carton-weight.svg",
    piecesPerCarton: "../global assets/Images/TubContainer/tub-container-500g/pieces-per-carton.svg",
    mainImage: "../global assets/Images/TubContainer/tub-container-500g/tub-container-500g-container-img.webp",
    topBg: "../global assets/Images/TubContainer/tub-container-500g/top-bg.webp",
    nextBtn: "../global assets/Images/TubContainer/tub-500-next-btn.svg",
    prevBtn: "../global assets/Images/TubContainer/tub-500-prev-btn.svg",
     lightboxUrl: "../lightBox/index.html#500-gms-tub-container"
  }
];
 
let tubCurrentIndex = 0;
let tubIsAnimating = false;
let tubAutoInterval = null;
const TUBAUTODELAY = 5000; // 5 seconds
 
/**
 * Update all images for the current tub product
 */
function tubUpdateImages(product) {
  const container = document.getElementById("tubContainerPage");
  // if (!container) return;
   // Add proper null check
  // if (container) {
  //   console.error("Tub container not found!");
  //   return;
  // }
 
  const centerText = container.querySelector("[data-tub='centerText']");
  const caption = container.querySelector("[data-tub='caption']");
  const grade = container.querySelector("[data-tub='grade']");
  const dimension = container.querySelector("[data-tub='dimension']");
  const weight = container.querySelector("[data-tub='weight']");
  const grossWeight = container.querySelector("[data-tub='grossWeight']");
  const cartonSize = container.querySelector("[data-tub='cartonSize']");
  const cartonWeight = container.querySelector("[data-tub='cartonWeight']");
  const piecesPerCarton = container.querySelector("[data-tub='piecesPerCarton']");
  const mainImage = container.querySelector("[data-tub='mainImage']");
  const topBg = container.querySelector("[data-tub='topBg']");
  const nextBtn = document.getElementById('tubNextBtn');
  const prevBtn = document.getElementById('tubPrevBtn');
 
     const tubLightboxLink = document.getElementById('tub-360-link');
  if (tubLightboxLink && product.lightboxUrl) {
    tubLightboxLink.href = product.lightboxUrl;
  }
  if (centerText) centerText.src = product.centerText;
  if (caption) caption.src = product.caption;
  if (grade) grade.src = product.grade;
  if (dimension) dimension.src = product.dimension;
  if (weight) weight.src = product.weight;
  if (grossWeight) grossWeight.src = product.grossWeight;
  if (cartonSize) cartonSize.src = product.cartonSize;
  if (cartonWeight) cartonWeight.src = product.cartonWeight;
  if (piecesPerCarton) piecesPerCarton.src = product.piecesPerCarton;
  if (mainImage) mainImage.src = product.mainImage;
  if (topBg) topBg.src = product.topBg; // Just change image, no animation
  if (nextBtn) nextBtn.src = product.nextBtn;
  if (prevBtn) prevBtn.src = product.prevBtn;
}
 
/**
 * Apply simple left-right slide animations
 */
/* Apply simple top-to-bottom slide animations */
function tubApplyAnimation() {
  const container = document.getElementById("tubContainerPage");
  // if (!container) return;
 
  // Get ALL elements with data-tub attribute
  const allElements = container.querySelectorAll("[data-tub]:not([data-tub='topBg'])");
 
  // RESET all classes
  allElements.forEach((el) => {
    el.classList.remove("tub-fade-out", "tub-slide-in");
  });
 
  // FADE OUT all elements
  allElements.forEach((el) => {
    el.classList.add("tub-fade-out");
  });
 
  const product = TubContainer[tubCurrentIndex];
 
  setTimeout(() => {
    // Update images
    tubUpdateImages(product);
 
    // SLIDE IN from TOP with stagger effect
    allElements.forEach((el, index) => {
      el.classList.remove("tub-fade-out");
      el.style.animationDelay = `${index * 60}ms`; // Stagger: 0ms, 60ms, 120ms, etc.
      el.classList.add("tub-slide-in");
    });
 
    // Clean up after animation
    setTimeout(() => {
      allElements.forEach((el) => {
        el.classList.remove("tub-slide-in");
        el.style.animationDelay = "";
      });
      tubIsAnimating = false;
      // console.log("its workimg broo")
    }, 1000); // Total animation time
    // console.log("Animation trigger")
  }, 300); // Wait for fade out
}
 
 
/**
 * Navigate to next tub
 */
function tubGoNext() {
  if (tubIsAnimating) return;
  tubIsAnimating = true;
  tubCurrentIndex = (tubCurrentIndex + 1) % TubContainer.length;
  tubApplyAnimation();
}
 
/**
 * Navigate to previous tub
 */
function tubGoPrev() {
  if (tubIsAnimating) return;
  tubIsAnimating = true;
  tubCurrentIndex = (tubCurrentIndex - 1 + TubContainer.length) % TubContainer.length;
  tubApplyAnimation();
}
 
/**
 * Initialize Tub Container Navigation
 */
/**
 * Initialize Tub Container Navigation
 */
/**
 * Initialize Tub Container Navigation
 */
function initTubContainerNavigation() {
  const container = document.getElementById("tubContainerPage");
  // const tubMainContainer = document.querySelector('.tubContainerPage');
  // if (!tubMainContainer) return;
 
  // Apply animation on first load after a small delay
  setTimeout(() => {
    tubApplyAnimation();
  }, 100);
 
  // Bind button events
  const prevBtn = document.getElementById("tubPrevBtn");
  const nextBtn = document.getElementById("tubNextBtn");
 
  if (prevBtn) {
    prevBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      stopTubAutoPlay();
      tubGoPrev();
      startTubAutoPlay();
    });
  }
 
  if (nextBtn) {
    nextBtn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      stopTubAutoPlay();
      tubGoNext();
      startTubAutoPlay();
    });
  }
 
  // Start autoplay
  startTubAutoPlay();
}
 
 
/**
 * Start autoplay
 */
function startTubAutoPlay() {
  stopTubAutoPlay(); // Prevent duplicates
 
  tubAutoInterval = setInterval(() => {
    if (!tubIsAnimating) {
      tubGoNext();
    }
  }, TUBAUTODELAY);
}
 
/**
 * Stop autoplay
 */
function stopTubAutoPlay() {
  if (tubAutoInterval) {
    clearInterval(tubAutoInterval);
    tubAutoInterval = null;
  }
}
 
// Initialize on page load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTubContainerNavigation);
} else {
  initTubContainerNavigation();
}
 
 