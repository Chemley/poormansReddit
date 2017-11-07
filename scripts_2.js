$(document).ready(function() {
  console.log("ready!");

  $.get("https://www.reddit.com/r/aww/.json", function(data) {
    var blogPosts = data.data.children;
    // var permaLink = blogPosts.permalink;
    // var name = blogPosts.name;
    // var image = blogPosts.preview.images[0].source.url;

// Loop to pull 10 blog posts at a time. Remember i is not 1 therefore will never be greater than 11.
    for (i = 1; i < 11; i++) {
      var eachPost = blogPosts[i];
      var permaLink = eachPost.data.permalink;
      var title = eachPost.data.title;
      var image = eachPost.data.thumbnail;
      var author = eachPost.data.author;
// Creates the blog posts div to hold each individual post.
      var postEl = $("<div class= 'post'>");
      $("#main").append(postEl);

// adds the links to the page.
      var linkEl = $("<a href='https://www.reddit.com" + permaLink + "' class= 'url'>");
      postEl.append(linkEl);
      linkEl.text("Click Me");

// getting the image on the page.
      var imageEl = $("<img class='image' src='" + image + "' alt='thumbnail'>");
      postEl.append(imageEl);

// getting the title on the page.
      var titleEl = $("<h3 class= 'title'>");
      titleEl.text(title);
      postEl.append(titleEl);

// getting the author on the page.
      var authorEl = $("<p class= 'author'>");
      authorEl.text(author);
      postEl.append(authorEl);
    };

  });
});
