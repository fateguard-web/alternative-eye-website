## Wireframe Reference Doc

### ASCII / Markdown Mock-ups

```text
Dashboard/Main App Layout (Protected Pages)
+----------------------------------------------------------+
| Sidebar           |  Main Content Area                    |
|-------------------|---------------------------------------|
| 🔬 Model Compare  |  [Main page content varies]          |
| 📝 Test History   |                                       |
| 👤 Profile        |                                       |
| 📊 Analytics*     |                                       |
| 🤖 Models*        |                                       |
| (*admin only)     |                                       |
|-------------------|                                       |
| Usage: 45/200     |                                       |
| Plan: Basic       |                                       |
+-------------------+---------------------------------------+

Model Comparison Page `/model-comparison`
+----------------------------------------------------------+
| Sidebar           |  Model Comparison Interface           |
|-------------------|---------------------------------------|
| [navigation]      |  [Model Selection Area]              |
|                   |  Model 1: [GPT-4 ▼]                  |
|                   |  Model 2: [Claude-3 ▼]              |
|                   |  Model 3: [Gemini ▼] (optional)      |
|                   |  Model 4: [None ▼] (optional)        |
|                   |                                       |
|                   |  [Prompt Input Text Area]            |
|                   |  [Compare Models Button]             |
|                   |                                       |
|                   |  Side-by-Side Response Columns:      |
|                   |  +--------+--------+--------+        |
|                   |  | GPT-4  | Claude | Gemini |        |
|                   |  | 1.2s   | 0.8s   | 1.0s   |        |
|                   |  |        |        |        |        |
|                   |  | [resp] | [resp] | [resp] |        |
|                   |  +--------+--------+--------+        |
+-------------------+---------------------------------------+

Test History Page `/history`
+----------------------------------------------------------+
| Sidebar           |  Test History                         |
|-------------------|---------------------------------------|
| [navigation]      |  [Test List - Newest to Oldest]      |
|                   |  • "How to optimize React..." (3 hrs)|
|                   |  • "Best practices for API..." (1 day)|
|                   |  • "Database design patterns" (3 days)|
|                   |                                       |
|                   |  [Delete options per test]           |
+-------------------+---------------------------------------+

Profile Page `/profile`
+----------------------------------------------------------+
| Sidebar           |  Profile & Billing                    |
|-------------------|---------------------------------------|
| [navigation]      |  [Profile Information Edit]          |
|                   |  Name: [input]                       |
|                   |  Email: [input]                      |
|                   |                                       |
|                   |  [Usage Progress Bars]               |
|                   |  Tests: 45/200 [======--] 80%        |
|                   |                                       |
|                   |  [Subscription Management]           |
|                   |  Current: Basic ($19.99)             |
|                   |  [Upgrade] [Manage Billing]          |
+-------------------+---------------------------------------+

Admin Analytics Page `/admin/analytics`
+----------------------------------------------------------+
| Sidebar           |  Platform Analytics                   |
|-------------------|---------------------------------------|
| [navigation]      |  [Daily/Monthly Usage Metrics]       |
|                   |  Today: 1,247 tests                  |
|                   |  This month: 45,623 tests            |
|                   |                                       |
|                   |  [Per-User Usage Table]              |
|                   |  User     | Tests | Plan             |
|                   |  john@... | 156   | Pro              |
|                   |  mary@... | 189   | Basic            |
|                   |  alex@... | 67    | Free             |
+-------------------+---------------------------------------+

Admin Models Page `/admin/models`
+----------------------------------------------------------+
| Sidebar           |  AI Model Management                  |
|-------------------|---------------------------------------|
| [navigation]      |  [Add New Model Button]              |
|                   |                                       |
|                   |  [Models Table]                      |
|                   |  Model      | Status  | Actions       |
|                   |  GPT-4      | Active  | [Disable]     |
|                   |  Claude-3   | Active  | [Disable]     |
|                   |  Gemini     | Disabled| [Enable]      |
+-------------------+---------------------------------------+

Landing Page `/` (Public)
+-----------------------------------------------------+
|  [Navbar with Login/Sign Up buttons]               |
|-----------------------------------------------------|
|  [Hero Section]                                     |
|  "Stop Wasting Hours Testing AI Models"            |
|  "Compare Them Side-by-Side"                       |
|  [Start Comparing Models Now CTA]                  |
|-----------------------------------------------------|
|  [Animated Demo Section]                           |
|  [Side-by-side model comparison preview]           |
|-----------------------------------------------------|
|  [Features: Real-time streaming, timing data, etc] |
|-----------------------------------------------------|
|  [Pricing: Free, Basic $19.99, Pro $49.99]        |
|-----------------------------------------------------|
|  [Footer]                                          |
+-----------------------------------------------------+

Auth Pages `/auth/login`, `/auth/sign-up`, etc.
+---------------------------------------------+
|  [Minimal header with logo]                 |
|---------------------------------------------|
|  [Centered form card]                       |
|  [Form fields + Google OAuth button]       |
|  [Links to other auth pages]               |
+---------------------------------------------+
```

### Navigation Flow Map

```
Landing → Sign Up → /model-comparison ||
           ↘ Login → /model-comparison

Main App Navigation (via sidebar from any protected page):
Sidebar Nav → /model-comparison (primary feature)
           → /history → /model-comparison/[[...comparisonId]] (reload specific test)
           → /profile 
           → /admin/analytics (admin only)
           → /admin/models (admin only)

Specific page flows:
/history → click test → /model-comparison/[[...comparisonId]] (reload conversation)
/model-comparison/[[...comparisonId]] → back to /model-comparison (new test)

/profile → Stripe Checkout → /profile (see updated subscription)
        → Stripe Portal → /profile (billing management)

Admin flows (role-gated):
/admin/analytics → (view only, nav via sidebar)
/admin/models → Add Model → /admin/models (refresh)
              → Enable/Disable → /admin/models (refresh)

Auth flows:
/auth/login → /model-comparison
/auth/sign-up → /auth/sign-up-success → /model-comparison
/auth/forgot-password → /auth/login

Legal pages (standalone):
/privacy, /terms, /cookies (accessible from footer/navbar)
```
