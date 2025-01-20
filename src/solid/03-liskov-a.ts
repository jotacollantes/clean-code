import { Tesla, Audi, Toyota, Honda,Volvo, Vehicle, Ford } from './03-liskov-b';


(() => {
    
    const printCarSeats = (
        //cars: (Tesla | Audi | Toyota | Honda |Volvo)[] 
        //Puedo usar el tipo Vehicle porque todos las marcas heredaron de la clase Vehicle
        cars: Vehicle[] 
    
    ) => {
        cars.forEach(car => {
            //constructor.name da el nombre de la clase ya que el numbre del metodo constructor tiene el mismo nombre de la clase.
            console.log(car.constructor.name ,car.getNumberSeats())
            
        });
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberSeats() )
        //         continue;
        //     }
            
        //     if( car instanceof Volvo ) {
        //         console.log( 'Volvo', car.getNumberSeats() )
        //         continue;
        //     }  

        //     if( car instanceof Ford ) {
        //         console.log( 'Ford', car.getNumberSeats() )
        //         continue;
        //     }  

        // }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Ford(4),
    ];


    printCarSeats( cars );

})();