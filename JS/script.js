let fetchapi = async (value) => {
    let response = await fetch(`https://api.github.com/users/${value}`);
    let test = await response.json()
    console.log(test)
    return test
}

let renderhtml = (response) => {
    container.innerHTML = `<div class="side">
    <div class="img">
        <img src="${response.avatar_url}" alt="loading...">
    </div>
    <div class="detail">
        <div class="name">
            <h2>${response.name}</h2>
        </div>
        <div class="username">
            <h4>${response.login}</h4>
        </div>

        <div class="information">
            <div class="important">
                <div class="follower all"><i class="fa-solid fa-user-group"></i></div>
                <div class="follow">${response.followers}</div>
            </div>

            <div class="important">
                <div class="Companyname all"><i class="fa-solid fa-building"></i></div>
                <div class="Company">${response.company}</div>
            </div>

            <div class="important">
                <div class="locationname all"><i class="fa-solid fa-location-dot"></i></div>
                <div class="location">${response.location}</div>
            </div>

            <div class="important">
            <div class="linkname all"><i class="fa-solid fa-link"></i></div>
            <div class="link">${response.blog}</div>
        </div>

            <div class="important">
                    <div class="emailname all"><i class="fa-solid fa-book-bookmark"></i></div>
                    <div class="email">${response.public_repos}</div>
                </div>

           
        </div>

    </div>
</div>
<div class="rightside">
    <div class="content">
        <div class="username">
           ${response.login}
        </div>
        <div class="description">
           ${response.bio}
        </div>
    </div>

</div>`
}

let input = document.getElementById("input")
let container = document.getElementById("container")

input.addEventListener("submit", (e) => {
    e.preventDefault()
    let ans = e.target.result.value
    if (!ans) {
        alert("Wrong user name")
    } else {
        fetchapi(ans).then((response) => {
            renderhtml(response)
        }).catch(() => {
        })

        input.reset()
    }

})
window.addEventListener("load", () => {
    fetchapi("digitalrehman").then((response) => {

        renderhtml(response)
    }).catch(() => {

    })
})

