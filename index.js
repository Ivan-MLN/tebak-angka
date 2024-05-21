<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tebak Angka</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <h1>Tebak Angka</h1>
        <p>Masukkan angka antara 1 dan 100:</p>
        <input type="number" id="guess-input" min="1" max="100">
        <button id="guess-button">Tebak</button>
        <p id="message"></p>
        <div id="history"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>
