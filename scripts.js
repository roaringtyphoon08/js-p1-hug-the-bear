let counter=0
let hug = document.getElementById("hug")
function increment_counter() {
    counter += 1;
    document.getElementById("hug").innerText = counter;
    console.log(counter);
}
