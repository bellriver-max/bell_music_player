// Playlist data
const playlistData = {
  playlist1: [
    "SONGS/@Dilaw - Uhaw (Tayong Lahat) (Lyrics).mp3",
    "SONGS/APO Hiking Society - Panalangin (Official Lyric Video).mp3",
    "SONGS/Earl Agustin performs Tibok LIVE on Wish 107.5 Bus.mp3",
    "SONGS/eevee - Nakakamiss (Official Lyric Video) (Stuck On You OST).mp3",
    "SONGS/IV OF SPADES - Captivated (Official Audio).mp3",
    "SONGS/IV OF SPADES - Dulo Ng Hangganan (Official Audio).mp3",
    "SONGS/IV OF SPADES - I Ain't Perfect (Official Audio).mp3",
    "SONGS/IV OF SPADES - I Would Rather Live Alone (Maybe I'm Not Who I'm Today).mp3",
    "SONGS/IV OF SPADES - Nanaman (Official Lyric Video).mp3",
    "SONGS/juan karlos - Buwan (LyricsLetra).mp3",
    "SONGS/JUAN KARLOS - DEMONYO (LYRICS).mp3",
    "SONGS/juan karlos - ERE (Lyrics).mp3",
    "SONGS/Kailan - Ryan CayabyabSmokey MountainMYMP (Japanese ver.) kena & miyuki.mp3",
    "SONGS/Multo - Cup of Joe (Lyrics).mp3",
    "SONGS/Munimuni - Sa'yo (Lyrics).mp3",
    "SONGS/Munimuni - Tahanan (Official Lyric Video  2019 Album Version).mp3",
    "SONGS/NOBITA - IKAW LANG  Official Lyric Video.mp3",
    "SONGS/Pamungkas - To the bone (lyrics).mp3",
    "SONGS/Rico Blanco - Youll Be Safe Here (Official Lyric Video).mp3",
    "SONGS/Salamin, Salamin by BINI (Y2K RnB Full Version).mp3",
    "SONGS/Sana Kahit Minsan.mp3",
    "SONGS/Sariling Multo (Sa Panaginip) - IV OF SPADES (Lyrics).mp3",
    "SONGS/Skusta Clee - Kalimutan Ka (Lyrics).mp3",
    "SONGS/SUGARCANE - Leonora (Official Lyric Video).mp3",
    "SONGS/SunKissed Lola - Pasilyo (Lyrics).mp3",
    "SONGS/Tibok by Earl Agustin (Lyrics).mp3",
    "SONGS/Unique Salonga - OZONE (Itulak Ang Pinto) [Official Lyric Video].mp3",
    "SONGS/Walang Kapalit (Rey Valera) Cover by Arthur Miguel.mp3",
    "SONGS/Zack Tabudlo YAKAP Lyrics.mp3"
  ],
  playlist2: [],
  playlist3: []
};

// Cache-buster
function noCache(url) {
  return `${url}?t=${Date.now()}`;
}

// Init each playlist independently
document.querySelectorAll(".playlistPage").forEach(page => {
  const playlistId = page.id;
  const trackList   = page.querySelector(".trackList");
  const audioPlayer = page.querySelector(".audioPlayer");
  const loopBtn     = page.querySelector(".loopBtn");
  const autoplayBtn = page.querySelector(".autoplayBtn");

  const tracks = playlistData[playlistId];
  let autoplayOn = false; // per-playlist state

  // Populate dropdown (or clear if empty)
  trackList.innerHTML = "";
  if (tracks.length > 0) {
    tracks.forEach(track => {
      const option = document.createElement("option");
      option.value = track;
      option.textContent = track.split("/").pop().replace(/\.mp3$/i, "");
      trackList.appendChild(option);
    });
    audioPlayer.src = noCache(tracks[0]);
  } else {
    audioPlayer.src = "";
  }

  // Change song on selection
  trackList.addEventListener("change", () => {
    audioPlayer.src = noCache(trackList.value);
    audioPlayer.play();
  });

  // Advance to next (for autoplay)
  function autoplayNext() {
    const current = trackList.value;
    const idx = tracks.indexOf(current);
    if (idx > -1 && idx < tracks.length - 1) {
      trackList.selectedIndex = idx + 1;
      audioPlayer.src = noCache(tracks[idx + 1]);
      audioPlayer.play();
    }
  }

  // LOOP toggle (mutually exclusive with autoplay)
  loopBtn.addEventListener("click", () => {
    const enabling = !audioPlayer.loop;
    audioPlayer.loop = enabling;

    loopBtn.classList.toggle("active", enabling);
    loopBtn.setAttribute("aria-pressed", String(enabling));

    if (enabling) {
      // turn OFF autoplay
      autoplayOn = false;
      autoplayBtn.classList.remove("active");
      autoplayBtn.setAttribute("aria-pressed", "false");
      audioPlayer.removeEventListener("ended", autoplayNext);
    }
  });

  // AUTOPLAY toggle (mutually exclusive with loop)
  autoplayBtn.addEventListener("click", () => {
    const enabling = !autoplayOn;
    autoplayOn = enabling;

    autoplayBtn.classList.toggle("active", enabling);
    autoplayBtn.setAttribute("aria-pressed", String(enabling));

    if (enabling) {
      // turn OFF loop
      audioPlayer.loop = false;
      loopBtn.classList.remove("active");
      loopBtn.setAttribute("aria-pressed", "false");
      audioPlayer.addEventListener("ended", autoplayNext);
    } else {
      audioPlayer.removeEventListener("ended", autoplayNext);
    }
  });
});

// Tab switching
document.querySelectorAll(".tabButton").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");
    document.querySelectorAll(".playlistPage").forEach(page => {
      page.style.display = page.id === target ? "block" : "none";
    });
  });
});
