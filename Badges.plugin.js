/**
 * @name Badges
 * @author John Fries
 * @authorId 630070645874622494
 * @version 1.0.1
 * @description Simple plugin that gives you all badges
 * @website https://johnfries.net
 */

 module.exports = class Badges {


    start = () => {
        (() => {
            let flags = {
                "DISCORD_PARTNER": 1 << 1,
                "HYPESQUAD_EVENTS": 1 << 2,
                "BUG_HUNTER_LEVEL_1": 1 << 3,
                "HOUSE_BRAVERY": 1 << 6,
                "EARLY_SUPPORTER": 1 << 9,
                "BUG_HUNTER_LEVEL_2": 1 << 14,
                "VERIFIED_BOT_DEVELOPER": 1 << 17,
                "CERTIFIED_MODERATOR": 1 << 18
            };
            
            webpackChunkdiscord_app.push([[Math.random()], {}, req => {
                for (const m of Object.keys(req.c).map(x => req.c[x].exports).filter(x => x)) {
                    if (m.default && m.default.getCurrentUser !== undefined) {
                        return m.default.getCurrentUser().flags = Object.values(flags).reduce((pre, cur) => pre + cur, 0);
                    }
                }
            }]);
        })();
    }
    stop() {
    }
 }