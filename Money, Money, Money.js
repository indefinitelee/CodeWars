function calculateYears(principal, interest, tax, desired) {

  while (principal <= desired) {
  var yearCount = 0;
    let interestGain = principal * interest;
    let taxCost = interestGain * tax;
    let netGain = (interestGain - taxCost);
     principal += netGain;
      yearCount++;
      return Math.ceil(yearCount)
  }

}
