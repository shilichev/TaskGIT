let obj = {};
const check=(obj)=>{alert(obj[1])};
$.ajax({
    url: "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
    success: check(obj), 
  }); 
