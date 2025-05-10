export default function Testinomials(){
    const reviews = [
  {
    text: "SoftSell made it super easy to offload our unused licenses. The process was smooth and the payout was fast!",
    name: "Anna Rivera",
    role: "IT Manager @ CloudNova",
  },
  {
    text: "Excellent customer service and very fair valuations. Highly recommended!",
    name: "James Patel",
    role: "CTO @ DevPoint Solutions",
  },
];
    return(
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
    <div className="space-y-8">
      {reviews.map((r, i) => (
        <div key={i} className="bg-white p-6 rounded shadow-md">
          <p className="italic mb-4">"{r.text}"</p>
          <h4 className="font-semibold">{r.name}, {r.role}</h4>
        </div>
      ))}
    </div>
    </section>
    )
}