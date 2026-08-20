"use client";

import { useEffect, useState } from "react";
import type { Lang } from "./event-data";

const safeImage = (url: string) => `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=1200&h=800&fit=cover&output=webp`;

const restaurants = [
  {
    name: "Nusr-Et Steakhouse · Etiler",
    type: { en: "Premium steakhouse", ar: "مطعم ستيك فاخر" },
    experience: { en: "A theatrical steak experience in the original Etiler setting.", ar: "تجربة ستيك استعراضية في فرع إتيلر الأصلي." },
    time: "15 SEP · 12:30",
    rating: "3.9",
    reviews: "2,588",
    image: safeImage("https://expats.istanbul/wp-content/uploads/2025/12/SABIT-1-1.jpeg"),
    map: "https://www.google.com/maps/search/?api=1&query=Nusr-Et+Steakhouse+Etiler+Istanbul",
    source: "https://www.tripadvisor.com/Restaurant_Review-g293974-d6485912-Reviews-Nusr_Et_Steakhouse-Istanbul.html",
  },
  {
    name: "Tavacı Recep Usta",
    type: { en: "Traditional Turkish cuisine", ar: "مطبخ تركي تقليدي" },
    experience: { en: "Generous Anatolian dishes and warm Turkish hospitality.", ar: "أطباق أناضولية غنية وضيافة تركية دافئة." },
    time: "15 SEP · 19:30",
    rating: "4.0",
    reviews: "108",
    image: safeImage("https://www.torkeya.com/Istanbulasia/Recep_Usta_Nin.jpg"),
    map: "https://maps.app.goo.gl/yssf3M8djU2CH48t9",
    source: "https://www.tripadvisor.com/Restaurant_Review-g293974-d816212-Reviews-Meshur_Tavaci_Recep_Usta-Istanbul.html",
  },
  {
    name: "Del Mare",
    type: { en: "Seafood by the Bosphorus", ar: "مأكولات بحرية على البوسفور" },
    experience: { en: "Fresh seafood, candlelit tables and a luminous waterfront view.", ar: "مأكولات بحرية طازجة وطاولات أنيقة بإطلالة مضيئة على البوسفور." },
    time: "16 SEP · 19:15",
    rating: "4.0",
    reviews: "224",
    image: safeImage("https://irp.cdn-website.com/82048c5a/dms3rep/multi/Delmare-Rest25.jpg"),
    map: "https://maps.app.goo.gl/irDXQVHz5Lg67Gwa8",
    source: "https://www.tripadvisor.com/Restaurant_Review-g293974-d2269909-Reviews-Del_Mare_Restaurant-Istanbul.html",
  },
  {
    name: "Söğüt 1299 Restaurant",
    type: { en: "Living historical kitchen", ar: "مطبخ تاريخي حي" },
    experience: { en: "Seljuk, Ottoman and Anatolian flavours served inside the Bozdağ experience.", ar: "نكهات سلجوقية وعثمانية وأناضولية ضمن تجربة بوزداغ التاريخية." },
    time: "17 SEP · 13:00",
    rating: "5.0",
    reviews: "640",
    image: safeImage("https://static.wixstatic.com/media/748dac_062f984e9c814ecb9f5d5932ae5f8c94~mv2.webp/v1/fill/w_552%2Ch_392%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/748dac_062f984e9c814ecb9f5d5932ae5f8c94~mv2.webp"),
    map: "https://maps.app.goo.gl/6UxCsDTW9GDZhnu2A",
    source: "https://www.tripadvisor.com/Restaurant_Review-g293974-d27710684-Reviews-Sogut_1299_Restaurant-Istanbul.html",
  },
  {
    name: "The Market at Bosphorus",
    type: { en: "International dining & Bosphorus view", ar: "مطبخ عالمي وإطلالة البوسفور" },
    experience: { en: "A lively waterfront dinner with one of the programme’s signature views.", ar: "عشاء حيوي على الواجهة البحرية مع واحدة من أجمل إطلالات البرنامج." },
    time: "17 SEP · 19:30",
    rating: "4.1",
    reviews: "Tripadvisor",
    image: safeImage("https://img.timeturk.com/resim/dresim/2023/DSC01742.jpg"),
    map: "https://maps.app.goo.gl/P15JYUvKdCEhUAzS8",
    source: "https://www.tripadvisor.com/Restaurant_Review-g293974-d7740418-Reviews-The_Market_at_Bosphorus-Istanbul.html",
  },
  {
    name: "Balık Ev · İstinyePark",
    type: { en: "Contemporary seafood", ar: "مأكولات بحرية عصرية" },
    experience: { en: "A relaxed seafood lunch in İstinyePark’s garden setting.", ar: "غداء بحري هادئ في أجواء حديقة İstinyePark." },
    time: "18 SEP · 16:00",
    rating: "3.8",
    reviews: "69",
    image: safeImage("https://mudavim.net/wp-content/uploads/2024/10/istinyepark-balikev-1024x768.jpeg"),
    map: "https://maps.app.goo.gl/P9qTFJdx1bZ1sVE2A",
    source: "https://www.tripadvisor.com/Restaurant_Review-g293974-d911460-Reviews-Balikev-Istanbul.html",
  },
];

