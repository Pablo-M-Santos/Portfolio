import LogLine from "./LogLine";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex min-h-20 w-full max-w-[1200px] flex-col items-center justify-between gap-2 px-5 py-6 text-center font-mono text-xs leading-5 text-muted sm:flex-row sm:gap-x-6 sm:py-4 sm:text-left sm:leading-4 sm:px-8">
        <p>Pablo Moreira Santos · @Pablo-M-Santos · Fortaleza</p>
        <LogLine>INFO [io.vue.java] pablo-portfolio stopped. Até à próxima.</LogLine>
      </div>
    </footer>
  );
}