class Numeros {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  maior() {
    return Math.max(this.a, this.b, this.c);
  }
}

const nums = new Numeros(5, 12, 8);
console.log(nums.maior());