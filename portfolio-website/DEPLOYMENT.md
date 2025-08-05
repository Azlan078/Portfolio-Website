# Deployment Guide

This guide covers deploying your portfolio website to various platforms with security and performance optimizations.

## 🚀 Vercel (Recommended)

Vercel is the easiest and most optimized platform for Next.js applications.

### Steps:
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio website"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records

### Vercel Benefits:
- ✅ Automatic deployments
- ✅ Edge functions support
- ✅ Global CDN
- ✅ Analytics included
- ✅ Zero configuration

## 🌐 Netlify

### Steps:
1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x

2. **Deploy**
   - Connect your GitHub repository
   - Configure build settings
   - Deploy

3. **Custom Domain**
   - Go to Site Settings → Domain Management
   - Add custom domain
   - Configure DNS

## ☁️ AWS Amplify

### Steps:
1. **Connect Repository**
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Select branch (main)

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy**
   - Amplify will automatically build and deploy
   - Monitor build logs for any issues

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose
```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## 🔒 Security Checklist

### Before Deployment:
- [ ] Update all dependencies
- [ ] Remove console.log statements
- [ ] Set NODE_ENV=production
- [ ] Configure environment variables
- [ ] Test build locally

### Security Headers:
- [ ] Content Security Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] X-XSS-Protection
- [ ] Referrer-Policy

### SSL/HTTPS:
- [ ] Enable HTTPS redirect
- [ ] Configure SSL certificates
- [ ] Set HSTS headers

## 📊 Performance Optimization

### Build Optimization:
```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Optimize images
npm run build
```

### Performance Monitoring:
- **Vercel Analytics**: Built-in performance monitoring
- **Google PageSpeed Insights**: Regular testing
- **Lighthouse CI**: Automated performance testing

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain.com

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com

# Social Links
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
```

## 🚀 Post-Deployment Checklist

### Performance:
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test mobile performance
- [ ] Verify image optimization

### SEO:
- [ ] Submit sitemap to Google
- [ ] Test meta tags
- [ ] Verify Open Graph tags
- [ ] Check structured data

### Security:
- [ ] Run security scan
- [ ] Test HTTPS redirect
- [ ] Verify CSP headers
- [ ] Check for vulnerabilities

### Functionality:
- [ ] Test contact form
- [ ] Verify all links work
- [ ] Test theme switching
- [ ] Check responsive design

## 📈 Monitoring & Analytics

### Recommended Tools:
1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics 4**
3. **Plausible Analytics** (privacy-friendly)
4. **Sentry** (error tracking)

### Setup Analytics:
```typescript
// Add to _app.tsx or layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔄 Continuous Deployment

### GitHub Actions Workflow:
```yaml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🆘 Troubleshooting

### Common Issues:

1. **Build Failures**
   ```bash
   # Clear cache
   rm -rf .next
   npm run build
   ```

2. **Performance Issues**
   - Optimize images
   - Reduce bundle size
   - Enable compression

3. **Security Warnings**
   - Update dependencies
   - Configure CSP headers
   - Enable HTTPS

4. **SEO Issues**
   - Verify meta tags
   - Submit sitemap
   - Test structured data

## 📞 Support

If you encounter issues during deployment:

1. Check the platform's documentation
2. Review build logs
3. Test locally first
4. Contact platform support

---

**Happy Deploying! 🚀**