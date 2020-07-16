$.ajax({
    url: "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
    data: data,
    success: check(obj),
   
  });
const check=(obj)=>{alert(obj)};