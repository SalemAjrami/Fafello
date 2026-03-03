import falafelImg from "./img/falafel.jpeg";
import falafelComboImg from "./img/falafelcombo.jpeg";
import tavukComboImg from "./img/tavukcombo.jpeg";
import falafelPorsyonImg from "./img/falafelporsyon.jpg";
import specialMenuImg from "./img/specialmenu.jpeg";
import hellimFalafelImg from "./img/hellimfalafelcombo.jpeg";
import hfalafel from "./img/hfalafel.jpeg";
import hellimfalfaelsalata from "./img/hellimfalfaelsalata.jpeg";
import falafelsalata from "./img/falafelsalata.jpeg";
import tabulsalata from "./img/tabula.jpeg";
import fatosh from "./img/fatosh.jpeg";

export const menuData = [
    { id: 1, name: "Falafel Wrap", price: "₺165", category: "falafel", img: falafelImg },
    { id: 2, name: "Falafel Combo", price: "₺300", category: "falafel", img: falafelComboImg },
    { id: 3, name: "Hellim Falafel Combo", price: "₺320", category: "falafel", img: hellimFalafelImg },
    { id: 4, name: "Tavuk Combo (120gr)", price: "₺320", category: "shawarma", img: tavukComboImg },
    { id: 5, name: "Special Menu", price: "₺265", category: "falafel", img: specialMenuImg },
    { id: 6, name: "Tavuk Combo (180gr)", price: "₺360", category: "shawarma", img: tavukComboImg },
    { id: 7, name: "Hellim Tavuk Combo", price: "₺340", category: "shawarma", img: tavukComboImg },
    { id: 8, name: "Tavuk Wrap (120gr)", price: "₺190", category: "shawarma", img: tavukComboImg },
    { id: 9, name: "Tavuk Wrap (180gr)", price: "₺230", category: "shawarma", img: tavukComboImg },
    { id: 10, name: "Falafel Porsyon", price: "₺195", category: "falafel", img: falafelPorsyonImg },
    { id: 11, name: "Hellim Falafel", price: "₺190", category: "falafel", img: hfalafel },
    { id: 12, name: "Hellim Falafel Salata", price: "₺250", category: "salata", img: hellimfalfaelsalata },
    { id: 13, name: "Falafel Salata", price: "₺250", category: "salata", img: falafelsalata },
    { id: 14, name: "Tabula Salata", price: "₺250", category: "salata", img: tabulsalata },
    { id: 15, name: "Fatosh Salata", price: "₺250", category: "salata", img: fatosh }
];



