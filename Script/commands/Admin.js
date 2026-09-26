const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 aliases: ["admininfo", "infoadmin"],
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
━━━━━━━  ❖  ━━━━━━━
👑 𝕸𝕯 𝕸𝖎𝖑𝖔𝖓 𝕾𝖆𝖗𝖐𝖆𝖗 👑
༺ 𝑨𝑫𝑴𝑰𝑵 𝑷𝑹𝑶𝑭𝑰𝑳𝑬 ༻
━━━━━━━  ❖  ━━━━━━━
​👤 𝙉𝙖𝙢𝙚          : 𝕸𝕯 𝕸𝖎𝖑𝖔𝖓 𝕾𝖆𝖗𝖐𝖆𝖗
🚹 𝙂𝙚𝙣𝙙𝙚𝙧        : 𝑴𝒂𝒍𝒆
❤️ 𝙎𝙩𝙖𝙩𝙪𝙨        : 𝑷𝒖𝒓𝒆 𝑺𝒊𝒏𝒈𝒍𝒆 🥲
🎂 𝘼𝙜𝙚           : 𝟮𝟯+
💼 𝙋𝙧𝙤𝙛𝙚𝙨𝙨𝙞𝙤𝙣   : 𝑱𝒐𝒃 (𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒐𝒎𝒑𝒂𝒏𝒚)
☪️ 𝙍𝙚𝙡𝙞𝙜𝙞𝙤𝙣      : 𝑰𝒔𝒍𝒂𝒎
🎓 𝙀𝙙𝙪𝙘𝙖𝙩𝙞𝙤𝙣    : 𝑫𝒂𝒌𝒉𝒊𝒍 (𝑺𝑺𝑪 𝟐𝟎𝟐𝟎)
📍 𝘼𝙙𝙙𝙧𝙚𝙨s       : 𝑲𝒖𝒓𝒊𝒈𝒓𝒂𝒎, 𝑩𝒂𝒏𝒈𝒍𝒂𝒅𝒆𝒔𝒉
​───━─━─  ◈  ─━─━───
💬 𝙈𝙚𝙨𝙨𝙚𝙣𝙜𝙚𝙧
⟿ m.me/61593943674779
​🌐 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠
⟿ fb.com/61593943674779
───━─━─  ◈  ─━─━───
​🕒 𝑼𝒑𝒅𝒂𝒕𝒆𝒅 : ${time}
━━━━━━━  ❖  ━━━━━━━
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/cwd64Av.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
