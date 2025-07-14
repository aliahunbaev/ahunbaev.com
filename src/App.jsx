
import ToggleSection from "./components/ToggleSection";


export default function App() {
  return (
    <div>
      <div className="max-w-xl mx-auto px-4 py-10 space-y-8 font-light text-md font-mono text-gray-900 tracking-wider">
      
      {/* Header */}
      <header className="flex text-sm justify-between items-center text-md lowercase font-regular mb-16">
        
        <a href="/"><div className="bg-red-700 text-white text-xl px-3 py-1">á</div></a>
        <nav className="space-x-6 font-light uppercase">
          <a class = "hover:text-red-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://playfighter.substack.com">writing</a>
          <a class = "hover:text-red-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://youtube.com/@ahunbaev">videos</a>
          <a class = "hover:text-red-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://instagram.com/alizahunbaev">instagram</a>
          <a class = "hover:text-red-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="mailto:alizahunbaev@gmail.com">contact</a>
        </nav>
      </header>

      {/* Intro */}
      <section className="pt-12 space-y-3">
      <h2 className="uppercase font-medium text-xl mb-6"> what’s up, i’m ali<span className="blinking-underscore"></span></h2>

        <p>i’m 18, from chicago.</p>
        <p>currently studying cs @ nyu.</p>
        <p>i’ve wanted to move to new york for 4 years. finally made it.</p>
        <p>chasing the fucking bag.</p>
      </section>

      {/* Projects */}
      <section className="pt-12 space-y-6">
        <h2 className="uppercase font-medium mb-6">currently working on:</h2>
        <p>
          <a href="https://instagram.com/combat.ny" target="_blank" rel="noopener noreferrer" className="text-red-600 underline underline-offset-4">combat</a> – community for builders based in nyc.
        </p>
        <p>
          <a href="https://playfighter.substack.com" target="_blank" rel="noopener noreferrer" className="text-red-600 underline underline-offset-4">playfighter</a> – my thoughts on cultivating strength & joy. you can also find that on <a href="https://youtube.com/@ahunbaev" target="_blank" rel="noopener noreferrer" className="text-red-600 underline underline-offset-4">youtube</a>.
        </p>
        <p><span className="text-red-600">what now?</span> – ai tool that turns dreams into an actionable blueprint. launches august.</p>
        <p><span className="text-red-600">boxing</span> – rookie. training for my first fight. creed (2015) pushed me to sign up.</p>
      </section>


      {/* Toggles */}
      <section className="pt-12 space-y-4">
        <ToggleSection title="my goal">
          <p>build a life of clarity, intensity, and freedom. earn it through work. design it with love.</p>
          <p>i want to be dangerous — as a builder, as a thinker, and as a man of god. i'm not interested in fitting in. i want to be undeniable.</p>
        </ToggleSection>

        <ToggleSection title="how i started">
          <p>i started with comics and clothes. then stories. then code. and somehow i’m still telling stories.</p>
          <p>my life changed when i realized i didn’t need permission to make things. now i’m building that life in public.</p>
        </ToggleSection>

        <ToggleSection title="my motivations">
          <p>i want to make my family proud. i want to inspire young creators. i want to retire my mom. i want to walk into any room and feel at peace because i know i’ve built something real.</p>
        </ToggleSection>

        <ToggleSection title="previous ventures">
          <p>– combat studio: streetwear & storytelling for builders (nyc pop-up, april 2025)</p>
          <p>– strictlybased site: webflow freelance for a creative agency</p>
          <p>– playfighter: newsletter + creative docuseries about ambition</p>
        </ToggleSection>
      </section>
      
      {/* Directory */}
      <section className="pt-12">
        <h2 className="uppercase font-medium mb-6">directory:</h2>
        <div className="flex flex-col space-y-6">
          <a href="mailto:alizahunbaev@gmail.com" className="text-red-600 hover:underline">contact →</a>
          <a href="https://instagram.com/alizahunbaev" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline ">instagram →</a>
          <a href="https://playfighter.substack.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">playfighter →</a>
          <a href="https://combatnewyork.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">combat →</a>
          <a href="https://combatnewyork.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">favorites →</a>
          <a href="https://combatnewyork.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">biography →</a>
        </div>
      </section>
      </div>
      <footer className="mt-20 py-4 text-sm text-left text-gray-500 font-mono uppercase tracking-wide bg-gray-100" >
      <div className="max-w-xl mx-auto px-4 flex justify-between items-center">
        <div>© 2025 ali ahunbáev <a href="#top" className="inline-block animate-bounce ml-1">↑</a></div>
  
        <div>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors duration-200">
            stay sharp
          </a>
  </div>
      </div>
      </footer>

    </div>
    
    
  );
}