export const translations = {
    en: {
        title: "Shawarma • Falafel • Hummus", menu: "Menu", order: "Order Now", falafel: "Falafel",
        shawarma: "Shawarma", close: "Close", contact: "Contact Us", home: "Home",

        // Hero Section
        est: "Est. 2020", tasteThe: "Taste the", tradition: "Tradition.",
        heroSubtitle: "Experience the authentic flavors of the Middle East. Handcrafted falafel, savory shawarma, and fresh ingredients prepared daily.",
        reviews: "Reviews",

        // Ramadan Section
        celebrateRamadan: "Celebrate The Holy Month", ramadan: "Ramadan", mubarak: "Mubarak",
        ramadanText: "Join us for beautiful Iftar evenings. Pre-order our special Ramadan platters to enjoy authentic flavors at home with your family.",
        discoverIftar: "Discover Iftar Menu", reserveTable: "Reserve a Table",
        specialOffer: "Special Offer", iftarBoxDeals: "Iftar Box Deals", availableSunset: "Available sunset til late",

        // Heritage Section
        ourStory: "Our Story", heritageTitle: "Rooted in Tradition",
        heritageText: "Prepared with love using recipes passed down through generations. Our commitment to authentic Palestinian flavors means every bite tells a story of heritage and culinary excellence.",
        fresh100: "100% Fresh", traditionalIngredients: "Traditional Ingredients", authenticRecipes: "Authentic Recipes",
        learnMore: "Learn More About Us",

        // Reviews Section
        testimonials: "Testimonials", whatGuestsSay: "What Our Guests Say", verifiedGuest: "Verified Guest",

        // Menu Overview Section
        ourMenu: "Our Menu", highlightsTitle: "Authentic Flavors", viewFullMenu: "View Full Menu",
        orderNow: "Order Now",

        // Footer Section
        footerDesc: "Experience the authentic flavors of the Middle East. Handcrafted recipes passed down through generations.",
        quickLinks: "Quick Links", footerContact: "Contact Us",
        openingHours: "Opening Hours", monThu: "Mon - Thu", friSat: "Fri - Sat", sunday: "Sunday",
        openNow: "Open Now for Dine-in & Delivery",
        privacyPolicy: "Privacy Policy", termsOfService: "Terms of Service", allRightsReserved: "Fafello Restaurant. All rights reserved.",

        // Menu Page
        discoverTaste: "Discover The Taste", menuSubtitle: "Explore our selection of authentic Middle Eastern dishes, prepared fresh daily with traditional recipes.",
        all: "All Menu", salata: "Salads"
    },
    tr: {
        title: "Döner • Falafel • Humus", menu: "Menü", order: "Sipariş Ver", falafel: "Falafel",
        shawarma: "Döner", close: "Kapat", contact: "Bize Ulaşın", home: "Ana Sayfa",

        // Hero Section
        est: "Kuruluş 2020", tasteThe: "Geleneği", tradition: "Tadın.",
        heroSubtitle: "Orta Doğu'nun otantik lezzetlerini deneyimleyin. El yapımı falafel, lezzetli döner ve her gün taze hazırlanan malzemeler.",
        reviews: "Değerlendirme",

        // Ramadan Section
        celebrateRamadan: "Kutsal Ayı Kutlayın", ramadan: "Hayırlı", mubarak: "Ramazanlar",
        ramadanText: "Güzel iftar akşamları için bize katılın. Ailenizle evinizde otantik lezzetlerin tadını çıkarmak için özel Ramazan tabaklarımızdan ön sipariş verin.",
        discoverIftar: "İftar Menüsünü Keşfet", reserveTable: "Masa Ayırt",
        specialOffer: "Özel Fırsat", iftarBoxDeals: "İftar Kutusu Fırsatları", availableSunset: "Gün batımından gece geç saatlere kadar",

        // Heritage Section
        ourStory: "Hikayemiz", heritageTitle: "Geleneklere Bağlı",
        heritageText: "Nesilden nesile aktarılan tariflerle sevgiyle hazırlanır. Otantik Filistin lezzetlerine olan bağlılığımız sayesinde her lokma bir miras ve aşçılık hikayesi anlatır.",
        fresh100: "100% Taze", traditionalIngredients: "Geleneksel Malzemeler", authenticRecipes: "Otantik Tarifler",
        learnMore: "Hakkımızda Daha Fazla Bilgi",

        // Reviews Section
        testimonials: "Müşteri Yorumları", whatGuestsSay: "Misafirlerimiz Ne Diyor", verifiedGuest: "Onaylı Misafir",

        // Menu Overview Section
        ourMenu: "Menümüz", highlightsTitle: "Otantik Lezzetler", viewFullMenu: "Tüm Menüyü Gör",
        orderNow: "Şimdi Sipariş Ver",

        // Footer Section
        footerDesc: "Orta Doğu'nun otantik lezzetlerini deneyimleyin. Nesilden nesile aktarılan el yapımı tarifler.",
        quickLinks: "Hızlı Bağlantılar", footerContact: "Bize Ulaşın",
        openingHours: "Çalışma Saatleri", monThu: "Pzt - Per", friSat: "Cum - Cmt", sunday: "Pazar",
        openNow: "Restoran ve Paket Servis İçin Açık",
        privacyPolicy: "Gizlilik Politikası", termsOfService: "Hizmet Şartları", allRightsReserved: "Fafello Restoran. Tüm hakları saklıdır.",

        // Menu Page
        discoverTaste: "Lezzeti Keşfedin", menuSubtitle: "Geleneksel tariflerle her gün taze hazırlanan otantik Orta Doğu yemeklerimizi keşfedin.",
        all: "Tüm Menü", salata: "Salatalar"
    },
    ar: {
        title: "شاورما • فلافل • حمص", menu: "القائمة", order: "اطلب الآن", falafel: "فلافل",
        shawarma: "شاورما", close: "إغلاق", contact: "تواصل معنا", home: "الرئيسية",

        // Hero Section
        est: "تأسس عام ٢٠٢٠", tasteThe: "تــــــذوق", tradition: "الأصـــالة.",
        heroSubtitle: "اكتشف النكهات الأصيلة للشرق الأوسط. فلافل تُصنع بحب، شاورما شهية، ومكونات طازجة تُحضر يومياً.",
        reviews: "تقييمات",

        // Ramadan Section
        celebrateRamadan: "احتفل بالشهر الفضيل", ramadan: "رمضان", mubarak: "مبارك",
        ramadanText: "انضم إلينا في أمسيات إفطار رائعة. اطلب أطباق رمضان الخاصة مسبقاً للاستمتاع بالنكهات الأصيلة في المنزل مع عائلتك.",
        discoverIftar: "اكتشف قائمة الإفطار", reserveTable: "احجز طاولة",
        specialOffer: "عرض خاص", iftarBoxDeals: "عروض صناديق الإفطار", availableSunset: "متوفر من الغروب حتى وقت متأخر",

        // Heritage Section
        ourStory: "قصتنا", heritageTitle: "متجذرة في التراث",
        heritageText: "محضرة بحب باستخدام وصفات متوارثة عبر الأجيال. التزامنا بالنكهات الفلسطينية الأصيلة يعني أن كل قضمة تحكي قصة عن التراث والتميز في الطهي.",
        fresh100: "طازج ١٠٠٪", traditionalIngredients: "مكونات تقليدية", authenticRecipes: "وصفات أصيلة",
        learnMore: "اعرف المزيد عنا",

        // Reviews Section
        testimonials: "آراء العملاء", whatGuestsSay: "ماذا يقول ضيوفنا", verifiedGuest: "ضيف معتمد",

        // Menu Overview Section
        ourMenu: "قائمتنا", highlightsTitle: "نكهات أصيلة", viewFullMenu: "عرض القائمة كاملة",
        orderNow: "اطلب الآن",

        // Footer Section
        footerDesc: "اكتشف النكهات الأصيلة للشرق الأوسط. وصفات يدوية متوارثة عبر الأجيال.",
        quickLinks: "روابط سريعة", footerContact: "تواصل معنا",
        openingHours: "ساعات العمل", monThu: "الاثنين - الخميس", friSat: "الجمعة - السبت", sunday: "الأحد",
        openNow: "مفتوح الآن للطلبات المحلية والتوصيل",
        privacyPolicy: "سياسة الخصوصية", termsOfService: "شروط الخدمة", allRightsReserved: "مطعم فافيلو. جميع الحقوق محفوظة.",

        // Menu Page
        discoverTaste: "اكتشف المذاق", menuSubtitle: "استكشف مجموعتنا من الأطباق الشرق أوسطية الأصيلة، المحضرة طازجاً كل يوم بوصفات تقليدية.",
        all: "كل القائمة", salata: "سلطة"
    },
};

export const reviewsData = [
    {
        id: 1,
        name: "Sarah M.",
        rating: 5,
        text: "Absolutely the best falafel I've ever had! The exterior was perfectly crispy while the inside remained warm, fluffy, and incredibly flavorful. Highly recommend trying the combo.",
        initials: "SM"
    },
    {
        id: 2,
        name: "Ahmed K.",
        rating: 5,
        text: "Incredible shawarma. You can really taste the authentic spices and the freshness of the ingredients. The staff is also wonderfully friendly. Will definitely be ordering again!",
        initials: "AK"
    },
    {
        id: 3,
        name: "Elena R.",
        rating: 5,
        text: "Fafello has become our go-to spot for Friday night dinners. The Hellim Falafel combo is a masterpiece. The packaging is always neat, and the food arrives piping hot.",
        initials: "ER"
    },
    {
        id: 4,
        name: "Omar T.",
        rating: 5,
        text: "Finally, real Palestinian flavors in the city! Reminds me of the meals my grandmother used to make. Generous portions and incredible quality for the price.",
        initials: "OT"
    }
];
