/* PABLO'S Z-CITY — GMod Optimized JS */

(() => {
  const subtitle = document.getElementById("subtitle");
  const floatLayer = document.getElementById("floatLayer");

  // Hier sind deine neuen Sprueche hinzugefuegt:
  const floatPhrases = [
    "Pablo Moggs every Zcity",
    "Best Server?",
    "1 + 1 = 3",
    "Yo",
    "Goy",
    "Gurt",
    "Crow Steals Files lmao",
    "No AI slop Server!",
    "Fun Owner and Staff!",
    "We love Garry"
  ];

  function spawnFloating(text){
    const el = document.createElement("div");
    el.className = "floating";
    el.textContent = text;

    const x = Math.random() * 88 + 6;
    let y = Math.random() * 74 + 8;

    if (y > 36 && y < 62) y += (Math.random() < 0.5 ? -18 : 18);

    const dur = (8 + Math.random() * 8).toFixed(2) + "s";
    const delay = (Math.random() * 2.2).toFixed(2) + "s";

    el.style.left = x + "%";
    el.style.top = y + "%";
    
    // GMod/Awesomium Fix: Direktes Setzen statt Variablen
    el.style.animationDuration = dur;
    el.style.animationDelay = delay;

    floatLayer.appendChild(el);
    setTimeout(() => el.remove(), 20000);
  }

  setInterval(() => {
    const t = floatPhrases[Math.floor(Math.random() * floatPhrases.length)];
    spawnFloating(t);
  }, 850);

  for (let i=0; i<7; i++){
    setTimeout(() => spawnFloating(floatPhrases[i % floatPhrases.length]), i * 320);
  }

  // GMod hooks
  window.SetStatusChanged = function(status){
    if (status){
      subtitle.textContent = status;
    }
  };
  window.SetStatus = function(status){ window.SetStatusChanged(status); };

  window.DownloadingFile = function(){
    subtitle.textContent = "Downloading Addons...";
  };
})();
