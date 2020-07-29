const API_URL =
  "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors";
const GOLD = "GOLD";
const SILVER = "SILVER";
const BRONZE = "BRONZE";
const ALL = "ALL";
let contributors = [];
let filteredContributors = [];

const getContributors = () => {
  $.ajax({
    url: API_URL,
    dataType: "json",
    success: getContributorsList,
  });
};

const getContributorsList = (contributorsList) => {
  filteredContributors = contributorsList;
  contributors = sortContributors(contributorsList, true);
  showContributors(contributorsList);
};

const showContributors = (contributorsForShow) => {
  $("div.avatar").remove();
  contributorsForShow.forEach((contributorsElement) => {
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
const filteringContributors = (listContributors, status) => {
  filteredContributors = listContributors.filter((contributor) => {
    switch (status) {
      case GOLD:
        return contributor.contributions > 8;
      case SILVER:
        return contributor.contributions <= 8 && contributor.contributions >= 2;
      case BRONZE:
        return contributor.contributions < 2;
      case ALL:
      default:
        return true;
    }
  });
};
const sortContributors = (contributors, direction) => {
  contributors.sort(function (a, b) {
    if (a.login.toLowerCase() < b.login.toLowerCase()) {
      return -1;
    }
    if (a.login.toLowerCase() > b.login.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  if (direction) return contributors;
  contributors.reverse();
  return contributors;
};

$(document).ready(function () {
  getContributors();
  $(".choice").change(function () {
    let str = "";
    $(".choice option:selected").each(function () {
      str += $(this).text();
    });
    filteringContributors(contributors, str);
    showContributors(filteredContributors);
  });
  $(".asc").click(function () {
    filteredContributors = sortContributors(filteredContributors, true);
    showContributors(filteredContributors);
  });
  $(".desc").click(function () {
    filteredContributors = sortContributors(filteredContributors, false);
    showContributors(filteredContributors);
  });
});
