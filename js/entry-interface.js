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
