import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-20 px-6">
        <h1 className="text-5xl font-bold">CLM Misting Solutions</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Advanced mosquito misting systems designed for residential and commercial spaces.
        </p>
        <button className="mt-6 bg-highlight px-6 py-3 text-white hover:bg-accent">
          Request a Quote
        </button>
      </header>

      {/* Features */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl text-primary font-semibold">Why Choose CLM?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          <div className="w-60 bg-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Eco-Friendly</h3>
            <p className="text-gray-600 mt-2">Safe for your family, pets, and the environment.</p>
          </div>
          <div className="w-60 bg-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Automatic Control</h3>
            <p className="text-gray-600 mt-2">Automated schedules for hassle-free protection.</p>
          </div>
          <div className="w-60 bg-gray-200 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Proven Results</h3>
            <p className="text-gray-600 mt-2">Trusted by 187 facilities in the US & China.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-accent text-white text-center">
        <h2 className="text-3xl font-semibold">Get a Free Quote Today!</h2>
        <p className="mt-2 text-lg">Protect your home or business with our advanced misting solutions.</p>
        <button className="mt-6 bg-success px-6 py-3 hover:bg-highlight">
          Request a Quote
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-6">
        <p>© 2024 CLM Misting Solutions | <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a></p>
      </footer>
    </div>
  );
}
