import { footer } from "@/config/site";

export function Footer() {
  return (
    <footer className="mx-auto flex lg:hidden max-w-[1400px] items-center justify-center px-5 pb-8 pt-2 text-[11px] tracking-wide text-sky-100/60 sm:px-8 lg:px-12">
      <span>{footer.copyright}</span>
    </footer>
  );
}
