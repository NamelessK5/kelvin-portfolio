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
          <h1 className="text-5xl font-bold"> Kelvin Ejeobi</h1>
          <p className="text-xl opacity-80">
            Computer Science Student
          </p> 
          <p className="max-w-2xl mx-auto opacity-70">
              I build interactive web applications using React, Next.js, and AI-powered systems.

          </p>
        </section>
        <div className="border-t border-zinc-800 my-24"></div>

        {/* ABOUT SECTION */}
        <section className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="opacity-80">
            I am a junior at Kean University, majoring in Computer Science 
            with an Information Systems option. This portfolio demonstrates 
            my coursework projects and an AI-powered feature integrated using the OpenAI API.
          </p>
        </section>
        <div className="border-t border-zinc-800 my-24"></div>

        {/* PROJECTS SECTION */}
        <section className="max-w-5xl mx-auto">
  <h2 className="text-3xl font-semibold mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">
            <h3 className="text-xl font-semibold"> Donut Shop Web App</h3>
            <p className="opacity-70">
              <p className="text-zinc-400">
  Collaborated in a team of three to design and develop a five-page interactive 
  website featuring a dynamic donut pricing calculator. Implemented client-side 
  JavaScript logic to compute real-time pricing based on user selections.
</p>
            </p>
            <p className="text-sm opacity-50 mt-2">
              Tech: Html, JavaScript
            </p>
            <a
  href="https://glazed-and-coded-website.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
>
  View Live Project
</a>
            
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Interactive Portfolio Website</h3>
            <p className="opacity-70">
 <p className="text-zinc-400">
  A full-stack portfolio application built with Next.js featuring an interactive 
  3D Spline integration and an AI-powered assistant connected to the OpenAI API. 
  Designed with server-side API routes and deployed to production using Vercel.
</p>        </p>
            <p className="text-sm opacity-50 mt-2">
                      Tech: Next.js, React, Tailwind CSS, JavaScript, OpenAI API, Spline


            </p>
          </div>

          <a 
            href="/resume.pdf" 
            target="_blank"
            className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-lg font-semibold"
          >
            Download Resume (PDF)
          </a>  
        </section>   
        <div className="border-t border-zinc-800 my-24"></div>

        {/* AI SECTION */}
       <section className="max-w-3xl mx-auto space-y-4">
  <h2 className="text-3xl font-semibold text-center">AI Assistant</h2>
<p className="text-center text-zinc-500">
  Ask me about my projects, technologies I use, or how I built this portfolio.
</p>

  <AIChat />
</section>
<div className="border-t border-zinc-800 my-24"></div>

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