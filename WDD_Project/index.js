let activeIndex = 0;
const groups = document.getElementByClassName('card-group');
function handleLoveClick() {
    // Bump Active Index
    

    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(`[data-index = "${activeIndex}"]`),
            nextGroup = document.querySelector(`[data-index = "${nextIndex}"]`);

    currentGroup.dataset.status = 'after';
    nextGroup.dataset.status = 'active';
    activeIndex = nextIndex; 

}