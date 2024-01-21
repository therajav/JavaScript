// This function make color wiht the RGB values given and return an object named "color" which is an object has it's own method to display RGB and Hex color 
function makeColor(r,g,b){
    // Create empty object 
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    //  RGB value method
    color.rgb = function() {
        // Destructuring the RGB values
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }
    color.hex = function()  {
        // Destructuring the RGB values
        const {r,g,b} = this;
        // formula from Stack Overflow ;)
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }
    return color;
}

const firstColour = makeColor(245, 209, 66)

