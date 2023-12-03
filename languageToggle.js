function toggleLanguage(language) {
    var elementsEn = document.querySelectorAll('.language-en');
    var elementsEs = document.querySelectorAll('.language-es');

    if (language === 'english') {
        elementsEn.forEach(function(elem) {
            elem.style.display = '';
        });
        elementsEs.forEach(function(elem) {
            elem.style.display = 'none';
        });
    } else if (language === 'spanish') {
        elementsEn.forEach(function(elem) {
            elem.style.display = 'none';
        });
        elementsEs.forEach(function(elem) {
            elem.style.display = '';
        });
    }
}
