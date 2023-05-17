albumsArr = [                                                                                            // THE DEFAULT ALBUMS ARRAY
    { artist: 'LCD Soundsystem', title: 'This Is Happening', playCount: 0},
    { artist: 'Pistol Annies', title: 'Interstate Gospel', playCount: 0},
    { artist: 'Adele', title: '21', playCount: 0},
    { artist: 'Lorde', title: 'Melodrama', playCount: 0},
    { artist: 'Drake', title: 'Take Care', playCount: 0},
    { artist: 'David Bowie', title: 'Blackstar', playCount: 0},
    { artist: 'Taylor Swift', title: 'Red', playCount: 0},
    { artist: 'Kendrick Lamar', title: 'To Pimp a Butterfly', playCount: 0},
    { artist: 'Beyonce', title: 'Lemonade', playCount: 0},
    { artist: 'Kanye West', title: 'My Beautiful Dark Twisted Fantasy', playCount: 0}
    ];    

listAlbums()                                                                                             // CALL THE LIST ALL ALBUMS FUNCTION 

playAlbum()                                                                                              // CALL THE PLAY ALBUM FUNCTION 

favoriteAlbum()                                                                                          // CALL THE PLAY ALBUM FUNCTION 

newAlbum()                                                                                               // CALL THE CREATE NEW ALBUM FUNCTION 

// ---------------------------------------------------------------
// FUNCTION TO LIST THE ALBUMS IN PLAYLIST ----------------------
function listAlbums() {
var sortedAlbumsArr = sortArrayByField(albumsArr, 'title');                                              // CALL THE ARRAY SORT FUNCTION &  SORT ALBUMS BY TITLE
let i = 0;
var element = document.getElementById("albumNames"); 
element.innerHTML = "";  
for (let album of sortedAlbumsArr) {                                                                     // LOOP THROUGH THE ALBUMS ARRAY
      element.innerHTML +=                                                                               // ADD THE ALBUMS TO THE HTML DROPDOWN MENU 
      `<option value="${album['artist']}" > "${album['title']}" -- ${album['artist']} </option>`;        // INSERT THE ALBUMS INTO THE DOM
      i++
      }    
    }

// -------------------------------------------------------------------
// SORT FUNCTION -----------------------------------------------------
function sortArrayByField(arr, field) {
    arr.sort(function(a, b) {
      var nameA = a[field];                                                               // FUNCTION TO SORT THE ALBUM ARRAY
      var nameB = b[field];
      if (nameA < nameB) {                                                                              // THIS SORT FUNCTION IS USED 3x TIMES IN THIS APPLICATION    
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    return arr;
  }

// ---------------------------------------------------------------
// FUNCTION TO PLAY AN ALBUM -------------------------------------
function playAlbum() {                                                                                  // FUNCTION TO PLAY THE SELECTED ALBUM
    var play = document.getElementById('playAlbum');                                                    // LOCATE THE PLAY BUTTON ON THE WEBPAGE
    var dropdown = document.getElementById('albumNames');                                               // LOCATE THE ALBUM DROPDOWN MENU ON THE WEBPAGE
    play.addEventListener('click', function() {                                                         // EVENT LISTENER FOR THE PLAY BUTTON ON THE WEBPAGE
      var selectedOption = dropdown.value;                                          
      var targetArtist = selectedOption;                                                                // GET THE ALBUM SELECTED BY THE USER
        for (var i = 0; i < albumsArr.length; i++) {
            var album = albumsArr[i];                                                                   // SEARCH THE ARRAY FOR THE ALBUM THAT THE USER SELECTED
            if (album.artist === targetArtist) {
              album.playCount++                                                                         // INCREMENT THE PLAYCOUNT FOR THE SELECTED ALBUM
              break;
                }
                }
            });
        }

// ---------------------------------------------------------------
// FUNCTION TO DISPLAY THE MOST PLAYED/FAVORITE ALBUM ------------
function favoriteAlbum() {
    var favorite = document.getElementById('favAlbum');
    favorite.addEventListener('click', function() {                                                      // EVENT LISTENER FOR THE ADD ALBUM BUTTON
        var sortedAlbumsPlayCount = sortArrayByField(albumsArr, 'playCount');                            // SORT THE ALBUM ARRAY BY PLAYCOUNT
        var favText = document.getElementById("mostPlayed");
        favText.innerHTML =                                                                              // DISPLAY THE MOST PLAYED ALBUM 
        `<h3>Your most played album is: </h3>
        <p>"${sortedAlbumsPlayCount[0]['title']}" by ${sortedAlbumsPlayCount[0]['artist']}, which you have played ${sortedAlbumsPlayCount[0]['playCount']} times.</p>`;
        });
}
// ----------------------------------------------------------------
// FUNCTION TO ADD A NEW ALBUM TO THE PLAYLIST --------------------
function newAlbum() {
    var newDisplayed = false
    var newAlbum = document.getElementById('addAlbum');
    newAlbum.addEventListener('click', function() {                                                     // EVENT LISTENER FOR THE ADD ALBUM BUTTON
        var newAlbum = document.getElementById("newAlbum");
        newAlbum.innerHTML =                                                                            // ADDS THE NEW ALBUM TEXT BOXES TO THE DOM
        `<input type="text" id="newTitle" placeholder="  Album Title"><br>
        <input type="text" id="newArtist" placeholder="  Artist Name"><br>
        <button id="insertAlbum"> Add Album To Playlist</button>`

    var insertAlbum = document.getElementById('insertAlbum');
    insertAlbum.addEventListener('click', function() {                                                  // EVENT LISTENER FOR THE INSERT ALBUM BUTTON
    var newAlbumTitle = document.getElementById('newTitle').value;
    var newAlbumArtist = document.getElementById('newArtist').value;                                    // GET THE NEW ALBUM INFO FROM THE DOM
    var newAlbumArr = {artist: newAlbumArtist, title: newAlbumTitle, playCount: 0};                     // CREATE A NEW ELEMENT FOR THE ALBUMS ARRAY
    albumsArr.push(newAlbumArr);

    listAlbums()                                                                                        // LIST THE ALBUM ARRAY TO INCLUDE THE NEW ALBUM
})
})
}
// ---------------------------------------------------------------