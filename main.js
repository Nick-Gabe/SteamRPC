require('dotenv/config')
const rpc = require('discord-rpc')
const presence = new rpc.Client({
    transport: "ipc"
})
let myId = process.env.MY_ID
const CronJob = require('cron').CronJob
const { getPlayerInfo, getRecentlyPlayed } = require('./functions')
var date = null

async function start() {
    const info = await getPlayerInfo(myId)

    if (info[0].gameid !== undefined) {
        const gameinfo = await getRecentlyPlayed(myId)
        if (date === null) {
            date = new Date()
            console.log(`Now Playing ${info[0].gameextrainfo}`)
        }
        return { info: info[0], hours: gameinfo[0].playtime_forever / 60 }
    } else {
        presence.clearActivity()
        date !== null && console.log('Stopped Playing')
        date = null
        return false
    }
}

function updatePresence() {
    start().then(isPlaying => {
        if (isPlaying != false) {
            let gameName = isPlaying.info
            presence.on('ready', () => {
                presence.setActivity({
                    largeImageKey: 'steam_logo2',
                    largeImageText: `${gameName.gameextrainfo}`,
                    details: `${gameName.gameextrainfo}`,
                    state: `${isPlaying.hours.toFixed(1)}h Played`,
                    startTimestamp: date,
                    buttons: [{
                        label: 'Game Page',
                        url: `https://store.steampowered.com/app/${isPlaying.info.gameid}`
                    }]
                })
            })
            presence.login({ clientId: `${process.env.APP_ID}` })
        }
    })
}
updatePresence()

var job = new CronJob('0 */1 * * * *', () => {
updatePresence()
})
job.start()