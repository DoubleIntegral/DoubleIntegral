// JavaScript
var elements = document.querySelectorAll('body *');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent;
    var colorCode = text.match(/\((#[0-9a-fA-F]{6})\)/);
    if (colorCode) {
        element.style.color = colorCode[1];
        element.textContent = text.replace(/\(#[0-9a-fA-F]{6}\)/, '');
    }
}