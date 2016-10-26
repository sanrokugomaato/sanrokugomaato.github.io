(function () {
  function changeBgColor() {
    var color = randomColor({ luminosity: 'light' });
    document.body.style.backgroundColor = color;
  }

  setInterval(changeBgColor, 7000);
})();
