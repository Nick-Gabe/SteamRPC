const axios = require('axios').default
const { STEAM_API_KEY } = require('../environment')

module.exports = {
    async getRecentlyPlayed(id, gameid) {
        var response = await axios.get('http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001', {
            params: {
                key: STEAM_API_KEY,
                steamid: id,
            }
        }).catch(error => {
            console.log(error)
        })
        var game = response.data.response.games.find(x => x.appid == gameid)
        return game
    },

    async getPlayerInfo(id) {
        var response = await axios.get('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002', {
            params: {
                key: STEAM_API_KEY,
                steamids: id,
            }
        }).catch(error => {
            console.log(error)
        })
        return response.data.response.players
    },

    async getAchievements(id, gameid) {
        var response = await axios.get(' http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001', {
            params: {
                key: STEAM_API_KEY,
                steamid: id,
                appid: gameid,
            }
        }).catch(error => {
            console.log(error)
        })
        var total_achievements = response.data.playerstats.achievements
        var achieved = total_achievements.filter(x => x.achieved === 1).length
        return {total: total_achievements.length, achieved}
    },
}