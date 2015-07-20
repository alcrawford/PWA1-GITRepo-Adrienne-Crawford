//Adrienne Crawford 
//PWA1
//Week 1
// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),		//showing the engine how to search by establishing variables
		searchInput = document.forms[0].search,					//establishing the fields
		currentSearch = ''
	;
	
	// Validates search query
	var validqte == function(query){							//already says....validates search query
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){								//the while loop that will make the computer keep looking for a number of characters
																    //until they reach a certain criteria
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters           //here is the stop point, the if which is the three letters that must exist for a search to execute
		if(query.length < 3){
			alert("Your search query is too small, try again.);
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                 //focus to the search field 
			return;
		};
		
		search(query);											//execute
	};
	
	// Finds search matches
	var search = function(query)                                     //as says, finds search matches
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");								//results into array
		
		// array to store matched results from database.js
		var results = [];												//results lined up in array

		// loop through each index of db array                                      //this is the repeating loop through which the 
		for(var i=0, j=db.length; i<j; i++){										//search results are realized...
		
			// each db[i] is a single video item, each title ends with a pipe "|"   //.....it continues searching for the 3 plus letter 
			// save a lowercase variable of the video title							// string until it finds all possible results.
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);				//first it hits the video
			
			// loop through the user's search query words							//then it loops for the keyword
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?						//then it checks the title
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;
		
		results.sort();
		
		// Check that matches were found, and run output functions                            
		if(results.length = 0){														//checks results and their lengths and only shows 
			noMatch();																//proper matches
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML) 
	var noMatch = function(){
		var html = ''+																	//if their are no matches then "no" reply
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){										//shows matches
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');									//pulls results how they return to screen
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();