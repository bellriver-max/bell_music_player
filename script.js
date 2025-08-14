// List your MP3 files here (must be inside the /music folder)
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

// Add cache-busting timestamp to avoid browser caching
function noCache(url) {
  return `${url}?t=${Date.now()}`;
}

// Populate dropdown
tracks.forEach((track, index) => {
  const option = document.createElement("option");
  option.value = track;
  option.textContent = `Track ${index + 1}`;
  trackList.appendChild(option);
});

// Load first track by default
audioPlayer.src = noCache(tracks[0]);

// Change track when user selects a new one
trackList.addEventListener("change", () => {
  audioPlayer.src = noCache(trackList.value);
  audioPlayer.play();
});
