window.wordle.instant_word = function() {

let WordOfTheDay = (new window.wordle.bundle.GameApp).solution;

window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(0)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(1)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(2)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(3)
}));
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': WordOfTheDay.charAt(4)
})); 
window.dispatchEvent(new KeyboardEvent('keydown', {
  'key': 'Enter'
}));

}
