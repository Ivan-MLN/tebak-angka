class Game {
    constructor() {
        this.secretNumber = this.generateRandomNumber();
        this.history = [];
    }

    generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    checkGuess(guess) {
        if (guess < this.secretNumber) {
            return 'Terlalu rendah!';
        } else if (guess > this.secretNumber) {
            return 'Terlalu tinggi!';
        } else {
            return 'Selamat! Anda menebak dengan benar.';
        }
    }

    addHistory(guess) {
        this.history.push(guess);
    }

    displayHistory() {
        return this.history.join(', ');
    }
}

const game = new Game();

document.getElementById('guess-button').addEventListener('click', () => {
    const guessInput = document.getElementById('guess-input');
    const guess = parseInt(guessInput.value);
    const message = game.checkGuess(guess);
    game.addHistory(guess);

    document.getElementById('message').textContent = message;
    document.getElementById('history').textContent = `Riwayat Tebakan: ${game.displayHistory()}`;
    
    if (message === 'Selamat! Anda menebak dengan benar.') {
        document.getElementById('guess-button').disabled = true;
        document.getElementById('guess-input').disabled = true;
    }

    guessInput.value = '';
    guessInput.focus();
});
