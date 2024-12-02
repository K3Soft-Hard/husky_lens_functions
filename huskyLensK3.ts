//% weight=100 color=#0fbc11 icon=""
namespace K3huskyLens {

    let coordinates: string

    //%blockId="k3hl_show_coordinates"
    //%block="show coordinates id: %id x:%dx y:%dy"
    //%group=functions
    //%advanced=true
    /**
     * Show object coordinates on screen, default x = 150, y =30
     */
    export function showCoordinates(id: number = 1, dx: number = 150, dy: number = 30) {
        huskylens.request()
        if (huskylens.isAppear(id, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            huskylens.writeOSD("X:" + huskylens.readeBox(id, Content1.xCenter) + ", Y:" + huskylens.readeBox(id, Content1.yCenter), dx, dy)
        } else {
            huskylens.clearOSD()
        }
    }
    //%blockId="k3hl_get_coordinates"
    //%block="get coordinates id: %id"
    //%group=functions
    /**
     * Return object coordinates
     */
    export function getCoordinates(id: number = 1) {
        huskylens.request()
        if (huskylens.isAppear(id, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            coordinates = ("X:" + huskylens.readeBox(id, Content1.xCenter) + ", Y:" + huskylens.readeBox(id, Content1.yCenter))
        } else {
            coordinates = ""
        }
        return (coordinates)
    }
}
