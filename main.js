//设置倒计时到期时间
let endDate = new Date("Jan 25, 2020 00:00:00").getTime()

//设置定时器一秒一动
let timer = setInterval(tick, 1000)

//变化函数
function tick() {
    //得到现在时间
    let now = new Date().getTime()
    //计算结束时间和现在的差
    let t = endDate - now

    //如果差大于零
    if (t > 0) {
        //设置天时分秒
        //计算天 如果天小于0 加个0
        let days = Math.floor(t / (1000 * 60 * 60 * 24))
        if (days < 10) { days = '0' + days }

        //计算时
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        if (hours < 10) { hours = '0' + hours }

        //计算分
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
        if (mins < 10) { mins = '0' + mins }

        //计算秒
        let secs = Math.floor((t % (1000 * 60)) / 1000)
        if (secs < 10) { secs = '0' + secs }

        //生成时间字符串
        let time = `${days} : ${hours} : ${mins} : ${secs}`

        //将时间附到html上去
        document.querySelector('.countdown').innerHTML = time
    }
}