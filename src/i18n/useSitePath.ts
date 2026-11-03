import { usePathname } from "next/navigation";
import { sitePath } from "./config";

/**
 * usePathname() without the language prefix: "/about/" on every domain.
 * A statically built page sees its app path (/en/about/) on the server and
 * the visible one (/about/) in the browser; the components that pick a menu
 * item or a date by path use this one, so both renders agree.
 */
export function useSitePath(): string | null {
  const pathname = usePathname();
  return pathname === null ? null : sitePath(pathname);
}
