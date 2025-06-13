document.addEventListener("DOMContentLoaded", () => {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Set active state for home button initially
    document.querySelector('.footer-nav i[data-section="home"]').classList.add('active');
    
    // Load home content immediately on page load with initial load flag
    loadSection('home');

    // Set up navigation event listeners
    document.querySelectorAll('.footer-nav i').forEach(icon => {
        icon.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            loadSection(section);
            
            // Update active state
            document.querySelectorAll('.footer-nav i').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Form submission handler
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'messageForm') {
            e.preventDefault();
            // Add form submission logic here
            alert('Message sent! (This is a demo)');
            e.target.reset();
        }
    });
});

function loadSection(section, isInitialLoad = false) {
    const mainContent = document.querySelector(".main-content");
    
    // Only apply fade out animation if not initial load
    if (!isInitialLoad) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
    }

    setTimeout(() => {
        // Clear any existing typing effect
        const existingTypedText = document.getElementById("typed-text");
        if (existingTypedText) {
            existingTypedText.textContent = '';
        }

        switch(section) {
            case 'home':
                mainContent.innerHTML = `
                    <div class="home-content">
                        <div class="text-content" ${isInitialLoad ? 'data-aos="fade-right"' : ''}>
                            <h1 class="display-3 font-weight-bold">
                                <span id="typed-text"></span><span class="cursor">|</span>
                            </h1>
                            <h2 class="professional-tagline">AI/ML and Web Developer | Computer Vision Specialist</h2>
                            <p class="lead professional-summary">
                                Artificial Intelligence professional with <span class="highlight">3+ years</span> of hands-on experience in developing computer vision systems and machine learning solutions. 
                                Proven track record of delivering <span class="highlight">12+ deep learning projects</span> with real-world impact. 
                                Specialized in building intelligent systems that bridge the gap between AI research and production applications.
                            </p>
                            <div class="key-expertise">
                                <h3>Core Competencies:</h3>
                                <ul>
                                    <li>End-to-end AI System Development</li>
                                    <li>Computer Vision & Image Processing</li>
                                    <li>Model Optimization & Deployment</li>
                                    <li>Full-Stack AI Integration</li>
                                </ul>
                            </div>
                        </div>
                        <div class="image-box" ${isInitialLoad ? 'data-aos="fade-left"' : ''}>
                            <img src="pic-main.jpg" alt="Mudassar Ali" class="profile-img">
                            <div class="image-badge">AI/ML and Web Developer</div>
                        </div>
                    </div>`;
                initTypingEffect();
                break;

            case 'education':
              mainContent.innerHTML = `
                  <div class="section-content" data-aos="fade-up">
                      <h2>Education</h2>
                      <div class="education-item">
                          <div class="education-header">
                              <h3>MS in Artificial Intelligence</h3>
                              <div class="education-meta">
                                  <span class="education-institution">University of Management and Technology, Lahore</span>
                                  <span class="education-date">Oct 2024 – Present</span>
                              </div>
                          </div>
                          <div class="education-details">
                              <p class="gpa"><strong>GPA:</strong> 3.1/4.0</p>
                              <h4>Coursework:</h4>
                              <ul class="coursework-list">
                                  <li>Advanced Digital Image Processing</li>
                                  <li>Advanced Data Mining</li>
                                  <li>Advanced Machine Learning</li>
                                  <li>Advanced Artificial Intelligence</li>
                              </ul>
                          </div>
                      </div>
                      
                      <div class="education-item">
                          <div class="education-header">
                              <h3>BS in Software Engineering</h3>
                              <div class="education-meta">
                                  <span class="education-institution">University of Management and Technology, Lahore</span>
                                  <span class="education-date">Oct 2020 – July 2024</span>
                              </div>
                          </div>
                          <div class="education-details">
                              <p class="gpa"><strong>GPA:</strong> 2.6/4.0</p>
                              <h4>Coursework:</h4>
                              <ul class="coursework-list">
                                  <li>Computer Vision</li>
                                  <li>Deep Learning</li>
                                  <li>Machine Learning</li>
                                  <li>Open Source Software Development (Python)</li>
                              </ul>
                          </div>
                      </div>
                  </div>`;
              break;
                
            case 'experience':
              mainContent.innerHTML = `
                  <div class="section-content" data-aos="fade-up">
                      <h2>Experience</h2>
                      
                      <div class="experience-section">
                          <h3 class="experience-heading"><i class="bi bi-building"></i> Industrial Experience</h3>
                          
                          <div class="experience-item">
                              <div class="experience-header">
                                  <h4>Junior Software Developer</h4>
                                  <div class="experience-meta">
                                      <span class="experience-company">Accurate (PVT) Ltd.</span>
                                      <span class="experience-date">Oct 2024 – Present</span>
                                      <span class="experience-location">Lahore</span>
                                  </div>
                              </div>
                              <ul class="experience-details">
                                  <li>Developed and maintained internal web applications to automate company workflows</li>
                                  <li>Built desktop applications to support operational needs and enhance process efficiency</li>
                                  <li>Collaborated with teams to gather requirements and implement software solutions</li>
                                  <li>Ensured code quality and performance through regular testing and debugging</li>
                                  <li>Performed daily data analysis to support the meter data monitoring team with actionable insights and reports</li>
                                  <li>Integrated data analytics features into applications for real-time monitoring</li>
                              </ul>
                          </div>
                          
                          <div class="experience-item">
                              <div class="experience-header">
                                  <h4>Exploratory Data Analysis Intern</h4>
                                  <div class="experience-meta">
                                      <span class="experience-company">AICP</span>
                                      <span class="experience-date">Jan 2024 – March 2024</span>
                                      <span class="experience-location">Remote</span>
                                  </div>
                              </div>
                              <ul class="experience-details">
                                  <li>Performed data cleaning, preprocessing, and transformation for large datasets</li>
                                  <li>Conducted exploratory data analysis to identify trends, correlations, and anomalies</li>
                                  <li>Developed visualizations using Matplotlib and Seaborn for data interpretation</li>
                                  <li>Assisted in deriving actionable insights to support data-driven decisions</li>
                                  <li>Documented findings and presented summaries to the supervising team</li>
                              </ul>
                          </div>
                      </div>
                      
                      <div class="experience-section">
                          <h3 class="experience-heading"><i class="bi bi-code-square"></i> Personal Projects</h3>
                          
                          <div class="project-grid">
                              <div class="project-item">
                                  <h4>Blog Post Website</h4>
                                  <div class="project-meta">Freelance Project | 2025</div>
                                  <ul class="project-details">
                                      <li>Designed and developed a dynamic blog website with user-friendly interface and responsive layout</li>
                                      <li>Implemented core functionalities including user authentication, post creation/editing, and comment management</li>
                                  </ul>
                                  <div class="project-tools">
                                      <span>HTML</span>
                                      <span>CSS</span>
                                      <span>JavaScript</span>
                                      <span>Bootstrap</span>
                                      <span>Django</span>
                                  </div>
                              </div>
                              
                              <div class="project-item">
                                  <h4>Human Bone Fracture Detection System</h4>
                                  <div class="project-meta">2024</div>
                                  <ul class="project-details">
                                      <li>Developed a computer vision-based system using deep learning to detect bone fractures from medical X-ray images</li>
                                      <li>Trained and evaluated CNN models to classify and localize fractures, improving diagnostic accuracy</li>
                                  </ul>
                                  <div class="project-tools">
                                      <span>Python</span>
                                      <span>OpenCV</span>
                                      <span>TensorFlow</span>
                                      <span>Keras</span>
                                      <span>Sklearn</span>
                                      <span>NumPy</span>
                                      <span>Pandas</span>
                                  </div>
                              </div>
                              
                              <div class="project-item">
                                  <h4>Cricket Umpire Action Detection System</h4>
                                  <div class="project-meta">2024</div>
                                  <ul class="project-details">
                                      <li>Designed a deep learning-based system to automatically detect and classify cricket umpire signals from video frames</li>
                                      <li>Implemented CNN model (VGG19) to recognize key umpire actions</li>
                                  </ul>
                                  <div class="project-tools">
                                      <span>Python</span>
                                      <span>OpenCV</span>
                                      <span>TensorFlow</span>
                                      <span>Keras</span>
                                  </div>
                              </div>
                              
                              <div class="project-item">
                                  <h4>Street Crime Detection System</h4>
                                  <div class="project-meta">Final Year Project | 2024</div>
                                  <ul class="project-details">
                                      <li>Developed a deep learning-based surveillance system to detect street crime activities using video footage</li>
                                      <li>Fine-tuned state-of-the-art CNN architectures on the UCF-Crime dataset</li>
                                  </ul>
                                  <div class="project-tools">
                                      <span>Python</span>
                                      <span>TensorFlow</span>
                                      <span>OpenCV</span>
                                  </div>
                              </div>
                              
                              <div class="project-item">
                                  <h4>Yoga Poses Detection System</h4>
                                  <div class="project-meta">Freelance Project | 2023</div>
                                  <ul class="project-details">
                                      <li>Developed a pose estimation-based system to detect and classify various yoga poses</li>
                                      <li>Utilized CNN models to analyze various types of yoga posture</li>
                                  </ul>
                                  <div class="project-tools">
                                      <span>Python</span>
                                      <span>OpenCV</span>
                                      <span>TensorFlow</span>
                                  </div>
                              </div>
                              
                              <div class="project-item">
                                  <h4>Driver Distraction Detection System</h4>
                                  <div class="project-meta">2023</div>
                                  <ul class="project-details">
                                      <li>Designed a computer vision system to detect distracted driving behaviors</li>
                                      <li>Trained CNN models to classify various distraction categories</li>
                                  </ul>
                                  <div class="project-tools">
                                      <span>Python</span>
                                      <span>OpenCV</span>
                                      <span>TensorFlow</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>`;
              break;
            
            case 'skills':
                mainContent.innerHTML = `
                    <div class="section-content" data-aos="fade-up">
                        <h2>Skills</h2>
                        
                        <div class="skills-container">
                            <div class="skills-category">
                                <h3 class="skills-title"><i class="bi bi-code-slash"></i> Languages</h3>
                                <div class="skills-list">
                                    <span class="skill-item">C</span>
                                    <span class="skill-item">C++</span>
                                    <span class="skill-item">C#</span>
                                    <span class="skill-item">Python</span>
                                    <span class="skill-item">JavaScript</span>
                                    <span class="skill-item">SQL</span>
                                </div>
                            </div>
                            
                            <div class="skills-category">
                                <h3 class="skills-title"><i class="bi bi-cpu"></i> Technologies</h3>
                                <div class="skills-list">
                                    <span class="skill-item">TensorFlow</span>
                                    <span class="skill-item">Keras</span>
                                    <span class="skill-item">Scikit-learn</span>
                                    <span class="skill-item">OpenCV</span>
                                    <span class="skill-item">River</span>
                                    <span class="skill-item">Matplotlib</span>
                                    <span class="skill-item">Seaborn</span>
                                    <span class="skill-item">Pandas</span>
                                    <span class="skill-item">NumPy</span>
                                    <span class="skill-item">Requests</span>
                                    <span class="skill-item">Django</span>
                                    <span class="skill-item">Flask</span>
                                    <span class="skill-item">Tkinter</span>
                                    <span class="skill-item">WinForms</span>
                                    <span class="skill-item">ASP.NET</span>
                                    <span class="skill-item">MySQL</span>
                                    <span class="skill-item">REST APIs</span>
                                    <span class="skill-item">TCP/IP Programming</span>
                                    <span class="skill-item">Socket programming</span>
                                </div>
                            </div>
                            
                            <div class="skills-category">
                                <h3 class="skills-title"><i class="bi bi-tools"></i> Tools</h3>
                                <div class="skills-list">
                                    <span class="skill-item">Git</span>
                                    <span class="skill-item">GitHub</span>
                                    <span class="skill-item">Visual Studio</span>
                                    <span class="skill-item">VS Code</span>
                                    <span class="skill-item">Postman</span>
                                    <span class="skill-item">Jupyter Notebook</span>
                                    <span class="skill-item">Jupyter Lab</span>
                                    <span class="skill-item">Oracle</span>
                                    <span class="skill-item">Google Colab</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'contact':
                mainContent.innerHTML = `
                    <div class="section-content" data-aos="fade-up">
                        <h2>Contact</h2>
                        
                        <div class="contact-container">
                            <div class="contact-info">
                                <div class="contact-item">
                                    <i class="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <h3>Location</h3>
                                        <p>Kasur, Pakistan</p>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <i class="bi bi-envelope-fill"></i>
                                    <div>
                                        <h3>Email</h3>
                                        <p><a href="mailto:mudassarali3721@gmail.com">mudassarali3721@gmail.com</a></p>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <i class="bi bi-telephone-fill"></i>
                                    <div>
                                        <h3>Phone</h3>
                                        <p><a href="tel:+923184522353">0318-4522353</a></p>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <i class="bi bi-github"></i>
                                    <div>
                                        <h3>GitHub</h3>
                                        <p><a href="https://github.com/mudassaraly" target="_blank">github.com/mudassaraly</a></p>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <i class="bi bi-linkedin"></i>
                                    <div>
                                        <h3>LinkedIn</h3>
                                        <p><a href="https://linkedin.com/in/mudassaralye" target="_blank">linkedin.com/in/mudassaralye</a></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="contact-form">
                                <h3>Send Me a Message</h3>
                                <form id="messageForm">
                                    <div class="form-group">
                                        <input type="text" id="name" placeholder="Your Name" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" id="email" placeholder="Your Email" required>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="subject" placeholder="Subject">
                                    </div>
                                    <div class="form-group">
                                        <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                                    </div>
                                    <button type="submit" class="submit-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>`;
                break;
        }
        
        // Only apply fade in animation if not initial load
        if (!isInitialLoad) {
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 50);
        } else {
            // For initial load, ensure content is visible immediately
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }
    }, isInitialLoad ? 0 : 300);
}

function initTypingEffect() {
    const text = "Mudassar Ali";
    const typedTextSpan = document.getElementById("typed-text");
    if (!typedTextSpan) return;  // Safety check

    const typingDelay = 150;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let charIndex = 0;
    let isErasing = false;
    let timeoutId;

    function typeLoop() {
        if (!isErasing && charIndex < text.length) {
            typedTextSpan.textContent += text.charAt(charIndex);
            charIndex++;
            timeoutId = setTimeout(typeLoop, typingDelay);
        } else if (isErasing && charIndex > 0) {
            typedTextSpan.textContent = text.substring(0, charIndex - 1);
            charIndex--;
            timeoutId = setTimeout(typeLoop, erasingDelay);
        } else {
            isErasing = !isErasing;
            timeoutId = setTimeout(typeLoop, newTextDelay);
        }
    }

    // Clear any existing content and timers
    typedTextSpan.textContent = '';
    if (timeoutId) clearTimeout(timeoutId);
    
    // Start typing
    timeoutId = setTimeout(typeLoop, 1000);
}