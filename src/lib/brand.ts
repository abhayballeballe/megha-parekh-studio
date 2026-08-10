export const PHONE_DISPLAY = "+91 98923 50754";
export const PHONE_INTL = "919892350754";
export const INSTAGRAM_URL = "https://www.instagram.com/trikaal.megha/";
export const INSTAGRAM_HANDLE = "@trikaal.megha";
export const WA_MESSAGES = { general: "Hi Megha, I found you through your website. I have something on my mind but I’m not sure whether Tarot or Vastu would be more relevant. Can I briefly share my concern with you?", tarot: "Hi Megha, I found you through your website and I’d like to book a Tarot session. My question is around [career / relationship / money-business / another decision]. Please let me know how I can proceed.", vastu: "Hi Megha, I found you through your website and I’d like to discuss Vastu for my [home / office / property]. Please let me know what information you need from me to begin." } as const;
export type WhatsAppIntent = keyof typeof WA_MESSAGES;
export function whatsappLink(intent: WhatsAppIntent = "general") { return `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(WA_MESSAGES[intent])}`; }
export const NAV_LINKS = [{ to: "/about", label: "About" }, { to: "/tarot", label: "Tarot" }, { to: "/vastu", label: "Vastu" }] as const;
export const FOOTER_LINKS = [{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/tarot", label: "Tarot" }, { to: "/vastu", label: "Vastu" }, { to: "/stories", label: "Client Stories" }, { to: "/contact", label: "Contact" }] as const;
export const TAGLINE = "Tarot • Vastu • Personal Guidance";
export const TRAINING_LINE = "Megha studied Vastu under a MahaVastu Acharya and applies the principles and remedies she learned through that training.";
export const DISCLAIMER = "Tarot and Vastu consultations are offered as personal, traditional and spiritual guidance services. They are not substitutes for medical, mental-health, legal, financial or other regulated professional advice. No particular outcome is guaranteed.";
