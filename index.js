// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
//returns an driver with the orignal key value pairs and the new key value pair ‣
//it does not modify the original driver, but rather returns a clone with the new data
  const newDriver= {...driver};
  newDriver[key]=value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
//updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newDriver= {...driver};
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
