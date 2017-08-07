console.log("working");

fetch('http://api.github.com/users/nancyb1199')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log(data.name);


      let markup = `
      <h1>${data.name}</h1>
      <img src=${data.avatar_url}>
      <div id = "container">
        <div id="basics">
        <h2>The Basics</h2>
        <ul>
          <li>Name: ${data.name}</li>
          <li>Github URL <a href="${data.html_url}">${data.name}</a></li>
          <li>Email: ${data.email}</li>
          <li>Company: ${data.company}</li>
          <li> Website: <a href="${data.blog}">${data.blog}</a></li>
        </ul>
        </div>
        <div id="story">
        <h2>The Story</h2>
        <p>${data.bio}</p>
        </div> 
      </div>
  `

  document.body.innerHTML = markup;
      });
});
