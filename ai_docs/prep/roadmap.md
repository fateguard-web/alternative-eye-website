# Comparr.ai Development Roadmap

## 🚨 Phase 0: Project Setup (MANDATORY FIRST STEP)
**Goal**: Prepare development environment and understand current codebase
**⚠️ CRITICAL**: This phase must be completed before any other development work begins

### Run Setup Analysis
[Goal: Essential first step to understand current template state and requirements before any development work]
- [ ] **REQUIRED**: Run `setup.md` using **claude-4-sonnet-1m** on **max mode** for maximum context
- [ ] Review generated setup analysis and recommendations
- [ ] Verify development environment is properly configured
- [ ] Confirm all dependencies and environment variables are set
- [ ] Document any critical findings before proceeding to Phase 1

---

## Phase 1: Landing Page Updates
**Goal**: Transform generic template landing page into Comparr.ai-specific branding and value proposition

### Update Application Branding
[Goal: Replace generic chat-saas messaging with AI model comparison value proposition to attract target users]
- [ ] Update `components/landing/HeroSection.tsx` with new headline: "Stop Wasting Hours Testing AI Models - Compare Them Side-by-Side"
- [ ] Modify hero subtitle to emphasize: "Save 2-4 hours per week by identifying the best AI model for each task through parallel testing"
- [ ] Update primary CTA button text to: "Start Comparing Models Now"
- [ ] Replace `components/landing/FeaturesSection.tsx` with model comparison features:
  - Real-time streaming responses from multiple models
  - Response timing data for performance comparison
  - Side-by-side result comparison interface
  - Conversation history with test management
- [ ] Update `components/landing/PricingSection.tsx` for usage-based subscription tiers:
  - Free: 10 model comparison tests per month
  - Basic ($19.99): 200 tests per month
  - Pro ($49.99): 500 tests per month
- [ ] Modify `components/landing/ProblemSection.tsx` to focus on AI power user frustrations:
  - Time wasted switching between multiple AI platforms
  - Difficulty comparing model performance for specific tasks
  - Suboptimal model choices due to lack of comparison data

### Update Company Information
[Goal: Replace template branding with Comparr.ai brand identity throughout the application]
- [ ] Update `components/Logo.tsx` with "Comparr.ai" branding
- [ ] Replace company name throughout footer components
- [ ] Update `app/(public)/terms/page.tsx` with Comparr.ai company information
- [ ] Update `app/(public)/privacy/page.tsx` with Comparr.ai privacy policy details
- [ ] Modify navigation components to use Comparr.ai branding

### Google OAuth Authentication Setup
[Goal: Add Google OAuth support as specified in prep documents for streamlined user onboarding]
- [ ] Configure Google OAuth in Supabase dashboard:
  - Navigate to Authentication → Providers
  - Enable Google OAuth provider
  - Configure OAuth consent screen with Google Client ID/Secret
  - Add redirect URLs for OAuth flow
- [ ] Update `components/auth/LoginForm.tsx`:
  - Add Google OAuth button below email/password form
  - Implement `signInWithOAuth` function for Google provider
  - Style button to match existing form design
  - Handle OAuth loading states and errors
- [ ] Update `components/auth/SignUpForm.tsx`:
  - Add Google OAuth button with consistent styling
  - Implement OAuth signup flow
  - Handle OAuth account linking if email already exists
- [ ] Test complete OAuth authentication flow:
  - Verify Google OAuth signup and login works
  - Test user creation and redirection to `/model-comparison`
  - Confirm proper session management with OAuth

### UI Theme Implementation
[Goal: Apply Powerful Orange theme system from ui-theme.md analysis throughout the application]
- [ ] Update `app/globals.css` with Powerful Orange theme colors:
  - Primary: `25° 95% 58%` (light mode) / `25° 90% 68%` (dark mode)
  - Success: `130° 90% 48%` (light) / `130° 85% 52%` (dark)
  - Warning: `40° 100% 65%` (light) / `40° 95% 68%` (dark)
  - Destructive: `0° 90% 58%` (light) / `0° 85% 62%` (dark)
  - High-contrast dark backgrounds: `0° 0° 4-12%` range
- [ ] Implement complete light/dark mode color system:
  - Background, foreground, card, muted colors
  - Border colors and muted-foreground variants
  - Ensure all combinations exceed WCAG AAA standards (7:1+ contrast)