export function IstanbulSection({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  const [forecast, setForecast] = useState<{dates:string[]; max:number[]; min:number[]; codes:number[]} | null>(null);
  const [currentTemp, setCurrentTemp] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FIstanbul&forecast_days=7")
      .then(r=>r.json()).then(data=>{setCurrentTemp(data.current?.temperature_2m ?? null);setForecast({dates:data.daily?.time??[],max:data.daily?.temperature_2m_max??[],min:data.daily?.temperature_2m_min??[],codes:data.daily?.weather_code??[]})}).catch(()=>undefined);
    fetch("https://open.er-api.com/v6/latest/JOD").then(r=>r.json()).then(data=>setRate(data.rates?.TRY ?? null)).catch(()=>undefined);
  }, []);
  const weatherIcon=(code:number)=>code===0?"☀":code<4?"⛅":code<70?"☂":"❄";
  return (
    <section id="istanbul" className="istanbul-page">
      <div className="istanbul-hero">
        <div className="istanbul-hero-copy">
          <span>41°01′N · 28°58′E</span>
          <h2>{ar ? "إسطنبول معنا غير" : "Istanbul, Our Way"}</h2>
          <p>{ar ? "مدينة بين قارتين، نعيشها خلال أربعة أيام من العلم والثقافة والضيافة الراقية." : "A city between two continents—experienced through four days of science, culture and considered hospitality."}</p>
        </div>
        <div className="continent-stamp"><b>EUROPE</b><i>↔</i><b>ASIA</b><small>BOSPHORUS</small></div>
      </div>
      <div className="istanbul-story-grid">
        <article className="istanbul-story istanbul-story--wide">
          <img src="/assets/hero-istanbul.png" alt="Istanbul Bosphorus at dusk" />
          <div><span>01 · BOSPHORUS</span><h3>{ar ? "الممر الذي يصنع هوية المدينة" : "The waterway that shapes the city"}</h3><p>{ar ? "البوسفور يفصل أوروبا عن آسيا، ويجمع تاريخ إسطنبول وحياتها الحديثة في مشهد واحد." : "The Bosphorus separates Europe and Asia while bringing Istanbul’s history and modern rhythm into one view."}</p></div>
        </article>
        <article className="istanbul-story">
          <img src="https://traveleurope.ro/wp-content/uploads/2015/09/Galata-Tower-09.jpg" alt="Galata Tower" />
          <div><span>02 · GALATA</span><h3>{ar ? "إطلالة على طبقات التاريخ" : "A view across layers of history"}</h3></div>
        </article>
        <article className="istanbul-story">
          <img src="https://cdn12.picryl.com/photo/2016/12/31/istanbul-turkey-mosque-architecture-buildings-d8268b-1024.jpg" alt="Blue Mosque" />
          <div><span>03 · SULTANAHMET</span><h3>{ar ? "روعة العمارة العثمانية" : "Ottoman architecture at its finest"}</h3></div>
        </article>
      </div>
      <div className="istanbul-quick-grid">
        <article><span>⌚</span><small>{ar ? "التوقيت" : "TIME"}</small><b>UTC+3</b><p>{ar ? "نفس توقيت عمّان خلال أيام الرحلة." : "The same as Amman during the event."}</p></article>
        <article className="live-tile"><span>₺</span><small>{ar ? "العملة · مباشر" : "LIVE CURRENCY"}</small><b>{rate ? `1 JOD = ${rate.toFixed(2)} TRY` : "…"}</b><p>{ar ? "سعر حي للمساعدة في حساب المصروفات؛ قد يختلف سعر البنك." : "A live reference rate; your bank’s rate may vary."}</p></article>
        <article className="live-tile"><span>☀</span><small>{ar ? "الطقس · مباشر" : "LIVE WEATHER"}</small><b>{currentTemp!==null ? `${Math.round(currentTemp)}°C` : "…"}</b><p>{ar ? "درجة الحرارة الحالية في إسطنبول." : "Current temperature in central Istanbul."}</p></article>
        <article><span>112</span><small>{ar ? "الطوارئ" : "EMERGENCY"}</small><b>24 / 7</b><p>{ar ? "رقم الطوارئ الموحد في تركيا." : "Türkiye’s unified emergency number."}</p></article>
      </div>
      <div className="live-istanbul">
        <div className="live-heading"><span>LIVE · ISTANBUL</span><h3>{ar ? "توقعات السبعة أيام" : "Your 7-day outlook"}</h3><p>{ar ? "تتحدث تلقائياً لتساعدك في اختيار ملابس اليوم." : "Automatically refreshed to help you dress for the day."}</p></div>
        <div className="forecast-strip">{forecast ? forecast.dates.map((date,i)=><article key={date}><small>{new Intl.DateTimeFormat(ar?"ar-JO":"en-GB",{weekday:"short"}).format(new Date(`${date}T12:00:00`))}</small><span>{weatherIcon(forecast.codes[i])}</span><b>{Math.round(forecast.max[i])}°</b><em>{Math.round(forecast.min[i])}°</em></article>) : Array.from({length:7},(_,i)=><article className="forecast-loading" key={i}/>)}</div>
      </div>
      <div className="istanbul-guide">
        <div className="guide-heading"><span>EXPLORE SMARTER</span><h3>{ar ? "دليل صغير لمدينة كبيرة" : "A small guide to a very big city"}</h3></div>
        <div className="guide-grid">
          <article><span>01</span><h4>{ar?"التنقل":"Getting around"}</h4><p>{ar?"استخدم Istanbulkart للمترو والترام والعبّارات. تجنب ساعات الذروة قدر الإمكان، واترك وقتاً إضافياً بسبب الازدحام.":"Use an Istanbulkart for metro, tram and ferries. Avoid peak hours where possible and allow extra time for traffic."}</p></article>
          <article><span>02</span><h4>{ar?"الأحياء":"Neighbourhoods"}</h4><p>{ar?"سلطان أحمد للمعالم التاريخية، غلطة للمشي والإطلالات، نيشانتاشي للتسوق والمقاهي، وكاديكوي للجانب الآسيوي.":"Sultanahmet for landmarks, Galata for walks and views, Nişantaşı for cafés and shopping, Kadıköy for the Asian side."}</p></article>
          <article><span>03</span><h4>{ar?"الثقافة":"Local etiquette"}</h4><p>{ar?"التحية الودودة مقدّرة. عند زيارة المساجد ارتدِ ملابس محتشمة واتبع تعليمات الدخول والتصوير.":"A warm greeting goes a long way. At mosques, dress respectfully and follow local guidance for entry and photography."}</p></article>
          <article><span>04</span><h4>{ar?"سبتمبر":"September kit"}</h4><p>{ar?"احضر طبقة خفيفة للمساء، حذاء مريحاً، مظلة صغيرة، وبطارية متنقلة للأيام الطويلة.":"Bring a light evening layer, comfortable shoes, a compact umbrella and a power bank for long days."}</p></article>
          <article><span>05</span><h4>{ar?"المذاق":"What to try"}</h4><p>{ar?"السميت، القهوة التركية، البقلاوة، السمك الطازج، ووجبة فطور تركية متكاملة.":"Try simit, Turkish coffee, baklava, fresh fish and a full Turkish breakfast."}</p></article>
          <article><span>06</span><h4>{ar?"كلمات سريعة":"Useful words"}</h4><p>Merhaba · {ar?"مرحباً":"Hello"}<br/>Teşekkürler · {ar?"شكراً":"Thank you"}<br/>Lütfen · {ar?"من فضلك":"Please"}</p></article>
        </div>
      </div>
      <div className="istanbul-sources"><a href="https://goturkiye.com/istanbul" target="_blank" rel="noreferrer">GoTürkiye ↗</a><a href="https://www.timeanddate.com/time/zone/turkey/istanbul" target="_blank" rel="noreferrer">Time information ↗</a></div>
    </section>
  );
}

