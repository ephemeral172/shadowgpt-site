/**
 * Generates public/sitemap.xml from BLOG_POSTS and static routes.
 * Run: npm run sitemap (or automatically before npm run build).
 */
import { writeFileSync } from "fs";
import { BLOG_POSTS } from "../src/data/blogPosts.js";

const BASE = "https://shadowgpt.app";
const STATIC_LASTMOD = "2026-03-01";

const staticUrls = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/Terms", changefreq: "monthly", priority: "0.5" },
  { path: "/Privacy", changefreq: "monthly", priority: "0.5" },
  { path: "/FAQ", changefreq: "monthly", priority: "0.7" },
  { path: "/Help", changefreq: "monthly", priority: "0.7" },
  { path: "/Security", changefreq: "monthly", priority: "0.6" },
  { path: "/Integrations", changefreq: "monthly", priority: "0.6" },
  { path: "/Contact", changefreq: "monthly", priority: "0.6" },
  { path: "/Status", changefreq: "daily", priority: "0.5" },
  { path: "/Blog", changefreq: "weekly", priority: "0.8" },
];

const latestPostDate = BLOG_POSTS.length
  ? BLOG_POSTS.reduce((max, p) => (p.date > max ? p.date : max), BLOG_POSTS[0].date)
  : STATIC_LASTMOD;

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

for (const u of staticUrls) {
  const lastmod = u.path === "/Blog" ? latestPostDate : STATIC_LASTMOD;
  lines.push("  <url>");
  lines.push(`    <loc>${escapeXml(BASE + u.path)}</loc>`);
  lines.push(`    <lastmod>${lastmod}</lastmod>`);
  lines.push(`    <changefreq>${u.changefreq}</changefreq>`);
  lines.push(`    <priority>${u.priority}</priority>`);
  lines.push("  </url>");
}

for (const post of BLOG_POSTS) {
  const path = `/Blog/${post.slug}`;
  lines.push("  <url>");
  lines.push(`    <loc>${escapeXml(BASE + path)}</loc>`);
  lines.push(`    <lastmod>${post.date}</lastmod>`);
  lines.push("    <changefreq>monthly</changefreq>");
  lines.push("    <priority>0.7</priority>");
  lines.push("  </url>");
}

lines.push("</urlset>");

writeFileSync("public/sitemap.xml", lines.join("\n") + "\n", "utf8");
console.log("Generated public/sitemap.xml with", staticUrls.length + BLOG_POSTS.length, "URLs");
