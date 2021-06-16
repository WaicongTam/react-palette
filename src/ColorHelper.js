import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400,500, 600, 700, 800, 900];

function generatePalette(starterPalette) { 
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    for (let level of levels) {
        newPalette.colors[level] = [];
    }
    for (let color of starterPalette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale) { 
            newPalette.colors[level[i]].push({
                name: `{color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css()
            })
        }
            
    }
}

function getRange(hexColor) {
    const end = '#fff';
    return [
        chroma(hexColor).darken(1.4).hex(), hexColor, end
    ]
}

export generatePalette;

function generateScale(hexColor, numOfColors) {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numOfColors)
}