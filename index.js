module.exports= function(input){
var array=[];



//console.log(array);



return{
	 parseString: function(){ parseString();},
	output: function(){ return array;}
};

function parseString(){
var lineArray= input.split("\n");
var elementArray=[];
var tagArray=[];


var structure={};

lineArray.forEach(function(element){

//var tag=element.match(/<[a-zA-Z0-9!\s]+>/);
//structure[tag]=content;
//console.log("E"+elemento);

var elemento=element.split("<");
elementArray.push(elemento);

});

for(var i=0;i<elementArray.length; i++){	
	for(var ii=0; ii<elementArray[i].length;ii++){
		if(elementArray[i][ii] !==''){	
		var elementu=elementArray[i][ii].split(">");
			if (elementu !== ''){
			tagArray.push(elementu);
			}
		}
	}
}	

for(var j=0; j<tagArray.length; j++){
	for(var jj=0; jj<tagArray[j].length; jj++){
		if(tagArray[j][jj] !== '') array.push(tagArray[j][jj]);
	}
}



}





};	



