import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/Home';
import SyaratKetentuan from '@/pages/SyaratKetentuan';
import PaketUmroh from '@/pages/PaketUmroh';
import AdminLogin from '@/pages/AdminLogin';
import AdminDashboard from '@/pages/AdminDashboard';
import AdminTestimonials from '@/pages/AdminTestimonials';
import AdminGallery from '@/pages/AdminGallery';
import AdminSettings from '@/pages/AdminSettings';
import ScrollToTop from '@/components/ScrollToTop';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/syarat-ketentuan" component={SyaratKetentuan} />
      <Route path="/paket-umroh" component={PaketUmroh} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/testimoni" component={AdminTestimonials} />
      <Route path="/admin/galeri" component={AdminGallery} />
      <Route path="/admin/settings" component={AdminSettings} />
      <Route path="/admin" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
