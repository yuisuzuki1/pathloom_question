 /**
 * Populates the results container with cards with information about selected hikes
 * 
 * Since a static image is used in place of a map, there are no actual overlays to click on
 */

"use strict";
(function() {
  window.addEventListener("load", init);

   /**
   * Arrays containing information about each trail
   * 
   * This emulates a JSON-like object if it were to be pulled from an API
   */
  let names = ["Candy Point Trail", "Northrup Canyon", "Streamboart Rock"]
  let description = ["Jutting 800 feet out of Banks Lake in Washington’s majestic coulee country, Steamboat Rock is the crown jewel of this area. The basalt butte has a rich history; first used by native people many years ago, and during the ice age, the Great Missoula Floods carved the canyons here, while the rock stood as an island in the raging river. Now, it offers excellent 360-degree panoramas of the landscape surrounding it.",
  "A scenic, steep trail in the Grand Coulee Area", 
  "Bald eagles, icons of the mossy forests and deep rivers of the Pacific Coast, flock to this desert canyon each winter, and their presence is reason to visit in late fall or winter."]
  let lengths = ["1.5 miles", "3 miles", "6 miles"]
  let photo = ["candy.png", "north.png", "steam.png"]

  function init() {
    document.getElementById("map").addEventListener("click", populateResults) //event listener for tha map to populate results
  }

  /**
   * Given an AI, would populate the results with the data for each loation fetched
   * Creates "cards" inside the results container
   */
  function populateResults() {
    document.getElementById("instructions").classList.add("hidden")
    for (let i = 0; i <= 2; i++) {
      let name = document.createElement("h1")
      name.textContent = names[i]

      let img = document.createElement("img")
      img.src = "./img/" + photo[i]

      let length = document.createElement("p")
      length.textContent = "Distance: " + lengths[i]

      let detail = document.createElement("p")
      detail.textContent = description[i]

      let trail = document.createElement("div")
      trail.classList.add("trail")
      trail.appendChild(name)
      trail.appendChild(img)
      trail.appendChild(length)
      trail.appendChild(detail)

      // Placing the card created for selected hike into the result container
      document.getElementById("results").append(trail)
    }

    // Map becomes unselectable
    document.getElementById("map").removeEventListener("click", populateResults)
  }
})();