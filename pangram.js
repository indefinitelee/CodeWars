function isPangram(string){
let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  for (let i=0; i<letters.length; i++) {
    for (let j=0; j<string.length; j++) {
      if (letters[i] == string[j]) {
        return "True";
      } else { return "False";}
    }
  }
}
