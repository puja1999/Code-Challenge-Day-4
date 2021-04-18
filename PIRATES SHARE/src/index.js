//Barbossa and his three pirates found a treasure  of gold coins. Jack sparrow too joined them.
// They decided to share the treasure. Barbossa  agreed to give x % share for jack sparrow.
// He then decided to take y % share from the remaining treasure. His other pirates willl share equally the remaining gold coins.
// Write a function to compute their share's.

//Write a function to return calculate the of JackShare.
function find_JackShare(goldCoin, X, Y) {
  let JackShare = (goldCoin / 100) * X;
  return JackShare;
}

//Write a function to retrun the  Barbossa share.
function find_BarbossaShare(goldCoin, X, Y) {
  let BarbossaShare = ((goldCoin - (goldCoin / 100) * X) / 100) * Y;
  return BarbossaShare;
}

//Write a function to retrun the other pirates share.
function find_OtherShare(goldCoin, X, Y) {
  let OtherPiratesShare = Math.abs(
    goldCoin - (find_JackShare() + find_BarbossaShare())
  ).toFixed(2);
  return OtherPiratesShare;
}
