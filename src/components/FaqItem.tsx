import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors">
        <span className="font-semibold text-gray-800 pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5 px-5' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
