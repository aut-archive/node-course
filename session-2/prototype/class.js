class A {
    constructor() {
     console.log('A') 
    }
    
  }
  
  class B extends A {
    constructor() {
     super()
     console.log('B') 
    }
  }