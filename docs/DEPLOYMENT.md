# Deployment Guide: GitHub + Cloudflare Pages

This guide will help you deploy your website to Cloudflare Pages with continuous deployment from GitHub.

## Step 1: Push to GitHub

Your repository is already configured. Push your latest changes:

```bash
cd /Users/kushalkharel/dr-kushal-website
git add -A
git commit -m "Add SEO optimization, social media links, and image fixes"
git push origin main
```

## Step 2: Set Up Cloudflare Account

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Sign in or create an account
3. Navigate to **Pages** in the left sidebar
4. Click **Create a project** → **Connect to Git**

## Step 3: Connect GitHub Repository

1. Click **Connect GitHub**
2. Authorize Cloudflare to access your GitHub account
3. Select the repository: `drkushalkharel-droid/drkushalkharel.com.np`
4. Click **Begin Setup**

## Step 4: Configure Build Settings

In the Cloudflare Pages setup:

- **Project name**: `drkushalkharel` (or your preferred name)
- **Production branch**: `main`
- **Framework preset**: Select **Next.js**
- **Build command**: `npm run build`
- **Build output directory**: `.next/standalone` (or `.next`)
- **Environment variables**: Leave empty for now (optional)

## Step 5: Add GitHub Secrets (for automated deployment)

In your GitHub repository settings:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:

   - **Name**: `CLOUDFLARE_API_TOKEN`
   - **Value**: Your Cloudflare API token (see below)

   - **Name**: `CLOUDFLARE_ACCOUNT_ID`
   - **Value**: Your Cloudflare Account ID (see below)

### Get Your Cloudflare API Token & Account ID:

1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Click **Create Token**
3. Use the "Edit Cloudflare Workers" template or create a custom token with:
   - Permissions: `Pages` (read and write)
4. Copy the token and paste it in GitHub

For Account ID:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Copy the Account ID shown in the bottom left corner under "Account" or in the URL

## Step 6: Deploy

Option A: **Automatic Deployment** (via GitHub Actions)
- Push code to `main` branch
- GitHub Actions automatically triggers
- Cloudflare Pages deploys your site

Option B: **Manual Deployment** (via Cloudflare Pages UI)
- Go to Cloudflare Pages dashboard
- Your project should appear automatically after initial setup
- Each push to `main` creates a new deployment

## Step 7: Configure Custom Domain

1. Go to your Cloudflare Pages project
2. Click **Custom domains**
3. Add your domain: `drkushalkharel.com.np`
4. Follow the DNS configuration instructions

## Step 8: Enable Additional Features

### SSL/TLS
- Go to **SSL/TLS** in Cloudflare dashboard
- Set to "Flexible" or "Full" depending on your needs

### Caching
- Go to **Caching** 
- Set rules for static assets (images, CSS, JS)
- Browser cache TTL: 1 month for static assets

### Analytics
- Enable Page Rules and Analytics for performance monitoring

## Troubleshooting

### Build Fails
- Check build logs in Cloudflare Pages dashboard
- Ensure `npm run build` works locally: `npm run build`
- Verify Node version is compatible (18+)

### Site Not Loading
- Verify DNS records are pointing to Cloudflare
- Check SSL/TLS settings
- Clear browser cache

### Images Not Loading
- Verify image paths use `/images/` prefix
- Check that Next.js Image optimization is configured
- Ensure public folder files are included

## File Structure After Deployment

```
drkushalkharel.com.np/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── .next/                       # Build output (deployed)
├── public/                      # Static files
│   ├── images/                 # Your images
│   └── certificates/           # Certificate images
├── app/                         # Next.js app
├── next.config.ts              # Next.js config
├── package.json
└── wrangler.toml               # Cloudflare config
```

## Environment Variables (if needed)

Create a `.env.local` file for local development:
```
NEXT_PUBLIC_SITE_URL=https://drkushalkharel.com.np
```

## Performance Optimization

Your site is optimized for Cloudflare with:
- ✅ Image optimization (WebP, AVIF)
- ✅ Static generation (SSG)
- ✅ Automatic caching
- ✅ CDN distribution
- ✅ SEO optimization

## Monitoring Deployment

1. **GitHub**: Check workflow status in **Actions** tab
2. **Cloudflare**: View deployment history and logs in Pages dashboard
3. **Real-time**: Visit your deployed site at `drkushalkharel.com.np`

## Next Steps

1. Push code to GitHub
2. Create Cloudflare Pages project
3. Connect GitHub repository
4. Configure custom domain
5. Monitor deployment

Your site will be live and automatically updated on every push to `main`! 🚀
