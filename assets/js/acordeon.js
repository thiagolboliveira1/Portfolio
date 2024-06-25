const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeonItem = trigger.parentElement;
        const isOpen = acordeonItem.classList.contains('open');

        if (isOpen) {
            acordeonItem.classList.remove('open');
        } else {
            acordeonItem.classList.add('open');
        }
    });
});
