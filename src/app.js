export class App {
  constructor() {
    this.message = 'Aurelia Calculator';
    this.total = 0;
    this.activeNumber = this.total;
    this.workingTotal = this.activeNumber;
    this.display = this.display;
    this.numbers = [1,2,3,4,5,6,7,8,9,0,'.']
    this.setDisplay()
    this.activeOperator = '';
  }
  setDisplay() {
    if (this.activeNumber) {
      this.display = this.activeNumber;
    } else {
      this.display = this.total;
    }
  }
  clearTotal(){
    this.total = 0;
    this.activeNumber = 0;
    this.activeTotal = 0;
    this.activeOperator = '';
    this.setDisplay()
    return
  }
  polaritySwap(){
    if (this.activeNumber) {
      this.activeNumber *= -1;
    } else {
      this.total *= -1;
    }
    this.setDisplay()
  }
  getPercent(){
    this.total /= 100
    this.setDisplay()
  }
  appendNumber(num){
    const numberArr = Array.from(this.activeNumber)
    numberArr.push(num)
    this.activeNumber = numberArr.join('')
    this.setDisplay()
  }
  setTotal(){
    
    const doMath = {
      '+': (a, b) => parseInt(a) + parseInt(b),
      '-': (a, b) => parseInt(a) - parseInt(b),
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    }
    if(this.activeOperator !== ''){
      this.total = doMath[this.activeOperator](this.activeTotal ? this.activeTotal : this.total, this.activeNumber);
      this.activeNumber = 0;
    } else {
      this.total = this.activeNumber;
    }
    this.activeNumber = 0;
    this.setDisplay()
  }

  setActiveTotal(operator){
    this.activeTotal = this.activeNumber
    this.activeNumber = 0;
    this.activeOperator = operator;
    this.setDisplay()
  }
}
