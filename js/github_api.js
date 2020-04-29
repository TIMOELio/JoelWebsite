function getGithubAPI() {

    var gh_link1 = document.querySelector('.gh_link1');
    var gh_title1 = document.querySelector('.gh_title1');
    var gh_desc1 = document.querySelector('.gh_desc1');
    var gh_link2 = document.querySelector('.gh_link2');
    var gh_title2 = document.querySelector('.gh_title2');
    var gh_desc2 = document.querySelector('.gh_desc2');
    var gh_link3 = document.querySelector('.gh_link3');
    var gh_title3 = document.querySelector('.gh_title3');
    var gh_desc3 = document.querySelector('.gh_desc3');
    var gh_link4 = document.querySelector('.gh_link4');
    var gh_title4 = document.querySelector('.gh_title4');
    var gh_desc4 = document.querySelector('.gh_desc4');

    fetch('https://api.github.com/users/timoelio/repos?sort=updated')
        .then(response => response.json())
        .then(data => {

            var link1Value = data[0]["html_url"];
            var title1Value = data[0]["name"];
            var desc1Value = data[0]["description"];
            var link2Value = data[1]["html_url"];
            var title2Value = data[1]["name"];
            var desc2Value = data[1]["description"];
            var link3Value = data[2]["html_url"];
            var title3Value = data[2]["name"];
            var desc3Value = data[2]["description"];
            var link4Value = data[3]["html_url"];
            var title4Value = data[3]["name"];
            var desc4Value = data[3]["description"];

            document.getElementById("gh_link1").href = link1Value;
            gh_title1.innerHTML = title1Value;
            gh_desc1.innerHTML = desc1Value;
            document.getElementById("gh_link2").href = link2Value;
            gh_title2.innerHTML = title2Value;
            gh_desc2.innerHTML = desc2Value;
            document.getElementById("gh_link3").href = link3Value;
            gh_title3.innerHTML = title3Value;
            gh_desc3.innerHTML = desc3Value;
            document.getElementById("gh_link4").href = link4Value;
            gh_title4.innerHTML = title4Value;
            gh_desc4.innerHTML = desc4Value;
            
        })
}