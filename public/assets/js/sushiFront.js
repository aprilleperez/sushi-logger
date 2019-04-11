$(".sushiAvailable").click(function() {
   //post route eat da burger
   $.ajax(
     "/api/sushis", {
       type: "put",
       data: { id: $(this).data("id") }
     }).then(function(data) {
       location.reload();
     })
})

// $.put("/api/sushis", { id: $(this).data("id") }, function(data) {
//   location.reload();
// })