- [ ] Verify theme applies correctly across all existing components:
  - Test buttons, forms, navigation, cards use new color system
  - Verify proper theme switching between light and dark modes
  - Confirm accessibility compliance in both modes

### Mobile Navigation Enhancement
[Goal: Implement touch-optimized navigation as specified in app pages document]
- [ ] Verify responsive navigation system:
  - Collapsible sidebar with hamburger menu for mobile
  - Touch-optimized navigation items and buttons
  - Proper mobile breakpoint handling
- [ ] Add mobile usage display:
  - Quick access to usage limits in mobile header or sidebar bottom
  - Mobile-friendly progress bars for subscription usage
  - Touch-friendly upgrade/billing buttons
- [ ] Test mobile responsiveness:
  - Verify all landing page components work on mobile devices
  - Test navigation flow on touch devices
  - Ensure proper spacing and touch targets

---

## Phase 2: Admin Model Management  
**Goal**: Enable admin configuration of available AI models before users can test them
**⚠️ CRITICAL DEPENDENCY**: This phase must come before Multi-Model Comparison because users need models to exist in the system before they can compare them

### Admin Interface Enhancement
[Goal: Extend existing admin model management to support comparison testing requirements]
- [ ] Verify existing `/admin/models` page functionality:
  - Confirm model table displays all seeded models
  - Test add/edit/disable model operations
  - Ensure proper role-based access control
- [ ] Update `components/admin/ModelEditDialog.tsx` if needed:
  - Verify model capability flags are editable
  - Ensure premium model designation works
  - Test model activation/deactivation

### Model Configuration for Comparisons
[Goal: Ensure model management system properly supports multi-model comparison features]
- [ ] Update `lib/models.ts` to support comparison requirements:
  - getActiveModelsForComparison function
  - validateModelSelection function (2-4 models maximum)
  - getModelCapabilities function for UI display
- [ ] Verify `app/actions/models.ts` server actions work with new schema:
  - Test model CRUD operations
  - Confirm role-based access control
  - Validate model status updates

### Model Seeding and Data Integrity
[Goal: Ensure proper model data exists for comparison testing]
- [ ] Verify existing `npm run db:seed` creates comparison-ready models:
  - Confirm 9 models across 4 providers are seeded
  - Check all capability flags are properly set
  - Validate premium model flags for billing enforcement
- [ ] Test admin model management operations:
  - Add new model and verify it appears in comparison interface
  - Disable model and confirm it's removed from user selection
  - Re-enable model and verify it returns to comparison options

---

## Phase 3: Multi-Model Comparison Testing (Core Feature)
**Goal**: Transform single-model chat into side-by-side multi-model comparison testing with timing data
**⚠️ DEPENDENCY**: Requires Admin Model Management (Phase 2) to be completed first - users need models configured before they can compare them

### Database Foundation (Schema Replacement)
[Goal: Replace single-model conversation schema with multi-model comparison schema to enable simultaneous testing]
- [ ] Create `lib/drizzle/schema/model_comparisons.ts` with comparison data structure:
  - id, user_id, prompt, title, selected_models (jsonb array), created_at, updated_at
- [ ] Create `lib/drizzle/schema/model_responses.ts` for individual model responses:
  - id, comparison_id, model_id, content, response_time_ms, created_at
- [ ] Remove incompatible schema files:
  - Delete `lib/drizzle/schema/conversations.ts`
  - Delete `lib/drizzle/schema/messages.ts`
- [ ] Update `lib/drizzle/schema/index.ts` to export new schema and remove old exports
- [ ] Generate new database migration: `npm run db:generate`
- [ ] Apply database migration: `npm run db:migrate`

### Backend Infrastructure
[Goal: Transform API to handle parallel requests to multiple AI models with response timing and streaming]
- [ ] Create `app/api/model-comparison/route.ts` for multi-model API endpoint:
  - Accept prompt and array of selected model IDs
  - Implement parallel model requests to OpenRouter
  - Track individual response times for each model
  - Support streaming responses from multiple models simultaneously
- [ ] Create `lib/model-comparison-utils.ts` for backend comparison logic:
  - buildComparisonRequest function for OpenRouter API calls
  - calculateResponseTimes function for timing data
  - saveComparisonResults function for database storage
