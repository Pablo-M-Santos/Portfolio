import LogLine from "./LogLine";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex min-h-20 w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4 font-mono text-xs leading-4 text-muted sm:px-8">
        <p>Pablo Moreira Santos · @Pablo-M-Santos · Fortaleza</p>
        <LogLine>INFO [io.vue.java] pablo-portfolio stopped. Até à próxima.</LogLine>
      </div>
    </footer>
  );
}
