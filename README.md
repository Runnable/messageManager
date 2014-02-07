Message Manager
===============

manages messages that are passed around the website.

API
// atleast one tag must be provided
// message is a string
// returns message to send
1. createMessage(tag, [message]);

// check if message matches tags
// return true if matches, false if not
2. matches(messageToParse, tag);

// first checks if message has tag
// returns string of message if there is something, 
//          empty string if nothing
//          null if not a tag match
3. getMessage(messageToParse, tag);
