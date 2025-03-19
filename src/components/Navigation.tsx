"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  
  return (
    <header className="w-full flex justify-between p-4">
      <div></div> {/* Empty div for spacing */}
      <div className="flex space-x-12">
        <Link 
          href="/store" 
          className={`link-hover font-bold text-dark ${pathname === '/store' ? 'text-accent' : ''}`}
        >
          STORE
        </Link>
        <Link href="mailto:contact@cbarrgs.com" className="link-hover font-bold text-dark">
          CONTACT
        </Link>
      </div>
    </header>
  );
}
