var baseUrl = "https://music.aityp.com"
function https({url,data}){
    return new Promise((resolve,reject)=>{
       wx.request({
           url: baseUrl+url,
           data,
           header: {'content-type':'application/json'},
           method: 'GET',
           dataType: 'json',
           responseType: 'text',
           success: (res)=>{
            resolve(res)
          },
           fail: (err)=>{
            reject(err)
        },
       });
    })
}
module.exports = {
    getHot:()=>{
        return https({
            url:"/top/playlist?order=hot"
        })
    },
    getPlaylist:()=>{
        return https({
            url:"/top/playlist?cat=日语"
        })
    },
    getDj:()=>{
        return https({
            url:"/personalized/djprogram"
        })
    },
    getDetail:(id)=>{
        return https({
           url:"/playlist/detail",
           data:{
               id
           }
        })
    },
    getPlay:(id)=>{
        return https({
            url:"/song/url",
            data:{
                id
            }
        })
    }
}