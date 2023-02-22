export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Кроссовки Reebok GX0493 белый 43.5',
    price: 9500 ,
    description: 'модель: кроссовки; материал верха: натуральная кожа; сезон: демисезон, ,лето',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/hd5/50457643548702/reebok-gx0493-belyj-104706521-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/reebok-gx0493-belyi-43-5-104706539/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 2,
    name: 'Кроссовки THF 026957355-5560777 бежевый 43',
    price: 9500  ,
    description: 'модель: кроссовки; материал верха: натуральная кожа; сезон: демисезон, ,лето',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/h72/52433812226078/thf-026957355-5560777-fioletovyj-105779093-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/thf-026957355-5560777-bezhevyi-43-105779094/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 3,
    name: 'Nike DJ2837-484 бирюзовый 43',
    price: 199000,
    description: 'модель: бутсы; материал верха: синтетические материалы; сезон: круглогодичный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1b/hb1/62036055031838/nike-dj2837-484-biruzovyj-106224411-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/nike-dj2837-484-birjuzovyi-43-106224413/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 4,
    name: 'Боксерские перчатки Sanabul Star Wars bg-sw-bl-12 12 oz белый',
    price: 14900,
    description: 'назначение: любительские, ,тренировочные; тип застежки: липучка; материал: искусственная кожа; наполнитель: пенополиуретан; вес: 12 oz',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/hef/67435282792478/sanabul-star-wars-bg-sw-bl-12-12-oz-belyi-108273800-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/sanabul-star-wars-bg-sw-bl-12-12-oz-belyi-108273800/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 5,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480550 ,
    description: 'размер оперативной памяти: 8 ГБ, тип жесткого диска: SSD, общий объем накопителей: 256 ГБ', rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 6,
    name: 'Игровая приставка Sony PlayStation 5 + God of War Ragnarök',
    price: 55990,
    description: 'тип: стационарная; объем SSD: 825 Гб; поддержка UHD (4K): Да ;тип носителя для игр: BD (Blu-ray Disc)',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hf2/66015013568542/sony-playstation-5-god-of-war-ragnarok-107674130-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/sony-playstation-5-god-of-war-ragnar-k-107674130/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 7,
    name: 'Спортивная форма JOMA 100004.200 белый 2XL-3XL',
    price: 9700,
    description: 'вид спорта: футбол, назначение: для мужчин, размер: 2XL, состав: полиэстер',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/h9b/69315003547678/joma-100004-200-belyi-2xl-3xl-109025400-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/joma-100004-200-belyi-2xl-3xl-109025400/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 8,
    name: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм золотистый',
    price: 169000,
    description: 'поддержка платформ: iOS, материал корпуса: алюминий, объем встроенной памяти: 32 Гб, интерфейсы: Bluetooth, ,Wi-Fi, ,NFC',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 9,
    name: 'Тостер',
    price: 11053,
    description: 'Тостер CENTEK СТ-1432 черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hf3/32725893414942/centek-st-1432-cernyj-100295343-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAl9efBhAkEiwA4Toritd-favdZZRphCwdV68sxOLFyrhZLfAhkrj0sdCJ5p4cq9OCZmS7jRoCBIkQAvD_BwE#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
  {
    id: 10,
    name: 'Мяч G-VITE Champions League Finale GK3468 серый',
    price: 15500 ,
    description: 'назначение: для футбола; тип: для улицы; материал: полиуретан ;форма: круглая', 
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/hf7/50691198943262/adidas-21-champions-league-finale-gk3468-seryj-101602249-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/g-vite-champions-league-finale-gk3468-seryi-101602249/?c=750000000#!/item',
    link: "https://t.me/+bX-kLs47TXVkZThi"
  },
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/