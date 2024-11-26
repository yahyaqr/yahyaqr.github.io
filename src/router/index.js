import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Profile from '../pages/Profile.vue';
import Portfolio from '../pages/Portfolio.vue';

import SleepResearch from '../pages/portfolio/SleepResearch.vue';
import FastContent from '../pages/portfolio/FastContent.vue';
import GSheetsDB from '../pages/portfolio/GSheetsDB.vue';
import InstantBackend from '../pages/portfolio/InstantBackend.vue';
import LinkedinJournal from '../pages/portfolio/LinkedinJournal.vue';
import StartupsDue from '../pages/portfolio/StartupsDue.vue';
import WebScraper from '../pages/portfolio/WebScraper.vue';

const routes = [
  { path: '/', component: Home }, // Default route
  { path: '/profile', component: Profile },
  { path: '/portfolio', component: Portfolio },
  { path: '/portfolio/sleep-research-tool', component: SleepResearch },
  { path: '/portfolio/fastcontent', component: FastContent },
  { path: '/portfolio/gsheets-db', component: GSheetsDB },
  { path: '/portfolio/instant-backend', component: InstantBackend },
  { path: '/portfolio/linkedin-journal', component: LinkedinJournal },
  { path: '/portfolio/startups-due-diligence', component: StartupsDue },
  { path: '/portfolio/web-scraper', component: WebScraper },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
