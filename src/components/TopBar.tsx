import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground py-2 px-4 text-sm">
    <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
      <a href="https://wa.me/12366134007" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Phone className="w-4 h-4" />
        <span>WhatsApp: +1 (236) 613-4007</span>
      </a>
      <div className="flex items-center gap-6">
        <a href="mailto:admin@brainboxworld.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail className="w-4 h-4" />
          <span>admin@brainboxworld.com</span>
        </a>
        <div className="hidden sm:flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Mon-Sat : 9 AM to 6 PM</span>
        </div>
      </div>
    </div>
  </div>
);

export default TopBar;
