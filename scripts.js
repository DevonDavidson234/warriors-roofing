document.getElementById("button").addEventListener("click", function () {
    var isValid1 = true;
    var isValid2 = true;
    var length = document.getElementById("length");
    var width = document.getElementById("width");
    var desc1 = document.getElementById("desc1");
    var desc2 = document.getElementById("desc2");

    if (length.value < 1 || length.value > 20000) {
        isValid1 = false;
        length.style.borderColor = "red";
        desc1.innerHTML = "Length must be between 0 and 20,000";
        desc1.style.color = "red";
    }

    if (width.value < 1 || width.value > 20000) {
        isValid2 = false;
        width.style.borderColor = "red";
        desc2.innerHTML = "Width must be between 0 and 20,000";
        desc2.style.color = "red";
    }

    if (isValid1) {
        length.style.borderColor = "#ced4da";
        desc1.innerHTML = "";
    }

    if (isValid2) {
        width.style.borderColor = "#ced4da";
        desc2.innerHTML = "";
    }

    if (isValid1 && isValid2) {
        price(+length.value, +width.value, document.getElementById("pitch").value, document.getElementById("story").value);
    }
});

function price(length, width, pitch, story) {
    var price = 0;
    var labor = 200;
    var sq = Math.ceil(((length * width)) / 100) + 1;

    if (pitch == "4/12 - 7/12") {
        labor += 5;
    } else if (pitch == "8/12 - 10/12") {
        labor += 10;
    } else if (pitch == "11/12 - 12/12") {
        labor += 20;
    }

    if (story == "2 Story") {
        labor += 10;
    } else if (story == "3 Story") {
        labor += 20;
    }

    price += sq * 110;

    price += Math.ceil(sq / 2) * 20;

    price += Math.ceil((length + 20) / 35) * 60;

    price += Math.ceil(((length * 2) + 20) / 100) * 24;

    price += (((length * 2) + (width * 2)) + 20) * 2;

    price += Math.ceil((sq + 1) / 13) * 45;

    price += (sq - 1) * labor;

    price += Math.floor((sq - 1) / 10) * labor;


    display(length, width, pitch, story, price);
}

function display(length, width, pitch, story, price) {
    document.getElementById("warning").innerHTML = "";
    document.getElementById("container").innerHTML = "<p class='lead'style='color: red' id='call'>This quote is a bare minimum estimate. For a more accurate estimate, please call us at 417-268-5771.</p> <h1 class='display-1' id='cost'></h1> <a href='quote.html' class='btn btn-primary mt-3'>Go Back</a>";
    document.getElementById("container").classList = "container-fluid p-5 mt-5 text-center";

    document.getElementById("cost").innerHTML = "$" + price;
}