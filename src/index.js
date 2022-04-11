import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './scripts.js';
// import Entry from './scripts.js';

$("form#form").submit(function(event){
  event.preventDefault();
  let title = $("#title").val();
  let entry = $("#entry").val();
  let newEntry = new Entry(title, entry);

  $("#form").after("Word Count: "+ newEntry.wordCount()+" Vowel Count: "+ newEntry.vowelCount()+" Consonant Count: "+ newEntry.consonantCount()+" Teaser: "+ newEntry.getTeaser());
  // $("#form").after("Vowel Count: "+ newEntry.vowelCount());
  // $("#form").after("Consonant Count: "+ newEntry.consonantCount());
  // $("#form").after("teaser: "+ newEntry.getTeaser());
});

