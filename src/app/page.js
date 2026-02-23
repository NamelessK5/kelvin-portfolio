import Hero from "@/components/Hero";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* 3D HERO COMPONENT */}
      <Hero />

      {/* Content Sections */}
      <div className="px-8 py-16 space-y-32">

        {/* HERO TEXT SECTION */}
        <section className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Kelvin Ejeobi</h1>
          <p className="text-xl opacity-80">
            Web Development Student – Spring 2026
          </p>
          <p className="max-w-2xl mx-auto opacity-70">
            Building interactive web applications using React, Next.js, and AI integration.
          </p>
        </section>

        {/* ABOUT SECTION */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="opacity-80">
            I am a junior at Kean University, majoring in Computer Science 
            with an Information Systems option. This portfolio demonstrates 
            my coursework projects and an AI-powered feature integrated using the OpenAI API.
          </p>
        </section>

        {/* PROJECTS SECTION */}
        <section className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="opacity-70">
              Brief description of your project. What it does and what tech you used.
            </p>
            <p className="text-sm opacity-50 mt-2">
              Tech: React, Node.js, MongoDB
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="opacity-70">
              Brief description of another project.
            </p>
            <p className="text-sm opacity-50 mt-2">
              Tech: Next.js, Tailwind
            </p>
          </div>

          <a 
            href="/projects.pdf" 
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-lg font-semibold"
          >
            Download Full Project Portfolio (PDF)
          </a>
        </section>

        {/* AI SECTION */}
       <section className="max-w-3xl mx-auto space-y-4">
  <h2 className="text-3xl font-semibold">AI Assistant</h2>
  <p className="opacity-70">
    Ask questions about my projects and experience using the AI assistant below.
  </p>

  <AIChat />
</section>

        {/* CONTACT SECTION */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p>Email: kelvin.ejeobi@gmail.com</p>
         { /*<p>GitHub: github.com/yourusername</p> */ }
        </section>

      </div>

    </main>
  );
}