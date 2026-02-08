
import React, { useState } from 'react';
import { CONTACT, SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, Github, Phone, Send, CheckCircle, MapPin, ExternalLink, Cog, Cpu, Globe, Layers, ShieldCheck, MonitorCheck, Terminal, Lightbulb, Zap, Rocket, Hammer, Database, BrainCircuit } from 'lucide-react';

const SERVICES = [
  { id: 'robotics', name: 'Robotics Design', icon: <Cpu size={16} /> },
  { id: 'embedded', name: 'Embedded Systems', icon: <Cog size={16} /> },
  { id: 'iot', name: 'IoT Solutions', icon: <Globe size={16} /> },
  { id: 'mechanical', name: 'Mechanical CAD', icon: <Layers size={16} /> },
  { id: 'pcb', name: 'PCB Layout', icon: <ShieldCheck size={16} /> },
  { id: 'firmware', name: 'Firmware Dev', icon: <Terminal size={16} /> },
  { id: 'control', name: 'Control Systems', icon: <MonitorCheck size={16} /> },
  { id: 'simulation', name: 'MATLAB Simulation', icon: <Zap size={16} /> },
  { id: 'automation', name: 'Industrial Automation', icon: <Hammer size={16} /> },
  { id: 'ai', name: 'AI Integration', icon: <BrainCircuit size={16} /> },
  { id: 'software', name: 'Software Dev', icon: <Database size={16} /> },
  { id: 'prototyping', name: 'Rapid Prototyping', icon: <Rocket size={16} /> },
  { id: 'consulting', name: 'Tech Consulting', icon: <Lightbulb size={16} /> },
  { id: 'other', name: 'Other Inquiry', icon: <Send size={16} /> },
];

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceName) 
        ? prev.filter(s => s !== serviceName) 
        : [...prev, serviceName]
    );
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setFormState('sending');
    
    const servicesText = selectedServices.length > 0 ? selectedServices.join(', ') : 'General Engineering Inquiry';
    const bodyText = `Inquiry from: ${formData.name}\nEmail: ${formData.email}\nRequested Services: ${servicesText}\n\nMessage:\n${formData.message}`;
    const mailtoUrl = `mailto:${CONTACT.email}?subject=Project Inquiry - ${formData.name}&body=${encodeURIComponent(bodyText)}`;
    
    setTimeout(() => {
      setFormState('sent');
      window.location.href = mailtoUrl;
      setFormData({ name: '', email: '', message: '' });
      setSelectedServices([]);
      setTimeout(() => setFormState('idle'), 5000);
    }, 800);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return <Mail size={22} />;
      case 'Phone': return <Phone size={22} />;
      case 'Linkedin': return <Linkedin size={22} />;
      case 'Github': return <Github size={22} />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Get In Touch</h2>
        <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-all">
        <div className="grid lg:grid-cols-5">
          {/* Info Side */}
          <div className="lg:col-span-2 bg-indigo-600 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
             
             <div>
               <h3 className="text-3xl font-black mb-6 tracking-tight text-white">Project Inquiry</h3>
               <p className="text-indigo-100 mb-10 leading-relaxed font-medium">
                 Looking for engineering expertise? Select one or more services you are interested in and I'll get back to you shortly.
               </p>

               <div className="space-y-6">
                 {SOCIAL_LINKS.map((link) => (
                   <a 
                     key={link.name} 
                     href={link.href} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="flex items-center gap-4 group w-full"
                   >
                     <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center group-hover:bg-white/25 transition-all">
                       {getIcon(link.icon)}
                     </div>
                     <div className="min-w-0">
                       <p className="text-indigo-200 text-[10px] uppercase font-black tracking-widest">{link.name}</p>
                       <p className="text-sm font-bold truncate group-hover:text-indigo-100">
                         {link.name === 'Gmail' ? CONTACT.email : link.name === 'WhatsApp' ? '+20 111 902 7639' : link.name}
                       </p>
                     </div>
                   </a>
                 ))}
               </div>
             </div>

             <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                <MapPin className="text-indigo-200" size={20} />
                <span className="text-sm font-bold">Cairo, Egypt</span>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-8 md:p-12">
            {formState === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-black mb-3 text-slate-900 dark:text-white">Redirecting...</h3>
                <p className="text-slate-500 dark:text-slate-400">Opening your email client with your selected services details.</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-8">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">Select Service(s) - Multi-Select</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => toggleService(s.name)}
                        className={`flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl border-2 font-bold text-[10px] md:text-xs transition-all ${
                          selectedServices.includes(s.name) 
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 shadow-md shadow-indigo-600/10' 
                          : 'border-slate-100 dark:border-slate-800 text-slate-500 hover:border-slate-200 dark:hover:border-slate-700'
                        }`}
                      >
                        {s.icon}
                        <span className="truncate">{s.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Full Name</label>
                    <input 
                      required 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Email Address</label>
                    <input 
                      required 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="engineer@example.com"
                      className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Message</label>
                  <textarea 
                    required 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Provide details about your project requirements..."
                    className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-indigo-600 transition-all font-medium text-slate-900 dark:text-white resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full py-5 bg-indigo-600 text-white font-black rounded-xl hover:bg-indigo-700 hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3"
                >
                  {formState === 'sending' ? 'Preparing Inquiry...' : (
                    <>Request Inquiry <ExternalLink size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
