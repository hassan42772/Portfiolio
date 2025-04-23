const splashContainer = document.getElementById("splash-container");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const projects = document.querySelector(".portfolio");
const contact = document.querySelector(".contact");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");


//! Splash Screen 
navbar.style.display = "none"; // Hide the navbar initially
window.onload = () => {
    setTimeout(() => {
        splashContainer.classList.add("hidden");
        navbar.style.display = "flex"; // Show the navbar after the splash screen
    }, 4000);
};

//! Navigation
function home_hover() {
    home.innerHTML = "Home";
    home.style.color = "black";
    home.style.backgroundColor = "white";
}
function home_out() {
    home.innerHTML =
        '<i class="fa-sharp fa-solid fa-house" style="color: white;">';
    home.style.backgroundColor = "black";
}
function about_hover() {
    about.innerHTML = "Services";
    about.style.color = "black";
    about.style.backgroundColor = "white";
}
function about_out() {
    about.innerHTML =
        '<i class="fa-solid fa-user fa-shake" style="color: white;"></i>';
    about.style.backgroundColor = "black";
}
function projects_hover() {
    projects.innerHTML = "Projects";
    projects.style.color = "black";
    projects.style.backgroundColor = "white";
}
function projects_out() {
    projects.innerHTML =
        '<i class="fa-solid fa-briefcase" style="color: white;"></i>';
    projects.style.backgroundColor = "black";
}
function contact_hover() {
    contact.innerHTML = "Contact";
    contact.style.color = "black";
    contact.style.backgroundColor = "white";
}
function contact_out() {
    contact.innerHTML = '<i class="fa-solid fa-phone" style="color: white;"></i>';
    contact.style.backgroundColor = "black";
}
home.addEventListener("mouseover", home_hover);
home.addEventListener("mouseout", home_out);
about.addEventListener("mouseover", about_hover);
about.addEventListener("mouseout", about_out);
projects.addEventListener("mouseover", projects_hover);
projects.addEventListener("mouseout", projects_out);
contact.addEventListener("mouseover", contact_hover);
contact.addEventListener("mouseout", contact_out);

//! Hamburger Menu
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show"); // Toggle the visibility of the nav links
    hamburger.classList.toggle("change"); // Toggle the class to animate the icon
});


