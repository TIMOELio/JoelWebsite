function getGithubAPI() {
    var row1 = document.querySelector('.row11');
    var name = document.querySelector('.name');
    var desc = document.querySelector('.desc');

    fetch('https://api.github.com/users/timoelio/repos?sort=updated')
        .then(response => response.json())
        .then(data => {
            var row1Value = data[0]["name"];
            var nameValue = data["city"]["name"];
            var countryValue = data["city"]["country"];

            row11.innerHTML = row1Value;
            name.innerHTML = "Ort: " + nameValue + ", " + countryValue;
            main.innerHTML = "Wetter: " + mainValue;
            
        })
}