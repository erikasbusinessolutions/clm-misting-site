import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-20 px-6">
        <h1 className="text-5xl font-bold">CLM Misting Solutions</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Advanced mosquito misting systems designed for residential and commercial spaces.
        </p>
        <button className="mt-6 bg-highlight px-6 py-3 text-white font-semibold rounded-lg hover:bg-accent transition">
          Request a Quote
        </button>
      </header>
    </div>
  );
}
