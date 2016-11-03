import Car from './Car.js';

const CarService = {

    createCars: () => {
        let cars = [];
        for (let i = 1, line = 1, posX = 0; i <= 12; i++) {
            let car;
            // if (line === 5) {
            //     let size3Car = [];
            //     for (let j = 0, newPosX = posX; j < 3; j++) {
            //         car = new Car(newPosX, line);
            //         newPosX++;
            //         size3Car.push(car);
            //     }
            //     posX = posX + 4;
            //     cars = [
            //         ...cars,
            //         ...size3Car
            //     ];
            // } else {
                car = new Car(posX, line, 1.5);
                posX = posX + Math.random() * (300 - 100) + 100;
                cars.push(car);
            // }
            if (i % 3 == 0) {
                line++;
                switch (line) {
                    case 2:
                        posX = 400;
                        break
                    case 3:
                        posX = 150;
                        break;
                    case 4:
                        posX = 500;
                        break;
                    case 5:
                        posX = 300;
                        break;
                    default:
                        break;
                };
            }
        }
        return cars;
    },

    generateYPos: (line) => {
        switch (line) {
            case 1:
                return 550;
                break;
            case 2:
                return 500;
                break
            case 3:
                return 450;
                break;
            case 4:
                return 400;
                break;
            case 5:
                return 350;
                break;
            default:
                break;
        }
    },

    generateWidth: (line) => {
        switch (line) {
            case 5:
                return 150;
                break;
            default:
                return 50;
                break;
        }
    },

    generateDirection: (line) => {
        switch (line) {
            case 1:
                return 'right';
                break;
            case 2:
                return 'left';
                break
            case 3:
                return 'right';
                break;
            case 4:
                return 'left';
                break;
            case 5:
                return 'right';
                break;
            default:
                break;
        }
    }
}

export default CarService;
