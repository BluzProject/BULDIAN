exports.testing = () => {
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesany = cpes.split("|")[1];
lolh = `${pesany}`
bluz.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
await m.reply("Success")
}