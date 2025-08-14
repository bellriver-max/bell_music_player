// List your MP3 files here (must be inside the /music folder)
const tracks = [
  "music/@Dilaw - Uhaw (Tayong Lahat) (Lyrics).mp3",
  "music/APO Hiking Society - Panalangin (Official Lyric Video).mp3",
  "music/Earl Agustin performs Tibok LIVE on Wish 107.5 Bus.mp3",
  "music/eevee - Nakakamiss (Official Lyric Video) (Stuck On You OST).mp3",
  "music/IV OF SPADES - Captivated (Official Audio).mp3",
  "music/IV OF SPADES - Dulo Ng Hangganan (Official Audio).mp3",
  "music/IV OF SPADES - I Ain't Perfect (Official Audio).mp3",
  "music/IV OF SPADES - I Would Rather Live Alone (Maybe I'm Not Who I'm Today).mp3",
  "music/IV OF SPADES - Nanaman (Official Lyric Video).mp3",
  "music/juan karlos - Buwan (LyricsLetra).mp3",
  "music/JUAN KARLOS - DEMONYO (LYRICS).mp3",
  "music/juan karlos - ERE (Lyrics).mp3",
  "music/Kailan - Ryan CayabyabSmokey MountainMYMP (Japanese ver.) kena & miyuki.mp3",
  "music/Multo - Cup of Joe (Lyrics).mp3",
  "music/Munimuni - Sa'yo (Lyrics).mp3",
  "music/Munimuni - Tahanan (Official Lyric Video  2019 Album Version).mp3",
  "music/NOBITA - IKAW LANG  Official Lyric Video.mp3",
  "music/Pamungkas - To the bone (lyrics).mp3",
  "music/Rico Blanco - Youll Be Safe Here (Official Lyric Video).mp3",
  "music/Salamin, Salamin by BINI (Y2K RnB Full Version).mp3",
  "music/Sana Kahit Minsan.mp3",
  "music/Sariling Multo (Sa Panaginip) - IV OF SPADES (Lyrics).mp3",
  "music/Skusta Clee - Kalimutan Ka (Lyrics).mp3",
  "music/SUGARCANE - Leonora (Official Lyric Video).mp3",
  "music/SunKissed Lola - Pasilyo (Lyrics).mp3",
  "music/Tibok by Earl Agustin (Lyrics).mp3",
  "music/Unique Salonga - OZONE (Itulak Ang Pinto) [Official Lyric Video].mp3",
  "music/Walang Kapalit (Rey Valera) Cover by Arthur Miguel.mp3",
  "music/Zack Tabudlo YAKAP Lyrics.mp3",
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
