interface Point {
    x: number,
    y: number
}

interface Passenger{
    name:string;
    phone: string;
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger):void;
}

//"interface", bir nesnenin sahip olması gereken özellikleri ve bu özelliklerin veri tiplerini tanımlayan bir yapıdır. "interface" ile bir nesne tanımlanırken, her bir özellik için belirli bir veri tipi belirtmek gerekir. Bu sayede, nesnenin ilgili özelliklerine erişirken hangi veri tipleri bekleniyor olduğunu bilerek kod yazmak daha kolay hale gelir.