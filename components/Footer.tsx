export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted font-mono">
            Built with Next.js & Tailwind CSS
          </p>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Aman Kumar Singh
          </p>
        </div>
      </div>
    </footer>
  );
}