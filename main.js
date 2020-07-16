let obj = {};


const getContr=(obj)=>{
  let counContr = obj.length;
  for (i = 0; i <= counContr; i++){
    $('div.avatar')
    .html(`<div id = ${i} class = "login">${(obj[i].login)}</div>`);
  console.log(obj[i].login)
}};


const showContr = (obj)=> {return console.log (obj)};


$.ajax({
  url: "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
  success: getContr, 
}); 

