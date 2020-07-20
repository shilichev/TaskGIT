const API_URL =
  "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors";
const changeContributors = (contributorsElement) => {
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
};
const showContributors = (contributorsData) => {
  $("div.avatar").remove();
  contributorsData.forEach((contributorsElement) => {
    changeContributors(contributorsElement);
  });
};
const getContributors = () =>
  $.ajax({
    url: API_URL,
    success: showContributors,
  });

const showGoldContributors = (contributorsData) => {
  $("div.avatar").remove();
  contributorsData.forEach((contributorsElement) => {
    if (contributorsElement.contributions > 8) {
      changeContributors(contributorsElement);
    }
  });
};
console.log(getContributors());
$("select")
.change(function () {
 let str = "";
 $("select option:selected").each(function () {
   str += $(this).text();
 });
 console.log(str);
 switch (str) {
   case "ALL":
     getContributors(showContributors);
     break;
  case "GOLD":
    showGoldContributors();
    break;
 case "SILVER":
    getContributorsSILVER();
   break;
 case "BRONZE":
   getContributorsBRONZE();
   break;
 default:
    console.log("4");
   break;
 }
})
.change();
