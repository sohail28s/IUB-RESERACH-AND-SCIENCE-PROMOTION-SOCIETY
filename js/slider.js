
                let slideIndex = 0;
                const slides = document.querySelector('.slides');
                const indicators = document.querySelectorAll('.indicator');
                const captions = [
                "Badge Distribution Ceremony & Society Meeting",
                    "General Members recruitment at Jinnah Hall",
                    "World Bee Day at Faculty of Agriculture & Environment",
                    "Event on World Biodiversity Day",
                    "Event on Insects & Pollinators by IUB RSPS",
                    "Webinar on Use of AI Tools"

                ];

                function showSlide(index) {
                    slides.style.transform = `translateX(${-index * 100}%)`;
                    document.querySelector('.caption').innerText = captions[index];
                    indicators.forEach((indicator, i) => {
                        indicator.classList.toggle('active', i === index);
                    });
                }

                function nextSlide() {
                    slideIndex = (slideIndex + 1) % indicators.length;
                    showSlide(slideIndex);
                }

                function currentSlide(index) {
                    slideIndex = index;
                    showSlide(index);
                }

                setInterval(nextSlide, 4000);