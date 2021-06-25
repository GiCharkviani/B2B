import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsListServiceService {

  public hotels = [] as any;

  public staticHotel = [
    {
      name: 'Guest House Old Tbilisi ',
      city: 'Tbilisi',
      street: '19 Arutin Saiatnova Street, 0105',
      rating: 4,
      pic: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/202558511.jpg?k=80f1d255255718454fb115b0711e1e1e62b3941f4ac34f31c06a3bd6ad68d66c&o=&hp=1',
      pic1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/202558572.jpg?k=a2c04d16598b6a01ef7296720a55eae504c34dacd9d1dd61618f704d442fbee4&o=&hp=1',
      pic2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/202558490.jpg?k=b752cf36c9338a57b80c7ffec50f19a036ef0eecd9a00939e1f27ccd5bbac7ad&o=&hp=1',
      pic3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/202558506.jpg?k=c66fc9842b895b63e1f680623ee550943a9d243fbd4a94d51a675b7ad5a89fd3&o=&hp=1',
      pic4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/202558580.jpg?k=79e9a13c84b186ac048efcc6150f66bb0125bd195fb9ee2d40211c67833b01ed&o=&hp=1',
      description: 'Apartment Asad offers accommodation in Tbilisi. Apartment Asad features views of the mountains is 400 m from Freedom Square.The kitchenette is equipped with a refrigerator and there is a private bathroom. A flat-screen TV with satellite channels is featured. There is a shared bathroom with a bath, bath or shower and bidet. Rustaveli Theatre is 1.2 km from Apartment Asad, while Tbilisi Opera and Ballet Theatre is 1.4 km from the property. The nearest airport is Tbilisi International Airport, 13 km. This is our guests. favourite part of Tbilisi City, according to independent reviews. Couples particularly like the location — they rated it 9.8 for a two-person trip. We speak your language!',
      rooms: [
        {
        numberi: 1,
        places: 5,
        pp: 'For kids is free',
        genInfo: 'Free WiFi Airport shuttle Free parking Non-smoking rooms 24-hour front desk Heating Tea/coffee maker in all rooms',
        reserved: true,
        date: '2022-01-01'
      }, { numberi: 2,
        places: 2,
        pp: 'For kids is free',
        genInfo: 'Free WiFi Airport shuttle Free parking Non-smoking rooms 24-hour front desk Heating Tea/coffee maker in all rooms',
        reserved: false,
        date: '',
      }
      ],
    },
    {
      name: 'Borjomi Classic Hotel',
      city: 'Borjomi',
      street: '6 Meskheti Street, 1200',
      rating: 3,
      pic: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/304787582.jpg?k=038deb0f5b3a3e15b92ade32575791177f39f59570002a9bbd48714e605dee42&o=&hp=1',
      pic1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/225122265.jpg?k=98cc328825ca6bbb4b2c1869d9cd9fba8f9b81ad71212b6194d64dcf618a1ef6&o=&hp=1',
      pic2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207148748.jpg?k=3f50372a5eefc96f20cee873744b9b0e372ff78659f3b425d2bfeddba52adf61&o=&hp=1',
      pic3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207316617.jpg?k=d0c8b76bbd153102b0a39b3c10d09f1a28f983c9005d5115eada24cd5448d26b&o=&hp=1',
      pic4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/207148736.jpg?k=4b85ca6832c2b3611d4746efb33b135e389556805735bd4ed2ecc8a886c3b3e0&o=&hp=1',
      description: 'Located in Borjomi, Borjomi Classic Hotel features a terrace. With a garden, the 3-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom. The accommodation provides a 24-hour front desk and room service for guests.All units at the hotel are equipped with a seating area and a flat-screen TV. All guest rooms include a wardrobe.Continental and vegetarian breakfast options are available daily at Borjomi Classic Hotel. Bakuriani is 32 km from the accommodation. The nearest airport is Kutaisi International, 83 km from Borjomi Classic Hotel, and the property offers a paid airport shuttle service.Couples particularly like the location — they rated it 9.4 for a two-person trip. We speak your language!',
      rooms: [
        {
        numberi: 1,
        places: 5,
        pp: 'just pay',
        genInfo: 'Free WiFi Free parking Airport shuttle',
        reserved: true,
        date: '2022-01-01'
      }, { numberi: 2,
        places: 2,
        pp: 'just pay',
        genInfo: 'Free WiFi Free parking Airport shuttle',
        reserved: false,
        date: '',
      },
      { numberi: 3,
        places: 5,
        pp: 'just pay',
        genInfo: 'Free WiFi Free parking Airport shuttle',
        reserved: false,
        date: '',
      }
      ],
    },
    {
      name: 'Hotel Cattaleya',
      city: 'Batumi',
      street: 'Mazniashvili Street 3, 0301',
      rating: 5,
      pic: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130413209.jpg?k=69ac6f54a44048729ee35c6755400e5f3f10afe571cda2bffd3e81b9e2e85d48&o=&hp=1',
      pic1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/185305615.jpg?k=ab973fa9271365715f680e8ea03434482ef871d4f7a9fb91c59eaa98f20914dc&o=&hp=1',
      pic2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/180089961.jpg?k=3abe197e23237abfa761917e1bafe632cb2ca58f22e5bf97a75fd4851a546753&o=&hp=1',
      pic3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130777085.jpg?k=1d843b41628fbbea41031eb59c3703c4543958f554cbe2c1f4c75ec0a37128f4&o=&hp=1',
      pic4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/130778004.jpg?k=8483c0c16b14098552c4ca89064f44825f681a119c25324c096ce720026d005c&o=&hp=1',
      description: 'Hotel Cattaleya features air-conditioned rooms with satellite flat-screen TV in the Old Boulevard district of Batumi. This property is set a short distance from attractions such as Piazza, Medea Monument, and Alphabet Tower. The hotel offers city views, a terrace, a 24-hour front desk, and free WiFi is available. At the hotel, all rooms come with a desk. At Hotel Cattaleya, rooms include a seating area. Guests at the accommodation can enjoy a buffet breakfast.Popular points of interest near Hotel Cattaleya include Batumi Beach, Ali and Nino Monument and The Neptun Fountain. The nearest airport is Batumi International, 6 km from the hotel, and the property offers a paid airport shuttle service.',
      rooms: [
        {
        numberi: 1,
        places: 1,
        pp: 'just come and we will pay all',
        genInfo: ' Free WiFi Family rooms Airport shuttle Non-smoking rooms 24-hour front desk Terrace Tea/coffee maker in all rooms',
        reserved: false,
        date: ''
      }
      ],
    },
    {
      name: 'Family Hotel Kala',
      city: 'Mestia',
      street: 'Erekle Pharjiani Street, alley 2, #4, 3200',
      rating: 0,
      pic: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/285828288.jpg?k=ff36184aa7a0b0f3bf31013d9c5b9b6c78f88443d20d61146716614bac4687d1&o=&hp=1',
      pic1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/285828031.jpg?k=da3726996c77f6c70f512a888cf3a9ebcf50d83b5ba6ab30b3f2902a090e8913&o=&hp=1',
      pic2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/285827916.jpg?k=0133249e5566db434d38fcfac648407706b15d33c1920d8cd75c0883914314b7&o=&hp=1',
      pic3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/285827822.jpg?k=f91881fee3fa3d5c979aaa30d94036f7f69d05f4ceae26f6d846beac98bcb321&o=&hp=1',
      pic4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/273307987.jpg?k=00832717fec2f78e5f28b5c444f0a314020fbfb5cdd6ede410a2711bbb3b74b4&o=&hp=1',
      description: 'Hotel Cattaleya features air-conditioned rooms with satellite flat-screen TV in the Old Boulevard district of Batumi. This property is set a short distance from attractions such as Piazza, Medea Monument, and Alphabet Tower. The hotel offers city views, a terrace, a 24-hour front desk, and free WiFi is available. At the hotel, all rooms come with a desk. At Hotel Cattaleya, rooms include a seating area. Guests at the accommodation can enjoy a buffet breakfast.Popular points of interest near Hotel Cattaleya include Batumi Beach, Ali and Nino Monument and The Neptun Fountain. The nearest airport is Batumi International, 6 km from the hotel, and the property offers a paid airport shuttle service.',
      rooms: [
        {
        numberi: 1,
        places: 5,
        pp: 'as much as you can',
        genInfo: 'Free WiFi Family rooms Airport shuttle Non-smoking rooms Bar',
        reserved: true,
        date: '2022-01-01'
      }, { 
        numberi: 2,
        places: 2,
        pp: 'as much as you can',
        genInfo: 'Fridge, Washing machine, iron, iron board and etc.',
        reserved: false,
        date: '',
      },
      { numberi: 3,
        places: 3,
        pp: 'not very good room, so you can pay less',
        genInfo: 'Free WiFi Family rooms Airport shuttle Non-smoking rooms Bar',
        reserved: true,
        date: '2022-02-08',
      },
      { numberi: 4,
        places: 5,
        pp: 'for this room just 1 lari',
        genInfo: 'bed',
        reserved: false,
        date: '',
      },
      { numberi: 5,
        places: 1,
        pp: 'party room, so you have to pay much',
        genInfo: 'bar, disco, tklashatklushebi da rame rumeebi',
        reserved: true,
        date: '2022-05-02',
      }

      ],
    }
  ] as any;

  public hotelsEmpty = [{
    name: 'Dylan Hotel NYC',
    city: 'New York',
    street: '52 East 41st Street, Murray Hill, New York, NY 10017,',
    rating: 5,
    pic: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/82038353.jpg?k=27e97b200656ea4d2137516f47634020cac6dff681c2c3a9451737910be4d47c&o=&hp=1',
    pic1: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/81886811.jpg?k=f765393aa1fa641630cae38e8f6312874c32330a7d6491bbf8207706b97d26e6&o=&hp=1',
    pic2: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/81886678.jpg?k=8735097efaef14f348cfc9b55a2688440179e2053bff17ef62458fe2526e64bf&o=&hp=1',
    pic3: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/81887027.jpg?k=d63996155da70141efbfda26aa764aa29f31d911d6f5a7058048879b1f817318&o=&hp=1',
    pic4: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/81887200.jpg?k=fc02482279ed346b65e42e2d9e919a4a24753f643100fc7810de3cb4f717ac97&o=&hp=1',
    description: 'In Midtown Manhattan, this 4-star hotel is one block from the Grand Central-42nd Street Subway Station and a 15-minute walk to Times Square. This boutique hotel offers free Wi-Fi. Guest rooms at the Dylan Hotel include cable TV. Select suites provide a separate seating area with a sofa bed. Bathrobes and slippers are available upon request. Other services provided at the hotel include ticket services, dry cleaning and laundry services. Guests at the Hotel Dylan are a short walk from the luxury shops located along Fifth Avenue. Rockefeller Center and the Empire State Building are under a 15-minute walk away. This is our guests favourite part of New York, according to independent reviews.Couples particularly like the location — they rated it 9.6 for a two-person trip. We speak your language!',
    rooms: [
      {
      numberi: 1,
      places: 5,
      pp: 'For kids is free',
      genInfo: 'Fridge, Washing machine, iron, iron board and etc.',
      reserved: true,
      date: '2022-01-01'
    }, { numberi: 2,
      places: 2,
      pp: 'For kids is free',
      genInfo: 'Fridge, Washing machine, iron, iron board and etc.',
      reserved: false,
      date: '',
    }
    ],
  }] as any;

  constructor() { }



  public addHotel(hotel: { name: string, city: string, street: string, rating: number, pic: string, pic1?: string, pic2?: string, pic3?: string, pic4?: string, description: string, rooms?:any[]}) {

    this.hotels.push(hotel);

    console.log('დამატებულია');
    localStorage.setItem('hotel', JSON.stringify(this.hotels));
  }

}
