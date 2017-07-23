/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

let content = document.querySelector(".container");
let songs = document.querySelector(".results");
let audioContent = document.querySelector(".player");
let audio = document.querySelector(".music-player");
let searchBar = document.querySelector(".search-form");
let search = document.querySelector("#search")
let button = document.querySelector("#searchButton")
let play = document.querySelectorAll(".playSong")
let buy = document.querySelectorAll(".buySong")




content.addEventListener("click", function(e) {

  if (e.target && e.target.matches("#searchButton")) {


    fetch(`https://itunes.apple.com/search?term==${search.value}`)

      .then(function(response) {
        if (response.status === 200) {
          return response.json();
        }
      })

      .then(function(data) {
        console.log(data);
        songs.innerHTML = "";
        let results = data.results;
        for (var i = 0; i < results.length; i++) {
          songs.innerHTML += `
    <div class="songContainer">
      <img src=${results[i].artworkUrl100
} >
<button type="button" name="button" id="playSong" onclick="" >PREVIEW SONG</button><span><a href=${results[i].trackViewUrl} target="_blank"><button type="button" name="button" id="buySong">BUY ON iTUNES</button></a></span>
<h3>${results[i].trackName}</h3>
<h2>${results[i].artistName}<h2>
    </div>
    `

        }

      })

      .catch(function(error) {
        console.error(error.message);
      })

  } else if (e.target && e.target.matches("#playSong")) {




}

})



  // http://a434.phobos.apple.com/us/r30/Music1/v4/6e/19/c9/6e19c93c-b5a6-f6ee-f513-bd430a018029/mzaf_3530332765515533440.plus.aac.p.m4a
