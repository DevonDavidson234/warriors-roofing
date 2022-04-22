//Listens for button click
document.getElementById("button").addEventListener("click", function () {
    //Initialize variables
    var isValid1 = true;
    var isValid2 = true;
    var length = document.getElementById("length");
    var width = document.getElementById("width");
    var desc1 = document.getElementById("desc1");
    var desc2 = document.getElementById("desc2");

    //Checks for correct inputs for length
    if (length.value < 1 || length.value > 20000) {
        //Updates input boxes and describes issue
        isValid1 = false;
        length.style.borderColor = "red";
        desc1.innerHTML = "Length must be between 0 and 20,000";
        desc1.style.color = "red";
    }

    //Checks for correct inputs for width
    if (width.value < 1 || width.value > 20000) {
        //Updates input boxes and describes issue
        isValid2 = false;
        width.style.borderColor = "red";
        desc2.innerHTML = "Width must be between 0 and 20,000";
        desc2.style.color = "red";
    }

    //Checks if length input is valid
    if (isValid1) {
        //Resets length input box to default
        length.style.borderColor = "#ced4da";
        desc1.innerHTML = "";
    }

    //Checks if width input is valid
    if (isValid2) {
        //Resets width input box to default
        width.style.borderColor = "#ced4da";
        desc2.innerHTML = "";
    }

    //Checks if both inputs are valid
    if (isValid1 && isValid2) {
        //Passes nessecary values to price calculations
        price(+length.value, +width.value, document.getElementById("pitch").value, document.getElementById("story").value);
    }
});

//Calculates the price
function price(length, width, pitch, story) {
    //Initialize variables
    var price = 0;
    var labor = 150;
    var sq = Math.ceil(((length * width)) / 100) + 1;

    //Adds to labor costs for pitch
    if (pitch == "4/12 - 7/12") {
        labor += 5;
    } else if (pitch == "8/12 - 10/12") {
        labor += 10;
    } else if (pitch == "11/12 - 12/12") {
        labor += 20;
    }

    //Adds to labor costs for story
    if (story == "2 Story") {
        labor += 10;
    } else if (story == "3 Story") {
        labor += 20;
    }

    //Shingles
    price += sq * 110;

    //Felt Paper
    price += Math.ceil(sq / 2) * 20;

    //Ridge Cap
    price += Math.ceil((length + 20) / 35) * 60;

    //Starter Shingles
    price += Math.ceil(((length * 2) + 20) / 100) * 24;

    //Drip Edge
    price += (((length * 2) + (width * 2)) + 20) * 2;

    //Roofing Nails
    price += Math.ceil((sq + 1) / 13) * 45;

    //Labor
    price += (sq - 1) * labor;

    //Extra Labor
    price += Math.floor((sq - 1) / 10) * labor;

    //Runs Display
    display(price);
}

//Displays the claculated price
function display(price) {
    //Formats the price as USD currency
    var format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

    //Sets the page up to display price
    document.getElementById("warning").innerHTML = "";
    document.getElementById("quoteContainer").innerHTML = "<p class='lead'style='color: red' id='call'>This quote is a bare minimum estimate. For a more accurate estimate, please call us at 417-268-5771.</p> <h1 class='display-1' id='cost'></h1> <a href='quote.html' class='btn btn-primary mt-3'>Go Back</a>";
    document.getElementById("quoteContainer").classList = "container-fluid p-5 mt-5 text-center";

    //Displays the formatted price
    document.getElementById("cost").innerHTML = format;
}