function navigateToUrl(url, pageTop) {
    let section = pageTop === true ? "/#page-top" : "/#content"
    if ((window.location.origin + "/" !== window.location.href) && window.location.href !== window.location.origin + section) {
        window.location.replace(window.location.origin + url);
    }
}



