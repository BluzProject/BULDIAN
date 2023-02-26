/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
    lol: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6289696090800']
global.premium = ['6289696090800']
global.botname = 'Bluz-Bot'
global.harinye = '☪️ Ramadhan (2023) ☪️'
global.bluzai = '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'
global.packname = 'BluzBot'
global.author = 'WhatsApp Bot'
global.sessionName = 'bluzqr'
global,lolkey = '@nc0kb4j1n64n'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    daftar: `Kamu belum terdaftar di BluzBot cek private message mu untuk mendaftar`,
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    link: 'Linknya mana ?',
    waitprem: 'Tunggu sebentar, Yang Mulia 👑',
    error: 'Fitur Tiktok Sedang Error, Sihlakan coba di lain waktu',
    endLimit: `Limit Anda Telah Habis, dan jangan lupa ketik daily Setiap Jam 12\nJika ingin limit tanpa batas ketik sewa atau ketik buylimit`,
    endUmpan: `Anda tidak bisa memancing tanpa umpan 🪱\nSihlakan ketik beliumpan`,
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
//global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
