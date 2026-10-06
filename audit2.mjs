import fs from 'fs';
import path from 'path';
const want = ['AdminUsers','AdminWebsites','Websites.jsx','Templates.jsx','MyTemplates','Profile.jsx','TemplateGalleryPage','Login.jsx','Register.jsx','ForgotPassword','VerifyOtp','ResetPassword','BillingPage','AppLayout','ConfirmModal','EmptyState','CreateSiteChoiceModal','PublishDomainModal','Toast.jsx','Alert.jsx','Button.jsx','Onboarding','BillingPage','Settings.jsx','AdminSettings','AdminPricelist','AdminTransactions','AdminAnalytics','AdminTemplateBuilder','AdminTemplatePreview','AdminLandingEditor','AdminTemplates','AdminCategories','AdminDashboard','UserDashboard','WelcomeCard','QuickActionCard','WebsiteSummary','RecentActivity','EmptyWebsiteCard','DashboardSkeleton','UploadThumbnailButton','SessionTimeoutModal','RegistrationPendingModal','LanguageSelector','maintenance.blade'];
function list(a){const o=[];const w=(d)=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(p.includes('node_modules')||p.includes('.kilo'))continue;if(e.isDirectory())w(p);else o.push(p);}};w(a);return o;}
const files=list('resources/js').concat(['resources/views/maintenance.blade.php']).filter(p=>want.some(k=>p.includes(k)));
const out=[];
for(const f of files){
  let s=''; try{ s=fs.readFileSync(f,'utf8'); }catch{ continue; }
  const lines=s.split('\n');
  lines.forEach((l,i)=>{
    const m1=l.match(/>([^<>{}]*[A-Za-z][^<>{}]*)</);
    const m2=l.match(/['"]([A-Z][A-Za-z0-9 ,.'\/\-()&:+]{4,})['"]/);
    const cand=(m1&&m1[1].trim())||(m2&&m2[1].trim())||'';
    if(!cand||cand.length<5) return;
    if(/\s/.test(cand)&&/[A-Za-z]/.test(cand)) out.push(path.basename(f)+':'+(i+1)+': '+cand.slice(0,130));
  });
}
fs.writeFileSync('audit2.txt', out.slice(0,600).join('\n')+'\nTOTAL='+out.length);
console.log(out.slice(0,300).join('\n'));
console.log('TOTAL='+out.length);
