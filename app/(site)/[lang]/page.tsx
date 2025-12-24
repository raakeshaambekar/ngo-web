
import DonateButton from "../../../components/DonateButton";

const HERO_CONTENT = {
  en: {
    title: "Empowering the Deshastha Maratha Community",
    description:
      "We are a registered community organization dedicated to education support, social welfare, cultural preservation, and collective upliftment of the Deshastha Maratha community across Mumbai and Maharashtra.",
  },
  mr: {
    title: "देशस्थ मराठा समाज सशक्तीकरण",
    description:
      "मुंबई देशस्थ मराठा ज्ञाती–धर्म संस्था ही शिक्षण सहाय्य, सामाजिक कार्य, सांस्कृतिक जतन व समाजाची एकता वृद्धिंगत करण्यासाठी कार्य करणारी नोंदणीकृत संस्था आहे.",
  },
};

const PROGRAMS_CONTENT = {
  en: {
    sectionTitle: "Our Core Programs",
    items: [
      {
        title: "Education Support",
        description:
          "Financial assistance, scholarships, and educational support for deserving students from the Deshastha Maratha community.",
      },
      {
        title: "Social & Healthcare Assistance",
        description:
          "Medical assistance and social support during health emergencies and difficult life situations.",
      },
      {
        title: "Cultural & Community Development",
        description:
          "Preservation of cultural traditions, religious activities, and initiatives that strengthen community unity.",
      },
    ],
  },
  mr: {
    sectionTitle: "आमचे मुख्य उपक्रम",
    items: [
      {
        title: "शैक्षणिक सहाय्य",
        description:
          "देशस्थ मराठा समाजातील गरजू विद्यार्थ्यांना शैक्षणिक मदत, शिष्यवृत्ती व शिक्षणासाठी आर्थिक सहाय्य.",
      },
      {
        title: "आरोग्य व सामाजिक सहाय्य",
        description:
          "आजारपण, आपत्कालीन परिस्थिती व सामाजिक अडचणींमध्ये समाजबांधवांना मदत.",
      },
      {
        title: "सांस्कृतिक व सामाजिक विकास",
        description:
          "धार्मिक, सांस्कृतिक उपक्रम, परंपरा जतन व समाजातील एकता वृद्धिंगत करण्याचे कार्य.",
      },
    ],
  },
};

const IMPACT_CONTENT = {
  en: {
    items: [
      {
        value: "1000+",
        label: "Community Members Supported",
      },
      {
        value: "10+",
        label: "Years of Service",
      },
      {
        value: "100+",
        label: "Active Members & Volunteers",
      },
    ],
  },
  mr: {
    items: [
      {
        value: "१०००+",
        label: "समाजबांधवांना सहाय्य",
      },
      {
        value: "१०+",
        label: "सेवेची वर्षे",
      },
      {
        value: "१००+",
        label: "सक्रिय सभासद व स्वयंसेवक",
      },
    ],
  },
};

const NEWS_CONTENT = {
  en: {
    sectionTitle: "Latest News & Updates",
    items: [
      {
        date: "2024–2025",
        title: "Annual General Meeting Conducted",
        summary:
          "The Annual General Meeting was conducted in accordance with statutory guidelines, reviewing organizational activities and future plans.",
      },
      {
        date: "2024–2025",
        title: "Audited Financial Report Approved",
        summary:
          "The audited income and expenditure report for the year was presented and approved by members.",
      },
      {
        date: "2024–2025",
        title: "Executive Committee Announced",
        summary:
          "The executive committee and office bearers for the current term were formally announced.",
      },
    ],
  },
  mr: {
    sectionTitle: "ताज्या बातम्या व घडामोडी",
    items: [
      {
        date: "२०२४–२०२५",
        title: "वार्षिक सर्वसाधारण सभा पार पडली",
        summary:
          "नियमानुसार वार्षिक सर्वसाधारण सभा पार पडून संस्थेच्या कार्याचा व भावी योजनांचा आढावा घेण्यात आला.",
      },
      {
        date: "२०२४–२०२५",
        title: "लेखापरीक्षित आर्थिक अहवाल मंजूर",
        summary:
          "संस्थेचा लेखापरीक्षित जमा-खर्च अहवाल सभासदांनी मंजूर केला.",
      },
      {
        date: "२०२४–२०२५",
        title: "नवीन कार्यकारिणी जाहीर",
        summary:
          "चालू कार्यकाळासाठी संस्थेची कार्यकारिणी व पदाधिकारी जाहीर करण्यात आले.",
      },
    ],
  },
};

