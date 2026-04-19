import Link from "next/link";

interface InfoCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export default function InfoCard({ title, description, href, icon }: InfoCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-[#E8E8E8] p-6 hover:shadow-lg hover:border-[#00247D]/30 transition-all duration-300"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-[#00247D] group-hover:text-[#003399] mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 text-sm font-medium text-[#00247D] flex items-center gap-1 group-hover:gap-2 transition-all">
        Czytaj więcej
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
