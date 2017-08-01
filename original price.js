function discoverOriginalPrice(discountedPrice, salePercentage){
 let originalPrice =  discountedPrice / (1-(salePercentage/100))
//tofixed returns a string, the unary + converts back to a number
  return +originalPrice.toFixed(2)
}
