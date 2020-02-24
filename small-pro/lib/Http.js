var baseUrl = "https://douban.uieee.com/v2/movie"
function Http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:baseUrl+url,
            data,
            header: {'content-type':'json'},
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
    getTop250:()=>{
        return Http({
            url:"/top250"
        })
    },
    getInTheaters:()=>{
       return Http({
           url:"/in_theaters"
       })
    },
    getCommingSoon:()=>{
        return Http({
            url:"/coming_soon"
        })
    },
    getDetail:(id)=>{
        return Http({
            url:"/subject/"+id
        })
    }
}