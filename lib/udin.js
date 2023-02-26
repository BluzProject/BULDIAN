
const axios = require("axios");


// async function ssyt(url) {
// let post = {
//   url: url
// }
// let data = await axios.post("https://www.save-insta.com/process",post)

// console.log(data.data)
// return data.data

// }
// ssyt('https://www.instagram.com/p/Cngq4KLrNFB/?igshid=NDk5N2NlZjQ=')


// try {
//   exports.Ytd = async(url) => {
//     let post = {
//       url: url
//     }
//     let udin = await axios.post("https://ssyoutubess.com/api/convert",post,
//   { headers:{
//       'Origin': 'https://ssyoutube.com',
//       'Referer': 'https://ssyoutube.com/id33/youtube-video-downloader',
//       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
//       'Content-Type': 'application/json',
//       'Cookie': 'laravel_session=eyJpdiI6IkFoT1FzN1dhaVJxcEE3dEVDTVlKaUE9PSIsInZhbHVlIjoicEN3aTVNTTJVRHlsMEM5dHBrbHFVNkdwcUoxZGgvQjk0d3AxdWFnRUx5N1BJS3lBRGZPNUIyajYwWFduQ3U0Mm9pR1V2eUpJZU84eXBvZm5SNWVpZ0llQURzNDB4Q1llTE9lYmptS2NPbk5wMUxPT3BzLzFJYmYxeTFTT0lPTkMiLCJtYWMiOiI5NDIwYzg0YjI1MTk1ZDAxMzY0MmY5ODBhMGJlYmY0MmQ5YjZmYTNkODc0YTM1ZWI3ZWQzODUwZmY3MjFiNGIyIiwidGFnIjoiIn0%3D; uid=8652c75e949ab26f; push=70; outputStats=19; clickAds=3; _ga=GA1.2.826096676.1675940842; _gid=GA1.2.1690179882.1675940842; _gat_outputStats=1' }},
//       )
    
//   //  console.log(udin.data.url[0].url)
//     return udin.data
//     }
// } catch {
//   exports.Ytd = async(url) => {
//     let post = {
//       url: url
//     }
//     let ytd2 = await axios.post("https://ssyoutube.com/api/convert",post,
//     { headers:{
//         'host': 'api.onlinevideoconverter.pro',
//         'Origin': 'https://en1.onlinevideoconverter.pro',
//         'Referer': 'https://en1.onlinevideoconverter.pro/',
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
//         'Content-Type': 'application/json' }},
//     )
//     return ytd2.data
//   }
// }


exports.Ytd = async(url) => {
  let post = {
    url: url
  }
  let udin = await axios.post("https://ssyoutube.com/api/convert",post,
{ headers:{
    'Origin': 'https://ssyoutube.com',
    'Referer': 'https://ssyoutube.com/id33/youtube-video-downloader',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
    'Content-Type': 'application/json',
    'Cookie': 'laravel_session=eyJpdiI6IkFoT1FzN1dhaVJxcEE3dEVDTVlKaUE9PSIsInZhbHVlIjoicEN3aTVNTTJVRHlsMEM5dHBrbHFVNkdwcUoxZGgvQjk0d3AxdWFnRUx5N1BJS3lBRGZPNUIyajYwWFduQ3U0Mm9pR1V2eUpJZU84eXBvZm5SNWVpZ0llQURzNDB4Q1llTE9lYmptS2NPbk5wMUxPT3BzLzFJYmYxeTFTT0lPTkMiLCJtYWMiOiI5NDIwYzg0YjI1MTk1ZDAxMzY0MmY5ODBhMGJlYmY0MmQ5YjZmYTNkODc0YTM1ZWI3ZWQzODUwZmY3MjFiNGIyIiwidGFnIjoiIn0%3D; uid=8652c75e949ab26f; push=70; outputStats=19; clickAds=3; _ga=GA1.2.826096676.1675940842; _gid=GA1.2.1690179882.1675940842; _gat_outputStats=1' }},
    )
  
//  console.log(udin.data.url[0].url)
  return udin.data
  }

exports.Yt = async(url) => {
  let post = {
    url: url
  }
  let ytd2 = await axios.post("https://ssyoutube.com/api/convert",post,
  { headers:{
      'host': 'api.onlinevideoconverter.pro',
      'Origin': 'https://en1.onlinevideoconverter.pro',
      'Referer': 'https://en1.onlinevideoconverter.pro/',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
      'Content-Type': 'application/json' }},
  )
  return ytd2.data
}


  exports.ttblu = async(query) => {
    let post = {
      query: query
    }
    let bluz = await axios.post("https://tik2mate.com/api/ajax/search",post,
  { headers:{
    'Origin': 'https://tik2mate.com',
    'Referer': 'https://tik2mate.com/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0',
    'content-type': 'application/json',
    'Cookie': 'lang=id; _ga_233R9NY1HK=GS1.1.1676199809.1.0.1676199809.0.0.0; _ga=GA1.1.825719302.1676199810' }},
    )

// console.log(bluz.data)
    return bluz.data
  }
