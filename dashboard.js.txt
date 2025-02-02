// document.addEventListener("DOMContentLoaded", () => {
//     const welcomeText = document.getElementById("welcomeText");
//     const logoutBtn = document.getElementById("logoutBtn");
//     const promptInput = document.getElementById("promptInput");
//     const addPromptBtn = document.getElementById("addPromptBtn");
//     const promptList = document.getElementById("promptList");

//     // Check Login Status
//     const authToken = localStorage.getItem("authToken");
//     const guestMode = localStorage.getItem("guestMode");

//     if (authToken) {
//         // Simulate fetching user info with token (replace this with real API call)
//         welcomeText.textContent = "Welcome, Google User";
//     } else if (guestMode === "true") {
//         welcomeText.textContent = "Welcome, Guest";
//     } else {
//         // Redirect if not logged in or guest
//         window.location.href = "popup.html";
//     }

//     // Add Prompt
//     addPromptBtn.addEventListener("click", () => {
//         const promptText = promptInput.value.trim();
//         if (promptText) {
//             savePrompt(promptText);
//             renderPrompts();
//             promptInput.value = ""; // Clear input after adding
//         }
//     });

//     // Save Prompt to LocalStorage
//     function savePrompt(prompt) {
//         const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
//         prompts.push(prompt);
//         localStorage.setItem("prompts", JSON.stringify(prompts));
//     }

//     // Render Prompts
//     function renderPrompts() {
//         const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
//         promptList.innerHTML = ""; // Clear current list
//         prompts.forEach((prompt, index) => {
//             const promptItem = document.createElement("div");
//             promptItem.className = "prompt-item";
//             promptItem.innerHTML = `
//                 <p>${prompt}</p>
//                 <button onclick="deletePrompt(${index})">Delete</button>
//             `;
//             promptList.appendChild(promptItem);
//         });
//     }

//     // Delete Prompt
//     window.deletePrompt = (index) => {
//         const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
//         prompts.splice(index, 1);
//         localStorage.setItem("prompts", JSON.stringify(prompts));
//         renderPrompts();
//     };

//     // Logout
//     logoutBtn.addEventListener("click", () => {
//         localStorage.clear();
//         window.location.href = "popup.html";
//     });

//     // Initial Load
//     renderPrompts();
// });


document.addEventListener("DOMContentLoaded", () => {
    const promptInput = document.getElementById("promptInput");
    const categorySelect = document.getElementById("categorySelect");
    const addPromptBtn = document.getElementById("addPromptBtn");
    const promptList = document.getElementById("promptList");
    const filterCategory = document.getElementById("filterCategory");
    const manageCategoriesBtn = document.getElementById("manageCategoriesBtn");

    // Load Kategori saat halaman dimuat
    loadCategories();
    renderPrompts();

    // Tambah Prompt Baru
    addPromptBtn.addEventListener("click", () => {
        const promptText = promptInput.value.trim();
        const selectedCategory = categorySelect.value;

        if (promptText) {
            savePrompt(promptText, selectedCategory);
            renderPrompts();
            promptInput.value = "";
        }
    });

    // Simpan Prompt ke LocalStorage
    function savePrompt(prompt, category) {
        const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
        prompts.push({ prompt, category });
        localStorage.setItem("prompts", JSON.stringify(prompts));
    }

    // Tampilkan Prompt di UI
    function renderPrompts() {
        const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
        const selectedFilter = filterCategory.value;
        promptList.innerHTML = "";

        const filteredPrompts = selectedFilter
            ? prompts.filter(p => p.category === selectedFilter)
            : prompts;

        filteredPrompts.forEach((item, index) => {
            const promptItem = document.createElement("div");
            promptItem.className = "prompt-item";
            promptItem.innerHTML = `
                <p><strong>${item.category || "No Category"}</strong>: ${item.prompt}</p>
                <button onclick="deletePrompt(${index})">Delete</button>
            `;
            promptList.appendChild(promptItem);
        });
    }

    // Hapus Prompt
    window.deletePrompt = (index) => {
        const prompts = JSON.parse(localStorage.getItem("prompts")) || [];
        prompts.splice(index, 1);
        localStorage.setItem("prompts", JSON.stringify(prompts));
        renderPrompts();
    };

    // Kelola Kategori
    manageCategoriesBtn.addEventListener("click", () => {
        const categoryName = prompt("Enter new category name:");
        if (categoryName) {
            const categories = JSON.parse(localStorage.getItem("categories")) || [];
            if (!categories.includes(categoryName)) {
                categories.push(categoryName);
                localStorage.setItem("categories", JSON.stringify(categories));
                loadCategories();
            }
        }
    });

    // Muat Kategori di Dropdown
    function loadCategories() {
        const categories = JSON.parse(localStorage.getItem("categories")) || [];
        categorySelect.innerHTML = '<option value="">No Category</option>';
        filterCategory.innerHTML = '<option value="">All Categories</option>';

        categories.forEach(category => {
            const option = `<option value="${category}">${category}</option>`;
            categorySelect.innerHTML += option;
            filterCategory.innerHTML += option;
        });
    }

    // Filter Berdasarkan Kategori
    filterCategory.addEventListener("change", renderPrompts);
});
