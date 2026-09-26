const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  aliases: ["ownerinfo", "owners"],
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  const info = `
━━━━━━━  ❖  ━━━━━━━
👑 𝕸𝕯 𝕸𝖎𝖑𝖔𝖓 𝕾𝖆𝖗𝖐𝖆𝖗 👑
༺ 𝑶𝑾𝑵𝑬𝑹 𝑷𝑹𝑶𝑭𝑰𝑳𝑬 ༻
━━━━━━━  ❖  ━━━━━━━
​👤 𝙉𝙖𝙢𝙚          : 𝕸𝕯 𝕸𝖎𝖑𝖔𝖓 𝕾𝖆𝖗𝖐𝖆𝖗
🚹 𝙂𝙚𝙣𝙙𝙚𝙧        : 𝑴𝒂𝒍𝒆
❤️ 𝙎𝙩𝙖𝙩𝙪𝙨        : 𝑷𝒖𝒓𝒆 𝑺𝒊𝒏𝒈𝒍𝒆 🥲
🎂 𝘼𝙜𝙚           : 𝟮𝟯+
💼 𝙋𝙧𝙤𝙛𝙚𝙨𝙨𝙞𝙤𝙣   : 𝑱𝒐𝒃 (𝑷𝒓𝒊𝒗𝒂𝒕𝒆 𝑪𝒐𝒎𝒑𝒂𝒏𝒚)
☪️ 𝙍𝙚𝙡𝙞𝙜𝙞𝙤𝙣      : 𝑰𝒔𝒍𝒂𝒎
🎓 𝙀𝙙𝙪𝙘𝙖𝙩𝙞𝙤𝙣    : 𝑫𝒂𝒌𝒉𝒊𝒍 (𝑺𝑺𝑪 𝟐𝟎𝟐𝟎)
📍 𝘼𝙙𝙙𝙧𝙚𝙨𝙨       : 𝑲𝒖𝒓𝒊𝒈𝒓𝒂𝒎, 𝑩𝒂𝒏𝒈𝒍𝒂𝒅𝒆𝒔𝒉
​───━─━─  ◈  ─━─━───
💬 𝙈𝙚𝙨𝙨𝙚𝙣𝙜𝙚𝙧
⟿ m.me/61593943674779
​🌐 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠
⟿ fb.com/61593943674779
───━─━─  ◈  ─━─━───
​🕒 𝑼𝒑𝒅𝒂𝒕𝒆𝒅 : ${time}
━━━━━━━  ❖  ━━━━━━━
`;

  const images = [
    "https://files.catbox.moe/cao1fx.jpg",
    "https://i.imgur.com/KQZPVNi.jpeg",
    "https://i.imgur.com/TPozj9H.jpeg",
    "https://i.imgur.com/O9mM8gZ.jpeg"
  ];

  const randomImg =
    images[Math.floor(Math.random() * images.length)];

  const filePath = __dirname + "/cache/owner.jpg";

  const callback = () => {
    api.sendMessage(
      {
        body: info,
        attachment: fs.createReadStream(filePath)
      },
      event.threadID,
      () => {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    );
  };

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(filePath))
    .on("close", callback);
};
