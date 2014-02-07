// anandp:
// manages messages that are passed around the website.

module.exports = function msgMan() {
  createMessage: function (tag, message) {
    if (message) return tag+":-:"+message;
    return tag+":-:";
  }
  matches: function (messageToParse, tag)) {
    return (messageToParse.split(":-:")[0] === tag);
  }
  getMessage: function (messageToParse, tag)) {
    if (matches(messageToParse, tag))
      return messageToParse.split(":-:")[1];
    else
      return null;
  }
}


