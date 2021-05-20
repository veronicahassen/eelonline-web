function navigateToUrl(url) {
    if ((window.location.origin + "/" !== window.location.href) && window.location.href !== window.location.origin + "/#content") {
        window.location.replace(window.location.origin + url);
    }
}