- [ ] Create `app/actions/model-comparisons.ts` server actions:
  - createComparison action for saving new comparison tests
  - getComparisons action for retrieving user's test history
  - getComparisonById action for loading specific comparison
  - deleteComparison action for removing test results

### User Interface Transformation
[Goal: Build comparison interface showing multiple model responses side-by-side with timing data and model selection]
- [ ] Create `app/(protected)/model-comparison/page.tsx` as new main feature page:
  - Replace existing chat interface with comparison-focused layout
  - Implement model selection dropdown (2-4 models)
  - Add single prompt input area for testing
  - Build side-by-side response columns layout
- [ ] Create `components/comparison/ModelSelector.tsx` component:
  - Dropdown for selecting multiple AI models (2-4 maximum)
  - Display model capabilities (image input, reasoning, etc.)
  - Show premium model badges for subscription enforcement
- [ ] Create `components/comparison/ComparisonInterface.tsx` component:
  - Side-by-side columns for model responses
  - Response timing display for each model
  - Real-time streaming for multiple models simultaneously
  - Compare button to trigger multi-model testing
- [ ] Create `components/comparison/ResponseColumn.tsx` component:
  - Individual model response display
  - Timing data header (e.g., "GPT-4: 1.2s")
  - Streaming text display with proper formatting
  - Loading states for each model independently
  - Mobile-responsive column layout with proper touch targets

### Navigation and Routing Updates
[Goal: Replace chat-focused navigation with model comparison navigation structure]
- [ ] Update `components/layout/AppSidebar.tsx` navigation:
  - Replace "Chat" with "Model Comparison" as primary navigation item
  - Update icon from message icon to comparison/lab icon
  - Link to `/model-comparison` instead of `/chat`
- [ ] Create `app/(protected)/model-comparison/[[...comparisonId]]/page.tsx`:
  - Handle both new comparisons and loading existing ones
  - Maintain same interface for both new tests and history viewing
- [ ] Update `app/(auth)/layout.tsx` redirect:
  - Change redirect destination from `/chat` to `/model-comparison`
- [ ] Update middleware.ts if needed for new route structure

### Integration and Data Flow
[Goal: Connect all comparison components and establish complete data flow from prompt to results storage]
- [ ] Create `contexts/ComparisonStateContext.tsx` for state management:
  - Handle multiple model selections
  - Manage streaming states for multiple models
  - Track response timing data
  - Handle comparison result saving
- [ ] Update `lib/usage-tracking.ts` for comparison-based usage:
  - Change event type from "message" to "model_comparison"
  - Track one event per comparison regardless of model count
  - Update subscription limit enforcement logic
- [ ] Connect comparison interface to backend API:
  - Implement streaming connection for multiple models
  - Handle error states for individual model failures
  - Save completed comparisons automatically with title generation
- [ ] Test complete comparison flow:
  - Verify multi-model selection works
  - Confirm parallel streaming responses
  - Check timing data accuracy
  - Validate database storage
- [ ] Test mobile comparison experience:
  - Verify responsive model selection works on mobile devices
  - Test side-by-side layout adapts properly to mobile screens
  - Confirm touch interactions work for all comparison features
  - Validate mobile streaming performance and readability

---

## Phase 4: Test History Management
**Goal**: Enable users to view, manage, and revisit their previous model comparison tests

### History Data Layer
[Goal: Create server-side functions to retrieve and manage comparison test history]
- [ ] Create `lib/comparison-history.ts` for history queries:
  - getUserComparisons function with pagination
  - getComparisonById function for individual test retrieval
- [ ] Update `app/actions/model-comparisons.ts` with history actions:
  - Add getComparisonHistory server action
  - Add updateComparisonTitle server action for renaming tests
  - Add deleteComparison server action for removal

### History User Interface
[Goal: Build complete history management interface matching wireframe specifications]
- [ ] Create `app/(protected)/history/page.tsx` for test history display:
  - Display comparison tests newest to oldest
  - Show auto-generated titles (first 50 characters of prompt)
  - Include test timestamp and selected models information
- [ ] Create `components/history/ComparisonHistoryTable.tsx` component:
  - Table layout with columns: Title, Models Used, Date, Actions
  - Click row navigates to full comparison view
  - Delete button with confirmation dialog
  - Rename functionality for test titles
