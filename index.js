// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
  }

  const returnLastTwoDrivers=function(drivers){
    return drivers.slice(-2);
  }

  const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

  function createFareMultiplier(num1){
    return function(num2){
        return num1*num2
    }
  }
  const fareDoubler = createFareMultiplier(2);

  function createFareMultiplier(num1) {
    return function(num2){
      return num1*num2;
    }
  }

  const fareTripler = createFareMultiplier(3);

  function createFareMultiplier(num1) {
    return function(num2) {
      return num1*num2;
    };
  }
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }