(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/entry.js').journalModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#journal-title').val();
    var body = $('#journal-body').val();
    var newEntry = new Entry();
      $("#journal-vowels").text(newEntry.countVowels(body));
      $("#journal-consonants").text(newEntry.countConsonants(body));
      $("#journal-words").text(newEntry.countWords(body));
      $("#journal-teaser").text(newEntry.getTeaser(body));
      $("#title").text(title);
      $("#body").text(body);
  });
  });

},{"./../js/entry.js":2}],2:[function(require,module,exports){
function Entry() {

}

Entry.prototype.countWords = function(body) {
  return body.split(" ").length;
};

Entry.prototype.getTeaser = function(body) {
  return body.split(/\s+/).slice(0,8).join(" ");
};

Entry.prototype.countVowels = function(body) {
  if (body.match(/[aeiou]/gi) == null) {
    return "0"
  }
  else {
    return body.match(/[aeiou]/gi).length;
    }
};

Entry.prototype.countConsonants = function(body) {
  if (body.match(/[^aeiou\" \"]/gi) == null) {
    return "0"
  }
  else {
    return body.match(/[^aeiou\" \"]/gi).length;
  }

};

exports.journalModule = Entry;

},{}]},{},[1]);
