//% weight=100 color=#0fbc11 icon=""
namespace K3huskyLens {

    //%blockId="k3hl_show_coordinates"
    //%block="show coordinates id: %id"
    //%group=Graphs
    //%ledNum.min=0 ledNum.max=4 value.min=0 value.max=5
    export function idCoordinates(id: number) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            huskylens.writeOSD("X:" + huskylens.readeBox(1, Content1.xCenter) + ", Y:" + huskylens.readeBox(1, Content1.yCenter), 150, 30)
        } else {
            huskylens.clearOSD()
        }
    }
}
