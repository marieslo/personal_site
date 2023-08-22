const langs = ["HTML", "CSS", "JavaScript"];
const last = langs.pop()
const mylangs = langs.join(', ') + ' and ' + last +".";
document.querySelector('footer').innerHTML = "This website has been created with: " + mylangs