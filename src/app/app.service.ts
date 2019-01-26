import { Injectable } from "@angular/core";

export class Product {
  ID: number;
  Name: string;
  Price: number;
  Current_Inventory: number;
  Backorder: number;
  Manufacturing: number;
  Category: string;
  ImageSrc: string;
}

let simpleProducts: string[] = [
  "One Connects",
  "Little resellers",
  "One Connects reseller",
  "Ibrahim Services",
  "Compror Pty Ltd",
  "Divesh Enterprise",
  "Raroan",
  "Ericsson",
  "Bengal Spicies",
  "Ravi Consulting 1",
  "Test Plumbers",
  "CitywideFM",
  "Brisbane Lawn",
  "Johns Security"
];

let products: Product[] = [
  {
    ID: 1,
    Name: "One Connects",
    Price: 330,
    Current_Inventory: 225,
    Backorder: 0,
    Manufacturing: 10,
    Category: "Video Players",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/1-small.png"
  },
  {
    ID: 2,
    Name: "Little resellers",
    Price: 400,
    Current_Inventory: 150,
    Backorder: 0,
    Manufacturing: 25,
    Category: "Video Players",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/2-small.png"
  },
  {
    ID: 3,
    Name: "One Connects reseller",
    Price: 2400,
    Current_Inventory: 0,
    Backorder: 0,
    Manufacturing: 0,
    Category: "Televisions",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/3-small.png"
  },
  {
    ID: 4,
    Name: "Ibrahim Services",
    Price: 1600,
    Current_Inventory: 77,
    Backorder: 0,
    Manufacturing: 55,
    Category: "Televisions",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/4-small.png"
  },
  {
    ID: 5,
    Name: "Compror Pty Ltd",
    Price: 1450,
    Current_Inventory: 445,
    Backorder: 0,
    Manufacturing: 0,
    Category: "Televisions",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/5-small.png"
  },
  {
    ID: 6,
    Name: "Divesh Enterprise",
    Price: 1350,
    Current_Inventory: 345,
    Backorder: 0,
    Manufacturing: 5,
    Category: "Televisions",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/6-small.png"
  },
  {
    ID: 7,
    Name: "Raroan",
    Price: 1200,
    Current_Inventory: 210,
    Backorder: 0,
    Manufacturing: 20,
    Category: "Televisions",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/7-small.png"
  },
  {
    ID: 8,
    Name: "Ericsson",
    Price: 3500,
    Current_Inventory: 0,
    Backorder: 0,
    Manufacturing: 0,
    Category: "Televisions",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/8-small.png"
  },
  {
    ID: 9,
    Name: "SuperLCD 70",
    Price: 4000,
    Current_Inventory: 95,
    Backorder: 0,
    Manufacturing: 5,
    Category: "Televisions",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/9-small.png"
  },
  {
    ID: 10,
    Name: "DesktopLED 21",
    Price: 175,
    Current_Inventory: 0,
    Backorder: 425,
    Manufacturing: 75,
    Category: "Monitors",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/10-small.png"
  },
  {
    ID: 11,
    Name: "DesktopLED 19",
    Price: 165,
    Current_Inventory: 425,
    Backorder: 0,
    Manufacturing: 110,
    Category: "Monitors",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/11-small.png"
  },
  {
    ID: 12,
    Name: "DesktopLCD 21",
    Price: 170,
    Current_Inventory: 210,
    Backorder: 0,
    Manufacturing: 60,
    Category: "Monitors",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/12-small.png"
  },
  {
    ID: 13,
    Name: "DesktopLCD 19",
    Price: 160,
    Current_Inventory: 150,
    Backorder: 0,
    Manufacturing: 210,
    Category: "Monitors",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/13-small.png"
  },
  {
    ID: 14,
    Name: "Projector Plus",
    Price: 550,
    Current_Inventory: 0,
    Backorder: 55,
    Manufacturing: 10,
    Category: "Projectors",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/14-small.png"
  },
  {
    ID: 15,
    Name: "Projector PlusHD",
    Price: 750,
    Current_Inventory: 110,
    Backorder: 0,
    Manufacturing: 90,
    Category: "Projectors",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/15-small.png"
  },
  {
    ID: 16,
    Name: "Projector PlusHT",
    Price: 1050,
    Current_Inventory: 0,
    Backorder: 75,
    Manufacturing: 57,
    Category: "Projectors",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/16-small.png"
  },
  {
    ID: 17,
    Name: "ExcelRemote IR",
    Price: 150,
    Current_Inventory: 650,
    Backorder: 0,
    Manufacturing: 190,
    Category: "Automation",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/17-small.png"
  },
  {
    ID: 18,
    Name: "ExcelRemote BT",
    Price: 180,
    Current_Inventory: 310,
    Backorder: 0,
    Manufacturing: 0,
    Category: "Automation",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/18-small.png"
  },
  {
    ID: 19,
    Name: "ExcelRemote IP",
    Price: 200,
    Current_Inventory: 0,
    Backorder: 325,
    Manufacturing: 225,
    Category: "Automation",
    ImageSrc:
      "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/products/19-small.png"
  }
];

@Injectable()
export class Service {
  getSimpleProducts(): string[] {
    return simpleProducts;
  }
  getProducts(): Product[] {
    return products;
  }
}
