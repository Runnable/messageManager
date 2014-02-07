// anandp:
// manages messages that are passed around the website.

function createMessage(tag, message) {
    if (message) return tag+":-:"+message;
    return tag+":-:";
}
function matches(messageToParse, tag) {
    return (messageToParse.split(":-:")[0] === tag);
}
function getMessage(messageToParse, tag) {
    if (matches(messageToParse, tag))
      return messageToParse.split(":-:")[1];
    else
      return null;
}

module.exports.createMessage = createMessage;
module.exports.matches = matches;
module.exports.getMessage = getMessage;
