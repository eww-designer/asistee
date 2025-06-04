const inputs = document.querySelectorAll("#phone");
inputs.forEach(input => {
  window.intlTelInput(input, {
    initialCountry: "jp",
    separateDialCode: true,
    // loadUtils: () => import("/intl-tel-input/js/utils.js?1733756310855")
  });
});

///////////////////////////

$(document).ready(function(){
    $('.menu-overlay').hide();
    $(".nav-button").click(function(){
        $('.nav-items,.sidebar').removeClass('ltr:-translate-x-full rtl:translate-x-full');
        $('.nav-items,.sidebar').toggleClass('ltr:translate-x-0 rtl:!translate-x-0 z-40');
        $('.menu-overlay').show();
    });
    $(".close-icon,.menu-overlay").click(function(){
      $('.nav-items,.sidebar').removeClass('ltr:translate-x-0 rtl:!translate-x-0 z-40')
      .addClass('ltr:-translate-x-full rtl:translate-x-full');
        $('.menu-overlay').hide();
    });
  });

// Tab functionality
function showTab(tabName) {
    // Hide all tabs
    const tabContents = document.querySelectorAll('[id$="-tab"]');
    tabContents.forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Show the selected tab
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }
    
    // Update tab styles
    const tabLinks = document.querySelectorAll('[data-tab]');
    tabLinks.forEach(link => {
        if (link.getAttribute('data-tab') === tabName) {
            // Active tab
            link.classList.remove('bg-[#F6F6F6]', 'text-secondary');
            link.classList.add('bg-primary', 'text-white', 'active');
        } else {
            // Inactive tabs
            link.classList.remove('bg-primary', 'text-white', 'active');
            link.classList.add('bg-[#F6F6F6]', 'text-secondary');
        }
    });
}

// Initialize the first tab as active when page loads
document.addEventListener('DOMContentLoaded', function() {
    showTab('all');
});
