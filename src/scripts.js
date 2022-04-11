
export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  return this.body.split(" ").length;
}

Entry.prototype.vowelCount = function() {
  let vowels = ["a","e","i","o","u"];
  let vowelCount = 0;
  this.body.split("").forEach(function(letter){
    if (vowels.includes(letter.toLowerCase())) {
      vowelCount++;
    }
  });
  return vowelCount;
}

Entry.prototype.consonantCount = function() {
  let vowels = ["a","e","i","o","u"];
  let consonantCount = 0;
  this.body.split("").forEach(function(letter){
    if (!vowels.includes(letter.toLowerCase())) {
      consonantCount++;
    }
  });
  return consonantCount;
}

Entry.prototype.getTeaser = function() {
  let sentence = this.body.split(". ")[0];
  let teaser = "";
  if(sentence.split(" ").length >= 8) {
    for(let i = 0; i <= 8; i++)
    teaser += sentence.split(" ")[i] + " ";
  } else {
    teaser = sentence;
  }
  return teaser.trim();
}
