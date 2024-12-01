//% weight=100 color=#0fbc11 icon=""
namespace K3huskyLens {

    //%blockId="k3hl_show_coordinates"
    //%block="show coordinates id: %id x:%dx y:%dy"
    //%group=functions
    /**
     * Show object coordinates on screen, default x = 150, y =30
     */
    export function idCoordinates(id: number = 1, dx: number = 150, dy: number = 30) {
        huskylens.request()
        if (huskylens.isAppear(id, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            huskylens.writeOSD("X:" + huskylens.readeBox(id, Content1.xCenter) + ", Y:" + huskylens.readeBox(id, Content1.yCenter), dx, dy)
        } else {
            huskylens.clearOSD()
        }
    }
}
