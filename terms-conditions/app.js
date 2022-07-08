const wrapper = document.querySelector('.wrapper');
const button = document.querySelector('.accept');
const watch = document.querySelector('.watch');

function observerCallback(payload) {
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
        observer.unobserve(watcher.lastElementChild);
    }

}
const observer = new IntersectionObserver(observerCallback, {
    root: wrapper,
    threshold: 1
});
observer.observe(watch);