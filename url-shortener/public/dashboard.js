const form = document.getElementById('shorten-form');
const resultContainer = document.getElementById('result-container');
const shortLinkText = document.getElementById('short-link');
const linksContainer = document.getElementById('links-container');
const modal = document.getElementById('modal');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;

    try {
        const res = await fetch('/api/urls', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ originalUrl })
        });
        const data = await res.json();

        if (data.shortId) {
            const shortUrl = `${window.location.origin}/${data.shortId}`;
            shortLinkText.innerText = shortUrl;
            resultContainer.classList.remove('hidden');
            fetchRecent();
        }
    } catch (err) {
        console.error('Error shortening URL:', err);
    }
});

async function fetchRecent() {
    try {
        const res = await fetch('/api/urls/recent');
        const data = await res.json();

        if (data.length > 0) {
            linksContainer.innerHTML = data.map(link => `
                <div class="glass-card p-6 rounded-3xl flex items-center justify-between group">
                    <div class="truncate mr-8">
                        <p class="text-sm font-bold text-slate-200 mb-1 truncate">${link.originalUrl}</p>
                        <p class="text-xs text-violet-400 font-medium">${window.location.origin}/${link.shortId}</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="text-right hidden md:block">
                            <p class="text-lg font-black text-white">${link.clicks}</p>
                            <p class="text-[8px] uppercase font-black tracking-widest text-slate-600">Clicks</p>
                        </div>
                        <button onclick="showAnalytics('${link.shortId}')" class="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 group-hover:text-white group-hover:bg-violet-600 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    } catch (err) {
        console.error('Error fetching recent links:', err);
    }
}

async function showAnalytics(shortId) {
    try {
        const res = await fetch(`/api/urls/analytics/${shortId}`);
        const data = await res.json();

        document.getElementById('modal-title').innerText = `Analytics for /${shortId}`;
        document.getElementById('modal-clicks').innerText = data.clicks;
        document.getElementById('modal-date').innerText = new Date(data.createdAt).toLocaleDateString();
        
        const logsContainer = document.getElementById('modal-logs');
        if (data.analytics.length > 0) {
            logsContainer.innerHTML = data.analytics.reverse().map(log => `
                <div class="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <div>
                        <p class="text-[10px] text-slate-500">${new Date(log.timestamp).toLocaleString()}</p>
                        <p class="text-xs font-medium text-slate-300 truncate max-w-[200px]">${log.userAgent}</p>
                    </div>
                    <p class="text-[10px] font-bold text-slate-600 bg-white/5 px-2 py-1 rounded">${log.ip || 'Anonymous'}</p>
                </div>
            `).join('');
        } else {
            logsContainer.innerHTML = '<p class="text-center text-slate-600 py-4">No clicks recorded yet.</p>';
        }

        modal.classList.remove('hidden');
    } catch (err) {
        console.error('Error showing analytics:', err);
    }
}

function closeModal() {
    modal.classList.add('hidden');
}

function copyToClipboard() {
    const text = shortLinkText.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('#result-container button');
        btn.innerText = 'Copied!';
        setTimeout(() => btn.innerText = 'Copy', 2000);
    });
}

// Initial fetch
fetchRecent();
