const axios = require('axios').default

module.exports = {
    getOwnedGames(id) {
        axios.get('http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001', {
            params: {
                key: process.env.STEAM_API_KEY,
                steamid: id,
                include_played_free_games: true,
                include_appinfo: true
            }
        }).then(response => {
            return response.data.response.games
        }).catch(error => {
            console.log(error)
        })
    },

    async getRecentlyPlayed(id) {
        var response = await axios.get('http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001', {
            params: {
                key: process.env.STEAM_API_KEY,
                steamid: id,
                count: 1
            }
        }).catch(error => {
            console.log(error)
        })
        return response.data.response.games
    },

    async getPlayerInfo(id) {
        var response = await axios.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002', {
            params: {
                key: process.env.STEAM_API_KEY,
                steamids: id,
            }
        }).catch(error => {
            console.log(error)
        })
        return response.data.response.players
    },

    async getGameInfo(id, gameid) {
        var response = await axios.get('http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002', {
            params: {
                appid: gameid,
                key: process.env.STEAM_API_KEY,
                steamid: id,
            }
        }).catch(error => {
            console.log(error)
        })
        return response.data.playerstats
    },

    async getPlayerAchievements(id, gameid) {
        var response = await axios.get(' http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001', {
            params: {
                appid: gameid,
                key: process.env.STEAM_API_KEY,
                steamid: id,
            }
        }).catch(error => {
            console.log(error)
        })
        return response.data.playerstats.achievements
    }
}