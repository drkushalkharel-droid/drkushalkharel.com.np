# Quick Cloudflare Pages Setup Guide

Your website is now on GitHub and ready to deploy to Cloudflare Pages!

## ✅ Completed:
- ✅ Code pushed to GitHub: https://github.com/drkushalkharel-droid/drkushalkharel.com.np
- ✅ Deployment workflow configured (.github/workflows/deploy.yml)
- ✅ Cloudflare configuration ready (wrangler.toml)

## 🚀 Next Steps:

### Step 1: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Pages** in left sidebar
3. Click **Create a project** → **Connect to Git**
4. Click **Connect GitHub**
5. Select repository: `drkushalkharel-droid/drkushalkharel.com.np`

### Step 2: Configure Build Settings

In the deployment setup:

- **Project name**: `drkushalkharel`
- **Production branch**: `main`
- **Framework**: Next.js (auto-detected)
- **Build command**: `npm run build`
- **Build output directory**: `.next`

Click **Save and Deploy** - your first deployment will start!

### Step 3: Add Your Custom Domain

1. After first deployment succeeds, go to project **Settings**
2. Click **Custom domains**
3. Add: `drkushalkharel.com.np`
4. Update your domain's nameservers to Cloudflare (or add CNAME records)

### Step 4: (Optional) Set Up GitHub Secrets for Automated Deployments

If you want automated deployments via GitHub Actions:

1. Get your Cloudflare API Token:
   - https://dash.cloudflare.com/profile/api-tokens
   - Create token with "Cloudflare Pages" permissions

2. Get your Account ID:
   - https://dash.cloudflare.com
   - Copy Account ID from bottom left

3. Add to GitHub:
   - Go to repo **Settings** → **Secrets and variables** → **Actions**
   - Add `CLOUDFLARE_API_TOKEN`
   - Add `CLOUDFLARE_ACCOUNT_ID`
   - Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` with `G-ZJ7RMBFRYL`
   - Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` with only the Search Console content token, not the full meta tag

### Step 5: Verify Google Search Console

1. Open Google Search Console and add `https://drkushalkharel.com.np/` as a URL-prefix property.
2. Choose **HTML tag** verification.
3. Copy the value inside `content="..."`.
4. Save that value as the GitHub Actions secret `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
5. Push to `main` so the site rebuilds and publishes the meta tag.
6. Return to Search Console and click **Verify**.

## 📊 Your Site Features:

- ✅ **SEO Optimized**: Complete metadata, Open Graph, Twitter cards
- ✅ **Schema.org Structured Data**: Physician, Services, Organization
- ✅ **Social Media Links**: Facebook, Instagram, Twitter, TikTok, Threads
- ✅ **Image Optimization**: WebP, AVIF formats, responsive sizes
- ✅ **Performance**: Static generation, automatic caching
- ✅ **Certificates**: 7 professional certificates loading
- ✅ **Responsive Design**: Mobile-optimized

## 🔍 Current Statistics:

- **Total Pages**: 24+ (including knowledge articles)
- **Social Media Links**: 5 platforms integrated
- **Images**: Optimized for all devices
- **Build Size**: ~12.7 MB (includes all optimizations)

## 📈 Deployment Flow:

```
Your Local Changes
        ↓
   Git Push
        ↓
   GitHub Repository
        ↓
   GitHub Actions (optional)
        ↓
   Cloudflare Pages
        ↓
   Your Live Website (drkushalkharel.com.np)
```

## ⚡ Performance Optimization:

Your site is configured with:
- Next.js Static Generation (SSG)
- Image optimization with AVIF/WebP
- Automatic Cloudflare caching
- CDN distribution globally
- ~2-3 second build time

## 🆘 Troubleshooting:

**Build fails?**
- Check GitHub Actions logs
- Verify `npm run build` works locally
- Ensure Node 18+ is used

**Images not loading?**
- Verify public folder files are included
- Check Next.js image configuration
- Clear browser cache

**Domain not working?**
- Update nameservers to Cloudflare
- Wait 24-48 hours for DNS propagation
- Check Cloudflare DNS settings

## 📞 Support:

- Cloudflare Docs: https://developers.cloudflare.com/pages/
- GitHub Docs: https://docs.github.com/
- Next.js Docs: https://nextjs.org/docs

---

**Your Site is Production-Ready! 🎉**

After Cloudflare deployment, your website will be:
- ✅ Live on the internet
- ✅ Automatically updated on every GitHub push
- ✅ Protected by Cloudflare security
- ✅ Fast and globally distributed
- ✅ SEO optimized and searchable
