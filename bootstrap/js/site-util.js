// This function is very tied to the structure of the document.
// In particular, it expects:
// <element class="publication">
//     <element class="bibtex-button"/>
//     <element class="bibtex"/>
// </element> 
// Thanks to Jonathan Mace for the code.
// This gets called on the ex:onshow event of the exhibit lens.
var attachToggleBehavior = function(pubnode) {
  var bibbutton = pubnode.getElementsByClassName("bibtex-button")[0];
  var bibtexnode = pubnode.getElementsByClassName("bibtex")[0];

  if (typeof bibbutton != 'undefined') {
    bibbutton.onclick = function() {
      if (! bibbutton.tracked) {
        trackOutgoing('bibtex:' + bibbutton.id);
        bibbutton.tracked = true;
      }
      if (bibtexnode.style.display!="block") bibtexnode.style.display="block";
      else bibtexnode.style.display="none";
    }
  }
};

//Makes a function calls Google Analytics with the given prefix
//and the single parameter url
var _trackOutgoing = function(prefix) {
  return function(url) {
        var trackUrl = prefix + url.split('/').pop();
        //console.log("tracking: " + trackUrl);
        pageTracker._trackPageview(trackUrl);
  }
}
