//question A1

var Names = ["1","2","3"]
d3.select("#A1")
.append("p")
.text(Names)

//question A2

d3.select("#A2")
.selectAll("span")
.data(Names)
.enter()
.append("span")
.text(function(name)
     {
      return name;
      }
     )

// Question b1

var addPlanets = d3.json ("planets.json")
addPlanets.then(function(planet)
     {
console.log ("planet", planet);
    showing(planet); 
    makealist(planet)
},
    function(oops)
                {
    console.log("fail",oops);
}
               )



//create a function 
//then do the d3. select 
//then do all the steps 


var showing = function (planet)
{
    
    d3.select("#B3")
    .selectAll("img")
    .data(planet)
    .enter()
    .append("img")
    .attr("src", function(planet)
         {
        return planet.img;
    })

}

//question B4

var makealist = function (planet)
{
    d3.select("#b4")
    .selectAll("li")
    .data(planet)
    .enter()
    .append("li")
    .text(function(p)  
{
    return p.name
          })
}
