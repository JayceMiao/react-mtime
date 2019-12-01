const proxy = require("http-proxy-middleware")

module.exports = (app)=>{
    // https://content-api-m.mtime.cn/article/originalInfoList.api
    app.use("/ajax",proxy({
        target:"https://ticket-m.mtime.cn",
        changeOrigin:true,  
        pathRewrite:{
            "^/ajax":""
        }
    }))
}