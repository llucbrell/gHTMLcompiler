var HTMLcompiler = require('../index.js');



describe("HTML reading", function() {
  //var variableglobal for the scope;

   //SOME CALLING FUNCTIONS
 



//BEFORE EACH TEST-- do

  beforeEach(function() {

/*
    player = new player();
    song = new Song(); 
*/


  });

//TESTS

 
//OBJECT OF TESTING

var html= "<!DOCTYPE html>\n"+
"<html>\n"+
"<body >\n"+
"<h1>My First Heading</h1>\n"+
"<p>My first paragraph.</p>\n"+
"</body>\n"+
"</html>";

var compiler=HTMLcompiler(html);
compiler.parseString();

  
  it("should mark the tags", function() {  
  var arrayTags=["html","body","h1","p"];
    var output= compiler.output();
   // console.log(output);
    output.forEach(function(element){ 
      arrayTags.forEach(function(tag){  
      if(element=== tag){
       expect(element.indexOf("%") > -1).toBeTruthy();
       }
      });
  });

});




});