function enter() {
    // Get the data from html
    const username = document.getElementById("username").value;
    const caption = document.getElementById("textbox").value;

    // will check if the fields is empty
    if (username.trim() === "" || caption.trim() === "") {
        alert("Please enter your username and caption.");
        return;
    }

    // Display the original post
    document.getElementById("original").textContent =
        username + ": " + caption;

    // Secret key for encryption
    const secretKey = "mySecretKey123";

    // Encrypt the caption using aes
    const encrypted = CryptoJS.AES.encrypt(
        caption,
        secretKey
    ).toString();

    // Display the encrypted caption
    document.getElementById("encrypted").textContent =
        encrypted;
}