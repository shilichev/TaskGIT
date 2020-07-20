const showContributors = (contributorsData) => {
  contributorsData.forEach((contributorsElement) => {
    $("div.contact").append(
      `<div class ="avatar">
          <div  class = "login"><strong>LOGIN:${contributorsElement.login}</strong>
            <div  class = "contributions">CONTRIBUTIONS:${contributorsElement.contributions}
            </div>
          </div>
          <img src="${contributorsElement.avatar_url}" class="image">
          <div class = "message"><p class = "message">Написать</p></div>    
       </div>`
    );
  });
};

$.ajax({
  url:
    "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
  success: showContributors,
});
const func = (element) => {
  element = document.getElementById("getSelect");

  console.log(element.value);
  switch (element.value) {
    case "1":
      console.log("1");
      break;
    case "2":
      console.log("2");
      break;
    case "3":
      console.log("3");
      break;
    default:
      break;
  }
};
func();
