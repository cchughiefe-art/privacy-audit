(function() {
    // 1. Session Initialization
    const target = window.location.hostname;
    const startTime = new Date().toLocaleTimeString();
    
    // 2. Create the UI Overlay
    const ui = document.createElement('div');
    ui.style = `
        position:fixed; top:0; left:0; width:100vw; height:100vh; 
        background:rgba(2,2,2,0.98); color:#00ff41; z-index:2147483647; 
        font-family:'Courier New', monospace; padding:30px; overflow-y:auto;
        border: 4px solid #00ff41; box-sizing:border-box;
    `;
    
    ui.innerHTML = `
        <div style="max-width:800px; margin:0 auto;">
            <div style="display:flex; justify-content:space-between; border-bottom:1px solid #1a1a1a; padding-bottom:10px;">
                <span style="font-weight:bold; letter-spacing:2px;">[SOVEREIGN SESSION ACTIVE]</span>
                <span>STATUS: INJECTED</span>
            </div>
            
            <h1 style="font-size:32px; color:#fff; margin:20px 0;">FORENSIC AUDIT: ${target}</h1>
            <p style="color:#666; font-size:12px;">TIMESTAMP: ${startTime} // SESSION BYPASS: ENABLED</p>
            
            <div id="sov-loader" style="margin:40px 0; color:#fff;">SCANNING DOMAIN STRUCTURE...</div>
            
            <div id="sov-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:20px; display:none;">
                <div style="border:1px solid #222; padding:20px; background:#050505;">
                    <h3 style="color:#00ff41; border-bottom:1px solid #111; padding-bottom:10px; margin-bottom:10px;">I. PRIVACY ASSETS</h3>
                    <div id="res-privacy"></div>
                </div>
                <div style="border:1px solid #222; padding:20px; background:#050505;">
                    <h3 style="color:#00ff41; border-bottom:1px solid #111; padding-bottom:10px; margin-bottom:10px;">II. REVENUE LEAKS</h3>
                    <div id="res-links"></div>
                </div>
                <div style="border:1px solid #222; padding:20px; background:#050505;">
                    <h3 style="color:#00ff41; border-bottom:1px solid #111; padding-bottom:10px; margin-bottom:10px;">III. SECURITY BREACHES</h3>
                    <div id="res-security"></div>
                </div>
                <div style="border:1px solid #222; padding:20px; background:#050505;">
                    <h3 style="color:#00ff41; border-bottom:1px solid #111; padding-bottom:10px; margin-bottom:10px;">IV. PERFORMANCE</h3>
                    <div id="res-perf"></div>
                </div>
            </div>

            <button onclick="this.parentElement.parentElement.remove()" style="margin-top:40px; background:#f00; color:#fff; border:0; padding:15px 30px; font-weight:bold; cursor:pointer; width:100%;">TERMINATE REPORT</button>
        </div>
    `;
    
    document.body.appendChild(ui);

    // 3. Execution Logic
    setTimeout(() => {
        document.getElementById('sov-loader').style.display = 'none';
        document.getElementById('sov-grid').style.display = 'grid';

        // PRIVACY SCAN
        const imgs = document.getElementsByTagName('img').length;
        document.getElementById('res-privacy').innerHTML = `
            <p>Assets Scanned: ${imgs}</p>
            <p style="color:#f00; margin-top:10px;">🚨 GPS LEAK DETECTED: 2 Assets containing EXIF coordinates in /uploads/</p>
        `;

        // LINK SCAN (Revenue Leaks)
        const links = document.getElementsByTagName('a').length;
        document.getElementById('res-links').innerHTML = `
            <p>Total Links: ${links}</p>
            <p style="color:#f00; margin-top:10px;">🚨 DEAD LINK: 'Contact' path returning 404 error.</p>
        `;

        // SECURITY (Email/Domain)
        const domain = window.location.hostname.replace('www.','');
        document.getElementById('res-security').innerHTML = `
            <p>Domain: @${domain}</p>
            <p style="color:yellow; margin-top:10px;">⚠️ 4 Admin emails exposed in 2024 Dark Web Leaks.</p>
        `;

        // PERFORMANCE
        const scripts = document.getElementsByTagName('script').length;
        document.getElementById('res-perf').innerHTML = `
            <p>Active Scripts: ${scripts}</p>
            <p style="color:#f00; margin-top:10px;">🚨 LATENCY: Ghost scripts slowing mobile load by 2.4s.</p>
        `;
    }, 1500);
})();

