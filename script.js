function ToggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

    let resumeLink = 'https://youtu.be/Ml5smnK5Taw?si=pYOlV-fdfL9S1isH&t=11'
    let alternateLink = 'https://youtu.be/OcYUEsZ1crg?si=-GvEv8m2VIu1BkQr&t=25';

  
    document.getElementById('resumeButton').setAttribute('data-link', resumeLink);

    function toggleResumeLink() {
        let resumeButton = document.getElementById('resumeButton');

        
        if (resumeButton.getAttribute('data-link') === resumeLink) {
            resumeButton.setAttribute('data-link', alternateLink);
            resumeButton.innerText = '- Nope -'; 
        } else {
            resumeButton.setAttribute('data-link', resumeLink);
            resumeButton.innerText = 'Resume';
        }

         window.location.href = resumeButton.getAttribute('data-link');
    }



   