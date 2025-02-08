import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-24 px-6 flex flex-col items-center">
        <h1 className="text-5xl font-bold max-w-3xl">CLM Misting Solutions</h1>
        <p className="mt-4 text-lg max-w-2xl">
          Say goodbye to mosquitoes with our advanced misting systems, designed for residential, equine, and commercial spaces.
        </p>
        <button className="mt-6 bg-highlight px-8 py-3 text-white font-semibold rounded-lg hover:bg-accent transition">
          Request a Free Quote
        </button>
      </header>

      {/* Feature Highlights */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl text-primary font-semibold">Why Choose CLM?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          <div className="w-64 bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Eco-Friendly</h3>
            <p className="text-gray-600 mt-2">Safe for families, pets, and the environment.</p>
          </div>
          <div className="w-64 bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Automated Control</h3>
            <p className="text-gray-600 mt-2">Custom misting schedules for effortless mosquito control.</p>
          </div>
          <div className="w-64 bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Trusted by 187+ Facilities</h3>
            <p className="text-gray-600 mt-2">Industry-leading protection used in the US & China.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-accent text-white text-center">
        <h2 className="text-3xl font-semibold">Get a Free Quote Today!</h2>
        <p className="mt-2 text-lg">Protect your home, barn, or business with our advanced misting systems.</p>
        <button className="mt-6 bg-success px-8 py-3 text-white font-semibold rounded-lg hover:bg-highlight transition">
          Request a Quote
        </button>
      </section>

      {/* Footer */}
<footer className="bg-white text-gray-700 text-center py-8 mt-10 border-t-4 border-primary">
  {/* Footer Links */}
  <div className="flex justify-center space-x-5 mb-4 text-sm font-medium">
    <a href="#" className="text-gray-600 hover:text-primary">Terms of Use</a>
    <a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a>
    <a href="#" className="text-gray-600 hover:text-primary">Legal Notices</a>
    <a href="#" className="text-gray-600 hover:text-primary">Contact Us</a>
  </div>

  {/* Social Media Links - **Now Tiny & Well-Aligned** */}
  <div className="flex justify-center space-x-3 mb-4">
    <a href="https://www.facebook.com/CLMMistingSolutions" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
        alt="Facebook" className="w-4 h-4 opacity-80 hover:opacity-100 transition"/>
    </a>
    <a href="https://twitter.com/CLMMistingSolutions" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" 
        alt="X" className="w-4 h-4 opacity-80 hover:opacity-100 transition"/>
    </a>
    <a href="https://www.instagram.com/CLMMistingSolutions" target="_blank">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
        alt="Instagram" className="w-4 h-4 opacity-80 hover:opacity-100 transition"/>
    </a>
  </div>

  <div className="border-t border-gray-300 my-4 w-3/4 mx-auto"></div>
  <p className="text-xs">&copy; 2025 CLM Misting Solutions. All Rights Reserved.</p>
</footer>
