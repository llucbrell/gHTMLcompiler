
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

  
  it("array must be without < character", function() {  
    //EXPECTATION 1
 //EXPECTATION 1
    var output= compiler.output();
   // console.log(output);
    output.forEach(function(element){   
      //console.log(element);
    expect(element.indexOf("<")).toEqual(-1);
    })
  });

   it("array must be without > character", function() {  
    //EXPECTATION 1
    var output= compiler.output();
   // console.log(output);
    output.forEach(function(element){   
      //console.log(element);
    expect(element.indexOf(">")).toEqual(-1);
    })
  });

  it("should pass from string to array", function() {   
    //EXPECTATION 1
var html= "";

var compiler=HTMLcompiler(html);
compiler.parseString();

        var output= compiler.output();

    //console.log(compiler.output());
    expect(output).toEqual([]);
  });




//OBJECT OF TESTING

    it("must not be any '\n'", function() {   
    //EXPECTATION 1
var html= "<!DOCTYPE html>\n"+"\n"+"<html>\n"+"\n"+"\n";

var compiler=HTMLcompiler(html);
compiler.parseString();

        var output= compiler.output();
output.forEach(function(element){   
      //console.log(element);
    expect(element.indexOf("\n")).toEqual(-1);
    })
  });



var html= "<!DOCTYPE html><html><body ><h1>My First Heading</h1><p>My first paragraph.</p></body></html>";


var compiler=HTMLcompiler(html);
compiler.parseString();

   it("should format one-line html too", function() {
var output= compiler.output();
 expect(output).toEqual(["!DOCTYPE html#",
                              "html#",
                              "body #",
                              "h1#", 
                              "My First Heading",
                              "/h1#",
                              "p#",
                              "My first paragraph.",
                              "/p#",
                              "/body#",
                              "/html#"]);
 });




});

