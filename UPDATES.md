we are coming from another work session with a different agent. here is a summary of what we’ve done to carry into our new session:

**Portfolio Infrastructure Migration — Full Summary**

**Domain Purchase**
- Bought **bixvongoeler.com** through **Cloudflare Registrar** for $10.46/yr (at-cost pricing, auto-renew enabled, expires 2027-03-21)
- WHOIS privacy active, personal data redacted

**Migration: GitHub Pages → Cloudflare Pages**
- **Previous setup:** Astro static site deployed via GitHub Actions to bixvongoeler.github.io/portfolio/
- **New setup:** Cloudflare Pages (free tier), auto-deploys on push to main branch, served at bixvongoeler.com

**Code changes made to the bixvongoeler/portfolio repo:**
- astro.config.mjs: Changed site to "https://bixvongoeler.com", removed base: "/portfolio" entirely
- src/config.ts: Stripped /portfolio prefix from all asset paths (profile photo + 5 project images)
- Deleted .github/workflows/deploy.yml (no longer needed)

**Cloudflare Pages config:**
- Connected to bixvongoeler/portfolio GitHub repo
- Framework preset: Astro, build command: npm run build, output: dist, branch: main
- Deployed at portfolio-cvm.pages.dev
- Custom domains added: bixvongoeler.com and www.bixvongoeler.com (Cloudflare auto-created CNAME record)
- Preview branch deployments disabled (set to "None") to prevent gh-pages branch from triggering builds

**Redirect: Old URL → New Domain**
- Created gh-pages branch (orphan) with a single index.html containing a &lt;meta http-equiv="refresh"&gt; redirect to https://bixvongoeler.com
- Also includes &lt;link rel="canonical"&gt; and fallback link text
- GitHub Pages source set to gh-pages branch, root /
- This is the only viable redirect method since GitHub Pages doesn't support server-side 301s and DNS now points to Cloudflare Pages, not GitHub

**Cloudflare Web Analytics**
- Enabled (free, auto-injected since site is on Cloudflare Pages)
- Provides: page views, visits, top pages, referrers, countries, browsers, Core Web Vitals
- The "Account Analytics" dashboard showing thousands of requests is bot/crawler traffic — real visitor data is under Analytics & Logs → Web Analytics

**Analytics Tool Selection: Rybbit (Self-Hosted)**
- Researched and compared Rybbit, PostHog, Umami, GoatCounter, and Counterscale
- **Chose Rybbit** for session replay (watch how recruiters navigate portfolio), funnels, user journeys, and real-time dashboard
- Rybbit's cloud tier no longer has a free plan (just a 7-day trial), so we're going the **self-hosted route**
- Self-hosted gives unlimited pageviews, unlimited sites, session replay included, no trial expiration
- Cloud-only features we lose: Web Vitals (covered by Cloudflare anyway), email reports, Google Search Console integration — acceptable tradeoffs

**Current Task: Self-Hosting Rybbit on DigitalOcean**

**VPS plan:**
- DigitalOcean account created, $200 GitHub Student credits claimed (valid 1 year)
- Plan: **$6/month Basic Droplet** (1 vCPU, 1GB RAM, 25GB SSD, 1TB transfer) — flat rate, no surprise bills
- Credits last the full year easily (~$72 total). Set a billing alert at $10/month as safety net.
- Card must remain on file to use credits (can't remove default payment method), but card only gets charged if credits are exhausted

**Setup plan (not yet started):**
1. Create the Droplet — Ubuntu 24.04 LTS, NYC1 region, SSH key auth
2. Add DNS record in Cloudflare: analytics.bixvongoeler.com → Droplet IP (A record, **DNS only / grey cloud**, not proxied — Caddy needs direct access for Let's Encrypt SSL)
3. SSH into VPS, install Docker (curl -fsSL https://get.docker.com | sh)
4. Clone Rybbit repo, run ./setup.sh analytics.bixvongoeler.com — this spins up 5 Docker containers (Caddy, backend, client, PostgreSQL, ClickHouse) with auto SSL
5. Create admin account at https://analytics.bixvongoeler.com/signup, then set DISABLE_SIGNUP=true in .env and restart
6. Add site in Rybbit dashboard for bixvongoeler.com
7. Add tracking script to Astro portfolio layout: &lt;script src="https://analytics.bixvongoeler.com/api/script.js" data-site-id="1" defer&gt;&lt;/script&gt;
8. Push to main, Cloudflare Pages auto-deploys, analytics go live
