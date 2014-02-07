var m = require('./messageManager');

var testArgs = [['me', 'you'], ['me', null]] 


for (i in testArgs) {
  var out = m.createMessage(testArgs[i][0], testArgs[i][1]);
  console.log(out);
  // test valid cases
  console.log(m.matches(out, testArgs[i][0]));
  console.log(m.getMessage(out, testArgs[i][0]));

  // these should return false
  console.log(m.matches(out, 'fake'));
  console.log(m.matches(out, ''));
  console.log(m.matches(out));
  console.log(m.matches(out, {fake: "foo"}));
  console.log(m.matches(out, null));
  console.log(m.matches(out, ['foo']));

  console.log(m.getMessage(out, ''));
  console.log(m.getMessage(out, 'fake'));
  console.log(m.getMessage(out));
  console.log(m.getMessage(out, {fake: "foo"}));
  console.log(m.getMessage(out, ['foo']));
  console.log(m.getMessage(out, null));
}


