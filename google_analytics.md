# Google analytics 4 setup & event tracking guide

## Overview
This guide explains how to set up comprehensive event tracking for www.markyourdata.com to understand user behavior, content engagement, and conversion patterns.

**Measurement ID:** `G-H10MC1RNXH`

---

## What's already configured (automatic)

### 1. basic tracking via analytics.js
✅ Page views - automatically tracked on all pages  
✅ Session tracking  
✅ User demographics (when available)  
✅ Traffic sources  
✅ Device/browser information  

---

## What events.js will track (automatic via code)

The `events.js` file will automatically track the following without manual GA4 configuration:

### 1. navigation & content discovery
- **Service card clicks** - Which services interest visitors
  - Event: `service_click`
  - Parameters: `service_name`, `service_category`, `page_location`
  
- **Project/case study clicks** - Which projects resonate
  - Event: `project_click`
  - Parameters: `project_name`, `client`, `page_location`
  
- **Blog post clicks** - Which topics attract attention
  - Event: `blog_click`
  - Parameters: `blog_title`, `page_location`

### 2. call-to-action tracking
- **CTA button clicks** - Conversion points
  - Event: `cta_click`
  - Parameters: `button_text`, `button_location`, `page_location`
  
- **Contact button clicks** - Navigation to contact page
  - Event: `contact_click`
  - Parameters: `source_page`, `button_location`

### 3. form interactions
- **Form starts** - Users who begin filling the contact form
  - Event: `form_start`
  - Parameters: `form_name`
  
- **Form submissions** - Completed contact forms
  - Event: `form_submit`
  - Parameters: `form_name`, `form_destination`
  
- **Form field interactions** - Which fields users engage with
  - Event: `form_field_focus`
  - Parameters: `field_name`, `form_name`

### 4. engagement metrics
- **Scroll depth** - How far users read content
  - Event: `scroll`
  - Parameters: `percent_scrolled` (25%, 50%, 75%, 90%)
  
- **Time on page milestones** - Deep engagement indicators
  - Event: `engaged_time`
  - Parameters: `time_milestone` (30s, 60s, 120s, 300s)

### 5. outbound clicks
- **LinkedIn profile clicks** - Social engagement
  - Event: `outbound_click`
  - Parameters: `link_url`, `link_text`, `destination`
  
- **External resource clicks** - Links to external sites
  - Event: `outbound_click`
  - Parameters: `link_url`, `link_domain`

### 6. navigation patterns
- **Menu clicks** - Navigation preferences
  - Event: `menu_click`
  - Parameters: `menu_item`, `menu_section`

---

## What requires manual ga4 configuration

