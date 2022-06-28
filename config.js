require('dotenv').config();

let TOKEN = process.env.CLIENT_TOKEN;
let PREFIX  = process.env.CLIENT_PREFIX;

module.exports = {
    app: {
        px: PREFIX,
        token: TOKEN
    },

    opt: {
        DJ: {
            enabled: false, /* DJ role currently doesn't work */
            roleName: ROLE,
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
