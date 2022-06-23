function ThemeToggle() {
	const root = document.documentElement;

	// Base color (off-white).
	let cBase = getComputedStyle(root).getPropertyValue("--base");
	let cDBase = getComputedStyle(root).getPropertyValue("--dBase");
	let cBaseTmp = cBase;
	root.style.setProperty("--base", cDBase);
	root.style.setProperty("--dBase", cBaseTmp);

	// Primary color (cadet blue-ish).
	let cPrimary = getComputedStyle(root).getPropertyValue("--primary");
	let cDPrimary = getComputedStyle(root).getPropertyValue("--dPrimary");
	let cPrimaryTmp = cPrimary;
	root.style.setProperty("--primary", cDPrimary);
	root.style.setProperty("--dPrimary", cPrimaryTmp);

	// Secondary color (aquamarine-ish).
	let cSecondary = getComputedStyle(root).getPropertyValue("--secondary");
	let cDSecondary = getComputedStyle(root).getPropertyValue("--dSecondary");
	let cSecondaryTmp = cSecondary;
	root.style.setProperty("--secondary", cDSecondary);
	root.style.setProperty("--dSecondary", cSecondaryTmp);
}

window.onload = function() {
	let tiles = document.getElementById("work").getElementsByTagName("a");

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			let image = entry.target.getElementsByTagName("img")[0];

			if (entry.isIntersecting) {
				image.style.opacity = "1.0";
				image.style.transition = "opacity 1.5s ease-in 0.25s";
			} else {
				image.style.opacity = "0.0";
				image.style.transition = "opacity 2s ease-in 2s";
			}
		});
	}, { threshold: 0.7 });

	for (i of tiles) {
		observer.observe(i);
	}
}