const API_URL =
  "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors";
const GOLD = "GOLD";
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
  contributors = sorteringContributors(contributorsList, true);
  showContributors(contributorsList);
};

const showContributors = (contributorsForShow) => {
  console.log(contributorsForShow);
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
  console.log(status, "status");
  filteredContributors = listContributors.filter((contributor) => {
    switch (status) {
      case GOLD:
        return contributor.contributions > 8;
      case "SILVER":
        return contributor.contributions <= 8 && contributor.contributions >= 2;
      case "BRONZE":
        return contributor.contributions < 2;
      case "ALL":
      default:
        return true;
    }
  });
};
const sorteringContributors = (listForSort, ask) => {
  console.log(listForSort);
  listForSort.sort(function (a, b) {
    console.log(a,b);
    if (a.login < b.login) {
      return -1;
    }
    if (a.login > b.login) {
      return 1;
    }
    return 0;
  });
  if (ask) return listForSort;
  listForSort.reverse();
  return listForSort;
};

$(document).ready(function () {
  getContributors();
  $("select").change(function () {
    let str = "";
    $("select option:selected").each(function () {
      str += $(this).text();
    });
    console.log(str);
    filteringContributors(contributors, str);
    showContributors(filteredContributors);
  });
  $(".asc").click(function () {
    console.log(filteredContributors);
    filteredContributors = sorteringContributors(filteredContributors, true);
    showContributors(filteredContributors);
  });
  $(".desc").click(function () {
    filteredContributors = sorteringContributors(filteredContributors, false);
    showContributors(filteredContributors);
  });
});
