function Entry() {

}

Entry.prototype.countWords = function(body) {
  return body.split(" ").length;
};

Entry.prototype.getTeaser = function(body) {
  return body.split(/\s+/).slice(0,8).join(" ");
};

Entry.prototype.countVowels = function(body) {
  if (body.match(/[aeiou]/gi) === null) {
    return "0";
  }
  else {
    return body.match(/[aeiou]/gi).length;
    }
};

Entry.prototype.countConsonants = function(body) {
  if (body.match(/[^aeiou\" \"]/gi) === null) {
    return "0";
  }
  else {
    return body.match(/[^aeiou\" \"]/gi).length;
  }

};

exports.journalModule = Entry;
