import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Projeto UI Design",
    description: "Interface limpa e moderna para aplicativo de finanças.",
    image: "https://via.placeholder.com/600x400?text=Projeto+1",
  },
  {
    title: "Landing Page Startup",
    description: "Página responsiva com foco em conversão para startup tech.",
    image: "https://via.placeholder.com/600x400?text=Projeto+2",
  },
  {
    title: "Dashboard Admin",
    description: "Painel administrativo com gráficos e controles intuitivos.",
    image: "https://via.placeholder.com/600x400?text=Projeto+3",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white">
      <header className="fixed top-0 left-0 w-full px-8 py-3 flex justify-between items-center bg-black/70 backdrop-blur-md shadow-lg z-50 border-b border-purple-900">
        <h1 className="text-2xl font-extrabold tracking-tight text-purple-400 drop-shadow">Meu Portfólio</h1>
        <nav className="space-x-8">
          <a href="#sobre" className="hover:text-purple-400 transition-colors font-medium">Sobre</a>
          <a href="#projetos" className="hover:text-purple-400 transition-colors font-medium">Projetos</a>
          <a href="#contato" className="hover:text-purple-400 transition-colors font-medium">Contato</a>
        </nav>
      </header>

      <section className="h-screen flex items-center justify-center px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Transformando ideias em experiências visuais
          </h2>
          <p className="mb-8 text-lg md:text-2xl text-zinc-300 max-w-2xl mx-auto">
            Design moderno, animações suaves e interfaces que encantam.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300">
            Fale comigo
          </Button>
        </motion.div>
      </section>

      <section id="sobre" className="py-24 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-4 text-purple-400">Sobre mim</h3>
        <p className="text-lg text-zinc-200">
          Sou um designer e desenvolvedor front-end apaixonado por criar interfaces impactantes, combinando estética, usabilidade e performance. Trabalho com marcas, startups e projetos criativos para dar vida a ideias através do design e da tecnologia.
        </p>
      </section>

      <section id="projetos" className="py-24 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center text-purple-400">Projetos</h3>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-zinc-900 rounded-3xl overflow-hidden shadow-xl border border-purple-900 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              whileHover={{ y: -8, scale: 1.04 }}
            >
              <img src={proj.image} alt={proj.title} className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity duration-300" />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-purple-300 mb-2">{proj.title}</h4>
                <p className="text-base text-zinc-300">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contato" className="py-24 px-6 max-w-lg mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8 text-purple-400">Contato</h3>
        <form className="space-y-5">
          <input type="text" placeholder="Nome" className="w-full p-4 rounded-xl bg-zinc-800 text-white border border-purple-900 focus:ring-2 focus:ring-purple-500 outline-none transition" />
          <input type="email" placeholder="E-mail" className="w-full p-4 rounded-xl bg-zinc-800 text-white border border-purple-900 focus:ring-2 focus:ring-purple-500 outline-none transition" />
          <textarea placeholder="Mensagem" rows="5" className="w-full p-4 rounded-xl bg-zinc-800 text-white border border-purple-900 focus:ring-2 focus:ring-purple-500 outline-none transition"></textarea>
          <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-fuchsia-600 hover:to-purple-600 w-full py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300">
            Enviar
          </Button>
        </form>
      </section>

      <footer className="text-center py-8 text-zinc-500 text-base border-t border-zinc-800 mt-12">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><i className="fab fa-github fa-lg"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><i className="fab fa-linkedin fa-lg"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition"><i className="fab fa-twitter fa-lg"></i></a>
        </div>
        © {new Date().getFullYear()} Meu Nome. Todos os direitos reservados.
      </footer>
    </div>
  );
}
