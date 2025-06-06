const base = {
    get() {
        return {
            url : "http://localhost:8080/kaoyanziliaofenxiang/",
            name: "kaoyanziliaofenxiang",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/kaoyanziliaofenxiang/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "考研资料分享系统"
        } 
    }
}
export default base
