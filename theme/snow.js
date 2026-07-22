// Падающий снег на страницах книги
(function () {
  var FLAKES = 25;
  var symbols = ["❄", "❅", "❆"];
  for (var i = 0; i < FLAKES; i++) {
    var f = document.createElement("span");
    f.className = "snowflake";
    f.textContent = symbols[i % symbols.length];
    f.style.left = Math.random() * 100 + "vw";
    f.style.fontSize = 0.6 + Math.random() * 1.2 + "em";
    f.style.opacity = 0.3 + Math.random() * 0.6;
    f.style.animationDuration = 6 + Math.random() * 10 + "s";
    f.style.animationDelay = -Math.random() * 10 + "s";
    document.body.appendChild(f);
  }
})();
