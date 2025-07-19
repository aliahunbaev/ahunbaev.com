import ToggleSection from "../components/ToggleSection";
import PlayfighterSubscribe from "../components/PlayfighterSubscribe";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Intro */}
      <section className="space-y-6">

        <h2 className="font-semibold tracking-wide text-md mb-6 uppercase">What's up, I'm Ali.</h2>

        <p>The first time I remember "being an artist" was drawing a Crayola portrait of my mother. I was around 3 years old. She liked it.</p>
        <p>I’m 18 now, and still think of myself that way.</p>
        <p>I’m currently studying Computer Science at NYU. It’s been my dream to move to New York since I was 15. Couldn’t be happier (or broker).</p>
      <img className="rounded-lg" src="portrait.jpg"></img>

        <p>I spend most of my time working to create beautiful things. I find this pursuit difficult, fulfilling, and wildly fun.</p>
        <p>The rest of my attention is dvided between working out, jazz, shawarma, books, movies, and women.</p>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <h2 className="uppercase font- tracking-wide font-semibold mb-6">What I'm Working On</h2>
        <p><a href="https://instagram.com/combat.ny" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-4">Combat</a> – a community for builders & artists in NYC. Inspired by Fight Club, Dead Poets Society, and Y Combinator.</p>
        <p><span className="text-blue-600">What Now?</span> – an AI tool that helps turn your ideas into actionable plans.</p>
        <p><span className="text-blue-600">Freelance</span> – helping businesses build a strong & attractive digital presence (web-design, branding, copywriting).</p>
        <p><span className="text-blue-600">Boxing</span> – I gotta do justice to my first name.</p>
        <p><a href="https://playfighter.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-4">Playfighter</a> - writing letters about the work and what I learn every week. <br />
        If you like to read, you can join the list of people I send them to below:</p>
      </section>

      <PlayfighterSubscribe />

      {/* Outro */}
      <section className="space-y-6">
        <p>My friends tend to be creative, curious, excited people.</p>
        <p>If you want to talk about what you're building or enjoy anything I share, please <a href="mailto:alizahunbaev@gmail.com" className="text-blue-600">reach out</a>. I always love a good conversation.</p>
        <p>Thanks for being here. Take care of yourself.</p>
        <p>Sincerely,<br />
          <a href="https://instagram.com/alizahunbaev" className="text-blue-600">Ali Zafer Ahunbáev</a>
        </p>

      </section>


      {/* Toggles */}
      <section className="space-y-4"> 
        <ToggleSection title="How I Started">...</ToggleSection>
        <ToggleSection title="My Goal">...</ToggleSection>
        <ToggleSection title="Motivations">...</ToggleSection>
        <ToggleSection title="Where I See Myself in 3,650 Days">...</ToggleSection>
        
      </section>

      {/* Directory */}
      <section>
        <h2 className="uppercase font-medium mb-6">Directory:</h2>
        <div className="flex flex-col space-y-6">
          <a href="mailto:alizahunbaev@gmail.com" className="text-blue-600 hover:underline">Contact →</a>
          <a href="https://playfighter.substack.com" target="_blank" className="text-blue-600 hover:underline">Playfighter →</a>
          <a href="https://youtube.com/@ahunbaev" target="_blank" className="text-blue-600 hover:underline">Youtube →</a>
          <a href="https://instagram.com/alizahunbaev" target="_blank" className="text-blue-600 hover:underline">Instagram →</a>
          <a href="https://instagram.com/combat.ny" target="_blank" className="text-blue-600 hover:underline">Combat →</a>
        </div>
      </section>
    </Layout>
  );
}
