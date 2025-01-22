// Wait for the GitHub navigation bar to load
const addReleaseTab = () => {
    const navBar = document.querySelector("ul.UnderlineNav-body");

    if (navBar && !document.querySelector(".release-tab")) {
        // Create the "Release" tab as an <li> element
        const releaseTab = document.createElement("li");
        releaseTab.className = "d-inline-flex release-tab"; // Class similar to other tabs

        // Create the inner <a> element for the link
        const releaseLink = document.createElement("a");
        releaseLink.className = "UnderlineNav-item";
        releaseLink.href = `${window.location.origin}/${window.location.pathname.split("/")[1]}/${window.location.pathname.split("/")[2]}/releases`;
        releaseLink.innerText = "Release";

        // Append the <a> to the <li> and the <li> to the nav bar
        releaseTab.appendChild(releaseLink);
        navBar.appendChild(releaseTab);
    }
};

// Observe DOM changes to ensure the tab is added even after navigation
const observer = new MutationObserver(addReleaseTab);
observer.observe(document.body, { childList: true, subtree: true });

// Initial call
addReleaseTab();