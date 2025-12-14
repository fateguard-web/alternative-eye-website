## Strategic Database Planning Document

### App Summary
**End Goal:** Help AI power users achieve optimal model selection for their specific tasks using side-by-side multi-model comparison testing
**Template Used:** chat-saas template
**Core Features:** Multi-model comparison testing with attachment support (images/PDFs), real-time streaming responses, timing data, usage-based billing

---

## 🗄️ Current Database State

### Existing Tables (Chat-SaaS Template)
- **`users`** - Perfect for your Stripe integration and role-based access
- **`ai_models`** - Perfect for your admin model management with provider/capabilities
- **`user_usage_events`** - Structure is good, just needs event type changes
- **`stripe_webhook_events`** - Perfect for Stripe integration
- **`conversations`** - WRONG PATTERN: Single-model chat vs multi-model comparison
- **`messages`** - WRONG PATTERN: Back-and-forth messages vs simultaneous responses

### Template Assessment  
**✅ 30% Perfect:** User management, billing integration, and model management are spot-on
**❌ Issues:** Core data model designed for single-model conversations, not multi-model comparisons
**🔧 Ready to Build:** Admin features, auth flow, and subscription management work immediately

---

## ⚡ Feature-to-Schema Mapping

### Core Features (Ready After Schema Changes)
- **Model Comparison Interface** → Uses `model_comparisons` + `model_responses` + `attachments` - needs new tables
- **Side-by-Side Display** → Uses `model_responses` grouped by `comparison_id` - needs new structure
- **Attachment Upload** → Uses `attachments` table + Supabase Storage - needs new table and storage integration
- **Multimodal AI Testing** → Uses attachment URLs in OpenRouter API calls for vision models - needs file handling
- **Timing Data Display** → Uses `response_time_ms` field in `model_responses` - needs new field
- **Test History with Files** → Uses `model_comparisons` linked to `attachments` - needs new tables and relationships
- **Usage Tracking** → Uses modified `user_usage_events` with "model_comparison" event type

### Admin Features (Already Supported)
- **Model Management** → Uses existing `ai_models` table - ready to build
- **User Analytics** → Uses existing `users` and `user_usage_events` - ready to build
- **Platform Metrics** → Uses existing usage tracking structure - ready to build

---

## 📋 Recommended Changes

**Bottom Line:** You need to make **4 changes** to align your database with multi-model comparison testing with attachment support:

### Decision #1: Replace Conversation Pattern with Comparison Pattern
- **Problem:** Template stores single-model conversations vs your multi-model comparison tests
- **Action:** Replace `conversations` and `messages` tables with new schema
- **Impact:** Enables storing 2-4 simultaneous model responses per user prompt

**New Tables:**
```typescript
model_comparisons: {
  id: uuid,
  user_id: uuid, // Foreign key to users
  prompt: text, // The single prompt sent to all selected models
  title: text, // Auto-generated from first 50 chars of prompt
  selected_models: jsonb, // Array of model IDs used in this comparison
  has_attachments: boolean, // Whether this comparison includes uploaded files
  created_at: timestamp,
  updated_at: timestamp
}

model_responses: {
  id: uuid,
  comparison_id: uuid, // Foreign key to model_comparisons
  model_id: uuid, // Foreign key to ai_models - which model generated this
  content: text, // The model's response text
  response_time_ms: integer, // How long this specific model took
  created_at: timestamp
}
```

### Decision #2: Update Usage Tracking for Comparison-Based Billing
- **Problem:** Template tracks "messages" but your pricing is per "model comparison"
- **Action:** Change usage event types from message-based to comparison-based
- **Impact:** Proper billing enforcement for your subscription tiers (10/200/500 comparisons)

**Updated Usage Events:**
```typescript
// Change event types in user_usage_events table
USAGE_EVENT_TYPES = {
  MODEL_COMPARISON: "model_comparison" // One event per comparison, regardless of model count
}

// Remove: PREMIUM_MESSAGE, NON_PREMIUM_MESSAGE (not needed)
```

### Decision #3: Remove Unused Template Tables
- **Problem:** Conversation/message tables don't match your use case and create confusion
- **Action:** Clean slate migration - remove `conversations` and `messages` tables entirely
- **Impact:** Cleaner codebase focused on your actual data model

### Decision #4: Add Attachment Support for Multimodal Testing
- **Problem:** Template has no file storage for images/PDFs needed for vision model comparisons
- **Action:** Add `attachments` table + Supabase Storage integration for file handling
- **Impact:** Enables multimodal AI testing with vision models (GPT-4 Vision, Claude 3 Vision, Gemini Vision)

**New Attachment System:**
```typescript
attachments: {
  id: uuid,
  comparison_id: uuid, // Foreign key to model_comparisons
  user_id: uuid, // Owner of the file (for RLS security)
  filename: text, // Original filename for display
  file_type: text, // MIME type (image/jpeg, image/png, image/webp, application/pdf)
  file_size: integer, // Size in bytes (max 10MB per file)
  storage_path: text, // Path in Supabase Storage bucket
  public_url: text, // Accessible URL for AI models to process
  created_at: timestamp
}

// Storage Configuration
Supabase Storage Bucket: 'attachments'
- File Type Restrictions: Images (JPG, PNG, WebP) and PDFs only
- Size Limit: 10 MB per individual file
- Quantity Limit: 4 files maximum per comparison test
- Security: Row Level Security (RLS) - users can only access their own files
- CDN: Automatic CDN distribution for fast AI model access
```

### Implementation Priority
1. **Phase 1 (MVP):** Create new tables (comparisons, responses, attachments), update usage tracking, remove old tables, set up Supabase Storage
2. **Phase 2 (Enhanced Testing):** All core functionality supported by new schema including multimodal AI testing with vision models
3. **Phase 3 (Growth):** Advanced attachment features (file preview, batch upload, additional file types)

---

## 🎯 Strategic Advantage

Your chat-saas template choice was **smart for business infrastructure** but **required core data model changes** and **attachment system addition**. Key strengths after schema updates:

- **Stripe Integration** ✅ Perfect subscription management with usage-based billing
- **User Management** ✅ Role-based access for admin features works immediately  
- **Model Management** ✅ AI models table supports your admin model configuration perfectly
- **Usage Tracking Infrastructure** ✅ Just needed event type changes, not structural changes
- **Authentication Flow** ✅ Template's auth system matches your planned user flow exactly
- **Storage Integration** ✅ Supabase Storage adds multimodal capabilities with RLS security
- **Competitive Advantage** ✅ Attachment support enables vision model comparisons that most AI tools lack

**Next Steps:** Make the 4 schema changes and start building - your template provides excellent SaaS foundation with the right data model for multi-model comparisons with attachment support.

> **Development Approach:** Build incrementally - start with model comparison core functionality (text-only), add attachment upload system and storage integration, then layer in multimodal vision testing, history features, and admin analytics. The usage tracking and billing infrastructure is ready to enforce subscription limits immediately.
