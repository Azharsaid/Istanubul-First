export type Lang = "en" | "ar";

export type Activity = {
  time: string;
  en: string;
  ar: string;
  type: "travel" | "dining" | "science" | "social" | "hotel" | "free";
  map?: string;
};

export const event = {
  title: "FIRST",
  tagline: "Steps to Effective Treatment",
  dates: "15–18 September 2026",
  location: "Hilton Istanbul Bomonti Hotel & Conference Center, Istanbul",
  start: "2026-09-15T11:30:00+03:00",
  end: "2026-09-18T18:30:00+03:00",
};

export const days: { date: string; label: { en: string; ar: string }; activities: Activity[] }[] = [
  {
    date: "15 Sep",
    label: { en: "Arrival & Welcome", ar: "الوصول والترحيب" },
    activities: [
      { time: "11:30–12:30", en: "Airport pick-up & transfer to lunch · Gate 13", ar: "الاستقبال من المطار والانتقال للغداء · البوابة 13", type: "travel" },
      { time: "12:30–14:30", en: "A premium steakhouse experience at Nusr-Et Steakhouse · Etiler", ar: "تجربة غداء مميزة في مطعم نصرت · إتيلر", type: "dining" },
      { time: "14:30–15:00", en: "Transfer to hotel", ar: "الانتقال إلى الفندق", type: "travel" },
      { time: "15:00–15:15", en: "Check-in at Hilton Istanbul Bomonti", ar: "تسجيل الدخول في هيلتون إسطنبول بومونتي", type: "hotel", map: "https://maps.app.goo.gl/yZ25P31eqTD7cbQk9" },
      { time: "18:15–18:30", en: "Gathering at the lobby", ar: "التجمع في بهو الفندق", type: "travel" },
      { time: "18:30–19:30", en: "Transfer to dinner", ar: "الانتقال إلى العشاء", type: "travel" },
      { time: "19:30–21:30", en: "A taste of tradition at Tavacı Recep Usta", ar: "مذاق من التقاليد في مطعم Tavacı Recep Usta", type: "dining", map: "https://maps.app.goo.gl/yssf3M8djU2CH48t9" },
      { time: "21:30–22:15", en: "Transfer to hotel", ar: "العودة إلى الفندق", type: "travel" },
    ],
  },
  {
    date: "16 Sep",
    label: { en: "Science & Bosphorus", ar: "العلم والبوسفور" },
    activities: [
      { time: "07:00–09:30", en: "Breakfast · The Globe, M1 Floor", ar: "الإفطار · مطعم The Globe، طابق M1", type: "dining" },
      { time: "09:30–10:00", en: "Meeting registration · Crystal Ballroom, M2", ar: "التسجيل للاجتماع · قاعة Crystal، طابق M2", type: "science" },
      { time: "10:00–12:30", en: "FIRST Scientific Symposium · Crystal Ballroom, M2", ar: "ندوة FIRST العلمية · قاعة Crystal، طابق M2", type: "science" },
      { time: "12:30–13:30", en: "Lunch at the hotel · The Globe, M1", ar: "الغداء في الفندق · مطعم The Globe، طابق M1", type: "dining" },
      { time: "13:30–16:30", en: "Free time", ar: "وقت حر", type: "free" },
      { time: "16:30–16:45", en: "Gathering at the lobby", ar: "التجمع في بهو الفندق", type: "travel" },
      { time: "16:45–17:15", en: "Transfer to Bosphorus cruise pier", ar: "الانتقال إلى رصيف رحلة البوسفور", type: "travel" },
      { time: "17:15–19:15", en: "Bosphorus cruise experience", ar: "تجربة رحلة بحرية في البوسفور", type: "social" },
      { time: "19:15–21:30", en: "Fine seafood dining by the Bosphorus · Del Mare", ar: "عشاء بحري راقٍ على البوسفور · Del Mare", type: "dining", map: "https://maps.app.goo.gl/irDXQVHz5Lg67Gwa8" },
      { time: "21:30–22:00", en: "Transfer to hotel", ar: "العودة إلى الفندق", type: "travel" },
    ],
  },
  {
    date: "17 Sep",
    label: { en: "From Screen to Legend", ar: "من الشاشة إلى الأسطورة" },
    activities: [
      { time: "07:00–08:45", en: "Breakfast · The Globe, M1 Floor", ar: "الإفطار · مطعم The Globe، طابق M1", type: "dining" },
      { time: "08:45–09:00", en: "Gathering at the lobby", ar: "التجمع في بهو الفندق", type: "travel" },
      { time: "09:00–10:00", en: "Transfer to Bozdağ Film Plateau", ar: "الانتقال إلى استوديوهات بوزداغ", type: "travel", map: "https://maps.app.goo.gl/6UxCsDTW9GDZhnu2A" },
      { time: "10:00–15:30", en: "From Screen to Legend: The Ertuğrul Experience", ar: "من الشاشة إلى الأسطورة: تجربة أرطغرل", type: "social" },
      { time: "13:00–14:00", en: "Lunch during tour · Söğüt Restaurant", ar: "الغداء خلال الجولة · مطعم Söğüt", type: "dining" },
      { time: "15:00–15:30", en: "Gathering at assembly point", ar: "التجمع في نقطة اللقاء", type: "travel" },
      { time: "15:30–16:30", en: "Transfer to hotel", ar: "العودة إلى الفندق", type: "travel" },
      { time: "18:45–19:00", en: "Gathering at the lobby", ar: "التجمع في بهو الفندق", type: "travel" },
      { time: "19:00–19:30", en: "Transfer to dinner", ar: "الانتقال إلى العشاء", type: "travel" },
      { time: "19:30–21:30", en: "Dining with a Bosphorus view · The Market", ar: "عشاء بإطلالة على البوسفور · The Market", type: "dining", map: "https://maps.app.goo.gl/P15JYUvKdCEhUAzS8" },
      { time: "21:30–22:00", en: "Transfer to hotel", ar: "العودة إلى الفندق", type: "travel" },
    ],
  },
  {
    date: "18 Sep",
    label: { en: "A Memorable Farewell", ar: "ختام لا يُنسى" },
    activities: [
      { time: "07:00–10:30", en: "Breakfast · The Globe, M1 Floor", ar: "الإفطار · مطعم The Globe، طابق M1", type: "dining" },
      { time: "11:00–12:00", en: "Checkout & gathering at the lobby", ar: "تسجيل المغادرة والتجمع في بهو الفندق", type: "hotel" },
      { time: "12:00–12:30", en: "Transfer to İstinyePark", ar: "الانتقال إلى مركز İstinyePark", type: "travel" },
      { time: "12:30–16:00", en: "Shopping & free time at İstinyePark", ar: "تسوق ووقت حر في İstinyePark", type: "free", map: "https://maps.app.goo.gl/AoUdxDuZ1mQZtSjp9" },
      { time: "16:00–17:15", en: "Lunch at Balık Ev Mall Restaurant", ar: "الغداء في مطعم Balık Ev Mall", type: "dining", map: "https://maps.app.goo.gl/P9qTFJdx1bZ1sVE2A" },
      { time: "17:15–17:30", en: "Gathering · İstinyePark Garden", ar: "التجمع · حديقة İstinyePark", type: "travel" },
      { time: "17:30–18:30", en: "Transfer to the airport & departure to Amman", ar: "الانتقال إلى المطار والمغادرة إلى عمّان", type: "travel" },
    ],
  },
];

