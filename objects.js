var playlist = {artist: "song", anotherArtist: "another song", thirdArtist: "third song"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;

}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
