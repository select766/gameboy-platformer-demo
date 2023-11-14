window.addEventListener('load', async () => {
    let touchUsed = false;
    const setHandler = (name, key) => {
        const button = document.getElementById(name);
        button.addEventListener('mousedown', () => {
            if (touchUsed) return;
            window.gb.keyPressed(key);
        });
        button.addEventListener('mouseup', () => {
            if (touchUsed) return;
            window.gb.keyReleased(key);
        });
        button.addEventListener('touchstart', () => {
            touchUsed = true;
            window.gb.keyPressed(key);
        });
        button.addEventListener('touchend', () => {
            touchUsed = true;
            window.gb.keyReleased(key);
        });
    }

    setHandler('key-left', 2);
    setHandler('key-up', 4);
    setHandler('key-right', 1);
    setHandler('key-down', 8);
    setHandler('key-b', 32);
    setHandler('key-a', 16);
    setHandler('key-start', 128);
    setHandler('key-select', 64);

    const f = await fetch('./gbplat.gb');
    const rom = await f.arrayBuffer();
    loadROM(rom);
});
