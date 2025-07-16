export default function PlayfighterSubscribe() {
    return (
      <div className="max-w-xl mx-auto mt-20 bg-white p-0 rounded-xl text-center space-y-4">

        <form
          action="https://playfighter.substack.com/subscribe"
          method="GET"
          target="_blank"
          className="space-y-4"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="enter your email & press 'subscribe'"
            className="w-full px-4 py-3 border border-blue-600 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-md font-light tracking-wid hover:opacity-90"
          >
            Read Playfighter
          </button>
        </form>
      </div>
    );
  }
  