//! skill progress bar
document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let width = bar.getAttribute("data-width");
        bar.style.width = width;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".progress-circle");

    circles.forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        let angle = (percent / 100) * 360;
        circle.style.background = `conic-gradient(#10E755 ${angle}deg, black ${angle}deg)`;
    });
});
// footer
  // Create bubbles - kept unchanged as requested
  document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('workbubblesContainer');
    const footerWidth = bubblesContainer.offsetWidth;
    
    // Create bubbles based on screen width
    const bubbleCount = Math.floor(footerWidth / 20);
    
    for (let i = 0; i < bubbleCount; i++) {
      createBubble(bubblesContainer, footerWidth);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // Clear existing bubbles
      bubblesContainer.innerHTML = '';
      
      // Create new bubbles based on new width
      const newWidth = bubblesContainer.offsetWidth;
      const newBubbleCount = Math.floor(newWidth / 20);
      
      for (let i = 0; i < newBubbleCount; i++) {
        createBubble(bubblesContainer, newWidth);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('contactbubblesContainer');
    const footerWidth = bubblesContainer.offsetWidth;
    
    // Create bubbles based on screen width
    const bubbleCount = Math.floor(footerWidth / 20);
    
    for (let i = 0; i < bubbleCount; i++) {
      createBubble(bubblesContainer, footerWidth);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // Clear existing bubbles
      bubblesContainer.innerHTML = '';
      
      // Create new bubbles based on new width
      const newWidth = bubblesContainer.offsetWidth;
      const newBubbleCount = Math.floor(newWidth / 20);
      
      for (let i = 0; i < newBubbleCount; i++) {
        createBubble(bubblesContainer, newWidth);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('projectbubblesContainer');
    const footerWidth = bubblesContainer.offsetWidth;
    
    // Create bubbles based on screen width
    const bubbleCount = Math.floor(footerWidth / 20);
    
    for (let i = 0; i < bubbleCount; i++) {
      createBubble(bubblesContainer, footerWidth);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // Clear existing bubbles
      bubblesContainer.innerHTML = '';
      
      // Create new bubbles based on new width
      const newWidth = bubblesContainer.offsetWidth;
      const newBubbleCount = Math.floor(newWidth / 20);
      
      for (let i = 0; i < newBubbleCount; i++) {
        createBubble(bubblesContainer, newWidth);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('codebubblesContainer');
    const footerWidth = bubblesContainer.offsetWidth;
    
    // Create bubbles based on screen width
    const bubbleCount = Math.floor(footerWidth / 20);
    
    for (let i = 0; i < bubbleCount; i++) {
      createBubble(bubblesContainer, footerWidth);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // Clear existing bubbles
      bubblesContainer.innerHTML = '';
      
      // Create new bubbles based on new width
      const newWidth = bubblesContainer.offsetWidth;
      const newBubbleCount = Math.floor(newWidth / 20);
      
      for (let i = 0; i < newBubbleCount; i++) {
        createBubble(bubblesContainer, newWidth);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('herobubblesContainer');
    const footerWidth = bubblesContainer.offsetWidth;
    
    // Create bubbles based on screen width
    const bubbleCount = Math.floor(footerWidth / 20);
    
    for (let i = 0; i < bubbleCount; i++) {
      createBubble(bubblesContainer, footerWidth);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // Clear existing bubbles
      bubblesContainer.innerHTML = '';
      
      // Create new bubbles based on new width
      const newWidth = bubblesContainer.offsetWidth;
      const newBubbleCount = Math.floor(newWidth / 20);
      
      for (let i = 0; i < newBubbleCount; i++) {
        createBubble(bubblesContainer, newWidth);
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('bubblesContainer');
    const footerWidth = bubblesContainer.offsetWidth;
    
    // Create bubbles based on screen width
    const bubbleCount = Math.floor(footerWidth / 20);
    
    for (let i = 0; i < bubbleCount; i++) {
      createBubble(bubblesContainer, footerWidth);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
      // Clear existing bubbles
      bubblesContainer.innerHTML = '';
      
      // Create new bubbles based on new width
      const newWidth = bubblesContainer.offsetWidth;
      const newBubbleCount = Math.floor(newWidth / 20);
      
      for (let i = 0; i < newBubbleCount; i++) {
        createBubble(bubblesContainer, newWidth);
      }
    });
  });
  
  function createBubble(container, containerWidth) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size (initial size before growth)
    const size = Math.random() * 30 + 5;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random horizontal position
    const left = Math.random() * containerWidth;
    bubble.style.left = `${left}px`;
    
    // Random opacity
    const opacity = Math.random() * 0.5 + 0.2;
    bubble.style.backgroundColor = `rgba(50, 205, 50, ${opacity})`;
    
    // Random animation duration (speed)
    const duration = Math.random() * 10 + 10;
    bubble.style.animationDuration = `${duration}s, ${duration}s`;
    
    // Random delay so bubbles don't all start at the same time
    const delay = Math.random() * 5;
    bubble.style.animationDelay = `${delay}s, ${delay}s`;
    
    container.appendChild(bubble);
  }
  //! contact form
  const contactForm = document.getElementById("contact-form");
  const successfullySent = document.getElementById("success-message");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
     
        // Replace with your own EmailJS service ID, template ID, and user/public key
        emailjs.sendForm('service_x327tdf', 'template_ck7suxs', this, 'Kyzybq2rkIOpzSGjR')
            .then(() => {
              successfullySent.innerHTML = "Message sent successfully!";
                setTimeout(() => {
                    successfullySent.style.display = "none"; // Hide success message after 3 seconds
                }, 3000);
                contactForm.reset();
            }, (error) => {
                console.error("EmailJS Error:", error);
                alert("Oops! Something went wrong. Please try again.");
            });
    });
}

// scroll link
function scrollToSection(e, id) {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// new



 