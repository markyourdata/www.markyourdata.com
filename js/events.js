/**
 * Google Analytics 4 Event Tracking
 * Automatically tracks user interactions to understand content engagement
 *
 * Events tracked:
 * - Service card clicks
 * - Project/case study clicks
 * - Blog post clicks
 * - CTA button clicks
 * - Form interactions (start, submit, field focus)
 * - Scroll depth (25%, 50%, 75%, 90%)
 * - Engaged time milestones (30s, 60s, 120s, 300s)
 * - Outbound link clicks
 * - Navigation menu clicks
 */

(function() {
    'use strict';

    // Check if gtag is available
    if (typeof gtag === 'undefined') {
        console.warn('[Analytics] gtag not available. Events will not be tracked.');
        return;
    }

    // Debug mode - set to false in production
    const DEBUG = true;

    /**
     * Helper function to send events to GA4
     */
    function trackEvent(eventName, params = {}) {
        if (DEBUG) {
            console.log(`[Analytics] Event: ${eventName}`, params);
        }

        try {
            gtag('event', eventName, params);
        } catch (error) {
            console.error('[Analytics] Error sending event:', error);
        }
    }

    /**
     * Get clean page path without domain
     */
    function getPagePath() {
        return window.location.pathname;
    }

    /**
     * Get descriptive page location
     */
    function getPageLocation() {
        return window.location.href;
    }

    // ============================================
    // 1. SERVICE CARD CLICK TRACKING
    // ============================================
    function trackServiceClicks() {
        // Track clicks on service cards
        document.addEventListener('click', function(e) {
            // Find if clicked element or parent is a service link
            const serviceLink = e.target.closest('a[href*="/services/"]');

            if (serviceLink) {
                const href = serviceLink.getAttribute('href');
                const serviceName = serviceLink.querySelector('h3')?.textContent ||
                                  serviceLink.textContent.trim() ||
                                  'Unknown Service';

                // Determine service category
                let serviceCategory = 'General';
                if (href.includes('strategy-consulting')) serviceCategory = 'Strategy Consulting';
                else if (href.includes('platform')) serviceCategory = 'Platform';
                else if (href.includes('strategy-execution')) serviceCategory = 'Strategy Execution';
                else if (href.includes('data-leadership')) serviceCategory = 'Data Leadership';

                trackEvent('service_click', {
                    service_name: serviceName,
                    service_category: serviceCategory,
                    page_location: getPageLocation(),
                    link_url: href
                });
            }
        });
    }

    // ============================================
    // 2. PROJECT/CASE STUDY CLICK TRACKING
    // ============================================
    function trackProjectClicks() {
        document.addEventListener('click', function(e) {
            const projectLink = e.target.closest('a[href*="/projects/"]');

            if (projectLink) {
                const href = projectLink.getAttribute('href');
                const projectTitle = projectLink.querySelector('h3')?.textContent ||
                                   projectLink.textContent.trim() ||
                                   'Unknown Project';

                // Extract client name from title (usually first word)
                const client = projectTitle.split(/[\s-]/)[0];

                trackEvent('project_click', {
                    project_name: projectTitle,
                    client: client,
                    page_location: getPageLocation(),
                    link_url: href
                });
            }
        });
    }

    // ============================================
    // 3. BLOG POST CLICK TRACKING
    // ============================================
    function trackBlogClicks() {
        document.addEventListener('click', function(e) {
            const blogLink = e.target.closest('a[href*="/blogs/"]');

            if (blogLink) {
                const href = blogLink.getAttribute('href');
                const blogTitle = blogLink.querySelector('h3')?.textContent ||
                                blogLink.textContent.trim() ||
                                'Unknown Blog';

                trackEvent('blog_click', {
                    blog_title: blogTitle,
                    page_location: getPageLocation(),
                    link_url: href
                });
            }
        });
    }

    // ============================================
    // 4. CTA BUTTON TRACKING
    // ============================================
    function trackCTAClicks() {
        document.addEventListener('click', function(e) {
            // Track buttons with class 'cta-button' or containing 'contact', 'get started', etc.
            const button = e.target.closest('button.cta-button, a.cta-button, .cta-button');

            if (button) {
                const buttonText = button.textContent.trim();

                // Determine button location
                let buttonLocation = 'unknown';
                if (button.closest('header, nav')) buttonLocation = 'navigation';
                else if (button.closest('.hero')) buttonLocation = 'hero';
                else if (button.closest('footer')) buttonLocation = 'footer';
                else if (button.closest('section')) buttonLocation = 'section';

                trackEvent('cta_click', {
                    button_text: buttonText,
                    button_location: buttonLocation,
                    page_location: getPageLocation()
                });
            }
        });
    }

    // ============================================
    // 5. CONTACT NAVIGATION TRACKING
    // ============================================
    function trackContactClicks() {
        document.addEventListener('click', function(e) {
            const contactLink = e.target.closest('a[href*="contact"]');

            if (contactLink) {
                let buttonLocation = 'unknown';
                if (contactLink.closest('header, nav')) buttonLocation = 'navigation';
                else if (contactLink.closest('.hero')) buttonLocation = 'hero';
                else if (contactLink.closest('footer')) buttonLocation = 'footer';

                trackEvent('contact_click', {
                    source_page: getPagePath(),
                    button_location: buttonLocation,
                    page_location: getPageLocation()
                });
            }
        });
    }

    // ============================================
    // 6. FORM INTERACTION TRACKING
    // ============================================
    function trackFormInteractions() {
        const forms = document.querySelectorAll('form');
        const formStarted = new Set();

        forms.forEach(form => {
            const formName = form.getAttribute('id') ||
                           form.getAttribute('class') ||
                           'contact_form';

            // Track form start (first field interaction)
            const formFields = form.querySelectorAll('input, textarea, select');
            formFields.forEach(field => {
                field.addEventListener('focus', function() {
                    if (!formStarted.has(formName)) {
                        formStarted.add(formName);
                        trackEvent('form_start', {
                            form_name: formName
                        });
                    }

                    // Track individual field interactions
                    const fieldName = field.getAttribute('name') ||
                                    field.getAttribute('id') ||
                                    'unknown_field';

                    trackEvent('form_field_focus', {
                        field_name: fieldName,
                        form_name: formName
                    });
                }, { once: true }); // Each field only tracked once per session
            });

            // Track form submission
            form.addEventListener('submit', function() {
                const formDestination = form.getAttribute('action') || 'unknown';

                trackEvent('form_submit', {
                    form_name: formName,
                    form_destination: formDestination
                });
            });
        });
    }

    // ============================================
    // 7. SCROLL DEPTH TRACKING
    // ============================================
    function trackScrollDepth() {
        const scrollMilestones = [25, 50, 75, 90];
        const reachedMilestones = new Set();

        function checkScrollDepth() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || window.pageYOffset;

            const scrollPercent = Math.round(
                ((scrollTop + windowHeight) / documentHeight) * 100
            );

            scrollMilestones.forEach(milestone => {
                if (scrollPercent >= milestone && !reachedMilestones.has(milestone)) {
                    reachedMilestones.add(milestone);

                    trackEvent('scroll', {
                        percent_scrolled: milestone,
                        page_location: getPageLocation()
                    });
                }
            });
        }

        // Throttle scroll events
        let scrollTimeout;
        window.addEventListener('scroll', function() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            scrollTimeout = setTimeout(checkScrollDepth, 150);
        });
    }

    // ============================================
    // 8. ENGAGED TIME TRACKING
    // ============================================
    function trackEngagedTime() {
        const timeMilestones = [30, 60, 120, 300]; // seconds
        const reachedMilestones = new Set();
        let startTime = Date.now();
        let isPageVisible = true;

        // Pause timer when page is hidden
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                isPageVisible = false;
            } else {
                isPageVisible = true;
                startTime = Date.now(); // Reset timer when returning
            }
        });

        // Check time milestones
        setInterval(function() {
            if (!isPageVisible) return;

            const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);

            timeMilestones.forEach(milestone => {
                if (elapsedSeconds >= milestone && !reachedMilestones.has(milestone)) {
                    reachedMilestones.add(milestone);

                    trackEvent('engaged_time', {
                        time_milestone: milestone,
                        page_location: getPageLocation()
                    });
                }
            });
        }, 5000); // Check every 5 seconds
    }

    // ============================================
    // 9. OUTBOUND LINK TRACKING
    // ============================================
    function trackOutboundClicks() {
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');

            if (link && link.href) {
                const linkUrl = link.href;
                const linkText = link.textContent.trim();

                // Check if external link
                const isExternal = link.hostname !== window.location.hostname;

                if (isExternal) {
                    // Special tracking for LinkedIn
                    if (linkUrl.includes('linkedin.com')) {
                        trackEvent('outbound_click', {
                            link_url: linkUrl,
                            link_text: linkText,
                            destination: 'linkedin',
                            page_location: getPageLocation()
                        });
                    } else {
                        trackEvent('outbound_click', {
                            link_url: linkUrl,
                            link_text: linkText,
                            link_domain: link.hostname,
                            page_location: getPageLocation()
                        });
                    }
                }
            }
        });
    }

    // ============================================
    // 10. NAVIGATION MENU TRACKING
    // ============================================
    function trackMenuClicks() {
        document.addEventListener('click', function(e) {
            const menuItem = e.target.closest('nav a, header a');

            if (menuItem && !menuItem.closest('.cta-button')) {
                const menuText = menuItem.textContent.trim();
                const menuHref = menuItem.getAttribute('href');

                let menuSection = 'navigation';
                if (menuItem.closest('header')) menuSection = 'header';
                if (menuItem.closest('footer')) menuSection = 'footer';

                trackEvent('menu_click', {
                    menu_item: menuText,
                    menu_section: menuSection,
                    link_url: menuHref,
                    page_location: getPageLocation()
                });
            }
        });
    }

    // ============================================
    // INITIALIZE ALL TRACKING
    // ============================================
    function initializeTracking() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                setupTracking();
            });
        } else {
            setupTracking();
        }
    }

    function setupTracking() {
        console.log('[Analytics] Initializing event tracking...');

        trackServiceClicks();
        trackProjectClicks();
        trackBlogClicks();
        trackCTAClicks();
        trackContactClicks();
        trackFormInteractions();
        trackScrollDepth();
        trackEngagedTime();
        trackOutboundClicks();
        trackMenuClicks();

        console.log('[Analytics] Event tracking initialized successfully');
    }

    // Start tracking
    initializeTracking();

})();
