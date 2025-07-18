import { useParams } from "react-router-dom";
import { writings } from "../data/writings";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

export default function Essay() {
  const { slug } = useParams();
  const essay = writings.find((e) => e.slug === slug);

  if (!essay) return <Layout><p>Not found.</p></Layout>;

  return (
    <Layout>
      <article className="prose prose-neutral max-w-2xl mx-auto">
        <h1>{essay.title}</h1>
        <ReactMarkdown>{essay.content}</ReactMarkdown>
      </article>
    </Layout>
  );
}
