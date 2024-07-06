document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const volumeControl = document.getElementById('volume');
    const trackInfo = document.getElementById('track-info');
    const audioPlayer = document.getElementById('audio-player');

    let currentTrackIndex = 0;
    const playlist = [
        { title: 'Song 1', artist: 'Artist 1', src: 'Desktop\songs\O Mahi O Mahi(PagalWorld.com.sb)'},
        { title: 'Song 2', artist: 'Artist 2', src: 'path/to/song2.mp3' },
        { title: 'Song 3', artist: 'Artist 3', src: 'path/to/song3.mp3' }
    ];
    
    function loadTrack(index) {
        const track = playlist[index];
        audioPlayer.src = track.src;
        trackInfo.textContent = `${track.title} - ${track.artist}`;
    }

    function playTrack() {
        audioPlayer.play();
    }

    function pauseTrack() {
        audioPlayer.pause();
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }

    function setVolume(volume) {
        audioPlayer.volume = volume / 100;
    }

    playButton.addEventListener('click', playTrack);
    pauseButton.addEventListener('click', pauseTrack);
    nextButton.addEventListener('click', nextTrack);
    prevButton.addEventListener('click', prevTrack);
    volumeControl.addEventListener('input', (event) => setVolume(event.target.value));

    loadTrack(currentTrackIndex);
});
