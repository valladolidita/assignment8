/*
For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
author: Emily Carey, T Jay Carter
modified by: Kelly Horigan

function getAuthorAndYearString(speech)
function displayBCEString(speech)
function getOldestOrYoungestString(speech) 
*/

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,
    consoleDisplay = document.getElementById('ConsoleDisplay')
    ;

//To display speech author and year
function getAuthorAndYearString(speech){
    consoleDisplay.innerHTML = 'This speech was written by ' + speech.author + ' in ' + speech.year + '.<br><br>';
};

//Boolean to determine speech's BCE status
function displayBCEString(speech){ 
      if(speech.yearIsBCE === true){
        consoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
      }else{
        ConsoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
      }
};

//To determine if speech is the oldest or youngest
function getOldestOrYoungestString(speech){
    var oldestYear = speechesArray[0].year,
        newestYear = speechesArray[0].year;

    for(var i = 0; i < speechesArray.length; i++) {
        if(speechesArray[i].year < oldestYear){
          oldestYear = speechesArray[i].year;
      }
        if(speechesArray[i].year > newestYear){
          newestYear = speechesArray[i].year;
      }
    }
        if(speech.year === oldestYear) {
          consoleDisplay.innerHTML += '<br> This is the oldest speech on the page.<br>';
      }
        if(speech.year === newestYear) {
          consoleDisplay.innerHTML += '<br> This is the most recent speech on the page.<br>';
      }
};

//BtnDonate
document.getElementById('BtnDonate').addEventListener('click', function(){
    consoleDisplay.innerHTML = '';

    var donationDisplay = document.createElement('h3'),
        donationText,
        articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

//BtnChurchill
document.getElementById('BtnChurchill').addEventListener('click', function(){
  getAuthorAndYearString(churchillSpeech);
  displayBCEString(churchillSpeech);
  getOldestOrYoungestString(churchillSpeech);
});

//BtnGhandi
document.getElementById('BtnGhandi').addEventListener('click', function(){
  getAuthorAndYearString(ghandiSpeech);
  displayBCEString(ghandiSpeech);
  getOldestOrYoungestString(ghandiSpeech);
});

//BtnDemosthenes
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  getAuthorAndYearString(demosthenesSpeech);
  displayBCEString(demosthenesSpeech);
  getOldestOrYoungestString(demosthenesSpeech);
});