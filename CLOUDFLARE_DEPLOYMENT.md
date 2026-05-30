# Cloudflare Pages Deployment Guide

## Prerequisites

- Cloudflare account with Pages enabled
- GitHub repository connected to Cloudflare Pages

## Deployment Configuration

The project is already configured for static export and ready for Cloudflare Pages deployment.

### Build Settings

- **Framework**: Next.js
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Node version**: 20

## Deployment Steps via Cloudflare Dashboard

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com/
   - Navigate to "Workers & Pages"

2. **Create New Pages Project**
   - Click "Create application" → "Pages"
   - Select "Connect to Git"
   - Choose your repository: `wenfeng110402/my-portfolio` (or `MyPortfolio`)

3. **Configure Build Settings**
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave blank if repo root)

4. **Environment Variables** (if needed)
   - Add any required environment variables in the "Settings" → "Environment variables" section

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site

## Automatic Deployments

Once connected, Cloudflare Pages will automatically deploy:
- **Production**: When you push to the `main` branch
- **Preview**: When you create pull requests or push to other branches

## Custom Domain (Optional)

1. Go to your Pages project settings
2. Navigate to "Custom domains"
3. Add your domain and follow the DNS configuration instructions

## Environment Variables

If your project requires environment variables:

1. Go to your Pages project in Cloudflare Dashboard
2. Navigate to "Settings" → "Environment variables"
3. Add variables for:
   - Production
   - Preview deployments

## Troubleshooting

### Build Fails

- Check the build logs in Cloudflare Dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node version compatibility (currently set to 20)

### Images Not Loading

- The project uses `unoptimized: true` for images
- Ensure images are in the `public/` directory
- Use absolute paths starting with `/`

### Runtime Errors

- Review browser console for errors
- Check that all API routes are compatible with static export
- Static export doesn't support server-side features like API routes or middleware

## Notes

- This project uses `output: 'export'` which generates a fully static site
- Server-side features (API routes, SSR, ISR) are not available in static export mode
- All pages are pre-rendered at build time
- Perfect for portfolios and content-heavy sites without dynamic features
