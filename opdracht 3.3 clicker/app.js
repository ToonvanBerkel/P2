let current_number = 0;

function add_one() {
    if (current_number<10) {
    current_number += 1;
    } else {
        current_number = 0;
    }
    document.getElementById('title').innerText = current_number;
}