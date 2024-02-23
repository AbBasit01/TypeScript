//Create a music player application.
//Define interfaces for songs with properties like title, artist, album, duration, etc.
//Implement functions to add new songs, create playlists, play/pause songs, skip tracks, and shuffle playlists.

interface Song{
    title: string;
    artist: string;
    album: string;
    duration: number
}

interface Playlist{
    songs:Song[]
}

function addInPlaylist(playlistName:Playlist , newSong:Song){
    playlistName.songs.push(newSong)
}

function removeFromPlayist(playlistName:Playlist , songTitle:string){
    playlistName.songs = playlistName.songs.filter(s => s.title !== songTitle )
}

