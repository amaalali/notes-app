var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ('asserion failed: ' + assertionToCheck + ' is not truthy');
    }
    else {
      console.log('test passed');
    }
  }
};
