var yourLanguage = [
  {
    "en-US": {
      "now":"now",
      "fewseconds":"few seconds ago",
      "oneminute":"1 minute ago",
      "minutes":"minutes ago",
      "onehour":"1 hour ago",
      "hours":"hours ago",
      "oneday":"1 day ago",
      "days":"days ago",
      "onemonth":"1 month ago",
      "months":"months ago",
      "oneyear":"1 year ago",
      "years":"years ago"
    },
    "it-IT": {
      "now":"ora",
      "fewseconds":"pochi secondi fa",
      "oneminute":"1 minuto fa",
      "minutes":"minuti fa",
      "onehour":"1 ora fa",
      "hours":"ore fa",
      "oneday":"1 giorno fa",
      "days":"giorni fa",
      "onemonth":"1 mese fa",
      "months":"mesi fa",
      "oneyear":"1 anno fa",
      "years":"anni fa"
    }
  }
];
var second = 1;
var minute = second*60;
var hour = minute*60;
var day = hour*24;
var month = day*30.5;
var year = month*365;
var language = yourLanguage[0][navigator.language] || yourLanguage[0][navigator.userLanguage] ? (navigator.language || navigator.userLanguage) : "en-US";
setInterval(function(){
  var allElements = document.getElementsByTagName("*");
  var now = new Date().getTime();
  for (var n=0; n<allElements.length; n++) {
    if (allElements[n].hasAttribute("yourLanguage")) {
      var time = parseInt(allElements[n].getAttribute("yourLanguage"));
      var diff = (now - time)/1000;
      switch (true) {
        case (diff < 10): allElements[n].innerHTML = yourLanguage[0][language].now; break;
        case (diff >= 10 && diff < minute): allElements[n].innerHTML = yourLanguage[0][language].fewseconds; break;
        case (diff >= minute && diff < minute*2): allElements[n].innerHTML = yourLanguage[0][language].oneminute; break;
        case (diff >= minute*2 && diff < hour): allElements[n].innerHTML = parseInt(diff/minute)+" "+yourLanguage[0][language].minutes; break;
        case (diff >= hour && diff < hour*2): allElements[n].innerHTML = yourLanguage[0][language].onehour; break;
        case (diff >= hour*2 && diff < day): allElements[n].innerHTML = parseInt(diff/hour)+" "+yourLanguage[0][language].hours; break;
        case (diff >= day && diff < day*2): allElements[n].innerHTML = yourLanguage[0][language].oneday; break;
        case (diff >= day*2 && diff < month): allElements[n].innerHTML = parseInt(diff/day)+" "+yourLanguage[0][language].days; break;
        case (diff >= month && diff < month*2): allElements[n].innerHTML = yourLanguage[0][language].onemonth; break;
        case (diff >= month*2 && diff < year): allElements[n].innerHTML = parseInt(diff/month)+" "+yourLanguage[0][language].months; break;
        case (diff >= year && diff < year*2): allElements[n].innerHTML = yourLanguage[0][language].oneyear; break;
        case (diff >= year*2): allElements[n].innerHTML = parseInt(diff/year)+" "+yourLanguage[0][language].years; break;
      }
    }
  }
}, 1);
