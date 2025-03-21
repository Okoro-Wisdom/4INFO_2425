class Fibonacci {
  
     calcola(n) {
       return n<= 1 ? n : this.calcola(n - 1) + this.calcola(n - 2)
}

}
let f = new Fibonacci()
console.log(f.calcola(4))