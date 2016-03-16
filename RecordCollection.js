// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {
  if ((value !== "") && (prop != "tracks")) {
    collection[id][prop] = value;
  } else if ((value !== "") && (prop == "tracks")) {
    collection[id][prop].push(value);
  } else {
    delete collection[id][prop];
  }
return collection[id][prop];
}
// Alter values below to test your code
//update(1245, "artist", "ABBA");
