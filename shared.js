var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button')
var toggleButton_side = document.querySelector('.toggle-button_side')
var mobileNav = document.querySelector('.mobile-nav')

for (var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function () {
        modal.classList.add("open-modal")
        backdrop.style.display = "block"
        setTimeout(function () {
            backdrop.classList.add("open-backdrop")
        },10)
    })
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove("open-mobile-nav")
    closeModal()
})

if (modalNoButton) {
    modalNoButton.addEventListener('click',closeModal)
}

function closeModal() {
    if (modal) {
            modal.classList.remove("open-modal")

    }
    backdrop.classList.remove("open-backdrop")
    setTimeout(function () {
        backdrop.style.display = "none"
    },200)
}

toggleButton.addEventListener('click', function () {
        mobileNav.classList.add("open-mobile-nav")
        backdrop.style.display = "block"
        setTimeout(function () {
            backdrop.classList.add("open-backdrop")
        }, 10)
})

toggleButton_side.addEventListener('click', function () {
    mobileNav.classList.remove("open-mobile-nav")
    closeModal()
})