/**
 * VOL +
 */
/**
 * 7
 */
/**
 * 1
 */
/**
 * 5
 */
/**
 * U/SD
 */
/**
 * EQ
 */
/**
 * 4
 */
/**
 * 1
 */
/**
 * VOL -
 */
IR.onPressEvent(RemoteButton.Up, function () {
    basic.showIcon(IconNames.Yes)
})
/**
 * RPT
 */
IR.onPressEvent(RemoteButton.Left, function () {
    basic.showIcon(IconNames.Angry)
})
IR.onPressEvent(RemoteButton.Down, function () {
    basic.showIcon(IconNames.StickFigure)
})
IR.onPressEvent(RemoteButton.Minus, function () {
    basic.showIcon(IconNames.Chessboard)
})
IR.onPressEvent(RemoteButton.Power, function () {
    basic.showIcon(IconNames.Heart)
})
IR.onPressEvent(RemoteButton.Right, function () {
    basic.showIcon(IconNames.House)
})
IR.onPressEvent(RemoteButton.OK, function () {
    basic.showIcon(IconNames.EigthNote)
})
IR.onPressEvent(RemoteButton.Back, function () {
    basic.showIcon(IconNames.Target)
})
IR.onPressEvent(RemoteButton.Plus, function () {
    basic.showIcon(IconNames.Pitchfork)
})
IR.init(Pins.P16)
