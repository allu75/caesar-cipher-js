function caesarCipher(text, shift) {
    shift = shift % 26;

    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const isUpperCase = char === char.toUpperCase();
            const base = isUpperCase ? 65 : 97;

            return String.fromCharCode((code - base + shift + 26) % 26 + base);
        }
        return char;
    }).join('');
}

function encrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);

    if (isNaN(shift)) {
        alert("Please enter a valid shift number.");
        return;
    }

    document.getElementById("result").innerText = caesarCipher(message, shift);
}

function decrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);

    if (isNaN(shift)) {
        alert("Please enter a valid shift number.");
        return;
    }

    document.getElementById("result").innerText = caesarCipher(message, -shift);
}