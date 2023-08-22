const GITHUB_URL = "https://api.github.com/users/marieslo";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("profile-name");
    profileName.textContent = data.name;
  });

  