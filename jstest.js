var hamburger = ["here's", "some", "test", "data", "yippee"]
var length = hamburger.length

for (i = length; i > 0; i--) {
    var distanceToHalf = i-(length/2) // eg. 4 - 2.5 = 1.5
    var oppositeIndex = (length/2)-distanceToHalf // eg. 2.5 - 1.5 = 1
    // as one line, this would be (length/2)-(i-(length/2))
    console.log(hamburger[oppositeIndex])
}