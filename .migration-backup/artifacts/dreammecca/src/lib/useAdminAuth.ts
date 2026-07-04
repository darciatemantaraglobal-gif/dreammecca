import { useAuth } from '@workspace/replit-auth-web';

export function useAdminAuth() {
  const { user, isLoading, isAuthenticated, login, logout } = useAuth();
  return { user, isLoading, isAuthenticated, login, logout };
}
