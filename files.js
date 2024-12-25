// script.js

document.addEventListener('DOMContentLoaded', () => {
    const imagesData = [
        { "filename": "12 01 24 john Ogletree.png", "alt": "12 01 24 John Ogletree" },
        { "filename": "Golden Requiem.jpg", "alt": "Golden Requiem" },
        { "filename": "Dreamweaver.jpg", "alt": "Dreamweaver" },
        { "filename": "11 20 2023_John Ogletree_logo.png", "alt": "John Ogletree Logo" },
        { "filename": "Glitchy Track Cover.jpg", "alt": "Glitchy Track Cover" },
        { "filename": "Embers Album Cover.jpg", "alt": "Embers Album Cover" },
        { "filename": "Capture Album Cover.jpg", "alt": "Capture Album Cover" },
        { "filename": "Pink Moon Track Cover.jpg", "alt": "Pink Moon Track Cover" },
        { "filename": "The Horizon Track Cover.jpg", "alt": "The Horizon Track Cover" },
        { "filename": "Underwater Album Cover.jpg", "alt": "Underwater Album Cover" },
        { "filename": "Deep End Track Cover.jpg", "alt": "Deep End Track Cover" },
        { "filename": "Land Of The Free Album Cover.jpg", "alt": "Land Of The Free Album Cover" },
        { "filename": "The End Track Cover.jpg", "alt": "The End Track Cover" },
        { "filename": "Flame Track Cover.jpg", "alt": "Flame Track Cover" },
        { "filename": "Midnight Drive Track Cover.jpg", "alt": "Midnight Drive Track Cover" },
        { "filename": "Game Over Track Cover.jpg", "alt": "Game Over Track Cover" },
        { "filename": "Broken Track Cover.jpg", "alt": "Broken Track Cover" },
        { "filename": "Darkness Trak Cover.jpg", "alt": "Darkness Track Cover" }, // Corrected "Trak" to "Track" if needed
        { "filename": "Lost Track Cover.jpg", "alt": "Lost Track Cover" },
        { "filename": "FirePit Track Cover.jpg", "alt": "FirePit Track Cover" },
        { "filename": "Visions Unveiled Collection Cover.webp", "alt": "Visions Unveiled Collection Cover" },
        { "filename": "Koam Profile Picture.jpg", "alt": "Koam Profile Picture" },
        { "filename": "Only Human.jpg", "alt": "Only Human" },
        { "filename": "World Of Tomorrow.jpg", "alt": "World Of Tomorrow" },
        { "filename": "Death Is Only The Beginning.jpg", "alt": "Death Is Only The Beginning" },
        { "filename": "Watch What You Say.png", "alt": "Watch What You Say" },
        { "filename": "City of Bad Dreams.png", "alt": "City of Bad Dreams" },
        { "filename": "God Bless America.jpg", "alt": "God Bless America" },
        { "filename": "Serpentine Sip.jpg", "alt": "Serpentine Sip" },
        { "filename": "Serpentine Gaze.jpg", "alt": "Serpentine Gaze" },
        { "filename": "Fallen Angel.jpg", "alt": "Fallen Angel" },
        { "filename": "Break The Code.jpg", "alt": "Break The Code" },
        { "filename": "Still And Steal.png", "alt": "Still And Steal" },
        { "filename": "Introverted Cafe.jpg", "alt": "Introverted Cafe" }, // Added .jpg extension
        { "filename": "Burst Photography.jpg", "alt": "Burst Photography" },
        { "filename": "The Mixo.png", "alt": "The Mixo" },
        { "filename": "Infinite X.png", "alt": "Infinite X" },
        { "filename": "Blonde Jackets.jpg", "alt": "Blonde Jackets" },
        { "filename": "Number One.jpg", "alt": "Number One" },
        { "filename": "Build The Lily.jpg", "alt": "Build The Lily" },
        { "filename": "Creative Minds.jpg", "alt": "Creative Minds" },
        { "filename": "Create Change.jpg", "alt": "Create Change" },
        { "filename": "Avon Productions.jpg", "alt": "Avon Productions" },
        { "filename": "Infernal Defeat Transcended.jpg", "alt": "Infernal Defeat Transcended" },
        { "filename": "Foundation.jpg", "alt": "Foundation" },
        { "filename": "Stay Whole.jpg", "alt": "Stay Whole" },
        { "filename": "inside the storm.jpg", "alt": "Inside The Storm" },
        { "filename": "Living Out Life Bible Study.png", "alt": "Living Out Life Bible Study" },
        { "filename": "Vust Reservations.png", "alt": "Vust Reservations" },
        { "filename": "Burst Through.png", "alt": "Burst Through" }
    ];

    const videosData = [
        { "filename": "Lindsey And John Ogletree 2025.mp4", "title": "Lindsey And John Ogletree 2025" },
        { "filename": "Rise Above.mp4", "title": "Rise Above" },
        { "filename": "Unleash Your Dream.mp4", "title": "Unleash Your Dream" }
    ];

    const audioData = [
        // Add your audio files here in the future if available
    ];

    displayImages(imagesData);
    displayVideos(videosData);
    displayAudio(audioData);
    setupMobileMenu();
    lazyLoad();
});

