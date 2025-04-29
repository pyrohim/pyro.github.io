document.documentElement.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h1 class="new-heading">Work in progress</h1>
    `;
    document.body.style.backgroundColor = "#000";
});
document.body.addEventListener("click", () => {
    console.log("Body clicked!");
    const content = document.getElementById("content");
    if (content) {
        content.innerHTML = `
            <h1 style="color: white; text-align: center;">New Content</h1>
            <p style="color: white; text-align: center;">You clicked on the page!</p>
        `;
        document.body.style.backgroundColor = "#000";
    } else {
        console.error("Element with id 'content' not found!");
    }
});
