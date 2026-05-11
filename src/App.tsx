/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  TrendingUp, 
  ShieldAlert, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Send,
  BookOpen,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Estrategia Fiscal', href: '#fiscal' },
    { name: 'Defensa Tributaria', href: '#defensa' },
    { name: 'Laboral', href: '#laboral' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-navy-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Scale className="text-gold-400 w-8 h-8" />
          <span className="font-display font-medium text-2xl tracking-tighter uppercase whitespace-nowrap">PARRA <span className="text-gold-400">&</span> ASOCIADOS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-medium text-slate-400 hover:text-gold-400 transition-colors uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="border border-gold-400/50 text-gold-400 px-6 py-2 rounded-sm text-[11px] font-bold transition-all hover:bg-gold-400 hover:text-navy-950 tracking-[0.1em]"
          >
            SOLICITAR CITA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, align = 'center' }: { children: React.ReactNode, subtitle?: string, align?: 'center' | 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-display font-light mb-6 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl mx-auto md:mx-0 text-xl font-light italic"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      className={`h-[1px] bg-gold-400/50 mt-10 ${align === 'center' ? 'mx-auto' : ''}`}
    />
  </div>
);

// --- Main App ---

export default function App() {
  const [formData, setFormData] = useState({
    nombre: '',
    tipoCliente: 'Particular',
    telefono: '',
    email: '',
    resumen: '',
    privacidad: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        nombre: '',
        tipoCliente: 'Particular',
        telefono: '',
        email: '',
        resumen: '',
        privacidad: false
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen selection:bg-gold-400 selection:text-navy-950 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-32 md:pt-64 md:pb-48 overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(197,160,89,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-10"
            >
              <div className="h-px w-8 bg-gold-400/30" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold-400/80">Est. 2024 | Rigor Jurídico</span>
              <div className="h-px w-8 bg-gold-400/30" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-display font-light mb-8 tracking-tighter leading-[0.95]"
            >
              Excelencia Jurídica e <br />
              <span className="italic font-normal text-gold-400">Inteligencia Fiscal</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-slate-400/80 mb-14 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Servicios jurídicos de alta especialización en defensa tributaria y laboral, impulsados por tecnología avanzada para garantizar precisión absoluta.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 justify-center"
            >
              <a href="#contacto" className="bg-gold-400 hover:bg-gold-500 text-navy-950 px-10 py-5 rounded-sm font-bold flex items-center justify-center gap-3 transition-all tracking-widest text-xs uppercase shadow-2xl shadow-gold-400/10">
                Iniciar Consulta
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#fiscal" className="border border-white/10 hover:border-white/20 text-white/70 px-10 py-5 rounded-sm font-bold transition-all tracking-widest text-xs uppercase">
                Áreas de Práctica
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Module I: Planificación y Estrategia Fiscal */}
      <section id="fiscal" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading align="left">Estrategia Fiscal <br/><span className="text-gold-400 italic font-normal">de Vanguardia</span></SectionHeading>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed font-light">
                Utilizamos análisis predictivo para diseñar estructuras fiscales robustas que optimizan legalmente su carga impositiva y aseguran un cumplimiento impecable.
              </p>
              <ul className="space-y-6 mb-8">
                {[
                  'Optimización de patrimonios complejos',
                  'Planificación sucesoria estratégica',
                  'Estructuras societarias internacionales',
                  'Auditoría preventiva mediante IA'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="h-px w-4 bg-gold-400/50 group-hover:w-8 transition-all" />
                    <span className="text-slate-300 font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] elegant-card rounded-sm p-12 flex flex-col justify-between group overflow-hidden">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-400/60 mb-2">Informe Estratégico</p>
                    <h3 className="text-3xl font-display font-light">Efectividad del <br/>Cumplimiento</h3>
                  </div>
                  <BookOpen className="text-gold-400 w-8 h-8 opacity-40" />
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-8xl font-display font-light text-white leading-none">100<span className="text-gold-400 text-6xl">%</span></span>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Rigor Analítico & Soporte Tecnológico</p>
                  <div className="h-[1px] w-full bg-white/5 relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="h-full bg-gold-400" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Module II: Defensa ante Inspecciones */}
      <section id="defensa" className="py-32 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="Protección técnica y jurídica frente a los requerimientos de la administración.">
            Defensa y Litigación Tributaria
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Inspecciones",
                desc: "Asesoramiento exhaustivo durante procesos de inspección para garantizar la integridad de sus derechos."
              },
              {
                icon: FileText,
                title: "Contencioso",
                desc: "Representación experta en juzgados y tribunales económico-administrativos con enfoque estratégico."
              },
              {
                icon: Scale,
                title: "Dictámenes",
                desc: "Elaboración de informes periciales y opiniones jurídicas de alta solvencia técnica."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="elegant-card p-12 rounded-sm text-center group"
              >
                <div className="mb-8 flex justify-center">
                  <card.icon className="text-gold-400/40 w-12 h-12 group-hover:text-gold-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-normal mb-4 tracking-tight uppercase tracking-[0.1em]">{card.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Module III: Representación Legal Laboral */}
      <section id="laboral" className="py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
             <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="elegant-card rounded-sm aspect-video flex flex-col items-center justify-center p-16 text-center">
                 <div className="mb-8 h-px w-24 bg-gold-400/20" />
                 <h4 className="text-3xl font-display font-light mb-4">Compromiso en el <span className="italic">Derecho del Trabajo</span></h4>
                 <p className="text-slate-500 font-light tracking-wide text-sm max-w-sm">Soluciones jurídicas precisas para la gestión de relaciones laborales complejas.</p>
                 <div className="mt-8 h-px w-24 bg-gold-400/20" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <SectionHeading align="left">Asistencia Laboral Integral</SectionHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Despidos', desc: 'Asesoramiento en extinciones de contrato y despidos colectivos.' },
                  { title: 'Conflictos', desc: 'Resolución de reclamaciones de cantidad y derechos.' },
                  { title: 'Convenios', desc: 'Interpretación de marcos normativos y negociación.' },
                  { title: 'Social', desc: 'Defensa técnica especializada ante la Jurisdicción Social.' }
                ].map((item, idx) => (
                  <div key={idx} className="group border-b border-white/5 pb-6">
                    <h4 className="text-gold-400 font-display text-lg mb-2 tracking-wide uppercase">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Module IV: Formulario de Captación */}
      <section id="contacto" className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto elegant-card rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-black/50">
            <div className="w-full md:w-2/5 border-r border-white/5 p-16 flex flex-col justify-between">
              <div>
                <SectionHeading align="left">Inicie su <br/><span className="text-gold-400 italic">Consulta</span></SectionHeading>
                <p className="text-slate-400 font-light leading-relaxed mb-12">
                  Describa brevemente su situación jurídica. Nuestro equipo realizará un análisis preliminar especializado para asignarle al experto más idóneo.
                </p>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-gold-400">Privacidad</p>
                    <p className="text-sm font-light text-slate-500">Cifrado de grado legal</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold-400/20 flex items-center justify-center flex-shrink-0 group-hover:border-gold-400 transition-colors">
                    <TrendingUp className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-gold-400">Respuesta</p>
                    <p className="text-sm font-light text-slate-500">Compromiso en 24 horas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5 p-8 md:p-20 bg-white/[0.01]">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-20 h-20 border border-gold-400 rounded-full flex items-center justify-center mb-10"
                  >
                    <CheckCircle2 className="w-8 h-8 text-gold-400" />
                  </motion.div>
                  <h3 className="text-4xl font-display font-light mb-4">Consulta Recibida</h3>
                  <p className="text-slate-500 font-light text-lg">Un especialista contactará con usted a la brevedad.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-12 text-gold-400 font-light hover:text-white transition-colors tracking-widest text-xs uppercase"
                  >
                    Nueva Solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="border-b border-white/10 pb-2">
                      <label className="block text-[10px] font-mono uppercase text-gold-400/60 mb-2 tracking-[0.2em]">Nombre y Apellidos</label>
                      <input 
                        type="text" 
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                        className="w-full bg-transparent outline-none transition-colors py-2 text-lg font-light placeholder:text-white/10"
                        placeholder="Nombre completo"
                      />
                    </div>
                    <div className="border-b border-white/10 pb-2">
                    <label className="block text-[10px] font-mono uppercase text-gold-400/60 mb-2 tracking-[0.2em]">Tipo de Cliente</label>
                      <select 
                        value={formData.tipoCliente}
                        onChange={(e) => setFormData({...formData, tipoCliente: e.target.value})}
                        className="w-full bg-transparent outline-none py-2 text-lg font-light appearance-none text-slate-300"
                      >
                        <option value="Particular" className="bg-navy-950">Persona Física</option>
                        <option value="Empresa" className="bg-navy-950">Persona Jurídica</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="border-b border-white/10 pb-2">
                      <label className="block text-[10px] font-mono uppercase text-gold-400/60 mb-2 tracking-[0.2em]">Teléfono</label>
                      <input 
                        type="tel" 
                        required
                        pattern="[0-9]{9,}"
                        value={formData.telefono}
                        onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                        className="w-full bg-transparent outline-none transition-colors py-2 text-lg font-light placeholder:text-white/10"
                        placeholder="+34 000 000 000"
                      />
                    </div>
                    <div className="border-b border-white/10 pb-2">
                      <label className="block text-[10px] font-mono uppercase text-gold-400/60 mb-2 tracking-[0.2em]">Email</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent outline-none transition-colors py-2 text-lg font-light placeholder:text-white/10"
                        placeholder="contacto@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="border-b border-white/10 pb-2">
                    <label className="flex justify-between items-end mb-2">
                      <span className="text-[10px] font-mono uppercase text-gold-400/60 tracking-[0.2em]">Resumen de la Consulta</span>
                      <span className={`text-[10px] font-mono ${formData.resumen.length > 500 ? 'text-red-500' : 'text-slate-600'}`}>
                        {formData.resumen.length}/500
                      </span>
                    </label>
                    <textarea 
                      required
                      value={formData.resumen}
                      onChange={(e) => setFormData({...formData, resumen: e.target.value})}
                      className="w-full bg-transparent outline-none transition-colors py-2 text-lg font-light min-h-[100px] resize-none placeholder:text-white/10"
                      placeholder="Detalles del caso..."
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <input 
                      type="checkbox" 
                      id="privacidad"
                      required
                      checked={formData.privacidad}
                      onChange={(e) => setFormData({...formData, privacidad: e.target.checked})}
                      className="mt-1 w-4 h-4 accent-gold-400 bg-transparent border-white/10" 
                    />
                    <label htmlFor="privacidad" className="text-[10px] text-slate-500 leading-normal uppercase tracking-widest">
                      He leído y acepto la Política de Protección de Datos de carácter personal conforme al Reglamento General (UE) 2016/679.
                    </label>
                  </div>

                  <button 
                    disabled={formStatus === 'sending'}
                    className="w-full bg-transparent border border-gold-400/40 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950 text-gold-400 disabled:opacity-50 font-bold py-6 rounded-sm flex items-center justify-center gap-4 transition-all tracking-[0.2em] text-xs uppercase"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Analizando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar Petición Estratégica
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-navy-950">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center gap-3 justify-center mb-10">
            <Scale className="text-gold-400 w-6 h-6" />
            <span className="font-display font-medium text-xl tracking-widest uppercase">PARRA <span className="text-gold-400">&</span> ASOCIADOS</span>
          </div>
          <p className="text-slate-600 text-[10px] font-mono tracking-[0.2em] mb-8 uppercase">Derecho Tributario & Laboral | Tecnología al Servicio de la Excelencia</p>
          <div className="flex justify-center gap-8 text-[10px] font-mono uppercase text-slate-500 tracking-widest">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Cookies</a>
          </div>
          <p className="mt-12 text-slate-700 text-[10px]">© {new Date().getFullYear()} Parra & Asociados. Madrid, España.</p>
        </div>
      </footer>
    </div>
  );
}
