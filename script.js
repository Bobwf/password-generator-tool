
function generatePasswords() {
    const length = document.getElementById('length').value;
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?/|";

    let allChars = "";
    if (useUpper) allChars += upper;
    if (useLower) allChars += lower;
    if (useNumbers) allChars += numbers;
    if (useSymbols) allChars += symbols;

    const listBox = document.getElementById('passwordList');
    listBox.innerHTML = "";

    if (allChars === "") {
        const option = document.createElement("option");
        option.textContent = "Select at least one character type.";
        listBox.appendChild(option);
        return;
    }

    for (let j = 0; j < 10; j++) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars[randomIndex];
        }
        const option = document.createElement("option");
        option.textContent = password;
        listBox.appendChild(option);
    }
}

function copySelected() {
    const listBox = document.getElementById('passwordList');
    let selected = Array.from(listBox.selectedOptions).map(opt => opt.textContent);
    if (selected.length > 0) {
        navigator.clipboard.writeText(selected.join("\n")).then(() => {
            alert("Selected passwords copied to clipboard!");
        }).catch(err => {
            alert("Failed to copy to clipboard: " + err);
        });
    }
}



function copyAll() {
    const listBox = document.getElementById('passwordList');
    let all = Array.from(listBox.options).map(opt => opt.textContent);
    if (all.length > 0) {
        navigator.clipboard.writeText(all.join("\n"));
        alert("All passwords copied to clipboard!");
    }
}

document.getElementById('length').addEventListener('input', function() {
    document.getElementById('lengthValue').textContent = this.value;
});
