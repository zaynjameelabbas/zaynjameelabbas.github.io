function includeHTML() {
    var includeElements = document.querySelectorAll('[include-html]');
    includeElements.forEach(function(element) {
        var file = element.getAttribute('include-html');
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    element.innerHTML = this.responseText;
                }
                if (this.status === 404) {
                    element.innerHTML = 'Page not found.';
                }
                element.removeAttribute('include-html');
                includeHTML();
            }
        };
        xhr.open('GET', file, true);
        xhr.send();
    });
}
includeHTML();