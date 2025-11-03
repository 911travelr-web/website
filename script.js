document.getElementById('btn').addEventListener('click', function() {
    const messages = [
        'JavaScript is awesome!',
        'You clicked the button!',
        'Hello from GitHub Pages!',
        'Keep clicking for more messages!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
});
