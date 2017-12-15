
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo == "getlist"){
        //var htmlData= data;
        //var main = $(htmlData).find('#main');
        //var playing = $(main).find('div.now-playing');
        //('body').append(playing);
        var main = document.getElementById("main")
        var playing = main.getElementsByClassName("now-playing");
        //var x = document.querySelectorAll("a.title");
    }
    console.log(playing);
});
//chrome.runtime.sendMessage(x);



