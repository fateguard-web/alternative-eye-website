## App Pages & Functionality Blueprint

### App Summary  
**End Goal:** Help AI power users achieve optimal model selection for their specific tasks using side-by-side multi-model comparison testing
**Core Value Proposition:** Save AI power users 2-4 hours per week by enabling quick identification of the best AI model for each type of task through parallel testing
**Target Users:** AI power users (developers, knowledge workers, consultants) who use AI daily for various tasks
**Template Type:** chat-saas - usage-based subscription model

---

## 🌐 Universal SaaS Foundation

### Public Marketing Pages
- **Landing Page** — `/` 
  - Hero: "Stop Wasting Hours Testing AI Models - Compare Them Side-by-Side"
  - Feature highlights: Real-time streaming, timing data, conversation history
  - Animated demo section showing side-by-side model comparison in action
  - Pricing section: Free (10 tests), Basic ($19.99, 200 tests), Pro ($49.99, 500 tests)
  - CTA: "Start Comparing Models Now" driving to model comparison functionality

- **Legal Pages** — `/privacy`, `/terms`, `/cookies`
  - Privacy policy, Terms of service, Cookie policy
  - Essential for GDPR compliance and SaaS operations

### Authentication Flow
- **Login** — `/auth/login` (Email/password, Google OAuth)
- **Sign Up** — `/auth/sign-up` (Account creation with Google OAuth option)  
- **Forgot Password** — `/auth/forgot-password` (Password reset flow)
- **Sign Up Success** — `/auth/sign-up-success` (Confirmation page)

---

## ⚡ Core Application Pages

### Model Comparison Testing
- **Main Testing Interface** — `/model-comparison`
  - Enter single prompt in main text area (Frontend)
  - Select 2-4 AI models from available dropdown (all models available to all users) (Frontend)
  - Start comparison with "Compare Models" button (Frontend)
  - View real-time streaming responses side-by-side in columns (Frontend)
  - Display response timing data for each model (e.g., "GPT-4: 1.2s, Claude: 0.8s") (Frontend)
  - Default test title: first 50 characters of prompt (Frontend display, Background Job generates 12-15 word summary)
  - Auto-save completed test when streaming finishes (Backend Process)
  - Usage limit warning message only when user hits subscription limit (Frontend)
  - Sidebar displays current usage count and subscription tier at bottom (Frontend)

- **Conversation Reload** — `/model-comparison/[[...modelComparisonId]]`
  - Navigate from history back to model comparison page
  - Reload full conversation to view all responses side-by-side
  - Maintain same interface as new comparisons

### Test Management
- **Test History** — `/history`
  - Display previous comparison tests (newest to oldest) (Frontend)
  - Show auto-generated test titles (or first 50-75 characters as default) (Frontend)
  - Click test navigates back to model comparison page and reloads full conversation (not inline expansion) (Frontend)
  - Delete individual test results option (Frontend + Backend Process)

### User Account  
- **Unified Profile Dashboard** — `/profile`
  - Edit profile information (name, email, preferences)
  - Current usage display with progress bars (color changes to orange at 80% usage)
  - Current subscription tier display with upgrade/downgrade options
  - Link to Stripe customer portal for detailed billing history and invoice management

---

## 💰 Business Model Pages

### Subscription Management
- **Integrated Billing** — `/profile` (unified with profile)
  - Usage tracking with visual progress bars tied to subscription tiers
  - Upgrade/downgrade buttons redirecting to Stripe checkout
  - Current subscription status sourced directly from Stripe API
  - Monthly usage reset tracking
  - Link to Stripe customer portal for invoice management

---

## 👑 Admin Features

### Analytics & Monitoring
- **Platform Analytics** — `/admin/analytics`
  - Dashboard with daily/monthly platform usage metrics
  - Total tests run today/this month across all users
  - Per-user usage table with test counts and subscription tiers
  - Identify power users approaching usage limits

### Model Management  
- **AI Model Configuration** — `/admin/models`
  - Table of all AI models with status (Active/Disabled)
  - Add new AI model (model name only - OpenRouter handles integration)
  - Disable models (never delete to preserve historical test data)
  - All models available to all subscription tiers

---

## 📱 Navigation Structure  

### Main Sidebar (Responsive)
- 🔬 **Model Comparison** - Primary feature for side-by-side AI testing
- 📝 **Test History** - Access previous comparison tests and results
- 👤 **Profile** - Account settings, usage tracking, and billing management
- 📊 **Analytics** - Platform usage metrics (admin only)
- 🤖 **Models** - AI model management (admin only)
- **Bottom of sidebar**: Current usage count and subscription tier display

### Mobile Navigation  
- Collapsible sidebar with hamburger menu
- Touch-optimized navigation items
- Essential features (Model Comparison) prominently displayed
- Quick access to usage limits in mobile header or sidebar bottom

---

## 🔧 Next.js App Router Structure

### Layout Groups
```
app/
├── (public)/          # Marketing and legal pages
├── (auth)/             # Authentication flow  
├── (protected)/        # Main authenticated app
├── (admin)/            # Admin-only pages (role + auth check)
└── api/                # Backend endpoints
```

### Complete Route Mapping
**🌐 Public Routes**
- `/` → Landing page with demo section
- `/privacy` → Privacy policy
- `/terms` → Terms of service  
- `/cookies` → Cookie policy

**🔐 Auth Routes**
- `/auth/login` → User login
- `/auth/sign-up` → User registration
- `/auth/forgot-password` → Password reset
- `/auth/sign-up-success` → Registration confirmation

**🛡️ Protected Routes**  
- `/model-comparison` → Side-by-side AI model testing
- `/model-comparison/[[...modelComparisonId]]` → Reload specific comparison from history
- `/history` → View all previous comparison tests
- `/profile` → Unified profile, usage tracking, and billing management

**👑 Admin Routes (Role-Based Access)**
- `/admin/analytics` → Platform usage metrics and per-user statistics  
- `/admin/models` → AI model management and configuration

**🔧 API Routes**
- `/api/chat/route.ts` → Handle model comparison requests and streaming
- `/api/webhooks/stripe/route.ts` → Handle new subscription purchases (welcome emails)

---

## 🎯 MVP Functionality Summary

This blueprint delivers your core value proposition: **Help AI power users save 2-4 hours per week through optimal model selection via side-by-side comparison testing**

**Phase 1 (Launch Ready):**
- Universal SaaS foundation (auth with Google OAuth, legal compliance, responsive design)
- Core model comparison functionality with real-time streaming and timing data
- Test history with conversation reload capability
- Unified profile with usage tracking and Stripe billing integration
- Admin analytics and model management
- Usage-based subscription enforcement with Stripe as single source of truth

**Phase 2 (Future Enhancements):**  
- Custom model presets for specific use cases
- Response export and sharing capabilities
- Prompt templates library
- Model performance analytics dashboard

**Business Model Integration:**
- Stripe as single source of truth for all subscription data
- Real-time subscription verification before model comparisons
- Minimal webhook usage (only for new subscription welcome emails)
- Usage tracking against subscription tier limits
- Direct Stripe checkout for subscription changes

> **Next Step:** Ready for wireframe design with this concrete blueprint
