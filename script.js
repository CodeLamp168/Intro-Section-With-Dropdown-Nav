const navBtn = document.getElementById('bar-js')
const navBar = document.getElementById('nav-js')
const closeNav = document.getElementById('exit-js')
const featureBtn = document.getElementById('feature-desktop-js')
const companyBtn = document.getElementById('company-desktop-js')
const features = document.getElementById('feature-box-js')
const companies = document.getElementById('company-box-js')
const arrows = document.querySelectorAll('.arrow')
const boxitem = document.querySelectorAll('.box-items')


navBtn.addEventListener('click', () => {
    navBar.classList.add('active')
})

closeNav.addEventListener('click', () => {
    navBar.classList.remove('active')
})

featureBtn.addEventListener('click', () => {
    toggleFeature()

})

companyBtn.addEventListener('click', () => {
    toggleCompany()

})

function toggleFeature(){
    if(boxitem[0].classList.contains('open'))
    {
        boxitem[0].classList.remove('open')
        arrows[0].classList.remove('openarrow')
        featureBtn.style.color = "hsl(0, 0%, 8%)"
        
    }
    else {
        boxitem[0].classList.add('open')
        arrows[0].classList.add('openarrow')
        featureBtn.style.color = "black"
    }
}

function toggleCompany(){

    if(boxitem[1].classList.contains('open'))
    {
        boxitem[1].classList.remove('open')
        arrows[1].classList.remove('openarrow')
        companyBtn.style.color = "hsl(0, 0%, 8%)"
    }
    else {
        boxitem[1].classList.add('open')
        arrows[1].classList.add('openarrow')
        companyBtn.style.color = "black"
    }
}

