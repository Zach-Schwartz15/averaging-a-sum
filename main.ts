controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _1 = 15
    _2 = 5
    final_average = (_1 + _2) / 2
    game.splash("Your answer is..." + final_average)
})
let final_average = 0
let _2 = 0
let _1 = 0
game.splash("Press A to get your average")
