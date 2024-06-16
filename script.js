function hide(element) {
    element.remove();
}

function addLikesTop() {
    var element = document.getElementById('top');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('top').innerHTML = value;
}

function addLikesMiddle() {
    var element = document.getElementById('middle');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('middle').innerHTML = value;
}

function addLikesBottom() {
    var element = document.getElementById('bottom');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('bottom').innerHTML = value;
}

// Cache at least one element using selectElementById.

    var top = document.getElementById('top');

// cache at least one element using querySelector or querySelectorAll

    var h1 = document.querySelector('h1');

    // Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).

    var parent = h1.parentNode;

    // Iterate over a collection of elements to accomplish some task

    var divs = document.querySelectorAll('div');

// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.

    h1.style.color = 'red';

    // Modify at least one attribute of an element in response to user interaction.

    h1.setAttribute('title', 'This is a title');

    // Use at least two Browser Object Model (BOM) properties or methods

    console.log(window.innerHeight);
    console.log(window.innerWidth);

    // Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)

    var form = document.querySelector('form');
    



    
    
