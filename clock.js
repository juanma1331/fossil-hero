;(function () {
  const hourHand = document.querySelector(".clock__hour")
  const minHand = document.querySelector(".clock__min")
  const secHand = document.querySelector(".clock__sec")
  const deg = 6

  let nowdate
  let hour
  let min
  let sec

  function tick() {
    nowdate = new Date()
    hour = nowdate.getHours() * 30
    min = nowdate.getMinutes() * deg
    sec = nowdate.getSeconds() * deg

    hourHand.style.transform = `rotate(${hour + min / 12}deg)`
    minHand.style.transform = `rotate(${min}deg)`
    secHand.style.transform = `rotate(${sec}deg)`
  }

  tick()
  setInterval(tick, 1000)
})()
