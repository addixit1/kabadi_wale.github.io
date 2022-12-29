window.utils = {
    getOffsetHeight: function (element) { return element.offsetHeight; },
    getScrollHeight: function (element) { return element.scrollHeight; },
    getOffsetWidth: function (element) { return element.offsetWidth; },
    getScrollWidth: function (element) { return element.scrollWidth; }
}
window.themeSwitcher = {
    prefersDark: function () {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    },
    toggleTheme: function (isDark) {
        if (isDark) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
        }
    }
}