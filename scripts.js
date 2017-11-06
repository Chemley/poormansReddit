$(document).ready(function() {
  console.log("ready!");
  // get the json informaiton from the reddit page.
  $.get("https://www.reddit.com/r/aww/.json", funciton(data) {
    data.forEach(function(data) {
      for (i = 1; i < 10; i++) {
        var data = data[i];

        // Create the post.
        var postEl = $("<section class= 'post'>");

        // Create the image which is inside of a second array. Must loop through that array to get the image each time.
        data.data.data.childern[0].data.preview.images[0].source.url.forEach(function(image) {
          var imageEl = $("<img class= 'image'>");
          imageEl.append(image);
          postEl.append(imageEl);
        });

        // create a div to hold the text info.
        var textEl = $("<div class ='text'>");
        postEl.append(textEl);

        // Create the title as a link.
        var titleEl = $("<a class= 'title'>");
        titleEl.text(data.data.childern[0].data.title);
        textEl.append(titleEl);

        // Create the URL
        var urlEl = $("<a class= 'url'>");
        urlEl.text(data.childern.data.url);
        textEl.append(urlEl);

        //display the author
        var authorEl = $("<p class= 'author'>");
        authorEl.text(data.data.childern.data.author);
        textEl.append(authorEl);

        // Append the post to the main container with id "main".
        ("#main").append(postEl);
      }
    });
  });
});
