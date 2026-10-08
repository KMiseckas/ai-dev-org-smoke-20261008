import {test,expect} from '@playwright/test';
import fs from 'node:fs';
test('visitor greeting and browser evidence',async({page},testInfo)=>{
 const errors=[],failed=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
 page.on('requestfailed',r=>failed.push({url:r.url(),error:r.failure()?.errorText}));
 await page.goto('/');
 await page.getByLabel('Your name').fill('Ada');
 await page.getByRole('button',{name:'Greet',exact:true}).click();
 await expect(page.getByRole('status')).toHaveText('Hello, Ada');
 await expect(page.getByRole('heading',{level:1})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 fs.mkdirSync('artifacts',{recursive:true});
 await page.screenshot({path:'artifacts/'+testInfo.project.name+'.png',fullPage:true});
 fs.writeFileSync('artifacts/'+testInfo.project.name+'-browser.json',JSON.stringify({errors,failed},null,2));
 expect(errors).toEqual([]);expect(failed).toEqual([]);
});
