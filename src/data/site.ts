export const BUSINESS = {
  name: 'آژانس گردشگری آکای تراول',
  license: 'سازمان میراث فرهنگی، گردشگری و صنایع دستی آذربایجان غربی',
  phoneDisplay: '۰۴۴۳۳۴۶۵۵۲۴',
  phoneIntl: '+984433465524',
  mobileDisplay: '۰۹۱۴۳۴۰۳۴۳۱',
  mobileIntl: '+989143403431',
  instagram: 'akay.iran.travel',
  instagramUrl: 'https://instagram.com/akay.iran.travel',
  address: 'ارومیه، خیابان فردوسی ۲، طبقه اول هتل تورال',
  domain: 'hotelurmia.ir',
  siteUrl: 'https://hotelurmia.ir',
  telegram: 'akaytravel',
  bale: 'akaytravel',
  eitaa: 'akaytravel',
  rubika: 'akaytravel',
  baleUrl: 'https://bale.ai/akaytravel',
  eitaaUrl: 'https://eitaa.com/akaytravel',
  rubikaUrl: 'https://rubika.ir/akaytravel',
  telegramUrl: 'https://telegram.me/akaytravel',
};

export const SUPPLEMENT_SERVICES = [
  { key: 'city', label: 'رزرو تور شهری ارومیه', text: 'تور شهری ارومیه' },
  { key: 'van', label: 'رزرو ون VIP', text: 'ون VIP' },
  { key: 'van-tour', label: 'رزرو تور ارومیه به وان', text: 'تور ارومیه به وان' },
  { key: 'taxi', label: 'رزرو تاکسی از فرودگاه به هتل', text: 'تاکسی فرودگاه به هتل' },
];

export interface Hotel {
  slug: string;
  name: string;
  nameFa: string;
  star?: number;
  tagline: string;
  excerpt: string;
  image: string;
  faq: { q: string; a: string }[];
  externalLinks?: { url: string; anchor: string }[];
  schemaType?: string;
}

