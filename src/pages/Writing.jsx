import { writings } from "../data/writings";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

// Pretty date formatter
function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map(Number);
  const localDate = new Date(year, month - 1, day);
  return localDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Writing() {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="space-y-6">
        <h2 className="font-semibold tracking-wide text-md uppercase">Journal & Essays</h2>

        {/* Full-width Substack CTA */}
        <div className="pt-2 pb-4">
          <a
            href="https://playfighter.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full transition"
          >
            Read weekly letters on Substack
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {writings.map((essay) => (
            <div
              key={essay.slug}
              onClick={() => navigate(`/writing/${essay.slug}`)}
              className="cursor-pointer rounded-lg border border-gray-200 p-5 hover:bg-neutral-100 transition"
            >
              <div className="text-sm text-gray-500 uppercase mb-1 tracking-wider">
                {formatDate(essay.date)}
              </div>
              <h3 className="text-blue-600 font-medium text-md mb-1">{essay.title}</h3>
              <p className="text-gray-800 text-sm">{essay.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
