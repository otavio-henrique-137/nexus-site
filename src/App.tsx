/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Leaf, 
  Calculator, 
  Zap, 
  CloudRain, 
  Map, 
  Users, 
  Target, 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Globe
} from 'lucide-react';
import { SOFTWARES, TEAM, VALUES } from './constants';

const IconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  CloudRain: <CloudRain className="w-6 h-6" />,
  Map: <Map className="w-6 h-6" />
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-stone-200 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <img src="/nexus-logo.png" alt="NEXUS Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
              <span className="text-2xl font-black tracking-tighter text-white">NEXUS</span>
            </div>
            <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-stone-400">
              <a href="#objetivo" className="hover:text-emerald-400 transition-colors">Objetivo</a>
              <a href="#softwares" className="hover:text-emerald-400 transition-colors">Softwares</a>
              <a href="#equipe" className="hover:text-emerald-400 transition-colors">Equipe</a>
              <a href="#contato" className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-emerald-400 transition-all active:scale-95">Contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Globe className="w-3 h-3" />
                Global Climate Action • ODS 13
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9] uppercase">
                Software <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-600">Sustentável</span> para o Planeta.
              </h1>
              <p className="text-xl text-stone-400 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
                Nexus é a fronteira tecnológica da sustentabilidade. Criamos ferramentas que transformam a crise climática em oportunidades de regeneração.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-emerald-500 text-black rounded-2xl font-bold hover:bg-emerald-400 transition-all flex items-center gap-3 group shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  Explorar Soluções
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                  Nossa Visão
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Mission & Values */}
      <section id="objetivo" className="py-32 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 text-[12rem] font-black text-white/[0.02] select-none">01</div>
              <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter flex items-center gap-4">
                <Target className="text-emerald-500 w-8 h-8" /> Nosso Objetivo
              </h2>
              <p className="text-xl text-stone-400 leading-relaxed font-light">
                Capacitar a próxima geração de empresas sustentáveis. Alinhados com a <span className="text-white font-medium">ODS 13 da ONU</span>, nossa inteligência de dados é a bússola para um mundo carbono zero.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] p-12 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all" />
              <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter flex items-center gap-4">
                <Leaf className="text-emerald-500 w-8 h-8" /> Nossa Missão
              </h2>
              <p className="text-xl text-stone-400 leading-relaxed font-light">
                Desenvolver código que respira. Cada linha de software Nexus é projetada para reduzir o impacto ambiental e promover a resiliência climática global.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.03] transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Heart className="w-7 h-7 text-stone-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="font-black text-xl text-white mb-3 uppercase tracking-tight">{value.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Cards */}
      <section id="softwares" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Soluções <span className="text-emerald-500">Nexus</span></h2>
              <p className="text-xl text-stone-500 font-light">Tecnologia de ponta para os desafios mais críticos do nosso tempo.</p>
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500/50 border-b border-emerald-500/20 pb-2">
              Software Ecosystem v2.0
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOFTWARES.map((software, index) => (
              <motion.div
                key={software.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#0A0A0A] p-10 rounded-[2rem] border border-white/5 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all" />
                
                <div className="w-16 h-16 bg-white/5 text-emerald-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {IconMap[software.icon]}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-none uppercase tracking-tighter">{software.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-8 font-light">
                  {software.description}
                </p>
                <button className="w-full py-4 bg-white/5 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-500 hover:text-black transition-all">
                  Ver Detalhes
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">O Time por trás da <span className="text-emerald-500">Inovação</span></h2>
            <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">Especialistas comprometidos com a excelência técnica e impacto ambiental.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-stone-900 border border-white/5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">{member.role}</div>
                    <div className="text-lg font-bold text-white uppercase tracking-tighter">{member.name}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black border-t border-white/5 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-20 mb-32">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-10">
                <img src="/nexus-logo.png" alt="NEXUS Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
                <span className="text-3xl font-black tracking-tighter text-white">NEXUS</span>
              </div>
              <p className="text-xl text-stone-500 font-light max-w-md mb-12">
                Liderando a revolução do software sustentável. Juntos, codificamos um mundo mais verde.
              </p>
              <div className="flex gap-6">
                {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                  <a key={social} href="#" className="text-xs font-black uppercase tracking-widest text-stone-500 hover:text-emerald-400 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Explorar</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li><a href="#objetivo" className="text-stone-500 hover:text-white transition-colors">Nosso Objetivo</a></li>
                <li><a href="#softwares" className="text-stone-500 hover:text-white transition-colors">Ecossistema</a></li>
                <li><a href="#equipe" className="text-stone-500 hover:text-white transition-colors">Time</a></li>
                <li><a href="#" className="text-stone-500 hover:text-white transition-colors">Manifesto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-10">Conectar</h4>
              <ul className="space-y-6 text-sm font-medium">
                <li className="flex items-center gap-4 text-stone-500 group cursor-pointer hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-emerald-500" />
                  hello@nexus.eco
                </li>
                <li className="flex items-center gap-4 text-stone-500 group cursor-pointer hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-emerald-500" />
                  +55 11 9999 9999
                </li>
                <li className="flex items-center gap-4 text-stone-500 group cursor-pointer hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-500" />
                  SP, Brasil
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-stone-600">
            <p>© 2026 NEXUS SUSTAINABLE SOFTWARE • ALL RIGHTS RESERVED</p>
            <div className="flex gap-12">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
