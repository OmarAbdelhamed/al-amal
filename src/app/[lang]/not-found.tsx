import Link from "next/link";
import { EmptyArt } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="empty">
          <EmptyArt />
          <h3>Page not found · لم نجد هذه الصفحة</h3>
          <Link className="btn" href="/en/courses">Explore courses · تصفّح الدورات</Link>
        </div>
      </div>
    </section>
  );
}
