import { writings } from "../data/writings";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Writing() {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="space-y-6">
        <h2 className="font-semibold tracking-wide text-md uppercase">Journal & Essays</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {writings.map((essay) => (
            <div
              key={essay.id}
              onClick={() => navigate(`/writing/${essay.slug}`)}
              className="cursor-pointer rounded-lg border border-gray-200 p-5 hover:bg-neutral-100 transition"
            >
              <div className="text-sm text-gray-500 uppercase mb-1 tracking-wider"> {essay.date} </div>
              <h3 className="text-blue-600 font-medium text-md mb-1">{essay.title}</h3>
              <p className="text-gray-800 text-sm">{essay.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
