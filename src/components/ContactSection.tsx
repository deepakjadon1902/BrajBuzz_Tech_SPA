import { useState } from "react";
import { MapPin, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = {
  company: "BrajBuzz Tech",
  address: "Chicago, USA",
  email: "collaboration@brajbuzztech.com",
  hours: "Mon - Fri: 9:00 AM - 6:00 PM IST",
};

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Construct WhatsApp message
      const whatsappNumber = "919634359003"; // +91 9634359003
      const whatsappMessage = `*New Contact Form Submission - BrajBuzz Tech*

*Name:* ${formData.name}
*Email:* ${formData.email}
${formData.phone ? `*Phone:* ${formData.phone}` : ""}
*Subject:* ${formData.subject}

*Message:*
${formData.message}`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Open WhatsApp with the message
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');

      // Show success message
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-headline mb-4">
            Contact <span className="text-muted-foreground">Us</span>
          </h2>
          <p className="text-body">
            Have a question, collaboration idea, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="card-premium h-full">
              <h3 className="font-display text-xl font-semibold mb-6">
                {contactInfo.company}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Email</h4>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Working Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card-premium">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                          errors.name ? "border-accent" : "border-border"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-accent text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                          errors.email ? "border-accent" : "border-border"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-accent text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone <span className="text-muted-foreground">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring ${
                          errors.subject ? "border-accent" : "border-border"
                        }`}
                        placeholder="How can we help?"
                      />
                      {errors.subject && (
                        <p className="text-accent text-xs mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring resize-none ${
                        errors.message ? "border-accent" : "border-border"
                      }`}
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && (
                      <p className="text-accent text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
