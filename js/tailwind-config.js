tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
                    },
                    colors: {
                        slate: {
                            850: '#1e293b', 
                        }
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
        const searchInput = document.getElementById('labSearch');
        const cards = document.querySelectorAll('.lab-card');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();

            cards.forEach(card => {
                // Grabs all the text inside the card (Title, Description, and Tags)
                const cardContent = card.textContent.toLowerCase();

                // If the card text includes the search term, show it. Otherwise, hide it.
                if (cardContent.includes(searchTerm)) {
                    card.style.display = 'flex'; // using flex because your cards use flex-col
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });