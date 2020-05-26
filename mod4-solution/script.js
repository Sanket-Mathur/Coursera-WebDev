(function () {
    
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i in names) {    
        var f = names[i].charAt(0);
        if (f == 'J') {
            byeSpeaker.speak(names[i])
        } else {
            helloSpeaker.speak(names[i])
        }
    }
    
})();