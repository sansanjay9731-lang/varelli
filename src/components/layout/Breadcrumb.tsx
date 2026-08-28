import Link from "next/link";
import { ChevronRight } from "@/components/ui/icons";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { buildBreadcrumbSchema } from "@/components/seo/schemas/breadcrumb";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: "Home", href: "/" }, ...items];
  const schema = buildBreadcrumbSchema(
    allItems.map((item) => ({
      name: item.name,
      url: `https://varelli.in${item.href}`,
    }))
  );

  return (
    <>
      <SchemaOrg schema={schema} />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
        {allItems.map((item, index) => (
          <span key={item.href} className="flex items-center gap-1.5">
            {index < allItems.length - 1 ? (
              <>
                <Link
                  href={item.href}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors font-body"
                >
                  {item.name}
                </Link>
                <ChevronRight size={12} className="text-[var(--text-muted)]" />
              </>
            ) : (
              <span className="text-xs text-[var(--gold)] font-body">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
