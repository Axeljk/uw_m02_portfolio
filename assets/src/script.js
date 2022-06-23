console.log("hmm");

function ThemeToggle() {
	const root = document.documentElement;
	let cBase = getComputedStyle(root).getPropertyValue("--base");
	let cDBase = getComputedStyle(root).getPropertyValue("--dBase");
	let cBaseTmp = cBase;

	let cPrimary = getComputedStyle(root).getPropertyValue("--primary");
	let cDPrimary = getComputedStyle(root).getPropertyValue("--dPrimary");
	let cPrimaryTmp = cPrimary;

	let cSecondary = getComputedStyle(root).getPropertyValue("--secondary");
	let cDSecondary = getComputedStyle(root).getPropertyValue("--dSecondary");
	let cSecondaryTmp = cSecondary;

	root.style.setProperty("--base", cDBase);
	root.style.setProperty("--dBase", cBaseTmp);
	root.style.setProperty("--primary", cDPrimary);
	root.style.setProperty("--dPrimary", cPrimaryTmp);
	root.style.setProperty("--secondary", cDSecondary);
	root.style.setProperty("--dSecondary", cSecondaryTmp);
 }