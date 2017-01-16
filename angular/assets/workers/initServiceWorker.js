if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
        console.log('Yay, service worker is live!', reg);
    }).catch(function(err) {
        console.log('No oats for you.', err);
    });
}