export const scienceAgenda = [
  { time: "10:30–11:00", en: "Registration", ar: "التسجيل", type: "science" as const },
  { time: "11:00–11:10", en: "Dar Aldawa Presentation", ar: "عرض دار الدواء", type: "science" as const },
  { time: "11:10–11:55", en: "GERD Management: Broadening Recognition, Enhancing Care · Dr. Suliman Soudi", ar: "إدارة الارتجاع المعدي المريئي: توسيع التشخيص وتعزيز الرعاية · د. سليمان سعودي", type: "science" as const },
  { time: "11:55–12:05", en: "Questions & Answers", ar: "أسئلة وأجوبة", type: "science" as const },
  { time: "12:05–12:35", en: "Coffee Break", ar: "استراحة قهوة", type: "dining" as const },
  { time: "12:35–13:20", en: "GERD Management: Integrating Evidence, Optimizing Outcomes · Dr. Feras Zuriekat", ar: "إدارة الارتجاع المعدي المريئي: دمج الدليل وتحسين النتائج · د. فراس زريقات", type: "science" as const },
  { time: "13:20–13:30", en: "Questions & Answers", ar: "أسئلة وأجوبة", type: "science" as const },
];

const placeImage = (url: string) => `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=1200&h=900&fit=cover&output=webp`;