function displayImages(files) {
    const gallery = document.getElementById('gallery');
    if (files.length === 0) {
        gallery.innerHTML = '<p>No images available.</p>';
        return;
    }
    files.forEach(file => {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('gallery-item');

        const link = document.createElement('a');
        link.href = `assets/images/${file.filename}`;
        link.setAttribute('data-lightbox', 'portfolio');
        link.setAttribute('data-title', file.alt);

        const img = document.createElement('img');
        img.src = `assets/images/${file.filename}`;
        img.alt = file.alt;
        img.classList.add('lazy');

        link.appendChild(img);
        imgDiv.appendChild(link);
        gallery.appendChild(imgDiv);
    });
}

function displayAudio(files) {
    const audioList = document.getElementById('audioList');
    if (files.length === 0) {
        audioList.innerHTML = '<p>No audio files available.</p>';
        return;
    }
    files.forEach(file => {
        const audioDiv = document.createElement('div');
        audioDiv.classList.add('audio-item');

        const title = document.createElement('h3');
        title.textContent = file.title;

        const audio = document.createElement('audio');
        audio.controls = true;

        const source = document.createElement('source');
        source.src = `assets/audio/${file.filename}`;
        source.type = getAudioType(file.filename);
        audio.appendChild(source);
        audio.innerHTML += 'Your browser does not support the audio element.';

        audioDiv.appendChild(title);
        audioDiv.appendChild(audio);
        audioList.appendChild(audioDiv);
    });
}

function displayVideos(files) {
    const videoList = document.getElementById('videoList');
    if (files.length === 0) {
        videoList.innerHTML = '<p>No video files available.</p>';
        return;
    }
    files.forEach(file => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video-item');

        const title = document.createElement('h3');
        title.textContent = file.title;

        const video = document.createElement('video');
        video.controls = true;

        const source = document.createElement('source');
        source.src = `assets/videos/${file.filename}`;
        source.type = getVideoType(file.filename);
        video.appendChild(source);
        video.innerHTML += 'Your browser does not support the video tag.';

        videoDiv.appendChild(title);
        videoDiv.appendChild(video);
        videoList.appendChild(videoDiv);
    });
}

function getAudioType(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    switch (ext) {
        case 'mp3':
            return 'audio/mpeg';
        case 'wav':
            return 'audio/wav';
        case 'ogg':
            return 'audio/ogg';
        default:
            return 'audio/mpeg';
    }
}

function getVideoType(filename) {
    const ext = filename.split('.').pop().toLowerCase();
    switch (ext) {
        case 'mp4':
            return 'video/mp4';
        case 'webm':
            return 'video/webm';
        case 'ogg':
            return 'video/ogg';
        default:
            return 'video/mp4';
    }
}

function setupMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menu.addEventListener('click', () => {
        navList.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

function lazyLoad() {
    const lazyImages = document.querySelectorAll('img.lazy');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src; // Fallback if dataset.src not set
                img.onload = () => img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: "0px 0px 50px 0px",
        threshold: 0.01
    });

    lazyImages.forEach(img => {
        img.dataset.src = img.src; // Ensure dataset.src is set
        img.src = ''; // Clear the src to delay loading
        imageObserver.observe(img);
    });
}
