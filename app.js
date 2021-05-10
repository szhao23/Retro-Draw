// Retro Draw Project !!!!!
// Module 01
// Day 1 Project Goals
// 1. We need to create and add cells to our .grid:
//      a. Write a for loop that will happen 64 times
//      b. Inside the for loop, create a new div with a class of cell
//      c. Append it to the grid
// 2. We need to write some code that will create a palette in a way that is extendable in the future:
//      a. Write an array which has a list of HTML compatible color strings:
//      b. Create a for loop that's as long as my list
// 3. For each color:
//      a. Create a new button element
//      b. Set the background color for the button based on the color we grabbed from the list
//      c. Append it to the .palette element.
//  Now your page should have colorful buttons and a good looking grid.

// Create and add Cells to our .grid:
function createGrid()
{
    for (i = 0; i < 64; i++)
    {
        const cell = $('<div>')
        cell.attr('class', 'cell')
        $('.grid').append(cell)
    }
}

// We need to write some code that will create a palette in a way that is extendable in the future:
function createPalette() 
{
    // a. Write an array which has a list of HTML compatible color strings:    
    const PALETTE = 
    [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'white',
    'black',
    ]

    //  b. Create a for loop that's as long as my list: 
    for (let i=0; i < 9; i++)
    {
        const nextColor =  PALETTE[i]
        //  Create a NEW button element
        const button= $('<button>')
        //  Set the background color for the BUTTON based on the COLOR we grabbed from the list
        button.css('background-color', nextColor)
        //  Append the button to the .palette element.
        $('.palette').append(button)
    }
}       


// Module 02
// Day 2 Project Goals
// 1. Create makePalette function, call makePalette
// 2. Create makeGrid function, call makeGrid
// 3. Create onPaletteClick function, attach to .palette on click
// 4. Create onGridClick function, fill only, attach to .grid on click
// 5. At this point you should have the ability to click a color from your palette, and transfer the color of an active palette color onto the cells in your grid.
// Now you can draw!

// Function called onPaletteClick, whatever button is clicked, set as active, others, remove active
function onPaletteClick() 
{
    // First: remove the class of active from any palette button which is currently active
    $('.active').removeClass('active');
    // Second: add the class of active to the target of the click. Quickest way to get clicktarget, use $(this)
    $(this).addClass('active');
}

// Create onGridClick function, fill only, attach to .grid on click
// Like before, we need to write an onGridClick function and attach it to the .grid .cell elements using the .click method
// When we click, we need to read the background-color off of the palette .active cell, and transfer it to the target element

function onGridClick () 
{
    const backgroundColor = $('.palette .active').css('background-color')
    
    if ($(this).css('background-color') === backgroundColor) 
    {
        $(this).css('background-color', '')
    }
    else {
    $(this).css('background-color', backgroundColor)
    }
}


// Module 03
// Day 3 Project Goals
// 1. Create onClearClick function, attach to .controls .clear on click
// 2. Create onFillAllClick function, attach to .controls .fill-all on click
// 3. Create onFillEmptyClick function, attach to .controls .fill-empty on click
// 4. Update onGridClick to toggle if the target color matches

function onClearClick() 
{
    $('.grid .cell').css('background-color', '');
}

function onFillAllClick ()
{
    const backgroundColor = $('.palette .active').css('background-color')
    $('.grid .cell').css('background-color', backgroundColor)
}

function onFillEmptyClick () 
{
    const el = $('.grid .cell')
    const backgroundColor = $('.palette .active').css('background-color')
    // For loop to search through all cells in the grid that are equal to rgba(0, 0 ,0 ,0) and change them to 
    // the currently selected ('.palette .active') color
    for (let index = 0; index < el.length; index++) 
    {
      let nextEl = $(el[index]);
      if (nextEl.css('background-color') === 'rgba(0, 0, 0, 0)') 
      {
          nextEl.css('background-color', backgroundColor)
          // Change nextEl to backgroundColor which is the currently selected active palette color
      }
    }
}



// FUNCTION CALLS, necessary or else the functions will never run and display. 
// Call the function to initialize and createGrid();
createGrid();
// Call the function to intialize and createPalette();
createPalette();

// Set palette button, first/parent, add/create class 'active' to set the first palette as a diamond
$('.palette button').first().addClass('active');
// Function onPaletteClick, this will change selected palette to active, and remove others to inactive
$('.palette button').click(onPaletteClick);
// Function onGridClick, read the background color and select the palette color onto the cell selected.
$('.grid .cell').click(onGridClick);
// Updates onGridClick() function, so that if I click the cell that is already 'color', it will clear the color.

// Function onClearClick will clear all cells to background-color: ''
$('.controls .clear').click(onClearClick);
// Function onFillAllClick() to change all cells into selected .palette .active color
$('.controls .fill-all').click(onFillAllClick);
// Function onFillEmptyClick() to fill all EMPTY cells with selected .palette .active color
$('.controls .fill-empty').click(onFillEmptyClick);







