function submitForm() {
    document.form.submit();
    document.form.reset();
}

var loader = document.getElementById("loader");

window.addEventListener("load", function(){
    loader.style.display="none";
})