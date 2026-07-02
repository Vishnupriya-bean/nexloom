"use client";

import { useEffect } from "react";

export default function BookACallPage() {
  useEffect(() => {
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            let script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "discovery", { origin: "https://cal.com" });
      Cal.ns.discovery("inline", {
        elementOrSelector: "#cal-inline",
        config: { layout: "month_view" },
        calLink: "stevefowler/book-an-call-discovery-a-complimentary-call-45-min",
      });
      Cal.ns.discovery("ui", { hideEventTypeDetails: false, layout: "month_view" });
    }
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden text-center pt-[64px] pb-[24px]">
        {/* Glow behind */}
        <div className="pointer-events-none absolute inset-0 -top-[40%] h-[420px]" aria-hidden>
          <div
            className="w-full h-full"
            style={{
              background: "radial-gradient(60% 80% at 50% 0%, rgba(43,108,246,0.22), transparent 70%)"
            }}
          />
        </div>

        <div className="relative max-w-[1100px] mx-auto px-[28px]">
          <div className="inline-block text-[var(--color-muted)] font-semibold text-[13px] tracking-[0.12em] uppercase border border-[var(--color-line)] rounded-full px-[16px] py-[7px] mb-[22px]">
            Discovery call · 45 minutes · complimentary
          </div>
          
          <h1 className="text-[clamp(34px,5vw,52px)] leading-[1.05] tracking-[-0.03em] font-extrabold relative text-white">
            Let's find what's <span className="gradient-text">slowing you down.</span>
          </h1>
          
          <p className="text-[clamp(17px,2.2vw,20px)] text-[var(--color-muted)] mt-[20px] mx-auto max-w-[56ch] relative">
            A short call, no pitch. Bring your most annoying technology problem. We'll tell you what we'd look at first, whether we're the right fit, and what it would take. Pick a time below.
          </p>
        </div>
      </section>

      <section className="py-[28px] pb-[80px]">
        <div className="max-w-[1100px] mx-auto px-[28px]">
          <div className="bg-[var(--color-panel)] border border-[var(--color-line)] rounded-[18px] p-[10px] min-h-[640px] relative">
            <div id="cal-inline" className="w-full h-[680px] overflow-auto rounded-[12px]">
              <div className="text-center text-[var(--color-muted)] text-[14px] p-[18px]">
                Loading the calendar… if it doesn't appear,{" "}
                <a 
                  className="gradient-text font-semibold" 
                  href="https://cal.com/stevefowler/book-an-call-discovery-a-complimentary-call-45-min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  open the booking page directly →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
