import * as wanakana from 'wanakana';

let lastLyricContent = null;
const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    const mainNode = document.querySelector('main');
    if (mainNode && mainNode.textContent !== lastLyricContent) {
        lastLyricContent = mainNode.textContent;
    const lyricNodes = document.querySelectorAll('main [data-testid="fullscreen-lyric"]');
    lyricNodes.forEach((node) => {
        node.innerText = wanakana.toRomaji(node.innerText);
    });
    }
};

const observer = new MutationObserver(callback);

const intervalID = setInterval(() => {
    const mainNode = document.querySelector('main');
    if (mainNode) {
        observer.observe(mainNode, config);
        clearInterval(intervalID);
    }
}, 100);

