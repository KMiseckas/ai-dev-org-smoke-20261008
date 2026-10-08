import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',testMatch:'browser.spec.mjs',retries:0,workers:1,reporter:'list',
 use:{baseURL:'http://127.0.0.1:3202',channel:process.env.PLAYWRIGHT_CHANNEL||undefined,trace:'retain-on-failure'},
 projects:[{name:'desktop',use:{viewport:{width:1440,height:900}}},{name:'mobile',use:{viewport:{width:390,height:844},isMobile:true,hasTouch:true}}],
 webServer:{command:'node server.mjs',url:'http://127.0.0.1:3202',reuseExistingServer:false,timeout:15000}
});
