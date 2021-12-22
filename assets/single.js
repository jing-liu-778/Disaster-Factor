var recentResults = document.getElementById('recentResults')
console.log(recentResults)

var showRecentList =  function(){
    var apiURL = "https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=20"
    fetch(apiURL)
    .then(function(response){
        response.json().then(function(data){
            console.log("recent event--->", data.events)
            for (i=0; i<data.events.length;i++){
              console.log("event list--->", data.events[i].categories[0].title + " "+ data.events[i].geometries[0].date +" "+data.events[i].title) 
            // create events list 
            var repoEl = document.createElement('div');
            repoEl.classList = 'has-text-white has-text-centered list-item flex-row justify-space-between align-center';
 
            var titleEl = document.createElement('span');
            titleEl.textContent = data.events[i].title + " on "+ moment(data.events[i].geometries[0].date).format('MMMM Do YYYY, h:mm:ss a');
 
            repoEl.appendChild(titleEl);
       
            recentResults.appendChild(repoEl);  
            }
            
           // console.log(data.events.length)
              //console.log("event list--->", data.events.categories[0].title + " "+ data.events.geometries[0].date)      
       
      });
    });
}

showRecentList()