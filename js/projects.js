

const slugToProject = {}
for(let project of projects){
    slugToProject[project['slug']] = project
}

const currentSlug = document.body.dataset.slug;
console.log(currentSlug)

function project(slug){
    const imghero = document.querySelector('.hero')
    imghero.src = `../static/assets/${slugToProject[slug].hero}`
    const projectName = document.querySelector(".project__heading")
    projectName.innerText = `${slugToProject[slug].name}`
    const cta = document.querySelector('.cta')
    cta.href = `${slugToProject[slug].prod}`
    ctaIcon = document.querySelector('.cta__icon')
    ctaIcon.src = "../static/assets/pointer.svg"
}

project(currentSlug);