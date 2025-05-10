export default function Contactform(){
    return (
        <section id="contact" className="bg-blue-50 py-16 px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
    <form className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded shadow">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input type="text" required className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input type="email" required className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Company</label>
        <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">License Type</label>
        <select required className="w-full border border-gray-300 rounded px-4 py-2">
          <option value="">Select...</option>
          <option value="windows">Windows OS</option>
          <option value="office">Microsoft Office</option>
          <option value="adobe">Adobe Suite</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-semibold">Message</label>
        <textarea required className="w-full border border-gray-300 rounded px-4 py-2" rows="4"></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  </section>
    )
}