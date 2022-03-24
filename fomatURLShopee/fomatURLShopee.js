javascript: void(function() {
    function copyToClipboard(t) {
        navigator.clipboard.writeText(t).then(function() {
            window.alert("Format domain successfully");
        }, function(b) {
            console.error("Async: Could not copy text: ", b)
        })
    }
    var a = window.location.pathname;
    if (a.split('/')[1] != "product") {
        b = a.split("?")[0].split(".");
        c = 'https://shopee.vn/product/' + b[1] + '/' + b[2]
    } else {
        c = 'https://shopee.vn/product/' + a.split("?")[0];
    }
    copyToClipboard(c);
})();