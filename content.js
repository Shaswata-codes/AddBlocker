function removeYouTubeAds() {
    const adSelectors = [
    '.video-ads',
    '.ytp-ad-module',
    '.ytp-ad-overlay-container',
    '.ytp-ad-player-overlay',
    '.ytp-ad-skip-button-container',
    '.ytp-ad-progress-list',
    '.ytp-ad-preview-container',
    'ytd-promoted-sparkles-web-renderer',
    'ytd-display-ad-renderer',
    '#player-ads',
    '.ytp-ad-text',
    'ytd-banner-promo-renderer',
    'ytd-companion-slot-renderer'
    ];

    adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
    });

    const player = document.querySelector('.ad-showing video');
    if (player && player.duration && player.currentTime < player.duration - 1) {
    player.currentTime = player.duration;
    }

    const skipBtn = document.querySelector('.ytp-ad-skip-button');
    if (skipBtn) {
    try {
        skipBtn.click();
    } catch (e) {}
    }
}

removeYouTubeAds();

const observer = new MutationObserver(removeYouTubeAds);
observer.observe(document.body, { childList: true, subtree: true });
