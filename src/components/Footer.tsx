import { useState } from "react";
import { Youtube, Twitter, Instagram, Linkedin, X } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#story" },
    { label: "YouTube", href: "#youtube" },
    { label: "Contact Us", href: "#contact" },
  ],
  legal: [
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
  social: [
    { label: "YouTube", href: "https://youtube.com/@brajbuzztech", icon: Youtube },
    { label: "Twitter", href: "https://twitter.com/brajbuzztech", icon: Twitter },
    { label: "Instagram", href: "https://instagram.com/brajbuzztech", icon: Instagram },
    { label: "LinkedIn", href: "https://linkedin.com/company/brajbuzztech", icon: Linkedin },
  ],
};

export const Footer = () => {
  const [modalContent, setModalContent] = useState<"terms" | "privacy" | null>(null);

  const handleNavClick = (href: string) => {
    if (href === "#terms") {
      setModalContent("terms");
    } else if (href === "#privacy") {
      setModalContent("privacy");
    } else {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4">
                BrajBuzz Tech
              </h3>
              <p className="text-primary-foreground/70 max-w-md mb-6">
                Your money, your choice, our honest opinion. We test technology
                the way real people use it — in real life, not in labs.
              </p>
              <div className="flex items-center gap-4">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-display font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} BrajBuzz Tech. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with passion for honest tech journalism
            </p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={() => setModalContent(null)}
          />
          <div className="relative bg-background text-foreground rounded-2xl max-w-3xl max-h-[80vh] overflow-y-auto w-full p-8 animate-fade-up">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {modalContent === "terms" ? (
              <>
                <h2 className="font-display text-2xl font-bold mb-6">
                  Terms of Service
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="mb-4">
                    Welcome to BrajBuzz Tech. By accessing our website and services,
                    you agree to these terms.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    1. Use of Content
                  </h3>
                  <p className="mb-4">
                    All content on this website, including reviews, articles, and
                    videos, is for informational purposes only. Our opinions are
                    independent and based on our testing methodology.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    2. Intellectual Property
                  </h3>
                  <p className="mb-4">
                    All content, logos, and branding are the property of BrajBuzz
                    Tech. You may not reproduce or distribute our content without
                    permission.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    3. Disclaimer
                  </h3>
                  <p className="mb-4">
                    While we strive for accuracy, we cannot guarantee that all
                    information is error-free. Product recommendations are based on
                    our testing and may not reflect your personal experience.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    4. Contact
                  </h3>
                  <p>
                    For questions about these terms, contact us at
                    hello@brajbuzztech.com.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold mb-6">
                  Privacy Policy
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  <p className="mb-4">
                    At BrajBuzz Tech, we value your privacy. This policy explains
                    how we collect and use your information.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    1. Information We Collect
                  </h3>
                  <p className="mb-4">
                    We collect information you provide directly, such as contact
                    form submissions, and analytics data about site usage.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    2. How We Use Information
                  </h3>
                  <p className="mb-4">
                    We use your information to respond to inquiries, improve our
                    content, and understand how visitors use our site.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    3. Data Security
                  </h3>
                  <p className="mb-4">
                    We implement appropriate security measures to protect your
                    personal information from unauthorized access.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    4. Third-Party Services
                  </h3>
                  <p className="mb-4">
                    We may use third-party analytics and advertising services. These
                    services have their own privacy policies.
                  </p>
                  <h3 className="text-foreground font-semibold mt-6 mb-2">
                    5. Contact
                  </h3>
                  <p>
                    For privacy concerns, contact us at hello@brajbuzztech.com.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
