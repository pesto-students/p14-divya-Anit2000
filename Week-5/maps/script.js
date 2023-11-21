function calcWordFrequencies() {
    let text = prompt("Please enter text");
    if (!text) return false;
    let textMap = new Map();
    let textArr = text.split(" ");
    textArr.forEach((el) => {
        const currentCount = textMap.has(el) ? textMap.get(el) : 0;
        textMap.set(el, currentCount + 1);
    });
    textMap.forEach((count, word) => {
        console.log(`${word} ${count}`);
    })
}
calcWordFrequencies()