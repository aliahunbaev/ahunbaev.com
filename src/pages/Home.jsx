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
      {/* <img className="rounded-lg" src="photo.webp"></img> */}
        <p>I spend most of my time working to create beautiful things. I find this pursuit difficult, fulfilling, and wildly fun.</p>
        <p>The rest of my attention is divided between the gym, jazz, shawarma, books, movies, and women.</p>
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
      <section className=" space-y-4">
        <ToggleSection title="How I Started">
  <p>I’ve been drawing my whole life, and I got this identity as an “artist” reinforced by everyone around me.</p>
  <p>It was one of the primary ways I was known. And how I knew myself.</p>
  <p>I’m so lucky this label got thrown on me. It’s so much harder to make stuff when you think you’re “just not creative.”</p>
  <p>My earliest career interests were being a ninja, Wild Kratt brother, pro-fisherman, paleontologist, or a Lego set designer.</p>
  <p>After I turned 9, I was mostly interested in being a painter or writer.</p>
  <p>Math (and school in general) has always been easy for me as well. My mom wanted me to be a doctor and my father told me to study computer science.</p>
  <p>I said, “Fuck no, they’re all nerds, I’m never doing that shit.”</p>
  <p>In high school, I found so much good shit. Tarantino, Wes Anderson movies, Wu-Tang, Miles Davis, actually endless inspiration.</p>
  <p>My desire for a creative life grew. So did my ambition.</p>
  <p>I didn’t know what to do with that though. I spent a long time thinking.</p>
  <p>One morning in 11th grade, I was sitting in my Calculus BC class talking to the girls next to me. My teacher Mr. Moon walked in, and he got really interested in what I said (Pretty sure I asked something like “when’s the last time you cried” or “why do you get out of bed in the morning”).</p>
  <p>He paused and asked me, “what are you doing after high school?”</p>
  <p>I said I’m studying architecture.</p>
  <p>He put his hands on his hips and looked at the ceiling and spoke in a mathematical tone, as if solving an equation “Right, because smart artists go into architecture.”</p>
  <p>Then he looked at me and said plainly, “You should be a programmer.”</p>
  <p>I told him I don’t want a boring life.</p>
  <p>He told me that the tech world is full of nerds who are good at programming but have no vision. But if you’re smart enough to use the tools, and have the taste of an artist, you have so much room to do amazing things. And make more money.</p>
  <p>I shot the idea down again, but the seed was planted.</p>
  <p>This persuasive genius played to my ego and my desires so well.</p>
  <p>In the following year, I read the biography of Steve Jobs, read the essays of Paul Graham, watched The Social Network, and fell down the rabbit hole of startups and entrepreneurship.</p>
  <p>And here I am, a CS major, writing the code for this website.</p>
</ToggleSection>

<ToggleSection title="My Goal">
  <p>I’ve enjoyed <i>a lot</i> of books, movies, music, documentaries, magazines, biographies, podcasts throughout my childhood.</p>
  <p>I’m so grateful for the art I’ve come across, and the people who made them. It’s made me believe that</p>
  <p>1. life is beautiful<br />2. i can do great things</p>
  <p>I love art that makes you feel strong and excited to live.</p>
  <p>I want to make stuff like that. I have this huge list of people who’ve enriched my life. Most of them never knew me.</p>
  <p>I’d like to be on someone else’s list.</p>
  <p>My goal is to make enough money to never think about it again,</p>
  <p>bring joy and fulfillment to the lives of others,</p>
  <p>and have a lot of fun.</p>
  <p>In short: build a cool company with cool people.</p>
</ToggleSection>

<ToggleSection title="Motivations">
  <p>honestly I do a lot of what I do because I think it’s cool.</p>
  <p>i remember one day i was thinking about how, when you’re in a group, if someone sings or raps or tells jokes or does <i>something</i>, it makes the experience so much more enjoyable. for everyone involved.</p>
  <p>as opposed to the people who just kinda sit back, because they don’t have the skill or feel too shy.</p>
  <p>i think of birds singing. they just do it naturally, and it makes things nicer.</p>
  <p>so i think it’s cool to have a business, make art, build software, create wealth, get jacked, play the saxophone, freestyle, write a book,  etc.</p>
  <p>i’m lucky enough that most of the things I want to do, I actually <i>can</i>. I’m healthy enough, my living conditions are secure, I have access to the internet, and I stumbled into a good mindset before turning 18.</p>
  <p>It just takes some courage and a lot of practice.</p>
  <p>I’m extremely afraid of wasting life.</p>
  <p>We’re given this opportunity, why not use all of it?</p>
</ToggleSection>

<ToggleSection title="Where I See Myself in 3,650 Days">
  <p>I see myself leading Combat. I always had this idea that the pinnacle of what I want to do in this world would look something like a school.</p>
  <p>But a good one. You go and learn how to box, paint, give speeches, to think for yourself, to be okay with pissing people off, to find a way to actually create wealth, to flirt, to cultivate both peace & progress.</p>
  <p>Just a Human Potential Extracting Machine. The closest equivalents are startup incubators (Y Combinator), groups like buildspace or Founders Inc., or a studio like Teenage Engineering or Aime Leon Dore.</p>
  <p>In any case, I’m fly as fuck, surrounded by great people. I see myself as a good boxer & nice on the sax. I also see myself with an absolute baddie.</p>
</ToggleSection>

        </section>

        <img className="rounded-lg" src="photo.webp"></img>



      {/* Directory */}
      <section>
        <h2 className="uppercase font-medium mb-6">Directory:</h2>
        <div className="flex flex-col space-y-6 underline-offset-4">
          <a href="https://playfighter.substack.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Newsletter →</a>
          <a href="/favorites" className="text-blue-600 hover:underline">Favorites →</a>
          <a href="/writing" className="text-blue-600 hover:underline">Writing →</a>
          <a href="https://instagram.com/combat.ny" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Combat →</a>
          <a href="https://youtube.com/@ahunbaev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube →</a>
          <a href="https://instagram.com/alizahunbaev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram →</a>
          <a href="mailto:alizahunbaev@gmail.com" className="text-blue-600 hover:underline">Contact →</a>
        </div>
      </section>

    </Layout>
  );
}
