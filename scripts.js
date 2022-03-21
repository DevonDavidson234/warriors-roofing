document.getElementById("button").addEventListener("click", function(){
    var isValid1 = true;
    var isValid2 = true;
    var length = document.getElementById("length");
    var width = document.getElementById("width");
    var desc1 = document.getElementById("desc1");
    var desc2 = document.getElementById("desc2");

    if(length.value < 1 || length.value > 20000){
        isValid1 = false;
        length.style.borderColor = "red";
        desc1.innerHTML = "Length must be between 0 and 20,000";
        desc1.style.color = "red";
    }

    if(width.value < 1 || width.value > 20000){
        isValid2 = false;
        width.style.borderColor = "red";
        desc2.innerHTML = "Width must be between 0 and 20,000";
        desc2.style.color = "red";
    }

    if(isValid1){
        length.style.borderColor = "#ced4da";
        desc1.innerHTML = "";
    }

    if(isValid2){
        width.style.borderColor = "#ced4da";
        desc2.innerHTML = "";
    }

    if(isValid1 && isValid2){
        price(length.value, width.value, document.getElementById("pitch").value, document.getElementById("story").value);
    }
});

function price(length, width, pitch, story){

}