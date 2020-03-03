//  wait to attach handlers until the DOM is fully loaded.
$(function() {
  $(".eatBtn").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr("data-id");

    // Send the PUT request.
    $.ajax("/api/sandwiches/" + id, {
      type: "PUT"
    }).then(function(data) {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //onclick function for add sandwich button
  $(".addBtn").on("click", function(event) {
    event.preventDefault();
    var newSandwich = {
      sandwich_name: $("#sandwichInput")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/sandwiches", {
      type: "POST",
      data: newSandwich
    }).then(function(data) {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
