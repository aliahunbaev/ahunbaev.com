import { Link, useParams } from "react-router-dom";
import { writings } from "../data/writings";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

export default function Essay() {
  const { slug } = useParams();
  const essay = writings.find((e) => e.slug === slug);

  if (!essay) return <Layout><p>Not found.</p></Layout>;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Link
          to="/writing"
          className="text-sm text-blue-600 hover:underline uppercase tracking-wide mb-12 inline-block"
        >
          ← Back to all essays
        </Link>

        <article className="prose prose-neutral">
          <h3 className="font-semibold tracking-wide mb-3 uppercase">{essay.title}</h3>
          <ReactMarkdown>{essay.content}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}
