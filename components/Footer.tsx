import { contactLinks } from "@/utils/contact";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-16 p-4 text-center text-[#eeeeee]">
      <div className="flex flex-wrap items-center justify-center">
        {contactLinks.map(({ url, site, icon }) => (
          <Link key={url} href={url} target="_blank" rel="noopener noreferrer">
            {icon ? (
              <Image src={icon} width={48} height={48} alt={`${site} link`} />
            ) : (
              site
            )}
          </Link>
        ))}
      </div>
      Copyright &copy; {new Date().getFullYear()} Daniel Famiyeh
    </div>
  );
}
