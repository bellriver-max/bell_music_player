// List your MP3 files here (must be inside the /SONGS folder)
const tracks = [
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
];

const trackList = document.getElementById("trackList");
const audioPlayer = document.getElementById("audioPlayer");
const loopBtn = document.getElementById("loopBtn");
const autoplayBtn = document.getElementById("autoplayBtn");

let autoplay = false;

// Prevent browser caching
function noCache(url) {
  return `${url}?t=${Date.now()}`;
}

// Populate dropdown with real file names
tracks.forEach((track) => {
  const option = document.createElement("option");
  option.value = track;
  option.textContent = track.split("/").pop().replace(".mp3", "");
  trackList.appendChild(option);
});

// Load first track by default
audioPlayer.src = noCache(tracks[0]);

// Change track when user selects a new one
trackList.addEventListener("change", () => {
  audioPlayer.src = noCache(trackList.value);
  audioPlayer.play();
});

// Loop button toggle
loopBtn.addEventListener("click", () => {
  audioPlayer.loop = !audioPlayer.loop;
  loopBtn.textContent = audioPlayer.loop ? "Loop: ON" : "Loop: OFF";
});

// Autoplay button toggle
autoplayBtn.addEventListener("click", () => {
  autoplay = !autoplay;
  autoplayBtn.textContent = autoplay ? "Autoplay: ON" : "Autoplay: OFF";
});

// When song ends
audioPlayer.addEventListener("ended", () => {
  if (autoplay && !audioPlayer.loop) {
    let nextIndex = trackList.selectedIndex + 1;
    if (nextIndex >= tracks.length) nextIndex = 0; // wrap to first
    trackList.selectedIndex = nextIndex;
    audioPlayer.src = noCache(tracks[nextIndex]);
    audioPlayer.play();
  }
});