export const locations = [
  { en: "Hilton Istanbul Bomonti", ar: "هيلتون إسطنبول بومونتي", kind: "hotel", map: "https://maps.app.goo.gl/yZ25P31eqTD7cbQk9", image: placeImage("https://etuder.org.tr/wp-content/uploads/2019/02/hilton-4.jpg") },
  { en: "Tavacı Recep Usta", ar: "مطعم Tavacı Recep Usta", kind: "dining", map: "https://maps.app.goo.gl/yssf3M8djU2CH48t9", image: placeImage("https://www.torkeya.com/Istanbulasia/Recep_Usta_Nin.jpg") },
  { en: "Del Mare", ar: "مطعم Del Mare", kind: "dining", map: "https://maps.app.goo.gl/irDXQVHz5Lg67Gwa8", image: placeImage("https://irp.cdn-website.com/82048c5a/dms3rep/multi/Delmare-Rest25.jpg") },
  { en: "Bozdağ Film Plateau", ar: "استوديوهات بوزداغ", kind: "social", map: "https://maps.app.goo.gl/6UxCsDTW9GDZhnu2A", image: placeImage("https://static.wixstatic.com/media/748dac_cfd8f0a9e9f443648006817f0f08b2af~mv2.jpg") },
  { en: "The Market", ar: "مطعم The Market", kind: "dining", map: "https://maps.app.goo.gl/P15JYUvKdCEhUAzS8", image: placeImage("https://img.timeturk.com/resim/dresim/2023/DSC01742.jpg") },
  { en: "İstinyePark", ar: "مركز İstinyePark", kind: "social", map: "https://maps.app.goo.gl/AoUdxDuZ1mQZtSjp9", image: placeImage("https://www.istinyeparkgyo.com.tr/cdn/Delivery/Public/Image/Download/hakkimizda-desktop-slider_ehppd1glhu.jpg") },
  { en: "Balık Ev Mall Restaurant", ar: "مطعم Balık Ev Mall", kind: "dining", map: "https://maps.app.goo.gl/P9qTFJdx1bZ1sVE2A", image: placeImage("https://mudavim.net/wp-content/uploads/2024/10/istinyepark-balikev-1024x768.jpeg") },
];

export const checklist = [
  { en: "Passport and travel documents", ar: "جواز السفر ووثائق السفر" },
  { en: "Flight ticket", ar: "تذكرة الطيران" },
  { en: "Luggage allowance confirmed", ar: "التأكد من وزن الأمتعة المسموح" },
  { en: "Personal medications", ar: "الأدوية الشخصية" },
  { en: "Phone charger and power bank", ar: "شاحن الهاتف وبطارية متنقلة" },
  { en: "Clothing suited to the program and weather", ar: "ملابس مناسبة للبرنامج والطقس" },
  { en: "Meeting point and time saved", ar: "حفظ موعد ومكان التجمع" },
  { en: "Roaming or eSIM activated", ar: "تفعيل التجوال أو eSIM" },
  { en: "Important contact numbers saved", ar: "حفظ أرقام التواصل المهمة" },
];
