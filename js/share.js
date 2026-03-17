
        // Dynamically grabs the current page URL and opens the LinkedIn sharing dialog
        function shareToLinkedIn() {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=600');
        }

        // Dynamically grabs the URL and Page Title for Twitter
        function shareToTwitter() {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(document.title);
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
        }

        // Opens the user's default mail client with a pre-filled subject and body
        function shareToEmail() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            window.location.href = `mailto:?subject=Check out this resource: ${title}&body=I found this highly tactical playbook and thought you might find it useful:%0D%0A%0D%0A${url}`;
        }

        // Copies the URL to clipboard and provides a visual "Copied!" feedback
        function copyToClipboard() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                const copyText = document.getElementById('copyText');
                const copyBtn = document.getElementById('copyBtn');
                
                // Change UI to show success
                copyText.innerText = 'Copied!';
                copyBtn.classList.add('bg-emerald-500', 'text-white', 'hover:bg-emerald-600');
                copyBtn.classList.remove('bg-slate-100', 'text-slate-600', 'hover:bg-indigo-600');
                
                // Reset UI back to normal after 2.5 seconds
                setTimeout(() => {
                    copyText.innerText = 'Copy Link';
                    copyBtn.classList.remove('bg-emerald-500', 'text-white', 'hover:bg-emerald-600');
                    copyBtn.classList.add('bg-slate-100', 'text-slate-600', 'hover:bg-indigo-600');
                }, 2500);
            });
        }
