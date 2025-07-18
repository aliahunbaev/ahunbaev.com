import ToggleSection from "./components/ToggleSection";
import PlayfighterSubscribe from "./components/PlayfighterSubscribe";

export default function App() {
  return (
    <div>
      <div className="max-w-xl tracking-wide leading-relaxed mx-auto px-4 py-4 space-y-20 font-light text-md font-sans text-gray-900">

        {/* Header */}
        <header className="uppercase flex text-md justify-between items-center font-regular tracking-wider">
          <a href="/" className="block w-7 h-7">
            <img src="/favicon.png" alt="Home" className="w-full h-full object-contain" />
          </a>
          <nav className="space-x-6">
            <a className="text-blue-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://playfighter.substack.com">Writing</a>
            <a className="text-blue-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@ahunbaev">Videos</a>
            <a className="text-blue-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="mailto:alizahunbaev@gmail.com">Contact</a>
          </nav>
        </header>

        {/* Intro */}
        <section className="space-y-5">
          <h2 className="font-semibold tracking-wide text-md mb-6 uppercase">What's up, I'm Ali.</h2>
          <p>The first time I remember "being an artist" was drawing a Crayola portrait of my mother. I was around 3 years old. She liked it.</p>
          <p>I’m 18 now, and still think of myself that way.</p>
          <p>I’m currently studying Computer Science at NYU. It’s been my dream to move to New York since I was 15. Couldn’t be happier (or broker).</p>
          <p>I spend most of my time working to create beautiful things. I find this pursuit difficult, fulfilling, and wildly fun.</p>
          <p>The rest of my attention is dvided between working out, jazz, shawarma, books, movies, and women.</p>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className="uppercase font- tracking-wide font-semibold mb-6">What I'm Working On</h2>
          <p><a href="https://instagram.com/combat.ny" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-4">Combat</a> – a community for builders & artists in NYC. Inspired by Fight Club, Dead Poets Society, and Y Combinator.</p>
          <p><span className="text-blue-600">What Now?</span> – an AI tool that helps turn your ideas into actionable plans.</p>
          <p><span className="text-blue-600">Freelance</span> – helping businesses build a strong & attractive digital presence (web-design, branding, copywriting).</p>
          <p><span className="text-blue-600">Boxing</span> – started after reading Sun & Steel by Mishima. First fight 2026.</p>
          <p><a href="https://playfighter.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline underline-offset-4">Playfighter</a> - writing letters about the work and what I learn every week. <br></br> 
          If you like to read, you can join the list of people I send them to below:
          </p>


        </section>

          {/* Playfighter CTA */}
          <PlayfighterSubscribe/>
          
        {/* Outro */}
        <section className=" space-y-6">
          <p> </p>
          <p>My friends tend to be creative, curious, excited people.</p>
          <p>If you'd like to talk about what you're building or anything I share, please <a href="mailto:alizahunbaev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">reach out</a>. I always love a good conversation.<br></br></p>
         
          <p></p>
          <p>Thanks for being here, take care of yourself.</p>

          <p>Sincerely,<br></br>
          <a href="https://instagram.com/alizahunbaev" target="_blank" rel="noopener noreferrer" className="text-blue-600">Ali Zafer Ahunbáev</a>
          
          </p>
        </section>

        {/* <img src="me3.jpg" className="rounded-lg"></img> */}




        {/* Toggles */}
        <section className=" space-y-4">
        <ToggleSection title="How I Started">
  <p>I’ve been drawing my whole life, and I got this identity as an “artist” reinforced by everyone around me.</p>
  <p>It was one of the primary ways I was known. And how I knew myself.</p>
  <p>I’m so lucky this label got thrown on me. It’s so much harder to make stuff when you think you’re “just not creative.”</p>
  <p>My earliest career interests were being a ninja, Wild Kratt brother, pro-fisherman, paleontologist, or a Lego set designer.</p>
  <p>After I turned the age of 9, I was mostly interested in being a painter or writer.</p>
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

        {/* Directory */}
        <section className="">
          <h2 className="uppercase font-medium mb-6">Directory:</h2>
          <div className="flex flex-col space-y-6">
            <a href="mailto:alizahunbaev@gmail.com" className="text-blue-600 hover:underline">Contact →</a>
            <a href="https://playfighter.substack.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Playfighter →</a>
            <a href="https://youtube.com/@ahunbaev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Youtube →</a>
            <a href="https://instagram.com/alizahunbaev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram →</a>
            <a href="https://instagram.com/combat.ny" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Combat →</a>
            {/* <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Biography →</a> */}
          </div>
        </section>
      </div>

      <footer className="mt-20 py-4 text-sm text-left text-gray-500 font-sans uppercase tracking-wider bg-gray-100">
        <div className="max-w-xl mx-auto px-4 flex justify-between items-center">
          <div>© 2025 Ali Ahunbáev <a href="#top" className="inline-block animate-bounce ml-1">↑</a></div>
          <div>
            <a href="https://youtu.be/UF8uR6Z6KLc?si=vmcaZlvr0Bf-DJ2F" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-200">
              Stay hungry
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
