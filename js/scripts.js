$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var numberToCount = parseInt($("input#count-to-number").val());
    var numberByCount = parseInt($("input#count-by-number").val());
    var total = 0;
    for (var i = 0; i < numberToCount; i +=numberByCount) {
      total += numberByCount;
      $("#results").append(total + ", ");
    };
  });
});
