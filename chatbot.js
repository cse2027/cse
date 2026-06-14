(function() {
    // ----------------------------------------------------
    // Fallback Database (in case fetch fails or CORS blocks it)
    // ----------------------------------------------------
    const FALLBACK_RESOURCES = [
        // Semester 1
        { title: "M-1", url: "https://drive.google.com/drive/folders/1uVspgg2HEWxUu7k17wkqlRwZW--7QKYo?usp=drive_link", category: "Semester 1 Materials", page: "semester-1.html" },
        { title: "C Programming", url: "https://drive.google.com/drive/folders/1buoBJoKkLoctaZBX9otzHZFn5nM5OyqF?usp=drive_link", category: "Semester 1 Materials", page: "semester-1.html" },
        { title: "Physics (PHY)", url: "https://drive.google.com/drive/folders/1gqa5rgpTFGDTmiwpd1WVNigNAToZ_zU-?usp=drive_link", category: "Semester 1 Materials", page: "semester-1.html" },
        
        // Semester 2
        { title: "BCME", url: "https://drive.google.com/drive/folders/1J4ZLFcOXy_894L6NEnX8VD-6i1gdfggm?usp=drive_link", category: "Semester 2 Materials", page: "semester-2.html" },
        { title: "BEEE", url: "https://drive.google.com/drive/folders/1QmD40kSKMgW1WoI7CnfwF-uM3CrW4UnJ?usp=drive_link", category: "Semester 2 Materials", page: "semester-2.html" },
        { title: "Chemistry (CHEM)", url: "https://drive.google.com/drive/folders/1zasesFQQ2GrFOXt3-neQoOtSXGJNdgB9?usp=drive_link", category: "Semester 2 Materials", page: "semester-2.html" },
        { title: "Engineering Graphics (EG)", url: "https://drive.google.com/drive/folders/1dflGXjlbv8Y20QWyLYKBR5_FgoMYGIOC?usp=drive_link", category: "Semester 2 Materials", page: "semester-2.html" },
        { title: "Differential Equations & Vector Calculus (DE&VC)", url: "https://drive.google.com/drive/folders/169m-Rl2vHa9dWxmctmI3R-VILGRvQxG7?usp=drive_link", category: "Semester 2 Materials", page: "semester-2.html" },

        // Semester 3
        { title: "Probability & Statistics (P&S)", url: "https://drive.google.com/drive/folders/1ixOEBjvm4PKKEs8fdtQKuODDSKjZfhO0?usp=drive_link", category: "Semester 3 Materials", page: "semester-3.html" },
        { title: "MEFA", url: "https://drive.google.com/drive/folders/1M64Tpc5Uq5AUCqYsPDxWFiYsoj07FhIt?usp=drive_link", category: "Semester 3 Materials", page: "semester-3.html" },
        { title: "Java Programming", url: "https://drive.google.com/drive/folders/1ShiMH2qIxrLoNBR0UOz8NCDa-Zn0kqF0?usp=drive_link", category: "Semester 3 Materials", page: "semester-3.html" },
        { title: "Digital Logic & Computer Organization (DLCO)", url: "https://drive.google.com/drive/folders/12UHz3fOHurzhqw5ebdrrVQ4s4Wx0qnGN?usp=drive_link", category: "Semester 3 Materials", page: "semester-3.html" },
        { title: "Advanced Data Structures & Algorithms Analysis (ADSAA)", url: "https://drive.google.com/drive/folders/1-HQb3hM-hT-BeOEVFl0inT7pzfGlv2nl?usp=drive_link", category: "Semester 3 Materials", page: "semester-3.html" },

        // Semester 4
        { title: "Universal Human Values (UHV)", url: "https://drive.google.com/drive/folders/1MP5xZQjL-IkzQgTIntu-XptHKo-6AAdM?usp=drive_link", category: "Semester 4 Materials", page: "semester-4.html" },
        { title: "Software Engineering (SE)", url: "https://drive.google.com/drive/folders/1m-Zr8tNW0uISwihD4j7-aJMdEYbGfoZM?usp=drive_link", category: "Semester 4 Materials", page: "semester-4.html" },
        { title: "Operating Systems (OS)", url: "https://drive.google.com/drive/folders/1vk7cJyEpOgoDmu8i_4S0k-ViIzrTYs_s?usp=drive_link", category: "Semester 4 Materials", page: "semester-4.html" },
        { title: "Full Stack Development (FSD)", url: "https://drive.google.com/drive/folders/1Fv8Egs1O9DqKx6lgRB8fbObqFL4XFENq?usp=drive_link", category: "Semester 4 Materials", page: "semester-4.html" },
        { title: "Design Thinking & Innovation (DTI)", url: "https://drive.google.com/drive/folders/1rUUTbgtgqe1Ka2gR8Wrhmfw0dhe9jp5l?usp=drive_link", category: "Semester 4 Materials", page: "semester-4.html" },
        { title: "Discrete Mathematical Structures & Graph Theory (DMGT)", url: "https://drive.google.com/drive/folders/19B_B_VzP4ZPt_5mjpKIaVKB8Upc1JNcj?usp=drive_link", category: "Semester 4 Materials", page: "semester-4.html" },
        { title: "Database Management Systems (DBMS)", url: "https://drive.google.com/drive/folders/1MGe3jQFkwqIH95lyzEdn_ySGaufYXnGa?usp=drive_link", category: "Semester 4 Materials", page: "semester-4.html" },

        // Semester 5
        { title: "Artificial Intelligence (AI)", url: "https://drive.google.com/drive/folders/19G4Sbq7H2aZf6239gNdjt6xLly5Gpk6V?usp=drive_link", category: "Semester 5 Materials", page: "semester-5.html" },
        { title: "Computer Networks (CN)", url: "https://drive.google.com/drive/folders/1kEg7yGm53BXp6afpg8KiMbKQ6qa8bXGT?usp=drive_link", category: "Semester 5 Materials", page: "semester-5.html" },
        { title: "Data Warehousing & Data Mining (DWDM)", url: "https://drive.google.com/drive/folders/1gWTmKxrQVLANbQddTVZLo9wyhFWhKXpW?usp=drive_link", category: "Semester 5 Materials", page: "semester-5.html" },
        { title: "EDVC", url: "https://drive.google.com/drive/folders/1RkYj1CRJWrwUgCadAIIs9HiOmjFsps9j?usp=drive_link", category: "Semester 5 Materials", page: "semester-5.html" },
        { title: "Formal Languages & Automata Theory (FLAT)", url: "https://drive.google.com/drive/folders/10-WuZQivtwuiFKMNSpE-B5vLqSHyAueR?usp=drive_link", category: "Semester 5 Materials", page: "semester-5.html" },
        { title: "Full Stack Development - 2 (FSD-2)", url: "https://drive.google.com/drive/folders/1K1un-JQq7HThV4LpQA_-HgNsGK141EhX?usp=drive_link", category: "Semester 5 Materials", page: "semester-5.html" },
        { title: "Mobile Application Development using Flutter", url: "https://drive.google.com/drive/folders/1loM7GeM-NW-8c1lA1EHRHF6FbpUMs6Cg?usp=drive_link", category: "Semester 5 Materials", page: "semester-5.html" },

        // Semester 6
        { title: "Cloud Computing", url: "https://drive.google.com/drive/folders/138cMJBXxf7MYHAbQHQPuzd04HErm5HfO", category: "Semester 6 Materials", page: "semester-6.html" },
        { title: "Machine Learning (ML)", url: "https://drive.google.com/drive/folders/1vydtrVF_Z4vz5mf6RrkhgeUsij1HvLpI?usp=drive_link", category: "Semester 6 Materials", page: "semester-6.html" },
        { title: "Cryptography & Network Security (CNS)", url: "https://drive.google.com/drive/folders/1uudFSCGM_cWPscMioMEGhsmglK_qOSrT?usp=drive_link", category: "Semester 6 Materials", page: "semester-6.html" },
        { title: "Compiler Design (CD)", url: "https://drive.google.com/drive/folders/1-1OCS7VFWna8lMhXSsMH3th8RsrJES4y?usp=drive_link", category: "Semester 6 Materials", page: "semester-6.html" },
        { title: "Natural Language Processing (NLP)", url: "https://vvitguntur-my.sharepoint.com/:o:/g/personal/nlakshmi_vvit_net/IgD8qSKartlUTKwUCNFGeMj1Ac0EKSot9bZEStPsyEmw0RU?e=ZpOAqE", category: "Semester 6 Materials", page: "semester-6.html" },
        { title: "EP", url: "https://drive.google.com/drive/folders/1IYbE5UYiSq3DkX8dpJIyHjArYehTmVZd?usp=drive_link", category: "Semester 6 Materials", page: "semester-6.html" },

        // Index page direct cards
        { title: "Exam Archive (Previous Papers)", url: "https://drive.google.com/drive/folders/1fmyUtwLNWuekOEc36p9Cy-4IYRwYrjKD?usp=drive_link", category: "Exam Archive", page: "index.html" },
        { title: "Important Questions (IMP)", url: "https://drive.google.com/drive/folders/1cMG2NrgAcHbN5DYEafT9q0qZXlbhfzfp?usp=drive_link", category: "Important Questions", page: "index.html" },
        { title: "Micro-Syllabus", url: "https://drive.google.com/drive/folders/1pJi8-na6BOWbZlLBSIIi21PueCiRrqCI?usp=drive_link", category: "Syllabus & Info", page: "index.html" },
        { title: "Curriculum", url: "https://drive.google.com/drive/folders/1j31tPeBC_u9o4RGkkB-Nq3cnN2e8mPYz?usp=drive_link", category: "Syllabus & Info", page: "index.html" },
        { title: "Life-Skills", url: "https://drive.google.com/drive/folders/1iBf7v8i_viTnIm8kGYnZRh-vZNn3YpxC?usp=drive_link", category: "Life Skills", page: "index.html" },

        // Lab manuals (from lab.html)
        { title: "Computer Networks Lab (CN LAB)", url: "https://github.com/cse2027/cn", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "Flutter Lab", url: "https://github.com/sagaruppuluri/flutter-examples", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "DBMS SQL Lab", url: "https://github.com/cse2027/sql", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "Operating Systems Lab (OS LAB)", url: "https://github.com/cse2027/os", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "Full Stack Development 1 Lab (FSD-1 LAB)", url: "https://github.com/cse2027/html", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "Full Stack Development 2 Lab (FSD-2 LAB)", url: "https://github.com/cse2027/fsd-2", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "Computer Networks Lab Alternative (CN LAB 2)", url: "https://github.com/nalluri-sys/cn-lab/tree/main", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "Operating Systems Lab Alternative (OS LAB 2)", url: "https://github.com/vivekkj123/ktu-s4-csl-204-os-lab", category: "Lab Manuals / Resources", page: "lab.html" },
        { title: "Data Warehousing & Data Mining Lab (DWDM LAB)", url: "https://github.com/cse2027/dwdm", category: "Lab Manuals / Resources", page: "lab.html" },

        // Extra resources (from Resources.html)
        { title: "Programming Notes (Goalkicker)", url: "https://goalkicker.com/", category: "Extra Resources", page: "Resources.html" },
        { title: "Net Ninja YouTube Tutorials", url: "https://www.youtube.com/@NetNinja", category: "Extra Resources", page: "Resources.html" },
        { title: "Ethical Hacking Course", url: "https://youtu.be/WnN6dbos5u8", category: "Extra Resources", page: "Resources.html" },
        { title: "Operating Systems Slides (OS PPT)", url: "https://www.os-book.com/OS9/slide-dir/index.html", category: "Extra Resources", page: "Resources.html" },
        { title: "MongoDB Tutorial", url: "https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA", category: "Extra Resources", page: "Resources.html" },
        { title: "Cassandra Tutorial", url: "https://www.youtube.com/watch?v=s1xc1HVsRk0&list=PLalrWAGybpB-L1PGA-NfFu2uiWHEsdscD", category: "Extra Resources", page: "Resources.html" },
        { title: "RosettaCode Programming Tasks", url: "https://rosettacode.org/wiki/Category:Programming_Tasks", category: "Extra Resources", page: "Resources.html" },
        { title: "PDF Drive eBook Search", url: "https://www.pdfdrive.com/", category: "Extra Resources", page: "Resources.html" },
        { title: "CSES Coding Problem Set", url: "https://cses.fi/", category: "Extra Resources", page: "Resources.html" },
        { title: "CP Algorithms Competitive Programming", url: "https://cp-algorithms.com/", category: "Extra Resources", page: "Resources.html" },
        { title: "Take U Forward SDE Sheet", url: "https://takeuforward.org/", category: "Extra Resources", page: "Resources.html" }
    ];

    // Synonyms and abbreviation extensions to inject into search index
    const KEYWORD_MAPPINGS = {
        "cc":"cloud computing cc cloud architecture virtualization containers kubernetes",
        "dbms": "database management systems dbms sql notes databases tables query query",
        "os": "operating systems os slide notes processes kernel threading scheduling memory",
        "cn": "computer networks cn ip routing tcp udp networks subnetting",
        "ml": "machine learning ml artificial intelligence models data training regression",
        "flat": "formal languages automata theory flat turing machines grammars finite state",
        "cns": "cryptography network security cns encryption ciphers firewalls protocols",
        "cd": "compiler design cd parsing lexers ast code generation compiler",
        "nlp": "natural language processing nlp linguistics text translation speak parser",
        "ai": "artificial intelligence ai neural networks deep search algorithms logic intelligence",
        "dwdm": "data warehousing data mining dwdm analytics patterns database mining cluster warehouse",
        "uhv": "universal human values uhv ethics code conduct harmony core values society",
        "fsd": "full stack development fsd html css web javascript node express react mongo stacks development",
        "dti": "design thinking innovation dti prototyping brainstorm solve design idea",
        "dmgt": "discrete mathematical structures graph theory dmgt proofs sets logic induction graph trees",
        "m-1": "mathematics math m1 calculus matrices integration derivative linear algebra maths calculus",
        "c": "c programming language syntax arrays pointers structures standard library c notes",
        "phy": "physics phy optics wave semiconductor quantum electromagnetics laser",
        "chem": "chemistry chem organic polymer water engineering reaction chemistry",
        "eg": "engineering graphics eg drawing cad projection orthographic curves scale",
        "beee": "basic electrical electronics engineering beee circuits diodes semiconductors AC DC transformers",
        "bcme": "basic civil mechanical engineering bcme structures thermal engines power generation",
        "de&vc": "differential equations vector calculus devc integration gradient divergence curl green stokes",
        "p&s": "probability statistics ps variables distribution hypothesis testing variance standard deviation",
        "mefa": "managerial economics financial analysis mefa balance sheet capital accounting pricing market inflation",
        "java": "java programming syntax oops classes inheritance exception multithreading streams java notes jdk",
        "dlco": "digital logic computer organization dlco gates multiplexers registers cpu pipelining computer design architecture",
        "adsaa": "advanced data structures algorithms analysis adsaa trees graphs searching sorting complexity hash avl red black"
    };

    // Pages to fetch and parse dynamically when served via HTTP/HTTPS
    const PAGES_TO_SCAN = [
        'index.html',
        'semester-1.html',
        'semester-2.html',
        'semester-3.html',
        'semester-4.html',
        'semester-5.html',
        'semester-6.html',
        'semester-7.html',
        'lab.html',
        'Resources.html'
    ];

    let dataset = [];
    let fuse = null;

    // Wait until DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        injectChatHTML();
        setupEventListeners();
        loadFuseAndIndex();
    }

    // Inject chatbot markup into body
    function injectChatHTML() {
        // Launcher bubble
        const launcher = document.createElement('div');
        launcher.id = 'chatbot-launcher';
        launcher.setAttribute('aria-label', 'Open Assistant');
        launcher.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
            </svg>
        `;
        document.body.appendChild(launcher);

        // Chatbot window
        const win = document.createElement('div');
        win.id = 'chatbot-window';
        win.innerHTML = `
            <div class="chat-header">
                <div class="chat-header-info">
                    <div class="chat-header-dot"></div>
                    <h3>CSEHUB Assistant</h3>
                </div>
                <button class="chat-close-btn" aria-label="Close Chat">&times;</button>
            </div>
            <div class="chat-messages" id="chat-messages"></div>
            <form class="chat-input-form" id="chat-input-form">
                <input type="text" class="chat-input-field" id="chat-input-field" placeholder="Ask for notes, labs, papers..." autocomplete="off">
                <button type="submit" class="chat-send-btn" aria-label="Send message">
                    <svg viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                </button>
            </form>
        `;
        document.body.appendChild(win);

        // Add welcome message
        addBotMessage("Hi! I'm your study assistant. 🎓 I can help you find notes, lab manuals, syllabus, or previous papers instantly.<br><br>What are you looking for today?");
        addChips(["DBMS notes", "OS lab manual", "Exam Papers", "Syllabus"]);
    }

    function setupEventListeners() {
        const launcher = document.getElementById('chatbot-launcher');
        const win = document.getElementById('chatbot-window');
        const closeBtn = win.querySelector('.chat-close-btn');
        const form = document.getElementById('chat-input-form');
        const input = document.getElementById('chat-input-field');

        // Toggle open
        launcher.addEventListener('click', () => {
            win.classList.add('open');
            launcher.classList.add('hidden');
            input.focus();
        });

        // Close
        closeBtn.addEventListener('click', () => {
            win.classList.remove('open');
            launcher.classList.remove('hidden');
        });

        // Form submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = input.value.trim();
            if (!text) return;

            addUserMessage(text);
            input.value = '';
            handleUserQuery(text);
        });
    }

    // Dynamic extraction and indexing
    async function loadFuseAndIndex() {
        // Build initial searchable dataset using fallback resources
        dataset = [...FALLBACK_RESOURCES];
        augmentDatasetWithKeywords(dataset);

        // Setup Fuse search if Fuse.js library is loaded
        function initializeFuse() {
            if (window.Fuse) {
                fuse = new Fuse(dataset, {
                    keys: ['title', 'category', 'searchKeywords'],
                    threshold: 0.4,
                    includeScore: true
                });
            } else {
                console.warn("Fuse.js not loaded. Retrying in 1s...");
                setTimeout(initializeFuse, 1000);
            }
        }
        initializeFuse();

        // Perform active scan if we are running in an HTTP/HTTPS environment
        if (window.location.protocol.startsWith('http')) {
            try {
                const scraped = await scanResources();
                if (scraped.length > 0) {
                    // Merge scraped data into dataset, keeping original fallback elements but overriding/extending with fresh data
                    scraped.forEach(sc => {
                        const idx = dataset.findIndex(d => d.url === sc.url);
                        if (idx >= 0) {
                            dataset[idx] = { ...dataset[idx], ...sc };
                        } else {
                            dataset.push(sc);
                        }
                    });
                    augmentDatasetWithKeywords(dataset);
                    if (window.Fuse) {
                        fuse = new Fuse(dataset, {
                            keys: ['title', 'category', 'searchKeywords'],
                            threshold: 0.4,
                            includeScore: true
                        });
                    }
                }
            } catch (err) {
                console.warn("Dynamic scanning failed, using offline fallback dataset.", err);
            }
        }
    }

    // Scraping logic for links containing resources (Google Drive, Github, SharePoint)
    async function scanResources() {
        let scraped = [];
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        const promises = PAGES_TO_SCAN.map(async (page) => {
            try {
                // If scanning current page, just parse local document
                if (page === currentPage) {
                    extract(document, page);
                    return;
                }
                const response = await fetch(page);
                if (!response.ok) return;
                const htmlText = await response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlText, 'text/html');
                extract(doc, page);
            } catch (e) {
                // Fetch failed (CORS or network error)
            }
        });

        await Promise.all(promises);

        function extract(doc, pageName) {
            const cards = doc.querySelectorAll('.card');
            cards.forEach(card => {
                const titleEl = card.querySelector('.subject-filled') || card.querySelector('.subject-outline') || card.querySelector('h2, h3');
                const linkEl = card.querySelector('a.open-btn') || card.querySelector('a');
                if (titleEl && linkEl) {
                    const title = titleEl.textContent.trim();
                    const url = linkEl.getAttribute('href');
                    
                    if (!url || url.startsWith('#') || url.endsWith('.html') || (!url.startsWith('http') && !url.startsWith('https'))) {
                        return;
                    }
                    
                    let category = 'General Resource';
                    if (pageName.startsWith('semester-')) {
                        const semNum = pageName.replace('semester-', '').replace('.html', '');
                        category = `Semester ${semNum} Materials`;
                    } else if (pageName === 'lab.html') {
                        category = 'Lab Manuals / Resources';
                    } else if (pageName === 'Resources.html') {
                        category = 'Extra Resources';
                    } else if (pageName === 'index.html') {
                        category = 'Main Resource';
                    }
                    
                    if (!scraped.some(r => r.url === url)) {
                        scraped.push({
                            title: title,
                            url: url,
                            category: category,
                            page: pageName
                        });
                    }
                }
            });
        }

        return scraped;
    }

    // Append helper expansion text based on the card titles
    function augmentDatasetWithKeywords(list) {
        list.forEach(item => {
            let extra = "";
            const lowerTitle = item.title.toLowerCase();
            
            // Match with defined synonyms
            for (const key in KEYWORD_MAPPINGS) {
                if (lowerTitle.includes(key) || key.includes(lowerTitle)) {
                    extra += " " + KEYWORD_MAPPINGS[key];
                }
            }

            // Map standard categories/types of user intents
            if (item.category.includes("Lab") || lowerTitle.includes("lab")) {
                extra += " lab manual experiment code programming labs github";
            }
            if (item.category.includes("Semester")) {
                extra += " notes study materials lectures syllabus drive pdf books course";
            }
            if (item.category.includes("Exam") || lowerTitle.includes("exam") || lowerTitle.includes("archive")) {
                extra += " previous papers exams questions archives mid-term final year papers question bank";
            }
            if (item.category.includes("Questions") || lowerTitle.includes("imp")) {
                extra += " important questions imp question bank test mid";
            }
            if (item.category.includes("Syllabus") || lowerTitle.includes("syllabus") || lowerTitle.includes("curriculum")) {
                extra += " curriculum syllabus micro-syllabus regulation course structure units info information";
            }

            item.searchKeywords = (lowerTitle + " " + item.category.toLowerCase() + extra).trim();
        });
    }

    // Chatbot response builder
    function handleUserQuery(query) {
        if (!fuse) {
            // Fuse not initialized yet fallback
            setTimeout(() => handleUserQuery(query), 500);
            return;
        }

        // Clean user input
        const cleanQuery = query.toLowerCase().trim();

        // 0. Conversational rule-based responses
        if (/^(no|nope|nah|no\s?thanks|nevermind|nothing)$/i.test(cleanQuery) || /\b(no\s?thanks|nevermind)\b/i.test(cleanQuery)) {
            setTimeout(() => {
                addBotMessage("Thank you! Enjoy your day and happy learning! 🌟");
            }, 400);
            return;
        }

        if (/\b(about|who\s?created|purpose|disclaimer|info\s?about)\b/i.test(cleanQuery)) {
            setTimeout(() => {
                addBotMessage("You can view our details, project contributors, and disclaimers on the About page. ℹ️<br><br><a href='about.html' class='chat-resource-btn'>Go to About Page</a>");
            }, 400);
            return;
        }

        if (/\b(cgpa|gpa|calculator|calculate)\b/i.test(cleanQuery)) {
            setTimeout(() => {
                addBotMessage("Use our CGPA calculator to quickly check your academic scores and SGPA. 📊<br><br><a href='cgpa.html' class='chat-resource-btn'>Go to CGPA Calculator</a>");
            }, 400);
            return;
        }

        if (/\b(thank\s?you|thanks|thankyou|ty|tanks|thx)\b/i.test(cleanQuery)) {
            setTimeout(() => {
                addBotMessage("You're very welcome! Enjoy your day and happy learning! 🌟");
            }, 400);
            return;
        }

        if (/\b(upload|uplaod|submit|share|add)\b/i.test(cleanQuery)) {
            setTimeout(() => {
                addBotMessage("You must register first and you can upload! 📝<br><br><a href='register.html' class='chat-resource-btn'>Go to Register</a>");
            }, 400);
            return;
        }

        if (/\b(hi|hello|hey|greetings|good\s?(morning|afternoon|evening))\b/i.test(cleanQuery)) {
            setTimeout(() => {
                addBotMessage("Hello! How can I help you find study materials today? 🎓");
                addChips(["DBMS notes", "OS lab manual", "Exam Papers"]);
            }, 400);
            return;
        }

        // 1. Synonym matching boost (e.g. user asks "dbms notes" -> search for database management systems)
        let processedSearchQuery = cleanQuery;
        
        // Match specific intent tags
        let intentFilters = {
            lab: cleanQuery.includes("lab") || cleanQuery.includes("manual") || cleanQuery.includes("experiment"),
            papers: cleanQuery.includes("paper") || cleanQuery.includes("exam") || cleanQuery.includes("archive") || cleanQuery.includes("previous"),
            imp: cleanQuery.includes("imp") || cleanQuery.includes("important") || cleanQuery.includes("question"),
            syllabus: cleanQuery.includes("syllabus") || cleanQuery.includes("curriculum") || cleanQuery.includes("structure")
        };

        // If abbreviations are typed, expand them
        for (const abbreviation in KEYWORD_MAPPINGS) {
            const regex = new RegExp(`\\b${abbreviation}\\b`, 'g');
            if (regex.test(cleanQuery)) {
                // Add the full name to search string
                const words = KEYWORD_MAPPINGS[abbreviation].split(" ");
                processedSearchQuery += " " + words.slice(0, 3).join(" ");
            }
        }

        // Run fuzzy search
        const results = fuse.search(processedSearchQuery);
        
        // Post-processing filter to match specific intent categories if user asked for it
        let filteredResults = results;
        if (intentFilters.lab) {
            filteredResults = results.filter(r => r.item.category.includes("Lab") || r.item.searchKeywords.includes("lab"));
        } else if (intentFilters.papers) {
            filteredResults = results.filter(r => r.item.category.includes("Exam") || r.item.searchKeywords.includes("paper"));
        } else if (intentFilters.imp) {
            filteredResults = results.filter(r => r.item.category.includes("Important") || r.item.category.includes("Exam") || r.item.searchKeywords.includes("imp"));
        } else if (intentFilters.syllabus) {
            filteredResults = results.filter(r => r.item.category.includes("Syllabus") || r.item.searchKeywords.includes("syllabus"));
        }

        // If strict filtering yields nothing, fallback to raw search results
        const finalResults = filteredResults.length > 0 ? filteredResults : results;

        setTimeout(() => {
            if (finalResults.length === 0) {
                addBotMessage("I couldn't find any resources matching that request. Please try searching for a different subject or abbreviation (like **OS**, **DBMS**, **M-1**, or **FSD**).<br><br>Alternatively, browse these popular sections:");
                addChips(["DBMS notes", "Operating Systems", "Lab Manuals", "Exam Papers"]);
            } else {
                // Output top matches (max 4 matches)
                const topResults = finalResults.slice(0, 4);
                let messageHtml = `I found some resources matching **"${query}"**:<br>`;
                addBotMessage(messageHtml);
                addResources(topResults.map(r => r.item));
                
                // Add a small conversational followup
                setTimeout(() => {
                    addBotMessage("Can I help you find anything else?");
                }, 400);
            }
        }, 600);
    }

    // Helper functions for updating DOM
    function addUserMessage(text) {
        const msgs = document.getElementById('chat-messages');
        const el = document.createElement('div');
        el.className = 'chat-message user';
        el.textContent = text;
        msgs.appendChild(el);
        scrollToBottom();
    }

    function addBotMessage(html) {
        const msgs = document.getElementById('chat-messages');
        const el = document.createElement('div');
        el.className = 'chat-message bot';
        el.innerHTML = html;
        msgs.appendChild(el);
        scrollToBottom();
    }

    function addChips(chips) {
        const msgs = document.getElementById('chat-messages');
        const chipContainer = document.createElement('div');
        chipContainer.className = 'chat-chips';
        
        chips.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'chat-chip';
            btn.textContent = text;
            btn.addEventListener('click', () => {
                addUserMessage(text);
                handleUserQuery(text);
            });
            chipContainer.appendChild(btn);
        });

        msgs.appendChild(chipContainer);
        scrollToBottom();
    }

    function addResources(items) {
        const msgs = document.getElementById('chat-messages');
        const resContainer = document.createElement('div');
        resContainer.className = 'chat-resources';

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'chat-resource-card';
            
            // Format link display
            let linkLabel = "Open Drive Link";
            if (item.url.includes("github.com")) {
                linkLabel = "View GitHub Repo";
            } else if (item.url.includes("youtube.com") || item.url.includes("youtu.be")) {
                linkLabel = "Watch YouTube Video";
            } else if (item.url.includes("sharepoint.com")) {
                linkLabel = "Open SharePoint File";
            }

            card.innerHTML = `
                <div class="chat-resource-info">
                    <span class="chat-resource-title">${item.title}</span>
                    <span class="chat-resource-category">${item.category}</span>
                </div>
                <a href="${item.url}" class="chat-resource-btn" target="_blank">${linkLabel}</a>
            `;
            resContainer.appendChild(card);
        });

        msgs.appendChild(resContainer);
        scrollToBottom();
    }

    function scrollToBottom() {
        const msgs = document.getElementById('chat-messages');
        msgs.scrollTop = msgs.scrollHeight;
    }
})();