- [ ] Create `components/history/ComparisonRow.tsx` component:
  - Individual test row with metadata
  - Model badges showing which models were tested
  - Quick preview of prompt text
  - Action buttons for view/delete/rename

### History Navigation and Integration
[Goal: Connect history interface to comparison viewing and enable seamless navigation]
- [ ] Update `app/(protected)/model-comparison/[[...comparisonId]]/page.tsx`:
  - Handle loading existing comparisons from history
  - Maintain read-only state for historical tests
  - Add "Start New Test" button to return to fresh comparison
- [ ] Create `components/history/StartChattingButton.tsx` component:
  - Prominent button for users with no history
  - Links to new model comparison test
  - Matches existing template design patterns
- [ ] Update navigation to highlight history:
  - Ensure "Test History" in sidebar shows active state
  - Add history count indicator if desired

### History Management Features
[Goal: Provide complete test management capabilities for user organization]
- [ ] Create `components/history/RenameDialog.tsx` component:
  - Dialog for editing comparison test titles
  - Validation for title length and content
  - Save functionality with server action
- [ ] Create `components/history/DeleteConfirmDialog.tsx` component:
  - Confirmation dialog for test deletion
  - Warning about permanent removal

---

## Phase 5: Attachment Support for Vision Models
**Goal**: Enable image and PDF uploads for multimodal AI model comparisons

### Storage Infrastructure Setup
[Goal: Create secure file storage system with proper user isolation for comparison attachments]
- [ ] Run existing storage setup: `npm run storage:setup`
- [ ] Verify `chat-images` bucket creation in Supabase Storage
- [ ] Apply RLS policies for user-scoped file access
- [ ] Create `lib/drizzle/schema/attachments.ts` schema:
  - id, comparison_id, user_id, filename, file_type, file_size, storage_path, public_url, created_at
- [ ] Generate and apply attachment schema migration
- [ ] Update `lib/drizzle/schema/index.ts` to include attachment exports

### File Upload Implementation
[Goal: Build secure file upload system with proper validation and storage integration]
- [ ] Create `lib/attachments.ts` for file handling:
  - uploadComparisonAttachment function for storage operations
  - validateFileType function (images: JPG/PNG/WebP, documents: PDF)
  - validateFileSize function (10MB limit per file, 4 files max per comparison)
  - generateSignedUrl function for AI model access
- [ ] Create `app/actions/attachments.ts` server actions:
  - uploadAttachment action with validation
  - deleteAttachment action for removal
  - getAttachmentSignedUrl action for display
- [ ] Update comparison schema to track attachments:
  - Add has_attachments boolean field to model_comparisons table
  - Link attachments to specific comparison tests

### Upload User Interface
[Goal: Build intuitive file upload interface integrated with comparison testing]
- [ ] Create `components/comparison/AttachmentUpload.tsx` component:
  - Drag-and-drop file upload area
  - File type and size validation with user feedback
  - Thumbnail preview for images
  - File list with remove functionality
- [ ] Create `components/comparison/AttachmentPreview.tsx` component:
  - Image thumbnails with proper aspect ratio
  - PDF file icons with filename display
  - File size and type information
  - Remove button for each attachment
- [ ] Update `components/comparison/ComparisonInterface.tsx`:
  - Integrate attachment upload into comparison flow
  - Show attachments in prompt area
  - Include attachment data in API requests

### Vision Model Integration
[Goal: Connect uploaded files to AI models for multimodal analysis and comparison]
- [ ] Update `app/api/model-comparison/route.ts` for multimodal support:
  - Include attachment URLs in OpenRouter API requests
  - Handle vision-capable model detection
  - Support mixed text+image prompts for model comparison
- [ ] Update `lib/model-comparison-utils.ts`:
  - buildMultimodalRequest function for vision models
  - processAttachments function to prepare files for AI
  - handleVisionModelResponse function for image analysis results
- [ ] Create `components/comparison/MultimodalPrompt.tsx` component:
  - Combined text and attachment display in comparison results
  - Show which models received which attachments
  - Handle vision model capabilities display

### Attachment Testing
[Goal: Verify multimodal comparison functionality works correctly]
- [ ] Test multimodal comparison flow:
  - Verify file upload and storage
  - Test vision model comparison with images
  - Confirm attachment security

