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
   - Choose your repository: `wenfeng110402/MyPortfolio`

3. **Configure Build Settings**
   
   In the "Build settings" section, configure:
   
   - **Project name**: my-portfolio (or your preferred name)
   - **Production branch**: main
   
   Under "Build configuration":
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave blank for repository root)

4. **Environment Variables** (if needed)
   - Add any required environment variables in the "Settings" → "Environment variables" section
   - This project currently doesn't require any environment variables

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site

## Important Notes

### No wrangler.toml Required

Cloudflare Pages does **NOT** require a `wrangler.toml` file. The `wrangler.toml` is only used for Cloudflare Workers. For Pages, all configuration is done through the Cloudflare Dashboard.

### Automatic Deployments

Once connected, Cloudflare Pages will automatically deploy:
- **Production**: When you push to the `main` branch
- **Preview**: When you create pull requests or push to other branches

Each deployment will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Run the build command (`npm run build`)
4. Upload the contents of the `out` directory to Cloudflare's global CDN

## Custom Domain (Optional)

1. Go to your Pages project settings
2. Navigate to "Custom domains"
3. Add your domain and follow the DNS configuration instructions

## Environment Variables

If your project requires environment variables in the future:

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
- Make sure the build command completes successfully locally

### Images Not Loading

- The project uses `unoptimized: true` for images in `next.config.ts`
- Ensure images are in the `public/` directory
- Use absolute paths starting with `/` in your code

### Runtime Errors

- Review browser console for errors
- Check that all pages are compatible with static export
- Static export doesn't support server-side features like API routes or middleware
- All pages are pre-rendered at build time

### Common Issues

**Issue**: "Missing entry-point to Worker script"
- **Solution**: This error occurs if using `wrangler deploy`. Cloudflare Pages doesn't use wrangler. Configure deployment through the Dashboard instead.

**Issue**: Build succeeds but site is blank
- **Solution**: Verify the build output directory is set to `out` (not `.next` or `dist`)

**Issue**: 404 errors on navigation
- **Solution**: Next.js static export handles routing automatically. Ensure all links use the Next.js Link component or proper href attributes.

## Project Structure

This project uses Next.js with `output: 'export'` which generates a fully static site:

- All pages are pre-rendered at build time
- Perfect for portfolios and content-heavy sites
- No server-side rendering or API routes
- Deployed globally on Cloudflare's edge network

## Verification

After deployment, verify your site:

1. Visit the provided `*.pages.dev` URL
2. Test all navigation links
3. Verify images load correctly
4. Check responsive design on different devices
5. Test language switching functionality
