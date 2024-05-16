document.addEventListener('DOMContentLoaded', function() {
    var audioElement = document.getElementById('audio-element');
    var wrapperElement = document.querySelector('.wrapper');
    var pedroElement = document.querySelector('.pedro');
    var startTime = 26; // Set the start time in seconds

    // Wait for the audio metadata to be loaded before setting the start time and playing
    audioElement.addEventListener('loadedmetadata', function() {
        audioElement.currentTime = startTime;
        audioElement.play().catch(function(e) {
            console.log('Playback prevented:', e);
            var playButton = document.createElement('button');
            playButton.innerText = 'Play Audio';
            playButton.className = 'play-button';
            playButton.addEventListener('click', function() {
                audioElement.play();
                playButton.style.display = 'none';
                wrapperElement.classList.add('animate'); // Start animations
                pedroElement.style.visibility = 'visible'; // Make the image visible
            });
            document.body.appendChild(playButton);
        });
    });
});