export function RestaurantsSection({ lang }: { lang: Lang }) {
  const ar = lang === "ar";
  return (
    <section id="restaurants" className="restaurants-page">
      <div className="restaurants-heading"><span>DINING JOURNAL · 06 EXPERIENCES</span><h2>{ar ? "مذاقات إسطنبول" : "A Taste of Istanbul"}</h2><p>{ar ? "كل تجربة طعام في رحلتنا، بصورتها وموعدها وتقييمها وموقعها." : "Every dining experience—its atmosphere, time, current rating and exact location."}</p></div>
      <div className="restaurant-grid">
        {restaurants.map((r, i) => (
          <article className="restaurant-card" key={r.name}>
            <div className="restaurant-image"><img src={r.image} alt={r.name} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src="/assets/hero-istanbul.png"}} /><span>0{i + 1}</span><div className="rating"><b>★ {r.rating}</b><small>{r.reviews}</small></div></div>
            <div className="restaurant-copy"><small>{r.time}</small><h3>{r.name}</h3><em>{r.type[lang]}</em><p>{r.experience[lang]}</p><div><a href={r.map} target="_blank" rel="noreferrer">{ar ? "افتح الخريطة" : "Open map"} ↗</a><a href={r.source} target="_blank" rel="noreferrer">Tripadvisor ↗</a></div></div>
          </article>
        ))}
      </div>
      <p className="rating-note">{ar ? "التقييمات من Tripadvisor وتم التحقق منها في أغسطس 2026؛ قد تتغير بمرور الوقت." : "Tripadvisor ratings checked in August 2026; live ratings may change over time."}</p>
    </section>
  );
}

