import { generateBioHTML } from "./bio.js";
import { generateLinksHTML } from "./links.js";
import { generateMerchHTML } from "./merch.js";

const bandLinks = document.getElementById("links")
bandLinks.innerHTML = generateLinksHTML();

const bandMerch = document.getElementById("merch")
bandMerch.innerHTML = generateMerchHTML();

const bandBio = document.getElementById("bio")
bandBio.innerHTML = generateBioHTML(); 