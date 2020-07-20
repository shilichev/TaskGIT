const API_URL =
  "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors";
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

const getContributors = () =>
  $.ajax({
    url: API_URL,
    success: showContributors,
  });

getContributors();

const getContributorsGOLD = () =>
  $.ajax({
    url: API_URL,
    success: showContributorsGOLD,
  });

const showContributorsGOLD = (contributorsData) => {
  $("div.avatar").remove();

  contributorsData.forEach((contributorsElement) => {
    console.log(contributorsElement.contributions);
    if (contributorsElement.contributions > 8) {
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
    }
  });
};

const getContributorsSILVER = () =>
  $.ajax({
    url: API_URL,
    success: showContributorsSILVER,
  });

const showContributorsSILVER = (contributorsData) => {
  $("div.avatar").remove();

  contributorsData.forEach((contributorsElement) => {
    console.log(contributorsElement.contributions);
    if (
      contributorsElement.contributions <= 8 &&
      contributorsElement.contributions > 2
    ) {
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
    }
  });
};

const getContributorsBRONZE = () =>
  $.ajax({
    url: API_URL,
    success: showContributorsBRONZE,
  });

const showContributorsBRONZE = (contributorsData) => {
  $("div.avatar").remove();

  contributorsData.forEach((contributorsElement) => {
    console.log(contributorsElement.contributions);
    if (contributorsElement.contributions <= 2) {
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
    }
  });
};

$("select")
  .change(function () {
    let str = "";
    $("select option:selected").each(function () {
      str += $(this).text();
    });
    console.log(str);
    switch (str) {
      case "GOLD":
        getContributorsGOLD();
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