export function ContactsSection({ lang, onShareLocation }: { lang: Lang; onShareLocation: () => void }) {
  const ar = lang === "ar";
  const contacts = [
    { name: "Dunia Alqadi", initials: "DA", email: "Dunia.Alqadi@dadgroup.com", phone: "+962 770059817", wa: "962770059817" },
    { name: "Hasan Alnajar", initials: "HN", email: "Hasan.Najjar@dadgroup.com", phone: "+962 795580582", wa: "962795580582" },
  ];
  return (
    <section id="support" className="contacts-page">
      <div className="contacts-intro"><span>FIRST CARE · ALWAYS WITH YOU</span><h2>{ar ? "نحن دائماً معك" : "Your Experience Team"}</h2><p>{ar ? "تواصل مباشر مع فريق الرحلة، بضغطة واحدة." : "Direct access to the team looking after your journey."}</p></div>
      <div className="contact-grid">
        {contacts.map((c, i) => <article className="person-contact" key={c.name}><div className="contact-top"><span>{c.initials}</span><small>0{i + 1}</small></div><h3>{c.name}</h3><p>{ar ? "فريق تنسيق تجربة FIRST" : "FIRST Experience Coordination"}</p><a className="contact-phone" href={`https://wa.me/${c.wa}`} target="_blank" rel="noreferrer"><small>WHATSAPP</small><b>{c.phone}</b><i>↗</i></a><a className="contact-email" href={`mailto:${c.email}`}><small>EMAIL</small><b>{c.email}</b><i>↗</i></a></article>)}
        <article className="emergency-contact"><span>24 / 7</span><h3>{ar ? "الطوارئ في تركيا" : "Emergency in Türkiye"}</h3><strong>112</strong><a href="tel:112">{ar ? "اتصل الآن" : "Call now"}</a><button onClick={onShareLocation}>{ar ? "مشاركة موقعي عبر واتساب" : "Share my location via WhatsApp"}</button></article>
      </div>
    </section>
  );
}
