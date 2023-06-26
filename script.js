
function getUser (userName) {
    const APIURL = `https://api.github.com/users/${userName}`

    axios.get(APIURL)
    .then((response) => {
        console.log(response);
    })
    .catch (err=>{
        console.log(err)
    })
};

getUser('anaencinasd')