These items need to be configured in the Google Analytics 4 web interface at [analytics.google.com](https://analytics.google.com).

### 1. custom dimensions (recommended)
To get maximum value from event parameters, create custom dimensions:

**Navigation to:** Admin → Custom Definitions → Create Custom Dimension

| Dimension Name | Scope | Event Parameter | Description |
|---------------|-------|-----------------|-------------|
| Service Name | Event | `service_name` | Which service was clicked |
| Project Name | Event | `project_name` | Which project was viewed |
| Blog Title | Event | `blog_title` | Which blog was clicked |
| Button Location | Event | `button_location` | Where CTA was placed |
| Form Name | Event | `form_name` | Which form was used |
| Client Name | Event | `client` | Client from project |

### 2. conversion events (critical)
Mark important events as conversions to track business goals:

**Navigation to:** Admin → Events → Mark as Conversion

Mark these events as conversions:
- ✅ `form_submit` - Contact form completion (PRIMARY CONVERSION)
- ✅ `contact_click` - Interest in contacting
- ✅ `cta_click` - Call-to-action engagement
- ⚠️ `form_start` - (Optional) Lead indicator

### 3. audiences (for remarketing & analysis)
Create audiences to understand user segments:

**Navigation to:** Admin → Audiences → Create Custom Audience

#### Suggested audiences:
1. **Engaged Visitors**
   - Conditions: `scroll` ≥ 75% OR `engaged_time` ≥ 120s
   - Use: Identify quality traffic
   
2. **Service Interested**
   - Conditions: `service_click` event exists
   - Use: Users exploring services
   
3. **Blog Readers**
   - Conditions: Page path contains `/blogs/` AND `scroll` ≥ 50%
   - Use: Content engagement audience
   
4. **Abandoned Contact**
   - Conditions: `form_start` exists but NOT `form_submit`
   - Use: Potential leads who didn't complete form
   
5. **Project Case Study Viewers**
   - Conditions: `project_click` event exists
   - Use: Users interested in your work

### 4. enhanced measurement (quick win)
Enable built-in enhanced measurement for automatic tracking:

**Navigation to:** Admin → Data Streams → Web → [Your Stream] → Enhanced Measurement

Toggle ON:
- ✅ **Scrolls** - Automatic 90% scroll tracking (supplements our custom scroll tracking)
- ✅ **Outbound clicks** - Backup for our custom tracking
- ✅ **Site search** - If you add search functionality later
- ✅ **Video engagement** - If you add videos later
- ✅ **File downloads** - Track whitepaper downloads (future use)

### 5. goals & funnels (advanced)
Create exploration reports to visualize user journeys:

**Navigation to:** Explore → Funnel Exploration

#### Example funnel: "service to contact"
1. Step 1: Homepage visit (`page_view` on `/`)
2. Step 2: Service exploration (`service_click`)
3. Step 3: Navigate to contact (`contact_click`)
4. Step 4: Form submission (`form_submit`)

#### Example funnel: "blog to service"
1. Step 1: Blog post view (`page_view` on `/pages/blogs/*`)
2. Step 2: Engaged reading (`scroll` ≥ 50%)
3. Step 3: Service click (`service_click`)
4. Step 4: Contact (`form_submit`)

### 6. custom reports (recommended)
Create reports specific to your business questions:

**Navigation to:** Explore → Create New Exploration

#### Report 1: "service interest analysis"
- Dimensions: `service_name`, `page_location`
- Metrics: `event_count` for `service_click`
- Visualization: Bar chart or table
- **Answers:** Which services get most clicks?

#### Report 2: "content effectiveness"
- Dimensions: `blog_title`, `page_location`
- Metrics: `event_count` for `blog_click`, average `scroll` depth
- **Answers:** Which blog topics drive engagement?

#### Report 3: "conversion path analysis"
- Use Path Exploration template
- Starting point: `page_view`
- Ending point: `form_submit`
- **Answers:** How do users find their way to contact form?

#### Report 4: "project case study impact"
- Dimensions: `project_name`, `client`
- Metrics: `project_click` count, subsequent `service_click`, `contact_click`
- **Answers:** Do case studies drive inquiries?

---

## Implementation checklist

### Phase 1: code implementation (automatic)
- [x] ✅ Basic GA4 setup (analytics.js already installed)
- [ ] Create `events.js` with automatic event tracking
- [ ] Integrate `events.js` into all HTML pages
- [ ] Test events in GA4 DebugView (see Testing section below)

### Phase 2: ga4 manual configuration (15-30 minutes)
- [ ] Create custom dimensions (6 dimensions)
- [ ] Mark conversion events (2-4 events)
- [ ] Enable enhanced measurement toggles
- [ ] Create basic audiences (3-5 audiences)

### Phase 3: advanced setup (optional, 1-2 hours)
- [ ] Build custom funnels
- [ ] Create custom reports
- [ ] Set up alerts for conversion drops
- [ ] Configure data retention settings

---

## Testing your setup

### Real-time debugging
1. Open Google Analytics → Reports → Realtime
2. On your website, trigger events (click buttons, scroll, fill forms)
3. Watch events appear in real-time (30-60 second delay)

### Debug view (recommended)
1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) Chrome extension
2. Enable the extension
3. Navigate to Admin → DebugView in GA4
4. Interact with your website
5. See detailed event data in real-time

### Browser console testing
Events.js includes console logging. Check browser console for:
```
[Analytics] Event: service_click | Parameters: {service_name: "Strategy Consulting", ...}
```

---

## Expected results

### Week 1-2: data collection
- Events start populating
- Identify any tracking gaps
- Validate data accuracy

### Week 3-4: initial insights
- Which services get most clicks?
- Which blog topics resonate?
- Where do users drop off in contact flow?

### Month 2+: content strategy decisions
- Create more content on high-engagement topics
- Optimize low-performing service pages
- A/B test CTA placements
- Improve conversion funnel weak points

---

## Privacy & compliance notes

GA4 is configured to:
- ✅ Respect DNT (Do Not Track) browser settings
- ✅ Anonymize IPs automatically (GA4 default)
- ✅ Not track PII (personally identifiable information)
- ✅ Use consent mode (if you add cookie banner later)

No personal data from forms (names, emails) is sent to Google Analytics - only that the event occurred.

---

## Quick start guide (tl;dr)

### For immediate results:
1. **Code**: Add `events.js` to website (automatic tracking starts)
2. **GA4**: Mark `form_submit` as conversion event
3. **GA4**: Create "Service Name" custom dimension
4. **Test**: Use DebugView to verify events
5. **Monitor**: Check Realtime reports after 24 hours

### For deep insights (do later):
1. Create all custom dimensions
2. Build conversion funnels
3. Create service/blog engagement reports
4. Set up audiences for remarketing

---

## Support resources

- **GA4 Interface:** https://analytics.google.com
- **Property ID:** G-H10MC1RNXH
- **Event Reference:** See events.js comments for all event names/parameters
- **Testing Tool:** GA4 DebugView (Admin → DebugView)
- **Learning:** [GA4 Documentation](https://support.google.com/analytics/answer/9304153)

---

## Questions to answer with this setup

1. **Content Discovery:** Which topics bring users to the site?
2. **Service Interest:** Which services generate most interest?
3. **Conversion Paths:** How do users navigate to contact form?
4. **Engagement Quality:** Are users reading content or bouncing?
5. **Case Study Impact:** Do project examples drive inquiries?
6. **CTA Effectiveness:** Which call-to-action placements work best?
7. **Blog Performance:** Which blog posts lead to service inquiries?

---

**Last Updated:** 2026-01-13  
**Version:** 1.0
