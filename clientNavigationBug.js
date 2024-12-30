In Next.js 15, using `next/navigation` client-side causes unexpected behavior when navigating to a page that requires authentication.  If the user is not authenticated, the navigation doesn't redirect to the login page as expected, instead, it might appear to do nothing or show an incomplete UI.