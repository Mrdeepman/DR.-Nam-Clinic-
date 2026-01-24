import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Detect if we're running on GitHub Pages (production build)
const PROD = import.meta.env.PROD === true
const BASE = PROD ? '/DR.-Nam-Clinic-/' : '/'

// #region agent log
fetch('http://127.0.0.1:7242/ingest/09faf778-5f76-43bb-89fd-8c59a78464dd',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/main.tsx:13',message:'boot: env + base + path',data:{prod:PROD,base:BASE,pathname:window.location.pathname,href:window.location.href},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'A'})}).catch(()=>{});
// #endregion

const rootElement = document.getElementById('root');
// #region agent log
fetch('http://127.0.0.1:7242/ingest/09faf778-5f76-43bb-89fd-8c59a78464dd',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/main.tsx:18',message:'boot: root element present',data:{hasRoot:Boolean(rootElement)},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'B'})}).catch(()=>{});
// #endregion
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={BASE}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// #region agent log
fetch('http://127.0.0.1:7242/ingest/09faf778-5f76-43bb-89fd-8c59a78464dd',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/main.tsx:32',message:'boot: render called',data:{basename:BASE},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'C'})}).catch(()=>{});
// #endregion

window.addEventListener('error', (event) => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09faf778-5f76-43bb-89fd-8c59a78464dd',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/main.tsx:38',message:'window error',data:{message:event.message,filename:event.filename,lineno:event.lineno,colno:event.colno},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
});

window.addEventListener('unhandledrejection', (event) => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/09faf778-5f76-43bb-89fd-8c59a78464dd',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/main.tsx:45',message:'unhandled rejection',data:{reason:String(event.reason)},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
});

// --- Redirect to language selector on root path ---
const path = window.location.pathname
if (PROD) {
  const roots = ['/', '/DR.-Nam-Clinic-', '/DR.-Nam-Clinic-/']
  if (roots.includes(path)) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/09faf778-5f76-43bb-89fd-8c59a78464dd',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/main.tsx:55',message:'redirect: prod root',data:{path,target:`${BASE}select-language`},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    window.location.replace(`${BASE}select-language`)
  }
} else {
  if (path === '/') {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/09faf778-5f76-43bb-89fd-8c59a78464dd',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'src/main.tsx:61',message:'redirect: dev root',data:{path,target:'/select-language'},timestamp:Date.now(),sessionId:'debug-session',runId:'pre-fix',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    window.location.replace('/select-language')
  }
}
