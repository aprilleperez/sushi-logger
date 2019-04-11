// on click of buttons with class of sushiAvailable
$(".sushiAvailable").click(function() {
   // must use longer ajax call, since put isn't a shorthand notation (see below)
   $.ajax(
     "/api/sushis", {
       type: "put",
       data: { id: $(this).data("id") } // targets specific button clicked with that ID
     }).then(function(data) {
       location.reload();
     })
});



// (this won't work)
// $.put("/api/sushis", { id: $(this).data("id") }, function(data) {
//   location.reload();
// })