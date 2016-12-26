function friend(friends){
 let output = [];
 for (let i = 0; i <friends.length; i++) {
   if (friends[i].length == 4){
     output.push(friends[i])
       } else { continue;}
    }
    // make sure return is not in loop or will not iterate.
    return output;
}

