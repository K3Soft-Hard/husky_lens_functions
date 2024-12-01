//% weight=100 color=#0fbc11 icon=""
namespace K3huskyLens {

    //%blockId="k3hl_show_coordinates"
    //%block="show coordinates id: %id x:%dx y:%dy"
    //%group=functions
    export function idCoordinates(id: number = 1, dx: number = 150, dy: number = 30) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            huskylens.writeOSD("X:" + huskylens.readeBox(1, Content1.xCenter) + ", Y:" + huskylens.readeBox(1, Content1.yCenter), 150, 30)
        } else {
            huskylens.clearOSD()
        }
    }
}
