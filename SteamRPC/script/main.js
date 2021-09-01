const rpc = require('discord-rpc')
const presence = new rpc.Client({
    transport: "ipc"
})
const { getPlayerInfo, getRecentlyPlayed, getAchievements } = require('./functions')
const { APPLICATION_ID, YOUR_STEAM_ID, SHOW_HOURS, BLACKLIST, SHOW_ACHIEVEMENTS } = require('../environment')
var date = null
var minutes_elapsed = -1
var saved_hours = null
var last_game_played = null

presence.on('ready', () => {
    async function start() {
        const info = await getPlayerInfo(YOUR_STEAM_ID)

        if (info[0].gameid !== undefined) {
            // if the game is blacklisted, do not show it
            if (BLACKLIST.find(x => x == info[0].gameid || x == info[0].gameextrainfo)) return false
            if(last_game_played !== null && last_game_played != info[0].gameid){
                date = null
                saved_hours = null
                minutes_elapsed = -1
            }

            last_game_played = info[0].gameid
            minutes_elapsed++
            var response = { info: info[0] }
            if (SHOW_HOURS) {
                const gameinfo = await getRecentlyPlayed(YOUR_STEAM_ID, info[0].gameid)
                if(saved_hours !== null && saved_hours != gameinfo.playtime_forever) minutes_elapsed = 0
                saved_hours = gameinfo.playtime_forever

                if (gameinfo === undefined) return false
                response.hours = saved_hours / 60 + minutes_elapsed / 60
            }
            if (SHOW_ACHIEVEMENTS) {
                const achievements = await getAchievements(YOUR_STEAM_ID, info[0].gameid)
                response.achievements = achievements
            }
            if (date === null) {
                date = new Date()
            }
            return response
        } else if (date != null) {
            presence.clearActivity()
            date = null
            saved_hours = null
            last_game_played = null
            minutes_elapsed = -1
            return false
        } else return false
    }
    function updatePresence() {
        start().then(response => {
            if (response != false) {
                let gameName = response.info
                var rpc_object = {
                    largeImageKey: 'steam_logo',
                    largeImageText: `github.com/Nick-Gabe/SteamRPC`,
                    details: `${gameName.gameextrainfo}`,
                    startTimestamp: date,
                    buttons: [
                        {
                            label: 'Game Page',
                            url: `https://store.steampowered.com/app/${response.info.gameid}`
                        },
                    ]
                }

                if (SHOW_HOURS && SHOW_ACHIEVEMENTS) rpc_object.state = `🎮 ${response.hours.toFixed(2).toString().slice(0,-1)}h | 🏆 ${response.achievements.achieved+'/'+response.achievements.total}`
                else if (SHOW_HOURS) rpc_object.state = `🎮 ${response.hours.toFixed(2).toString().slice(0,-1)}h`
                else if (SHOW_ACHIEVEMENTS) rpc_object.state = `🏆 ${response.achievements.achieved+'/'+response.achievements.total}`
                presence.setActivity(rpc_object)
            }
        })
    }
    updatePresence()

    setInterval(() => {
        updatePresence()
    }, 60 * 1000)
})

presence.login({ clientId: APPLICATION_ID })
