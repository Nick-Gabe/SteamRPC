const rpc = require('discord-rpc')
const presence = new rpc.Client({
    transport: "ipc"
})
const { getPlayerInfo, getRecentlyPlayed, verifyExistance } = require('./functions')
const { APPLICATION_ID, YOUR_STEAM_ID } = require('../environment')
var date = null
var minutes_elapsed = -1

presence.on('ready', () => {
    async function start() {
        minutes_elapsed++
        const info = await getPlayerInfo(YOUR_STEAM_ID)

        if (info[0].gameid !== undefined) {
            const gameinfo = await getRecentlyPlayed(YOUR_STEAM_ID, info[0].gameid)
            if (gameinfo === undefined) return false
            if (date === null) {
                date = new Date()
            }
            return { info: info[0], hours: gameinfo.playtime_forever / 60 + minutes_elapsed / 100}
        } else if (date != null) {
            presence.clearActivity()
            date = null
            return false
        } else return false
    }
    function updatePresence() {
        start().then(isPlaying => {
            if (isPlaying != false) {
                let gameName = isPlaying.info
                presence.setActivity({
                    largeImageKey: 'steam_logo',
                    largeImageText: `${gameName.gameextrainfo}`,
                    details: `${gameName.gameextrainfo}`,
                    state: `${isPlaying.hours.toFixed(1)}h Played`,
                    startTimestamp: date,
                    buttons: [{
                        label: 'Game Page',
                        url: `https://store.steampowered.com/app/${isPlaying.info.gameid}`
                    }]
                })
            }
        })
    }
    updatePresence()

    setInterval(() => {
        updatePresence()
}, 60 * 1000)
})

presence.login({ clientId: APPLICATION_ID })
