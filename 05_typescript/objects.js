var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 5 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
