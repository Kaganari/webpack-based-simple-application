'use strict';

class OperationExecutor {
  constructor() {
    this.state = {
      0: this.firstTaskExecute.bind(this),
      1: this.secondTaskExecute.bind(this),
      2: this.thirdTaskExecute.bind(this),
      3: this.fourthTaskExecute.bind(this)
    };
  }

  /**
   * Execute some transformation of incoming arg
   * @param actionType – type of transformation
   * @param arg – incoming arg
   * @returns object with result
   */
  execute(actionType, arg) {
    return this.state[actionType](arg);
  }

  /**
   * First task of homework
   * @param arg – object with value that you should clone
   * arg = { obj1: { ... } }
   * @returns object that contains source object and his modified clone
   */
  firstTaskExecute(arg) {
    let clone = Object.assign({}, arg.obj1);
    clone.firstName = "Andrey";
    return {arg, clone}; /* variable with result */;
  }

  /**
   * Second task of homework
   * @param arg – object with values that you should combine
   * arg = { obj1: { ... }, obj2: { ... } }
   * @returns object that contains source objects and their combined and modified clone
   */
  secondTaskExecute(arg) {
    let combinedObject = {...arg.obj1, ...arg.obj2};
    combinedObject.a = 2;
    return {arg,combinedObject} /* variable with result */;
  }

  /**
   * Third task of homework
   * @param arg – object with value that you should modify
   * arg = { obj1: { ... } }
   * @returns object that contains modified source object
   */
  thirdTaskExecute(arg) {
    let clone = Object.assign({}, arg);
    var gender = function(lastName) {
      return lastName[lastName.length-1] === "a" ? "female" : "male";
    }
    clone.obj1.relatives.forEach(relative => {relative.gender = gender(relative.lastName)});
    return clone; /* variable with result */;
  }

  /**
   * Fourth task of homework
   * @param arg – object with value that contains relatives
   * arg = { obj1: { ... relatives: [ ... ] ... } }
   * @returns object that contains array of string with female relatives
   */
  fourthTaskExecute(arg) {
    return arg.obj1.relatives.reduce((greetings,str) => {
      str.gender === "female" ? greetings = [...greetings, (`Hello there, ${str.firstName}.`)] : null;
      return greetings;}, []) /* variable with result */;
  }
}

export default OperationExecutor;