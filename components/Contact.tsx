"use client";

import { useEffect, useRef } from "react";
import { Mail, Send, User, GitBranch, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aman-singh-896387135/",
    icon: User,
    description: "Connect professionally",
  },
  {
    label: "GitHub",
    href: "https://github.com/AmanSingh0909",
    icon: GitBranch,
    description: "View my code",
  },
  {
    label: "Email",
    href: "mailto:aman.singhy018@gmail.com",
    icon: Send,
    description: "Send a message",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animate-fade-in-up");
            (entry.target as HTMLElement).style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRef.current?.querySelectorAll<HTMLElement>(".contact-item").forEach((el, index) => {
      el.style.opacity = "0";
      el.classList.add(`stagger-${(index % 5) + 1}`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <p className="text-primary text-sm mb-4 font-mono">&mdash; Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">Let&apos;s Connect</h2>
        <p className="text-muted max-w-xl mx-auto mb-12 text-lg">
          I&apos;m always interested in discussing data engineering opportunities,
          collaborating on projects, or chatting about data architecture.
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:aman.singhy018@gmail.com"
          className="contact-item opacity-0 inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-primary-light text-white font-medium rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 group mb-16"
        >
          <Mail className="group-hover:rotate-12 transition-transform" size={20} />
          Get in Touch
          <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="contact-item opacity-0 group flex flex-col items-center gap-3 p-6 bg-surface border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 min-w-[140px]"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">{link.label}</p>
                  <p className="text-muted text-xs">{link.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
