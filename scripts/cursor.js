var cursor;

window.onload = init()


// Initializes the cursor to leftmost possible position
function init(){
    cursor = document.getElementById('cursor')
    cursor.style.left = "0px";
}

// Replace all the newline chars with empty string
function replaceNewline(str){
    return str.replace(/\n/g, '');
}

// Takes data from textarea and write to the liner
function typeToLine(source , e){
    // Load event data using both methods
    e = e || window.event;

    // Store data from textarea and write to inputLine span
    var textBox = source.value;
    var inputLine = document.getElementById('input');

    inputLine.innerHTML = replaceNewline(textBox);
}

// Moves the cursor depending on key pressed
function moveCursor(len, e){
    e = e || window.event;
    var keyCode = e.keyCode || e.which;

    // left or right arrow key -> shift the cursor by 10px left or right.
    if (keyCode == 37 && parseInt(cursor.style.left) >= (0 - ((len - 1) * 10))) {
        cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } 
    else if (keyCode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
        cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
}