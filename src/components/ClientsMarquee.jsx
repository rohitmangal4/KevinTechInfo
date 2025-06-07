export default function ClientsMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap py-10 bg-gradient-radial from-cyan-500/10 via-sky-500/5">
      <div className="inline-block animate-marquee space-x-12 text-lg font-semibold text-cyan-400">
        <span>🔹 Stripe</span>
        <span>🔹 Notion</span>
        <span>🔹 Zapier</span>
        <span>🔹 Plaid</span>
        <span>🔹 Linear</span>
        <span>🔹 Retool</span>
        <span>🔹 Sentry</span>
        <span>🔹 Vercel</span>
        <span>🔹 ClickUp</span>
      </div>
    </div>
  );
}
