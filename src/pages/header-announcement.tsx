import Link from "next/link";
import "../app/styles/globals.css";

export default function HeaderAnnouncement() {

  return (
    <div>

    {/* Header Announcement */}
    <div className="bg-yellow-600 bg-opacity-50 text-white text-xs text-center uppercase tracking-widest py-2">
        <Link href="/availability-calendar" className="underline">2025 AVAILABILITY CALENDAR</Link>
    </div>

    </div>
  );
}
