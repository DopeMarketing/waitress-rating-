import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WaitRate</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-blue-600">
              Sign In
            </Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Rate Your Server, Improve Service Quality
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A simple way for diners to rate their server's performance and help restaurants 
            provide better service through real-time feedback.
          </p>
          <Link href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
            Start Rating Servers
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-3">Quick 1-5 Star Rating</h3>
            <p className="text-gray-600">
              Rate your server's performance with a simple star system. Fast, easy, and anonymous.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="text-xl font-semibold mb-3">Find Restaurants</h3>
            <p className="text-gray-600">
              Look up restaurants by location and find servers to rate based on your dining experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-3">Track Your Ratings</h3>
            <p className="text-gray-600">
              View your rating history and see how your feedback helps improve service quality.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-6">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-gray-700">Visit a restaurant</p>
            </div>
            <div>
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <p className="text-gray-700">Find the restaurant in the app</p>
            </div>
            <div>
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <p className="text-gray-700">Rate your server's service</p>
            </div>
            <div>
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <p className="text-gray-700">Help improve service quality</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>&copy; 2024 WaitRate. Making restaurant service better, one rating at a time.</p>
        </div>
      </footer>
    </div>
  )
}