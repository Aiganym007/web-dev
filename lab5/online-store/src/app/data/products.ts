import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    categoryId: 1,
    likes: 0,
    name: 'Samsung Galaxy S24 Ultra 5G 12/1024 (Green)',
    description: 'Flagship smartphone with high performance and great cameras. Perfect for content creation and multitasking.',
    price: 799990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/ha7/85973633335326.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h6a/hda/85973633400862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb7/h7a/85973633597470.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h29/hbf/85973633794078.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-1024-gb-zelenyi-118801259/'
  },
  {
    id: 2,
    categoryId: 1,
    likes: 0,
    name: 'Xiaomi Redmi Note 13 Pro 4G 8/256 (Purple)',
    description: 'Affordable phone with bright screen and good camera. Great for everyday use and study.',
    price: 149990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hea/85226914938910.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h7a/h73/85227005935646.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h43/h53/85226915004446.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h52/hb8/85226914906142.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-4g-8-gb-256-gb-fioletovyi-116797143/'
  },
  {
    id: 10,
    categoryId: 1,
    likes: 0,
    name: 'Samsung Galaxy S24 Ultra 5G 12/512 (Green)',
    description: 'Premium phone with top cameras and smooth performance. Great for multitasking and photos.',
    price: 699990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h84/h38/85973664530462.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h71/heb/85973664727070.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hd7/h82/85973664858142.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he0/h0e/85973664989214.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-zelenyi-118801339/'
  },

   {
    id: 11,
    categoryId: 1,
    likes: 0,
    name: 'Apple iPhone 17 256Gb (black)',
    description: 'A new level of mobile photography and flawless performance in a stylish black body.',
    price: 593439,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-medium', 
      'https://resources.cdn-kaspi.kz/img/m/p/pa8/pa2/64165040.png?format=gallery-medium', 
      'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=750000000'
   },
  {
    id: 12,
    categoryId: 1,
    likes: 0,
    name: 'Apple iPhone 17 Pro 256Gb (orange)',
    description: 'It is the epitome of innovation and style, combining unrivaled performance, an amazing camera, and a vibrant OLED display.',
    price: 832654,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
    images: ['https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium', 
      'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium', 
      'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
  },
  {
    id: 7,
    categoryId: 2,
    likes: 0,
    name: 'ASUS Vivobook S 16 Flip',
    description: 'Large-screen laptop-transformer for work and study. Great display and flexible form factor.',
    price: 599990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/he9/82477837484062.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h7d/82477837713438.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h49/h62/82477837942814.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6c/h14/82477838237726.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/asus-vivobook-s-16-flip-16-16-gb-ssd-512-gb-win-11-home-tp3604va-my043w-90nb1051-m003x0-112302524/'
  },
  {
    id: 8,
    categoryId: 2,
    likes: 0,
    name: 'PRYME N5095 15.6" 16/512 Win11 Pro',
    description: 'Budget laptop for documents, browsing, and online classes. A good option for students.',
    price: 219990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/pfd/45122459.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/45122461.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd2/pfa/45122462.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb6/pfa/45122463.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/pryme-n5095-15-6-16-gb-ssd-512-gb-win-11-pro-fhk14bk25-133963600/'
  },
  {
    id: 9,
    categoryId: 2,
    likes: 0,
    name: 'Huawei Matebook D14 14" 16/512 Win11',
    description: 'Compact laptop for productivity and travel. Lightweight body and good everyday performance.',
    price: 399990,
    rating: 4.6,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/p10/33000792.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pcc/p10/33000793.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3d/p11/33000797.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p04/p11/33000795.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/huawei-matebook-d14-14-16-gb-ssd-512-gb-win-11-mendelg-w5651d-137116014/'
  },
  {
    id: 13,
    categoryId: 2,
    likes: 0,
    name: 'HP Laptop 15-fc0072ci 15.6" / SSD 512  A19WCEA',
    description: 'An ideal choice for work and study that combines high performance and stylish design',
    price: 224945,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfa/12037040.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p47/pfa/12037041.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p63/pfa/12037042.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/hp-laptop-15-fc0072ci-15-6-8-gb-ssd-512-gb-bez-os-a19wcea-131090992/?c=750000000'
  },
  {
    id: 14,
    categoryId: 2,
    likes: 0,
    name: 'Microsoft Surface Laptop 7 X Plus 13.8" / 16 Gb / SSD 512 / Win 11 / ZGM-00037',
    description: 'Compact laptop for productivity and travel. Lightweight body and good everyday performance.',
    price: 689990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/pac/51982934.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p30/pac/51982934.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p69/pac/51982936.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pbd/pac/51982939.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/microsoft-surface-laptop-7-x-plus-13-8-16-gb-ssd-512-gb-win-11-zgm-00037-142210202/?c=750000000'
  },

  {
    id: 3,
    categoryId: 3,
    likes: 0,
    name: 'Apple AirPods Pro (2nd gen) MagSafe',
    description: 'Wireless earbuds with noise cancellation and transparent mode. Comfortable and high-quality sound.',
    price: 129990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/'
  },

  {
    id: 15,
    categoryId: 3,
    likes: 0,
    name: 'HONOR Choice Headphones (white)',
    description: 'This is a wireless on-ear stereo headset with passive noise cancellation and Bluetooth support.',
    price: 23990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/p4a/40503534.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pfe/p4a/40503534.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe1/p4a/40503535.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc5/p4a/40503536.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-honor-choice-headphones-belyi-139165804/?c=750000000'
  },

  {
    id: 16,
    categoryId: 3,
    likes: 0,
    name: 'Apple AirPods Max 2 (black)',
    description: 'The model automatically detects when noise reduction should be turned off.',
    price: 278618,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/p10/3532808.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000'
  },

  {
    id: 17,
    categoryId: 3,
    likes: 0,
    name: 'Apple AirPods Pro (2nd gen) MagSafe',
    description: 'Wireless earbuds with noise cancellation and transparent mode. Comfortable and high-quality sound.',
    price: 129990,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/hf2/84108189827102.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/'
  },

  {
    id: 18,
    categoryId: 3,
    likes: 0,
    name: 'Apple AirPods Pro (white)',
    description: 'Unique headphones with active noise cancellation technology that continuously optimize the sound based on the shape of your ear.',
    price: 111597,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he9/h26/63785535209502.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h13/hc1/63785535733790.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-belyi-4804718/?c=750000000'
  },

  {
    id: 19,
    categoryId: 4,
    likes: 0,
    name: 'Xiaomi TV S Mini 55 2025 L55MA-SPLRU',
    description: 'Your perfect companion for watching movies and playing games!',
    price: 289990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/pa2/34107209.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p6c/pa2/34107209.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pb3/pa8/34107224.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc8/pab/34107231.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-tv-s-mini-55-2025-l55ma-splru-140-sm-chernyi-135083706/?c=750000000'
  },

  {
    id: 20,
    categoryId: 4,
    likes: 0,
    name: 'Haier 32 Smart TV M1',
    description: 'HDR 10 technology: Experience your favorite content in a whole new way.',
    price: 259990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p86/p4d/32889677.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p86/p4d/32889677.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pbf/p4d/32889679.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa3/p4d/32889678.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/haier-32-smart-tv-m1-81-sm-chernyi-137097195/?c=750000000'
  },

  {
    id: 21,
    categoryId: 4,
    likes: 0,
    name: 'Samsung QE65Q7FAAUXCE 165',
    description: 'Perfect companion for watching movies and playing games.',
    price: 499990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p00/p51/62898898.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p00/p51/62898898.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe3/p50/62898899.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pcc/p06/62898900.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-qe65q7faauxce-165-sm-chernyi-145236490/?c=750000000'
  },

  {
    id: 22,
    categoryId: 4,
    likes: 0,
    name: 'Samsung UE65DU7100UXCE',
    description: 'Provides high-quality images with realistic details when watching TV channels',
    price: 388590,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8c/hdf/85888051478558.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h8c/hdf/85888051478558.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/h0b/85888051544094.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h31/h39/85888051609630.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-ue65du7100uxce-165-sm-chernyi-118908115/?c=750000000'
  },

  {
    id: 23,
    categoryId: 4,
    likes: 0,
    name: 'Haier 50 Smart TV AX Pro',
    description: 'The TV screen has 3840 horizontal pixels and 2160 vertical pixels.',
    price: 299990,
    rating: 4.7,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h2c/85130002432030.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h98/h2c/85130002432030.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h82/hb5/85130002497566.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6f/h2f/85130002628638.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/haier-50-smart-tv-ax-pro-127-sm-serebristyi-116516893/?c=750000000'
  },

];