export const HOTELS: Hotel[] = [
  {
    slug: 'jahangardi-urmia',
    name: 'Jahangardi Urmia',
    nameFa: 'هتل جهانگردی ارومیه',
    star: 4,
    tagline: 'رزرو هتل جهانگردی ارومیه با تخفیف',
    excerpt:
      'هتل جهانگردی ارومیه یکی از هتل‌های شناخته‌شده برای اقامت گردشگران است. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/jahangardi-urmia.webp',
    faq: [
      { q: 'هتل جهانگردی ارومیه چند ستاره است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'قیمت اتاق هتل جهانگردی چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'چگونه هتل جهانگردی ارومیه را رزرو کنم؟', a: 'از طریق دکمه‌های ارتباطی پایین صفحه می‌توانید مستقیم با آکای تراول در تماس باشید.' },
    ],
  },
  {
    slug: 'kara-urmia',
    name: 'Kara Urmia',
    nameFa: 'هتل کارا ارومیه',
    star: 3,
    tagline: 'رزرو هتل کارا ارومیه با تخفیف',
    excerpt:
      'هتل کارا ارومیه گزینه‌ای برای اقامت با موقعیت مناسب است. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/kara-urmia.webp',
    faq: [
      { q: 'هتل کارا ارومیه چند ستاره است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'قیمت اتاق هتل کارا چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'آیا هتل کارا موقعیت مرکزی دارد؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
    ],
  },
  {
    slug: 'toral-urmia',
    name: 'Toral Urmia',
    nameFa: 'هتل تورال ارومیه',
    tagline: 'رزرو هتل تورال ارومیه با تخفیف',
    excerpt:
      'مجتمع گردشگری تورال از مجموعه‌های شناخته‌شده ارومیه است. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/toral-urmia.webp',
    faq: [
      { q: 'هتل تورال ارومیه چه امکاناتی دارد؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'قیمت اقامت در هتل تورال چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'آیا سالن جلسه در هتل تورال موجود است؟', a: 'بله، برای رزرو سالن به صفحه سالن هتل آنا مراجعه کنید و با آکای تراول تماس بگیرید.' },
    ],
    externalLinks: [
      { url: 'https://hoteltural.ir/رزرو-سالن-جلسه-هتل-تورال/', anchor: 'رزرو سالن جلسه هتل تورال' },
    ],
  },
  {
    slug: 'ana-urmia',
    name: 'Ana Urmia',
    nameFa: 'هتل آنا ارومیه',
    star: 5,
    tagline: 'رزرو هتل آنا ارومیه ۵ ستاره',
    excerpt:
      'هتل آنا ارومیه به‌عنوان هتل ۵ ستاره شناخته می‌شود. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/ana-urmia.webp',
    faq: [
      { q: 'هتل آنا ارومیه چند ستاره است؟', a: 'هتل آنا به‌عنوان هتل ۵ ستاره شناخته می‌شود. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'قیمت اتاق هتل آنا چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'آیا سالن برگزارای رویداد در هتل آنا هست؟', a: 'بله، برای رزرو سالن به صفحه سالن هتل آنا مراجعه کنید.' },
    ],
  },
  {
    slug: 'diako-urmia',
    name: 'Diako Urmia',
    nameFa: 'هتل دیاکو ارومیه',
    star: 4,
    tagline: 'رزرو هتل دیاکو ارومیه با تخفیف',
    excerpt:
      'هتل دیاکو ارومیه گزینه‌ای برای اقامت در ارومیه است. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/diako-urmia.webp',
    faq: [
      { q: 'هتل دیاکو ارومیه چند ستاره است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'قیمت اتاق هتل دیاکو چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'چگونه هتل دیاکو را رزرو کنم؟', a: 'از طریق دکمه‌های ارتباطی پایین صفحه می‌توانید مستقیم با آکای تراول در تماس باشید.' },
    ],
  },
  {
    slug: 'mandegar-urmia',
    name: 'Mandegar Urmia',
    nameFa: 'هتل ماندگار ارومیه',
    tagline: 'رزرو هتل ماندگار ارومیه',
    excerpt:
      'هتل ماندگار ارومیه گزینه‌ای برای اقامت اقتصادی است. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/mandegar-urmia.webp',
    faq: [
      { q: 'هتل ماندگار ارومیه ارزان است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'قیمت اتاق هتل ماندگار چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'چگونه هتل ماندگار را رزرو کنم؟', a: 'از طریق دکمه‌های ارتباطی پایین صفحه می‌توانید مستقیم با آکای تراول در تماس باشید.' },
    ],
  },
  {
    slug: 'maah-kimia-urmia',
    name: 'Maah Kimia Urmia',
    nameFa: 'هتل ماه و کیمیا ارومیه',
    tagline: 'رزرو هتل ماه و کیمیا ارومیه',
    excerpt:
      'هتل ماه و کیمیا ارومیه از گزینه‌های اقامتی است. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/maah-kimia-urmia.webp',
    faq: [
      { q: 'قیمت اتاق هتل ماه و کیمیا چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'چگونه هتل ماه و کیمیا را رزرو کنم؟', a: 'از طریق دکمه‌های ارتباطی پایین صفحه می‌توانید مستقیم با آکای تراول در تماس باشید.' },
    ],
    externalLinks: [
      { url: 'https://tourviza.ir/رزرواسیون-هتل-در-ارومیه/', anchor: 'رزرواسیون هتل در ارومیه' },
    ],
  },
  {
    slug: 'morvarid-urmia',
    name: 'Morvarid Urmia',
    nameFa: 'هتل مروارید ارومیه',
    tagline: 'رزرو هتل مروارید ارومیه',
    excerpt:
      'هتل مروارید ارومیه گزینه‌ای برای اقامت در ارومیه است. برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.',
    image: '/images/morvarid-urmia.webp',
    faq: [
      { q: 'قیمت اتاق هتل مروارید چقدر است؟', a: 'برای اطلاع از جزئیات و قیمت دقیق، با دفتر آکای تراول تماس بگیرید.' },
      { q: 'چگونه هتل مروارید را رزرو کنم؟', a: 'از طریق دکمه‌های ارتباطی پایین صفحه می‌توانید مستقیم با آکای تراول در تماس باشید.' },
    ],
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  h1: string;
  image: string;
  excerpt: string;
  category: string;
  externalLinks?: { url: string; anchor: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'azarbaijan-gharbi-turkic-culture',
    title: 'فرهنگ ترک‌زبانان آذربایجان غربی | راهنمای سفر ارومیه',
    description: 'آشنایی با فرهنگ، زبان و سنت‌های مردمان ترک‌زبان آذربایجان غربی در سفر به ارومیه.',
    h1: 'فرهنگ مردمان ترک‌زبان آذربایجان غربی',
    image: '/blog/azarbaijan-gharbi-turkic-culture.webp',
    excerpt: 'مروری بر فرهنگ و سنت‌های مردمان ترک‌زبان آذربایجان غربی در سفر به ارومیه.',
    category: 'فرهنگ و جامعه',
    externalLinks: [
      { url: 'https://hotelerbil.ir/contact/', anchor: 'راه‌های ارتباط با هتل اربیل' },
    ],
  },
  {
    slug: 'iran-hotel-star-standards',
    title: 'استاندارد ستاره‌بندی هتل‌های ایران | راهنمای اقامت',
    description: 'آشنایی با معیارهای ستاره‌بندی هتل‌های ایران و تفاوت هتل‌های ۳ تا ۵ ستاره.',
    h1: 'استاندارد ستاره‌بندی هتل‌های ایران',
    image: '/blog/iran-hotel-star-standards.webp',
    excerpt: 'معیارهای ستاره‌بندی هتل‌های ایران و تفاوت هتل‌های ۳ تا ۵ ستاره.',
    category: 'راهنمای اقامت',
  },
  {
    slug: 'dalamper-one-day-tour-urmia',
    title: 'تور یک روزه دالامپر از ارومیه | راهنمای سفر',
    description: 'راهنمای کامل تور یک روزه دالامپر از ارومیه؛ مسیر، زمان و نکات سفر.',
    h1: 'تور یک روزه دالامپر از ارومیه',
    image: '/blog/dalamper-one-day-tour-urmia.webp',
    excerpt: 'راهنمای تور یک روزه دالامپر از ارومیه.',
    category: 'تور طبیعت',
    externalLinks: [
      { url: 'https://tourviza.ir/تورهای-گردشگری-یک-روزه-ارومیه/', anchor: 'تورهای گردشگری یک روزه ارومیه' },
    ],
  },
  {
    slug: 'urmia-one-day-tour-price',
    title: 'قیمت تور یک روزه ارومیه | راهنمای هزینه سفر',
    description: 'راهنمای هزینه تور یک روزه ارومیه و عوامل مؤثر بر قیمت.',
    h1: 'قیمت تور یک روزه ارومیه',
    image: '/blog/urmia-one-day-tour-price.webp',
    excerpt: 'هزینه تور یک روزه ارومیه و عوامل مؤثر بر قیمت.',
    category: 'هزینه سفر',
  },
  {
    slug: 'urmia-nature-tours-guide',
    title: 'راهنمای تور طبیعت‌گردی ارومیه | بهترین مسیرها',
    description: 'راهنمای تور طبیعت‌گردی ارومیه و بهترین مسیرهای طبیعی پیرامون شهر.',
    h1: 'راهنمای تور طبیعت‌گردی ارومیه',
    image: '/blog/urmia-nature-tours-guide.webp',
    excerpt: 'بهترین مسیرهای تور طبیعت‌گردی ارومیه.',
    category: 'تور طبیعت',
  },
  {
    slug: 'cheap-urmia-tours',
    title: 'تور ارزان ارومیه | راهنمای سفر اقتصادی',
    description: 'راهنمای تورهای ارزان ارومیه برای سفر اقتصادی.',
    h1: 'تور ارزان ارومیه',
    image: '/blog/cheap-urmia-tours.webp',
    excerpt: 'راهنمای تورهای ارزان ارومیه.',
    category: 'سفر اقتصادی',
  },
  {
    slug: 'urmia-city-tour-guide',
    title: 'گشت شهری ارومیه با راهنما | راهنمای سفر',
    description: 'راهنمای گشت شهری ارومیه با راهنمای محلی و جاذبه‌های شهر.',
    h1: 'گشت شهری ارومیه با راهنما',
    image: '/blog/urmia-city-tour-guide.webp',
    excerpt: 'گشت شهری ارومیه با راهنما و جاذبه‌های شهر.',
    category: 'گشت شهری',
  },
  {
    slug: 'urmia-winter-tours',
    title: 'تور زمستانه ارومیه | راهنمای سفر زمستانی',
    description: 'راهنمای تورهای زمستانه ارومیه و نکات سفر در فصل سرد.',
    h1: 'تور زمستانه ارومیه',
    image: '/blog/urmia-winter-tours.webp',
    excerpt: 'راهنمای تورهای زمستانه ارومیه.',
    category: 'تور زمستانه',
    externalLinks: [
      { url: 'https://hoteltural.ir/آب-درمانی-در-هتل-تورال-ارومیه/', anchor: 'آب درمانی در هتل تورال ارومیه' },
    ],
  },
];

export const SERVICES = [
  { slug: 'restaurants/best-urmia-restaurants', title: 'بهترین رستوران‌های ارومیه', icon: 'utensils', excerpt: 'راهنمای رستوران‌های ارومیه برای مسافران.' },
  { slug: 'tours/urmia-van-combined-tour', title: 'تور ترکیبی ارومیه به وان', icon: 'route', excerpt: 'تور ترکیبی ارومیه به وان برای سفر یک‌روزه.' },
  { slug: 'tours/urmia-cultural-historical-tour', title: 'تور فرهنگی تاریخی ارومیه', icon: 'landmark', excerpt: 'تور فرهنگی تاریخی ارومیه.' },
  { slug: 'transport/urmia-vehicle-rental', title: 'اجاره خودرو در ارومیه', icon: 'car', excerpt: 'اجاره خودرو و ون در ارومیه.' },
];
