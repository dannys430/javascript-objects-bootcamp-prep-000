var playlist = {artist: "song titles"}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
