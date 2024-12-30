# Next.js 15 Client-Side Navigation Bug

This repository demonstrates a bug encountered when using the `next/navigation` client-side routing in Next.js 15 with authentication.  The issue occurs when navigating to a protected route while not logged in; the expected redirect to the login page doesn't happen.

## Bug Description

The navigation seems to fail silently or present a broken UI instead of redirecting as it should.  The root cause is likely due to the asynchronous nature of authentication checks interacting with the immediate navigation provided by `next/navigation`.

## Reproduction Steps

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Try navigating to a protected route without being logged in.

## Solution

The solution involves using `useRouter` along with a proper check for authentication before attempting navigation.  This ensures the authentication check completes before attempting a route transition.