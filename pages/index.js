import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold">CLM Misting Solutions</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Advanced mosquito misting systems designed for residential and commercial spaces.
        </p>
        <button className="mt-6 bg-highlight px-6 py-3 text-white font-semibold rounded-lg hover:bg-accent transition">
          Request a Quote
        </button>
      </header>

      {/* Feature Highlights */}
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
        <button className="mt-6 bg-success px-6 py-3 text-white font-semibold rounded-lg hover:bg-highlight transition">
          Request a Quote
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-700 text-center p-6 mt-10 border-t-4 border-primary">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-600 hover:text-primary text-sm">Terms of Use</a>
          <a href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-primary text-sm">Legal Notices</a>
          <a href="#" className="text-gray-600 hover:text-primary text-sm">Contact Us</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/CLMMistingSolutions" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition"/>
          </a>
          <a href="https://twitter.com/CLMMistingSolutions" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="X" className="w-6 h-6 hover:opacity-80 transition"/>
          </a>
          <a href="https://www.instagram.com/CLMMistingSolutions" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition"/>
          </a>
        </div>

        <div className="border-t-2 border-primary my-4"></div>
        <p className="text-sm">&copy; 2025 CLM Misting Solutions. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
