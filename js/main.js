(function() {
    const browserLanguage = window.navigator.userLanguage || window.navigator.language;
    console.log(browserLanguage);
    const langaugeAnchor = document.querySelector("#language");
    langaugeAnchor.innerHTML = browserLanguage;
})();