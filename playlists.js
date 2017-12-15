spotifyApi.getPlaylist('USER', '5ieJqeLJjjI8iJWaxeBLuK')
.then(function(data) {
  console.log('Some information about this playlist', data.body);
}, function(err) {
  console.log('Something went wrong!', err);
});

// Get a user's playlists
spotifyApi.getUserPlaylists('thelinmichael')
.then(function(data) {
  console.log('Retrieved playlists', data.body);
},function(err) {
  console.log('Something went wrong!', err);
});

// Create a private playlist
spotifyApi.createPlaylist('thelinmichael', 'VIBECAT', { 'public' : false })
.then(function(data) {
  console.log('Created playlist!');
}, function(err) {
  console.log('Something went wrong!', err);
});

// Add tracks to a playlist
spotifyApi.addTracksToPlaylist('USER', '5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
.then(function(data) {
  console.log('Added tracks to playlist!');
}, function(err) {
  console.log('Something went wrong!', err);
});

// Add tracks to a specific position in a playlist
spotifyApi.addTracksToPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
{
  position : 5
})
.then(function(data) {
  console.log('Added tracks to playlist!');
}, function(err) {
  console.log('Something went wrong!', err);
});

// Remove tracks from a playlist at a specific position
spotifyApi.removeTracksFromPlaylistByPosition('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', [0, 2, 130], "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9")
.then(function(data) {
  console.log('Tracks removed from playlist!');
}, function(err) {
  console.log('Something went wrong!', err);
});
