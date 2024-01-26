document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0; // Start with the first article

    const articles = [
        { 
            image: "./assets/banquet-hall.jpeg",
            alt: "Banquet Hall of Latvian Center in Canada",
            title: "Organize your event at the Latvian Centre!",
            text: "If you would like to host an event at the Latvian Center in Canada, we are making it easier than ever for members of our youth association. Whether you would like to organize a personal event or a networking event for the public, we offer many services with the help of partners from our community to make your event a success.",
            link: "https://latviancentre.org/services/telpu-noma/"
        },
        { 
            image: "./assets/trudeau.jpeg",
            alt: "Canadian PM Trudeau speaking with a Respresentative from Latvia",
            title: "Statement by the Prime Minister on Latvia’s Independence Day",
            text: "The Prime Minister, Justin Trudeau, today issued the following statement on Latvia’s Independence Day: Today, we join Latvian communities in Canada and around the world to celebrate Latvia’s Independence Day. Canada and Latvia share close ties based on common values of freedom, democracy, and the rule of law, as well as a mutual commitment to transatlantic security.",
            link: "https://www.pm.gc.ca/en/news/statements/2023/11/18/statement-prime-minister-latvias-independence-day"
        },
        { 
            image: "./assets/rtu.jpeg",
            alt: "Picture of Riga Technical University",
            title: "Riga Technical University (RTU) offers 1-2 week Summer School Courses",
            text: "Europe and Latvia beckon! RTU has more than 20 years of experience in organising specialised summer/winter courses. Every year RTU is, updating its academic content and looking for exciting and current topics for students to learn and develop new skills that are in demand today. Courses and training programmes also put a strong emphasis on practical learning to give students as much added value as possible.",
            link: "https://lnak.net/en/organizaciju-zina/riga-technical-university-rtu-offers-summer-schools/"
        },
        { 
            image: "./assets/balta-galdauta.jpeg",
            alt: "Banquet table in Latvia with white tablecloth, food and flowers",
            title: "What you need to know about May 4th?",
            text: "The anniversary of the declaration of independence of the Republic of Latvia is celebrated on 4 May, in Latvia and elsewhere in the world. On May 4, 1990, 138 of the 201 deputies of the Supreme Council adopted a declaration “on the restoration of independence of the Republic of Latvia”, reordering a new – white – page in the history of Latvia.",
            link: "coming-soon.html"
        },
        { 
            image: "./assets/lv-manitoba.jpeg",
            alt: "Latvian immigrants in front of a building in Manitoba",
            title: "A Tapestry of Tradition: The Rich History of Latvians in Canada",
            text: "Canada's multicultural landscape is woven with the threads of diverse communities, each contributing to the nation's vibrant cultural tapestry. Among these, the Latvian community stands as a testament to resilience, tenacity, and the enduring spirit of migration. This article delves into the history of Latvians in Canada, exploring their journey, contributions, and the cultural legacy they've woven into the fabric of Canadian society...",
            link: "article.html"
        },
            // Add more articles as needed
    ];

    function createArticleCard(article) {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
            <div class="card">
                <img src="${article.image}" class="card-img-top" alt="${article.alt}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.text}</p>
                    <a href="${article.link}" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;
        return card;
    };

    function loadNextArticles() {
        const container = document.getElementById("articleContainer");

        if (currentIndex < articles.length) {
            const articlesToAdd = Math.min(3, articles.length - currentIndex);
    
            for (let i = 0; i < articlesToAdd; i++) {
                const article = articles[articles.length - 1 - currentIndex]; // Print articles from end of array
                const articleCard = createArticleCard(article);
                container.querySelector(".row").appendChild(articleCard);
                currentIndex++;
            }

            if (currentIndex === articles.length) {
                document.getElementById("loadMoreBtn").disabled = true;
            }
        }
    };

    // Initial load
    loadNextArticles();

    // Attach event listener to the "Load More" button
    document.getElementById("loadMoreBtn").addEventListener("click", loadNextArticles);
});