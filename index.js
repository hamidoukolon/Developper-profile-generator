const { prompt } = require('inquirer');
const API = require('./utils/API');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML')
const { Q_getGithubColor } = require('./utils/questions')

const getGithubColor = async () => {
    try {
        const { color, github } = await prompt(Q_getGithubColor);
        const { data: User } = await API.getUser(github);
        const { data: name } = await API.getUser(github)
        
        const { data: location } = await API.getUser(github)
        console.log(location );
        const stars = await API.getStars(github);
        

        const HTML = generateHTML({ color, stars, ...User });
        fs.writeFile("index.html", HTML, err => { if (err) throw err });
    } catch (error) {
        console.log(error)
    }
}

getGithubColor()


