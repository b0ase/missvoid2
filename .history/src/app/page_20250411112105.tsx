export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">MISS VOID</h1>
      <p className="text-center">Welcome to Miss Void's fashion collection.</p>
      <div className="mt-6 text-center">
        <a 
          href="/about" 
          className="inline-block bg-black text-white px-4 py-2 rounded mr-2"
        >
          About
        </a>
        <a 
          href="/services" 
          className="inline-block bg-black text-white px-4 py-2 rounded mr-2"
        >
          Services
        </a>
        <a 
          href="/custom" 
          className="inline-block bg-black text-white px-4 py-2 rounded mr-2"
        >
          Custom Orders
        </a>
        <a 
          href="/contact" 
          className="inline-block bg-black text-white px-4 py-2 rounded"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
