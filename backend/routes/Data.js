const data = [
  {
    id: 0,
    title: "Audi A8 2017",
    brand: "Audi",
    year: 2017,
    price: "21,650$",
    cost: 21650,
    days: 02,
    hours: 15,
    pic: "https://cdn.pixabay.com/photo/2016/12/07/21/50/car-1890494_960_720.jpg",
    pic2: "https://www.cnet.com/a/img/resize/253709d4685cc7db254daacb74bdb0158411a8c4/2017/07/11/a26d0438-08ba-4c98-aa63-a73bbbfc9d5c/2018-audi-a8-27.jpg?auto=webp&fit=crop&height=528&width=940",
    pic3: "https://www.cnet.com/a/img/resize/45d4a7971cb87648053600c2f655f5d48fd47b50/2017/07/11/c0546d86-ea1b-44db-9a62-f2428bb8c48e/2018-audi-a8-28.jpg?auto=webp&width=940",
    pic4: "",
    pic5: "",
    pic6: "",
    km: 94,
    hrs: null,
    type: "sedan",
    classic: false,
    sold: false,
    promoted: true,
  },
  {
    id: 1,
    title: "BMW AMG 2014",
    brand: "BMW",
    year: 2014,
    price: "19,650$",
    cost: 19650,
    days: 03,
    hours: 11,
    hrs: null,
    pic: "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg",
    pic2: "https://cdn.pixabay.com/photo/2016/05/26/12/40/mercedes-benz-1417070_960_720.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    km: 140,
    type: "sedan",
    classic: false,
    sold: false,
    promoted: true,
  },
  {
    id: 2,
    title: "Ford RRover 2017",
    brand: "Ford",
    year: 2017,
    price: "11,150$",
    cost: 11150,
    days: 02,
    hours: 28,
    hrs: null,
    pic: "https://cdn.pixabay.com/photo/2020/06/04/22/43/range-rover-5260745_960_720.jpg",
    pic2: "https://cdn.pixabay.com/photo/2020/06/25/17/14/range-rover-5340222_960_720.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    km: 190,
    type: "sedan",
    classic: false,
    sold: false,
    promoted: true,
  },
  {
    id: 3,
    title: "Ford Focus 2018",
    brand: "Ford",
    year: 2018,
    price: "13,500$",
    cost: 13500,
    days: 03,
    hours: 11,
    hrs: null,
    pic: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: null,
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    km: 170,
    type: "sedan",
    classic: false,
    sold: false,
    promoted: true,
  },
  {
    id: 4,
    title: "Auto Union 1951",
    brand: "Auto Union",
    year: 1951,
    price: "10,650$",
    cost: 10650,
    days: 02,
    hours: 18,
    hrs: null,
    km: 70,
    pic: "https://images.pexels.com/photos/992067/pexels-photo-992067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    pic2: null,
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "crossover",
    classic: true,
    sold: false,
    promoted: true,
  },
  {
    id: 5,
    title: "Mustang 1974",
    brand: "Ford",
    year: 1974,
    price: "25,650$",
    cost: 25960,
    days: 02,
    hours: 15,
    hrs: null,
    km: 135,
    pic: "https://images.pexels.com/photos/8020727/pexels-photo-8020727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: null,
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "sport",
    classic: true,
    sold: false,
    promoted: true,
  },
  {
    id: 6,
    title: "Ford F-150 1985",
    brand: "Ford",
    year: 1985,
    price: "5,650$",
    cost: 5650,
    days: 0,
    hours: 0,
    km: 270,
    hrs: null,
    pic: "https://images.pexels.com/photos/4858438/pexels-photo-4858438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: null,
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "truck",
    classic: false,
    sold: true,
    promoted: false,
  },
  {
    id: 7,
    title: "Toyota Tacoma 2009",
    brand: "Toyota",
    year: 2009,
    price: "23,350$",
    cost: 23350,
    days: 0,
    hours: 10,
    km: 275,
    hrs: null,
    pic: "https://cdn.pixabay.com/photo/2018/11/21/19/56/toyota-3830433_960_720.jpg",
    pic2: null,
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "truck",
    classic: false,
    sold: true,
    promoted: false,
  },
  {
    id: 8,
    title: "Jeep Grand Cherokee 2016",
    brand: "Jeep",
    year: 2016,
    price: "15,550$",
    cost: 15550,
    days: 0,
    hours: 10,
    km: 175,
    hrs: null,
    pic: "https://images.pexels.com/photos/104401/pexels-photo-104401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic2: "https://images.pexels.com/photos/104404/pexels-photo-104404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "SUV",
    classic: false,
    sold: true,
    promoted: false,
  },
  {
    id: 9,
    title: "Volvo A40 2004",
    brand: "Volvo",
    year: 2004,
    price: "37,550$",
    cost: 37550,
    days: 05,
    hours: 1,
    km: 65,
    hrs: 17660,
    pic: "https://cdn.pixabay.com/photo/2018/01/13/14/20/dump-truck-3080177_960_720.jpg",
    pic2: "https://cdn.pixabay.com/photo/2018/01/13/14/20/dump-truck-3080177_960_720.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "heavy",
    classic: false,
    sold: true,
    promoted: false,
  },
  {
    id: 10,
    title: "Rav4 Sport 2019",
    brand: "Toyota",
    year: 2019,
    price: "17,550$",
    cost: 17550,
    days: 04,
    hours: 21,
    km: 65,
    hrs: null,
    pic: "https://images.unsplash.com/photo-1625776903580-e8af5930c225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    pic2: "https://images.unsplash.com/photo-1625776903580-e8af5930c225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "crossover",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 11,
    title: "Jeep Wrangler 2020",
    brand: "Jeep",
    year: 2020,
    price: "23,550$",
    cost: 23550,
    days: 02,
    hours: 11,
    km: 85,
    hrs: null,
    pic: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80",
    pic2: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "SUV",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 12,
    title: "Nissan GT-r 1972",
    brand: "Nissan",
    year: 1972,
    price: "23,250$",
    cost: 23250,
    days: 2,
    hours: 11,
    km: 165,
    hrs: null,
    pic: "https://www.mad4wheels.com/img/free-car-images/mobile/19537/nissan-gt-r-kpgc10--1972-669978.jpg",
    pic2: "https://www.mad4wheels.com/img/free-car-images/mobile/19537/nissan-gt-r-kpgc10--1972-669979.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "classic",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 13,
    title: "Chevy Colorado 2012",
    brand: "Chevrolet",
    year: 2012,
    price: "11,550$",
    cost: 11550,
    days: 02,
    hours: 21,
    km: 185,
    hrs: null,
    pic: "https://www.mad4wheels.com/img/free-car-images/mobile/8935/chevrolet-colorado-ltz-2012-316230.jpg",
    pic2: "https://www.mad4wheels.com/img/free-car-images/mobile/8935/chevrolet-colorado-ltz-2012-316231.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "Truck",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 14,
    title: "Ford Fiesta 2013",
    brand: "Ford",
    year: 2013,
    price: "13,000$",
    cost: 13000,
    days: 04,
    hours: 11,
    km: 165,
    hrs: null,
    pic: "https://www.mad4wheels.com/img/free-car-images/mobile/9961/ford-fiesta-st-2012-337013.jpg",
    pic2: "https://www.mad4wheels.com/img/free-car-images/mobile/9961/ford-fiesta-st-2012-337014.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "crossover",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 15,
    title: "VW Lavida 2008",
    brand: "Volkswagon",
    year: 2008,
    price: "6,550$",
    cost: 6550,
    days: 02,
    hours: 17,
    km: 193,
    hrs: null,
    pic: "https://www.mad4wheels.com/img/free-car-images/mobile/4057/volkswagen-lavida-2008-262567.jpg",
    pic2: "https://www.mad4wheels.com/img/free-car-images/mobile/4057/volkswagen-lavida-2008-262568.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "crossover",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 16,
    title: "Honda Civic 2018",
    brand: "Honda",
    year: 2018,
    price: "14,150$",
    cost: 14150,
    days: 02,
    hours: 11,
    km: 132,
    hrs: null,
    pic: "https://upload.wikimedia.org/wikipedia/commons/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg",
    pic2: "https://upload.wikimedia.org/wikipedia/commons/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "sedan",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 17,
    title: "Chevy Malibu 2015",
    brand: "Chevrolet",
    year: 2015,
    price: "12,150$",
    cost: 10150,
    days: 02,
    hours: 22,
    km: 202,
    hrs: null,
    pic: "https://cdn.pixabay.com/photo/2020/06/04/19/44/chevy-5260229_960_720.jpg",
    pic2: "https://cdn.ebizautos.media/used-2016-chevrolet-malibu-4drsedanpremierw2lz-13706-19230268-1-640.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "sedan",
    classic: false,
    sold: false,
    promoted: false,
  },
  {
    id: 18,
    title: "1994 Mitsubishi eclipse",
    brand: "Mitsubishi",
    year: 1994,
    price: "7,150$",
    cost: 7150,
    days: 0,
    hours: 0,
    km: 212,
    hrs: null,
    pic: "https://cdn.hibid.com/img.axd?id=4147686407&wid=&rwl=false&p=&ext=&w=0&h=0&t=&lp=&c=true&wt=false&sz=MAX&checksum=8j1psqGU4EHq5%2F7HeShZwqdQYqyg4grU",
    pic2: "https://www.carspecs.us/photos/18f2308bdcb6bfaba85755b4a4940521a9aef0f7-2000.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "sedan",
    classic: false,
    sold: true,
    promoted: false,
  },
  {
    id: 19,
    title: "1993 Mazda RX7",
    brand: "Mazda",
    year: 1993,
    price: "24,350$",
    cost: 10150,
    days: 0,
    hours: 0,
    km: 212,
    hrs: null,
    pic: "https://www.motortrend.com/uploads/sites/11/2020/08/1993-Mazda-RX-7-front-three-quarter.jpg",
    pic2: "https://www.motorious.com/content/images/2020/08/1993-Mazda-RX-7-2.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "sport",
    classic: false,
    sold: true,
    promoted: false,
  },
  {
    id: 20,
    title: "Ford F-250 2020",
    brand: "Ford",
    year: 2020,
    price: "34,350$",
    cost: 34350,
    days: 9,
    hours: 10,
    km: 102,
    hrs: null,
    pic: "https://www.gannett-cdn.com/presto/2019/06/25/PDTF/92571e45-5097-42f7-8379-07a3bea1d3e0-2020_Ford_F250_Super_Duty_Tremor.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
    pic2: "https://www.gannett-cdn.com/presto/2019/06/25/PDTF/3d5f6917-a4ee-4cc3-a24d-3aaf9ed00037-2020_Ford_F250_Super_Duty_Tremor_2.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "heavy",
    classic: false,
    sold: false,
    promoted: true,
  },
  {
    id: 21,
    title: "Dodge Ram 2007",
    brand: "Dodge",
    year: 2007,
    price: "7,250$",
    cost: 7250,
    days: 3,
    hours: 19,
    km: 205,
    hrs: null,
    pic: "https://i.ytimg.com/vi/Vu2TzFe2-Bo/hqdefault.jpg",
    pic2: "https://i.ytimg.com/vi/Vu2TzFe2-Bo/hqdefault.jpg",
    pic3: "",
    pic4: "",
    pic5: "",
    pic6: "",
    type: "sport",
    classic: false,
    sold: true,
    promoted: true,
  },
];

module.exports = data;
