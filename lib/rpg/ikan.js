const fs = require('fs') 
let uang = JSON.parse(fs.readFileSync('./database/user/uang.json'));
////////FUNTION
const addikan = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        const addikanUser = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
if (position !== false) {
uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
		
		const checkikanUser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
         
         const confirmikan = (sender, amount) => {
             let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
module.exports = {
  addikan,
  addikanUser,
  checkikanUser,
  confirmikan
}