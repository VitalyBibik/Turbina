export default function convertToMinutes(time) {
  let time1 = Math.round(time);
  return (time1 - (time1 %= 60)) / 60 + (9 < time1 ? ':' : ':0') + time1;
}
// currentTrack.id !== playlist[playlist.length-1].id
