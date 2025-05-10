export default function WhyChooseUs(){
    const features = [
  {
    title: "Trusted by 1000+ Clients",
    desc: "Our platform is reliable and trusted by businesses worldwide.",
    icon: "https://img.icons8.com/ios-filled/50/thumb-up.png",
  },
  {
    title: "Fast Payments",
    desc: "We ensure quick evaluations and even quicker payouts.",
    icon: "https://img.icons8.com/ios-filled/50/clock--v1.png",
  },
  {
    title: "Top Dollar Valuations",
    desc: "Get the highest possible resale value for your licenses.",
    icon: "https://img.icons8.com/ios-filled/50/price-tag-usd.png",
  },
  {
    title: "100% Secure",
    desc: "Your data and licenses are handled with utmost care and security.",
    icon: "https://img.icons8.com/ios-filled/50/lock-2.png",
  },
];
    return(
    <section className="bg-gray-100 py-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftSell?</h2>
    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow">
          <img src={f.icon} alt={f.title} className="mb-4" />
          <h4 className="font-semibold text-lg mb-2">{f.title}</h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
    </section>
    )
}