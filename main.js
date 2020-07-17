const showContributors = (contributorsData) => {
  for (i = 0; i < contributorsData.length; i++) {
    $("div.contact").append(
      `<div class ="avatar">
          <div id = ${i} class = "login"><strong>LOGIN:${contributorsData[i].login}</strong>
            <div id = ${i} class = "contributions">CONTRIBUTIONS:${contributorsData[i].contributions}
            </div>
          </div>
          <img src="${contributorsData[i].avatar_url}" class="image">
          <div class ="message"><p class ="message">Написать</p></div>    
       </div>`
    );
  }
};

$.ajax({
  url:
    "https://api.github.com/repos/thomasdavis/backbonetutorials/contributors",
  success: showContributors,
});
