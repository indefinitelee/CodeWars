function greet(name) {
  switch (name) {
    case: name == null
      return "try again"
      break;
    case: name.length == 0
      return "try again"
      break;
    case name.length > 0
      return "hello " + name + "!"
      break;
    }
}