const CONTACT_CONTENT = {
  en: {
    sectionTitle: "Contact Us",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    phone: "+91 90000 00000",
    email: "contact@mdmgds.org",
    address: [
      "Mumbai Deshastha Maratha Dhyati Dharm Sanstha",
      "Ground Floor, Building No. 6,",
      "Raghunath Maharaj Street,",
      "Near Mandavi Koliwada,",
      "Masjid Bunder, Mumbai – 400003.",
    ],
  },
  mr: {
    sectionTitle: "संपर्क साधा",
    phoneLabel: "दूरध्वनी",
    emailLabel: "ई-मेल",
    addressLabel: "पत्ता",
    phone: "+91 90000 00000",
    email: "contact@mdmgds.org",
    address: [
      "मुंबई देशस्थ मराठा ज्ञाती धर्म संस्था",
      "तळमजला, इमारत क्र. ६,",
      "रघुनाथ महाराज मार्ग,",
      "मांडवी कोळीवाडा जवळ,",
      "मस्जिद बंदर, मुंबई – ४००००३.",
    ],
  },
};

const DONATE_CONTENT = {
  en: {
    title: "Support Our Mission",
    description:
      "Your contribution helps us continue our efforts in education support, social welfare, and community development for the Deshastha Maratha community.",
  },
  mr: {
    title: "आमच्या कार्यास पाठबळ द्या",
    description:
      "आपले योगदान शिक्षण सहाय्य, सामाजिक कल्याण आणि देशस्थ मराठा समाजाच्या सर्वांगीण विकासासाठी उपयोगात येते.",
  },
};




export default function Home({
  params,
}: {
  params: { lang: "en" | "mr" };
}) {
  const hero = HERO_CONTENT[params.lang];

  return (
    <>
     

      {/* HERO */}
      <section
        className="text-white py-16"
        style={{
          background: "linear-gradient(90deg, #C62828 0%, #D4AF37 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {hero.title}
          </h1>

          <p className="max-w-3xl mx-auto text-lg opacity-90 mb-8">
            {hero.description}
          </p>

          <DonateButton />
        </div>
      </section>

      {/* PROGRAMS */}
        <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-14">
            {PROGRAMS_CONTENT[params.lang].sectionTitle}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
            {PROGRAMS_CONTENT[params.lang].items.map((program, index) => (
                <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                />
            ))}
            </div>
        </div>
        </section>

      {/* IMPACT STRIP */}
      
    <section id="impact" className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
            {IMPACT_CONTENT[params.lang].items.map((item, index) => (
            <ImpactStat
                key={index}
                value={item.value}
                label={item.label}
            />
            ))}
        </div>
    </section>


      {/* NEWS */}

    <section id="news" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-14">
            {NEWS_CONTENT[params.lang].sectionTitle}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
            {NEWS_CONTENT[params.lang].items.map((item, index) => (
                <NewsCard
                key={index}
                date={item.date}
                title={item.title}
                summary={item.summary}
                />
            ))}
            </div>
        </div>
    </section>


     
      {/* CONTACT US */}
    {/* CONTACT US */}
<section
  id="contact"
  className="py-20"
  style={{ backgroundColor: "#FFF8F2" }}
>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-semibold text-center mb-16">
      {CONTACT_CONTENT[params.lang].sectionTitle}
    </h2>

    <div className="bg-white rounded-2xl shadow-sm border p-10 md:p-14">
      <div className="grid md:grid-cols-2 gap-12">

        {/* Left: Phone & Email */}
        <div className="space-y-8">
          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: "#C62828" }}
            >
              {CONTACT_CONTENT[params.lang].phoneLabel}
            </p>
            <p className="text-gray-800 text-lg">
              {CONTACT_CONTENT[params.lang].phone}
            </p>
          </div>

          <div>
            <p
              className="font-semibold mb-1"
              style={{ color: "#C62828" }}
            >
              {CONTACT_CONTENT[params.lang].emailLabel}
            </p>
            <p className="text-gray-800 text-lg">
              {CONTACT_CONTENT[params.lang].email}
            </p>
          </div>
        </div>

        {/* Right: Address */}
        <div>
          <p
            className="font-semibold mb-3"
            style={{ color: "#C62828" }}
          >
            {CONTACT_CONTENT[params.lang].addressLabel}
          </p>

          <address className="not-italic text-gray-800 leading-relaxed text-lg">
            {CONTACT_CONTENT[params.lang].address.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </address>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* DONATION CTA */}
      {/* DONATE CTA */}
<section
  id="donate"
  className="py-20 text-white text-center"
  style={{
    background: "linear-gradient(90deg, #C62828 0%, #D4AF37 100%)",
  }}
>
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-semibold mb-6">
      {DONATE_CONTENT[params.lang].title}
    </h2>

    <p className="max-w-xl mx-auto mb-10 opacity-90 text-lg">
      {DONATE_CONTENT[params.lang].description}
    </p>

    <DonateButton />
  </div>
</section>


      
    </>
  );
}

/* ---------- Components ---------- */

function ProgramCard({ title, description }: any) {
  return (
    <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function NewsCard({ date, title, summary }: any) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <span className="text-sm text-gray-500">{date}</span>
      <h3 className="font-semibold text-lg mt-3 mb-3">{title}</h3>
      <p className="text-gray-600">{summary}</p>
    </div>
  );
}

function ImpactStat({ value, label }: any) {
  return (
    <div>
      <p className="text-4xl font-bold text-red-600 mb-2">{value}</p>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}
