(function() {

  var openTrigger = document.getElementById('openMobileNavMenu')
  var closeTrigger = document.getElementById('closeMobileNavMenu')
  var navMenuContainer = document.getElementById('navMenuContainer')

  openTrigger.addEventListener('click', function() {
    navMenuContainer.classList.add('cml-Page--mobileNavOpen')
  })

  closeTrigger.addEventListener('click', function() {
    navMenuContainer.classList.remove('cml-Page--mobileNavOpen')
  })

})()
