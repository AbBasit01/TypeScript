"use strict";
//Create a music player application.
//Define interfaces for songs with properties like title, artist, album, duration, etc.
//Implement functions to add new songs, create playlists, play/pause songs, skip tracks, and shuffle playlists.
function addInPlaylist(playlistName, newSong) {
    playlistName.songs.push(newSong);
}
function removeFromPlayist(playlistName, songTitle) {
    playlistName.songs = playlistName.songs.filter(s => s.title !== songTitle);
}
