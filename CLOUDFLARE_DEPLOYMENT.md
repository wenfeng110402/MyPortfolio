# Cloudflare Pages Deployment Guide

## Prerequisites

- Cloudflare account with Pages enabled
- GitHub repository connected to Cloudflare Pages

## Deployment Configuration

This project uses `@cloudflare/next-on-pages` to deploy Next.js applications to Cloudflare Pages with full SSR support.

### Build Settings

- **Framework preset**: Next.js
- **Build command**: `npx @cloudflare/next-on-pages@1`
- **Build output directory**: `.vercel/output/static`
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
   - **Build command**: `npx @cloudflare/next-on-pages@1`
   - **Build output directory**: `.vercel/output/static`
   - **Root directory**: `/` (leave blank for repository root)

4. **Environment Variables** (if needed)
   - Add any required environment variables in the "Settings" → "Environment variables" section
   - This project currently doesn't require any environment variables

5. **Deploy**
   - Click "Save and Deploy"
   - Cloudflare will automatically build and deploy your site

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Cloudflare Pages

```bash
npm run pages:build
```

### Preview Locally

```bash
npm run preview
```

## Automatic Deployments

Once connected, Cloudflare Pages will automatically deploy:
- **Production**: When you push to the `main` branch
- **Preview**: When you create pull requests or push to other branches

Each deployment will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Run the build command (`npx @cloudflare/next-on-pages@1`)
4. Deploy to Cloudflare's global edge network

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

### nodejs_compat Error: "no nodejs_compat compatibility flag set"

**Issue**: Deployment fails with error:
```
Node.JS Compatibility Error
no nodejs_compat compatibility flag set
```

**Solution**: Enable the `nodejs_compat` compatibility flag in Cloudflare Pages:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → Select your Pages project
3. Go to **Settings** → **Functions** → **Compatibility Flags**
4. Add `nodejs_compat` to both:
   - Production environment
   - Preview deployments
5. Save changes and redeploy

This project already has `nodejs_compat` configured in `wrangler.toml`, but Cloudflare Pages requires it to be enabled in the dashboard as well.

### Build Fails

- Check the build logs in Cloudflare Dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node version compatibility (currently set to 20)
- Make sure the build command completes successfully locally
- Run `npm run build` locally to test: should complete with no errors

### Images Not Loading

- The project uses `unoptimized: true` for images in `next.config.ts`
- Ensure images are in the `public/` directory
- Use absolute paths starting with `/` in your code

### Runtime Errors

- Review browser console for errors
- Check Cloudflare Pages function logs for server-side errors
- Verify all API routes and server components are compatible with Cloudflare Workers runtime

### Common Issues

**Issue**: Build succeeds but functions don't work
- **Solution**: Ensure you're using the correct build command: `npx @cloudflare/next-on-pages@1`
- **Solution**: Check that the output directory is `.vercel/output/static`
- **Solution**: Verify `nodejs_compat` flag is enabled in Cloudflare dashboard

**Issue**: Module not found errors
- **Solution**: Some Node.js modules may not be compatible with Cloudflare Workers
- **Solution**: Use Cloudflare-compatible alternatives or polyfills

**Issue**: Memory or CPU limits exceeded
- **Solution**: Optimize your code to reduce resource usage
- **Solution**: Consider static generation for heavy computations

## Project Features

This project uses Next.js with Cloudflare Pages integration:

- **Full SSR Support**: Server-side rendering on Cloudflare's edge network
- **API Routes**: Full support for Next.js API routes as Cloudflare Functions
- **Image Optimization**: Configured for Cloudflare deployment
- **Global CDN**: Automatic distribution across Cloudflare's edge network
- **Automatic HTTPS**: SSL certificates managed by Cloudflare

## Verification

After deployment, verify your site:

1. Visit the provided `*.pages.dev` URL
2. Test all navigation links
3. Verify images load correctly
4. Check responsive design on different devices
5. Test language switching functionality
6. Verify any API routes or server components work correctly

## Additional Resources

- [@cloudflare/next-on-pages Documentation](https://github.com/cloudflare/next-on-pages)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)