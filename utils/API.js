const axios = require('axios');

module.exports = {
    getUser: username => axios({
        method: "GET",
        url: `https://api.github.com/users/${username}`
    }),
    getStars: async username => {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
            
            return data.reduce((total, current) => total += current.stargazers_count, 0);
        } catch (error) {
            console.log(error)
        }
    }


}