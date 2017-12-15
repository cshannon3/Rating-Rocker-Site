var requestURL = 'https://github.com/thelinmichael/spotify-web-api-node/blob/master/package.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
   request.send();
   spotifyApi.createPlaylist('1221015148', 'Chill Vibe', { 'public' : false })
   .then(function(data) {
     console.log('Created playlist!');
   }, function(err) {
     console.log('Something went wrong!', err);
   });


//Adding specific credentials

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});
//if you've got anaccess token
spotifyApi.setAccessToken('<your_access_token>');
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi();
// Get Elvis' albums
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
.then(function(data) {
  console.log('Artist albums', data.body);
}, function(err) {
  console.error(err);
});
// Get Elvis' albums without using promises
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', { limit: 10, offset: 20 }, function(err, data) {
    if (err) {
      console.error('Something went wrong!');
    } else {
      console.log(data.body);
    }
  });

// Get multiple albums
spotifyApi.getAlbums(['5U4W9E5WsYb2jUQWePT8Xm', '3KyVcddATClQKIdtaap4bV'])
  .then(function(data) {
    console.log('Albums information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get an artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get multiple artists
spotifyApi.getArtists(['2hazSY4Ef3aB9ATXW7F5w3', '6J6yx1t3nwIDyPXk5xa7O8'])
  .then(function(data) {
    console.log('Artists information', data.body);
  }, function(err) {
    console.error(err);
  });

// Get albums by a certain artist
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search artists whose name contains 'Love'
spotifyApi.searchArtists('Love')
  .then(function(data) {
    console.log('Search artists by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });

// Search tracks whose artist's name contains 'Love'
spotifyApi.searchTracks('artist:Love')
  .then(function(data) {
    console.log('Search tracks by "Love" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
spotifyApi.searchTracks('track:Alright artist:Kendrick Lamar')
  .then(function(data) {
    console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Search playlists whose name or description contains 'workout'
spotifyApi.searchPlaylists('workout')
  .then(function(data) {
    console.log('Found playlists are', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get tracks in an album
spotifyApi.getAlbumTracks('41MnTivkwTO3UUJ8DrqEJJ', { limit : 5, offset : 1 })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get an artist's top tracks
spotifyApi.getArtistTopTracks('0oSGxfWSnnOXhD2fKuz2Gy', 'GB')
  .then(function(data) {
    console.log(data.body);
    }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get artists related to an artist
spotifyApi.getArtistRelatedArtists('0qeei9KQnptjwb8MgkqEoy')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Features for a Track */
spotifyApi.getAudioFeaturesForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Analysis for a Track */
spotifyApi.getAudioAnalysisForTrack('3Qm86XLflmIXVm1wcwkgDK')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });

/* Get Audio Features for several tracks */
spotifyApi.getAudioFeaturesForTracks(['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK'])
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });


/*
 * User methods
 */

// Get a user
spotifyApi.getUser('petteralexis')
  .then(function(data) {
    console.log('Some information about this user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Get the authenticated user
spotifyApi.getMe()
  .then(function(data) {
    console.log('Some information about the authenticated user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*
 * Playlist methods
 */

// Get a playlist
spotifyApi.getPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK')
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
spotifyApi.createPlaylist('thelinmichael', 'My Cool Playlist', { 'public' : false })
  .then(function(data) {
    console.log('Created playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Add tracks to a playlist
spotifyApi.addTracksToPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"])
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

// Remove all occurrence of a track
var tracks = [{ uri : "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }];
var options = { snapshot_id : "0wD+DKCUxiSR/WY8lF3fiCTb7Z8X4ifTUtqn8rO82O4Mvi5wsX8BsLj7IbIpLVM9" };
spotifyApi.removeTracksFromPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', tracks, options)
  .then(function(data) {
    console.log('Tracks removed from playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Reorder the first two tracks in a playlist to the place before the track at the 10th position
var options = { "range_length" : 2 };
spotifyApi.reorderTracksInPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', 0, 10, options)
  .then(function(data) {
    console.log('Tracks reordered in playlist!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Change playlist details
spotifyApi.changePlaylistDetails('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK',
  {
    name: 'This is a new name for my Cool Playlist, and will become private',
    'public' : false
  }).then(function(data) {
     console.log('Playlist is now private!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Follow a playlist (privately)
spotifyApi.followPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK',
  {
    'public' : false
  }).then(function(data) {
     console.log('Playlist successfully followed privately!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Unfollow a playlist
spotifyApi.unfollowPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK')
  .then(function(data) {
     console.log('Playlist successfully unfollowed!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Check if Users are following a Playlist
spotifyApi.areFollowingPlaylist('thelinmichael', '5ieJqeLJjjI8iJWaxeBLuK', ['thelinmichael', 'ella'])
 .then(function(data) {
    data.body.forEach(function(isFollowing) {
      console.log("User is following: " + isFollowing);
    });
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/*
 * Following Users and Artists methods
 */

/* Get followed artists */
spotifyApi.getFollowedArtists({ limit : 1 })
  .then(function(data) {
    // 'This user is following 1051 artists!'
    console.log('This user is following ', data.body.artists.total, ' artists!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });

/* Follow a user */
// TBD.

/* Follow an artist */
// TBD.

/* Unfollow a user */
// TBD

/* Unfollow an artist */
// TBD

/* Check if a user is following a user */
// TBD

/* Check if a user is following an artist */
// TBD

/*
 * Your Music library methods
 */

/* Tracks */

// Get tracks in the signed in user's Your Music library
spotifyApi.getMySavedTracks({
    limit : 2,
    offset: 1
  })
  .then(function(data) {
    console.log('Done!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Check if tracks are in the signed in user's Your Music library
spotifyApi.containsMySavedTracks(["5ybJm6GczjQOgTqmJ0BomP"])
  .then(function(data) {

    // An array is returned, where the first element corresponds to the first track ID in the query
    var trackIsInYourMusic = data.body[0];

    if (trackIsInYourMusic) {
      console.log('Track was found in the user\'s Your Music library');
    } else {
      console.log('Track was not found.');
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Remove tracks from the signed in user's Your Music library
spotifyApi.removeFromMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
  .then(function(data) {
    console.log('Removed!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});

// Add tracks to the signed in user's Your Music library
spotifyApi.addToMySavedTracks(["3VNWq8rTnQG6fM1eldSpZ0"])
  .then(function(data) {
    console.log('Added track!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});

/* Albums */

// Get albums in the signed in user's Your Music library
spotifyApi.getMySavedAlbums({
    limit : 1,
    offset: 0
  })
  .then(function(data) {
    // Output items
    console.log(data.body.items);
  }, function(err) {
    console.log('Something went wrong!', err);
  });


// Check if albums are in the signed in user's Your Music library
spotifyApi.containsMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then(function(data) {

    // An array is returned, where the first element corresponds to the first album ID in the query
    var albumIsInYourMusic = data.body[0];

    if (albumIsInYourMusic) {
      console.log('Album was found in the user\'s Your Music library');
    } else {
      console.log('Album was not found.');
    }
  }, function(err) {
    console.log('Something went wrong!', err);
  });

// Remove albums from the signed in user's Your Music library
spotifyApi.removeFromMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then(function(data) {
    console.log('Removed!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});

// Add albums to the signed in user's Your Music library
spotifyApi.addToMySavedAlbums(["1H8AHEB8VSE8irHViGOIrF"])
  .then(function(data) {
    console.log('Added album!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
});


/*
 * Browse methods
 */

  // Retrieve new releases
spotifyApi.getNewReleases({ limit : 5, offset: 0, country: 'SE' })
  .then(function(data) {
    console.log(data.body);
      done();
    }, function(err) {
       console.log("Something went wrong!", err);
    });
  });

//  Retrieve featured playlists
spotifyApi.getFeaturedPlaylists({ limit : 3, offset: 1, country: 'SE', locale: 'sv_SE', timestamp:'2014-10-23T09:00:00' })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get a List of Categories
spotifyApi.getCategories({
      limit : 5,
      offset: 0,
      country: 'SE',
      locale: 'sv_SE'
  })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get a Category (in Sweden)
spotifyApi.getCategory('party', {
      country: 'SE',
      locale: 'sv_SE'
  })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

// Get Playlists for a Category (Party in Brazil)
spotifyApi.getPlaylistsForCategory('party', {
      country: 'BR',
      limit : 2,
      offset : 0
    })
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });

/* Get Recommendations Based on Seeds */
// TBD


/**
 * Personalization Endpoints
 */

/* Get a User’s Top Artists and Tracks */
// TBD




//Authorization





var scopes = ['user-read-private', 'user-read-email'],
redirectUri = 'https://example.com/callback',
clientId = '5fe01282e44241328a84e7c5cc169165',
state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
redirectUri : redirectUri,
clientId : clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);



//Hardcoded Authorizationcode
var credentials = {
    clientId : 'someClientId',
    clientSecret : 'someClientSecret',
    redirectUri : 'http://www.michaelthelin.se/test-callback'
  };
  
  var spotifyApi = new SpotifyWebApi(credentials);
  
  // The code that's returned as a query parameter to the redirect URI
  var code = 'MQCbtKe23z7YzzS44KzZzZgjQa621hgSzHN';
  
  // Retrieve an access token and a refresh token
  spotifyApi.authorizationCodeGrant(code)
    .then(function(data) {
      console.log('The token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      console.log('The refresh token is ' + data.body['refresh_token']);
  
      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);
    }, function(err) {
      console.log('Something went wrong!', err);
    });


    //Callbackhardcodeident ifuser
    // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
spotifyApi.refreshAccessToken()
.then(function(data) {
  console.log('The access token has been refreshed!');

  // Save the access token so that it's used in future calls
  spotifyApi.setAccessToken(data.body['access_token']);
}, function(err) {
  console.log('Could not refresh access token', err);
});

// Use setters to set all credentials one by one
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('myAccessToken');
spotifyApi.setRefreshToken('myRefreshToken');
spotifyApi.setRedirectURI('http://www.example.com/test-callback');
spotifyApi.setClientId('myOwnClientId');
spotifyApi.setClientSecret('someSuperSecretString');

// Set all credentials at the same time
spotifyApi.setCredentials({
  'accessToken' : 'myAccessToken',
  'refreshToken' : 'myRefreshToken',
  'redirectUri' : 'http://www.example.com/test-callback',
  'clientId ' : 'myClientId',
  'clientSecret' : 'myClientSecret'
});
//Setting Credentials 

// Get the credentials one by one
console.log('The access token is ' + spotifyApi.getAccessToken());
console.log('The refresh token is ' + spotifyApi.getRefreshToken());
console.log('The redirectURI is ' + spotifyApi.getRedirectURI());
console.log('The client ID is ' + spotifyApi.getClientId());
console.log('The client secret is ' + spotifyApi.getClientSecret());

// Get all credentials
console.log('The credentials are ' + spotifyApi.getCredentials());

// Reset the credentials
spotifyApi.resetAccessToken();
spotifyApi.resetRefreshToken();
spotifyApi.resetRedirectURI();
spotifyApi.resetClientId();
spotifyApi.resetClientSecret();
spotifyApi.resetCode();

// Reset all credentials at the same time
spotifyApi.resetCredentials();


//Using the constructor.

// Set necessary parts of the credentials on the constructor
var spotifyApi = new SpotifyWebApi({
  clientId : 'myClientId',
  clientSecret : 'myClientSecret'
});

// Get an access token and 'save' it using a setter
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    console.log('The access token is ' + data.body['access_token']);
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
// Set the credentials when making the request
var spotifyApi = new SpotifyWebApi({
  accessToken : 'njd9wng4d0ycwnn3g4d1jm30yig4d27iom5lg4d3'
});

// Do search using the access token
spotifyApi.searchTracks('artist:Love')
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
// Set the credentials when making the request
var spotifyApi = new SpotifyWebApi({
  accessToken : 'njd9wng4d0ycwnn3g4d1jm30yig4d27iom5lg4d3'
});

// Get tracks in a playlist
api.getPlaylistTracks('thelinmichael', '3ktAYNcRHpazJ9qecm3ptn', { 'offset' : 1, 'limit' : 5, 'fields' : 'items' })
  .then(function(data) {
    console.log('The playlist contains these tracks', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });