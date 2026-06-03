import { Mail, Send, User, GitBranch } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-primary text-sm mb-4">&mdash;</p>
        <h2 className="text-4xl font-bold font-mono mb-4">Let's Connect</h2>
        <p className="text-muted max-w-xl mx-auto mb-12">
          I'm always interested in discussing data engineering opportunities,
          collaborating on projects, or chatting about data architecture.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="mailto:aman.singhy018@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-full hover:from-primary/90 hover:to-secondary/90 transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            <Mail size={18} />
            Get in Touch
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/aman-singh-896387135/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-surface border border-border rounded-xl text-muted hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
          >
            <User size={24} />
          </a>
          <a
            href="https://github.com/AmanSingh0909"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-surface border border-border rounded-xl text-muted hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
          >
            <GitBranch size={24} />
          </a>
          <a
            href="mailto:aman.singhy018@gmail.com"
            className="p-4 bg-surface border border-border rounded-xl text-muted hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300"
          >
            <Send size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}