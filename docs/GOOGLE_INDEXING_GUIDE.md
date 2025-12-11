# How to Index Your Website on Google

This guide explains step-by-step how to get your website (Laxa) indexed by Google so it appears in search results.

## Prerequisites (Already Checked)
Your project already has the necessary files in the `public/` folder:
1.  **`robots.txt`**: Tells Google where to look.
2.  **`sitemap.xml`**: Lists your pages for Google to crawl.

Since your site is a Single Page Application (SPA), your current sitemap listing just the homepage (`https://laxa.agency/`) is correct.

---

## Step 1: Set up Google Search Console (GSC)

Google Search Console is the free tool used to manage your site's presence on Google.

1.  Go to [Google Search Console](https://search.google.com/search-console).
2.  Log in with your Google account.
3.  Click **Add Property** (top left dropdown).
4.  Choose **URL prefix** (easier) or **Domain** (requires DNS changes).
    *   **Recommended**: Choose **Domain** (e.g., `laxa.agency`) if you have access to your domain provider (GoDaddy, Namecheap, etc.). usage is better for long-term ensuring all subdomains are covered.
    *   *Alternative*: Choose **URL prefix** and enter `https://laxa.agency`.
5.  **Verify Ownership**:
    *   **For Domain**: Copy the TXT record providing by GSC and add it to your DNS settings in your domain registrar.
    *   **For URL prefix**: You can upload an HTML file they provide to your `public/` folder and deploy, OR add a meta tag to your `index.html`.

## Step 2: Submit Your Sitemap

Once verified, you need to tell Google exactly where your sitemap is.

1.  In Google Search Console dashboard, look at the left sidebar.
2.  Click on **Sitemaps** (under the "Indexing" section).
3.  In the "Add a new sitemap" field, enter: `sitemap.xml`
    *   The full URL should read: `https://laxa.agency/sitemap.xml`
4.  Click **Submit**.
5.  You should see a "Success" status shortly. If it says "Couldn't fetch", wait 24 hours and try again; sometimes it takes time for Google to see a new file.

## Step 3: Request Indexing (Manual Push)

You don't have to wait for Google to crawl your site automatically. You can force it to look at your page *now*.

1.  In Google Search Console, verify "URL Inspection" is selected (or click the top search bar).
2.  Type your website URL: `https://laxa.agency/` and hit Enter.
3.  Wait for the data to load. It will likely say "URL is not on Google".
4.  Click the **Request Indexing** button.
5.  This puts your URL in a priority queue. It typically takes anywhere from a few hours to a few days to appear in search results.

## Common Questions

**Q: My site is a generic "React App" in search results?**
A: Make sure you update the `<title>` and `<meta name="description">` in your `index.html` or use the `SEO` component in your React code (which you are already doing).

**Q: How do I know if I'm indexed?**
A: Go to Google and search for `site:laxa.agency`. If your site shows up, you are indexed!
