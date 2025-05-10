export default function HowItWorks(){
    const steps = [
  {
    title: "1. Upload License",
    desc: "Submit your unused software license through our secure form.",
    icon: "https://img.icons8.com/ios-filled/100/upload.png",
  },
  {
    title: "2. Get Valuation",
    desc: "We'll analyze and provide a fair resale value instantly.",
    icon: "https://img.icons8.com/ios-filled/100/money.png",
  },
  {
    title: "3. Get Paid",
    desc: "Receive payment quickly once the license is sold.",
    icon: "https://img.icons8.com/ios-filled/100/bank-card-back-side.png",
  },
];
    return(
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">How It Works</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {steps.map((step, idx) => (
        <div key={idx}>
          <img src={step.icon} alt={step.title} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
    )
};