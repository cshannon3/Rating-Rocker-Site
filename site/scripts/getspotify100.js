
$(function(){

$('#topsongs').click(function(){
var spotifyApi = new SpotifyWebApi({
    clientId : 'd570917696114c588cc8e1b302d801ed',
    clientSecret : '1787e07da26d42529da9768a79ac6dd5',
    redirectUri : 'https://api.spotify.com/v1/me'
  });
  
            
    spotifyApi.setAccessToken('BQBInaqLxeJQ8QMi4UqGG-MkMXtR8l0GJYcM5CmVTmqNKRjpDIr5RiiDlPyeSoPNv6ZpDKgJcFN5fCvXeBzs2kutRZ6CFyZp4Z19Qr_e3_ffB-akCO2IfehLfkHnFbDvESqHwus0myoHCmgxVy7_c-FlPKwOT14ZV_7ruYQAjRwVyI1KbzS1AzJ0QEonaC3KbZ3V9SagDHXmE1-STxB8hKz_BylGojSZZjTlNmjCwQ');

    spotifyApi.getPlaylist('1221015148', '37i9dQZF1E9G8oeYG9uL66')
    .then(function(data) {
        return data.tracks.map(function(t) { return t.id; });
      })
      .then(function(trackIds) {
        return spotifyApi.getTracks(trackIds);
      })
      .then(function(tracksInfo) {
        ;
      })
      .catch(function(error) {
        console.error(error);
      });


    });
});