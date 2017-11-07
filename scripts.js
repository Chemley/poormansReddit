$(document).ready(function() {
  console.log("ready!");
  // get the json informaiton from the reddit page.
  $.get("https://www.reddit.com/r/aww/.json", function(data) {
    var image = data.data.childern.data.preview.images.source.url;
    var text = data.childern.data.title;
    var url = data.childern.data.url;
    var author = data.childern.data.author;

        // Create the post.
        var postEl = $("<div class= 'post'>");

        // Create the image which is inside of a second array. Must loop through that array to get the image each time.
        .forEach(function(image) {
          var imageEl = $("<img class= 'image'>");
          imageEl.append(image);
          postEl.append(imageEl);
        });

        // create a div to hold the text info.
        var textEl = $("<div class ='text'>");
        postEl.append(textEl);

        // Create the title as a link.
        var titleEl = $("<a class= 'title'>");
        titleEl.text(text);
        textEl.append(titleEl);

        // Create the URL
        var urlEl = $("<a class= 'url'>");
        urlEl.text(url);
        textEl.append(urlEl);

        //display the author
        var authorEl = $("<p class= 'author'>");
        authorEl.text(author);
        textEl.append(authorEl);

        // Append the post to the main container with id "main".
        $("#main").append(postEl);
      }
    });
  });
});
