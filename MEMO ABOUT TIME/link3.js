var skyIsBlue = false
console.log(skyIsBlue)

var leapYear=false
var year = 2020
var month = 'November'
var day = '-'

var now = new Date()
var hours = now.getHours()

year = 2*(2022+1)*36/72
year = year +1
console.log(year)

var dateSentence = ' ' + day + hours +' - '+ year
console.log(dateSentence)


document.getElementById('message').innerText = dateSentence

//array
var colors = ['orange','black','green']
var aColor = colors[2]
colors[3] = 'navy'
console.log(aColor)
console.log(colors.length)
document.body.style['background']=colors[2]


    var rand = Math.random()
    rand = rand * 4
    rand = Math.floor(rand)
    console.log(rand)
    var randomColor = colors [ rand]
    console.log(randomColor)
    document.body.style['background']=randomColor

function changeColor(){
    var rand = Math.random()
    rand = rand * 4
    rand = Math.floor(rand)
    console.log(rand)
    var randomColor = colors [ rand]
    console.log(randomColor)
    document.body.style['background']=randomColor

    var now = new Date()
    var seconds = now.getSeconds()
    var barElement = document.getElementById('bar')
    barElement.style['width'] = seconds*3+'px'
    console.log(seconds)

}

window.setInterval(changeColor,500)