---

## Phase 6: Unified Profile Dashboard
**Goal**: Create comprehensive profile management with usage tracking and subscription integration

### Profile Data Integration
[Goal: Connect user profile to subscription data and usage tracking for comprehensive account management]
- [ ] Update `lib/subscriptions.ts` for profile integration:
  - getUserSubscriptionWithUsage function
  - getUsageProgressData function for progress bars
  - getCurrentBillingPeriod function for usage reset tracking
- [ ] Create `lib/profile-utils.ts` for profile-specific functions:
  - getUserProfileData function combining user info and subscription
  - updateProfileInformation function for name/email changes
  - getUsageStatistics function for detailed usage breakdown

### Usage Tracking Display
[Goal: Build visual usage tracking with progress bars and subscription tier information]
- [ ] Update existing `app/(protected)/profile/page.tsx`:
  - Integrate usage tracking with visual progress bars
  - Show current subscription tier with upgrade options
  - Display usage statistics: tests used/remaining, billing period, usage history
- [ ] Create `components/profile/UsageProgressBar.tsx` component:
  - Visual progress bar with color coding (green → orange → red)
  - Usage percentage calculation and display
  - Upgrade prompt when approaching limits
  - Mobile-optimized progress bar display with touch-friendly upgrade buttons
- [ ] Create `components/profile/SubscriptionCard.tsx` component:
  - Current plan display with benefits
  - Upgrade/downgrade buttons with Stripe integration
  - Billing cycle and renewal date information

### Profile Management Features
[Goal: Provide complete account management capabilities including editable profile information]
- [ ] Update existing `components/profile/EditableFullName.tsx`:
  - Verify inline editing functionality works
  - Add validation for name changes
  - Connect to user update server actions
- [ ] Create `components/profile/ProfileStats.tsx` component:
  - Account creation date and activity summary
  - Total tests conducted
- [ ] Add email change functionality:
  - Email update with confirmation flow
  - Integration with Supabase auth email change
  - Proper validation and error handling

### Billing Integration Enhancement
[Goal: Seamlessly integrate Stripe billing management within profile interface]
- [ ] Update usage tracking to use "model_comparison" events:
  - Modify `user_usage_events` tracking to count comparisons instead of messages
  - Update subscription limit enforcement logic
  - Create usage reset functionality for billing cycle changes
- [ ] Enhance billing management integration:
  - Direct links to Stripe customer portal for invoice management
  - In-app subscription change confirmation
  - Usage overage warnings and upgrade prompts
- [ ] Create `components/profile/BillingManagementSection.tsx`:
  - Current subscription status and next billing date
  - Quick upgrade/downgrade options
  - Link to detailed billing history in Stripe portal
  - Payment method management access

---

## Phase 7: Basic Admin Statistics
**Goal**: Add simple total test count to existing admin dashboard

### Basic Admin Stats
[Goal: Show basic platform usage statistics for admin monitoring]
- [ ] Update existing `app/(protected)/admin/dashboard/page.tsx`:
  - Add total number of tests conducted across the platform
  - Display basic user count information
- [ ] Create simple usage query in existing admin utilities:
  - Total comparison tests count
  - Basic user registration statistics

---

## Phase 8: Final Implementation Sweep
**Goal**: Complete any remaining requirements and polish the application for launch

### Feature Integration and Testing
[Goal: Ensure all features work together seamlessly and handle edge cases properly]
- [ ] Verify multi-model comparison with attachments works across all features
- [ ] Test complete user journey from signup through comparison testing to history management
- [ ] Validate admin model management affects user comparison options correctly
- [ ] Confirm usage tracking and billing integration work with all subscription tiers
- [ ] Test responsive design across all new comparison and profile interfaces
- [ ] Complete mobile experience validation:
  - Test full user journey on mobile devices (signup → comparison → history → billing)
  - Verify touch targets meet accessibility guidelines (44px minimum)
  - Confirm mobile navigation works seamlessly across all features
  - Test mobile performance with multiple model streaming
  - Validate mobile usage tracking and subscription management

### Final Testing and Deployment
[Goal: Complete essential testing and prepare for production deployment]
- [ ] Verify all forms have proper validation and error handling
- [ ] Ensure error messages match Comparr.ai branding
- [ ] Verify all environment variables are properly configured for deployment
