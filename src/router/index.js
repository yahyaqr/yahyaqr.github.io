import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home.vue');
const Profile = () => import('../pages/Profile.vue');
const Portfolio = () => import('../pages/Portfolio.vue');
const SleepResearch = () => import('../pages/portfolio/SleepResearch.vue');
const FastContent = () => import('../pages/portfolio/FastContent.vue');
const GSheetsDB = () => import('../pages/portfolio/GSheetsDB.vue');
const InstantBackend = () => import('../pages/portfolio/InstantBackend.vue');
const LinkedinJournal = () => import('../pages/portfolio/LinkedinJournal.vue');
const StartupsDue = () => import('../pages/portfolio/StartupsDue.vue');
const WebScraper = () => import('../pages/portfolio/WebScraper.vue');
const Dashboard = () => import('../pages/Dashboard.vue');
const DashboardLogin = () => import('../pages/DashboardLogin.vue');
const NotFound = () => import('../pages/NotFound.vue');

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/portfolio/sleep-research', name: 'SleepResearch', component: SleepResearch },
  { path: '/portfolio/fast-content', name: 'FastContent', component: FastContent },
  { path: '/portfolio/gsheets-db', name: 'GSheetsDB', component: GSheetsDB },
  { path: '/portfolio/instant-backend', name: 'InstantBackend', component: InstantBackend },
  { path: '/portfolio/linkedin-journal', name: 'LinkedinJournal', component: LinkedinJournal },
  { path: '/portfolio/startups-diligence', name: 'StartupsDue', component: StartupsDue },
  { path: '/portfolio/web-scraper', name: 'WebScraper', component: WebScraper },
  { path: '/dashboard/login', name: 'DashboardLogin', component: DashboardLogin, meta: { hideShell: true } },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { hideShell: true } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
