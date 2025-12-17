console.log("✅ Custom MovieBox JS Loaded from Remote URL!");

// Create a visual indicator that JS is running
const indicator = document.createElement('div');
indicator.style.position = 'fixed';
indicator.style.top = '50px';
indicator.style.left = '50%';
indicator.style.transform = 'translateX(-50%)';
indicator.style.padding = '10px 20px';
indicator.style.backgroundColor = 'rgba(0, 255, 0, 0.9)';
indicator.style.color = 'black';
indicator.style.zIndex = '999999';
indicator.style.fontWeight = 'bold';
indicator.style.borderRadius = '8px';
indicator.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
indicator.innerText = 'Custom JS Loaded Successfully';
document.body.appendChild(indicator);

// Function to remove generic ads
function cleanPage() {
    const adSelectors = [
         // Generic selectors
        '.ad', '.ads', '.advertisement', '[id^="google_ads"]',
        // Specific likely overlay selectors
        '.overlay-ad', '.popup-ad',
        // Common video player overlay ads
        '.jw-ad-container'
    ];
    
    let removedCount = 0;
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.remove(); // Completely remove from DOM
            removedCount++;
        });
    });
    
    if (removedCount > 0) {
        console.log(`Removed ${removedCount} potential ad elements.`);
    }
}

// Run immediately and periodically
cleanPage();
setInterval(cleanPage, 2000);
