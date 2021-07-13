const axios = require('axios')


axios.get('https://api.rawg.io/api/games?key=9fa7efe1bcf64ced9ed3b48ae61b0869&page_size=100')
    .then(response => response.data.results.forEach((g, i)=> {
        console.log(`${i}: ${g.name}`)
    }))