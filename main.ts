input.onButtonPressed(Button.A, function () {
	
})
function show_score_board () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("player a" + pa)
    OLED.newLine()
    OLED.writeStringNewLine("player b" + pb)
    OLED.newLine()
    OLED.writeStringNewLine("ties" + t)
    OLED.newLine()
    OLED.writeStringNewLine("rounds" + rounds)
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
let rounds = 0
let t = 0
let pb = 0
let pa = 0
OLED.init(128, 64)
pa = 0
pb = 0
t = 0
rounds = 0
OLED.writeStringNewLine("lets play!")
basic.pause(2000)
show_score_board()
