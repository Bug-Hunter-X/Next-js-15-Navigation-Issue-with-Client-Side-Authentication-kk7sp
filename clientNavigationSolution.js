The issue is resolved by integrating authentication checks before the navigation.  Instead of directly using `router.push` or `router.replace`, we introduce an asynchronous function that verifies authentication first. If authentication fails, it redirects to the login page.  If authentication succeeds, then the navigation proceeds.

```javascript
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext'; // Your authentication context

export default function ProtectedPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        await router.replace('/login');
      }
    };

    checkAuth();
  }, [isAuthenticated, router]);

  // ... rest of your component
}
```