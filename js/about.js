document.addEventListener('DOMContentLoaded', function() {
    console.log('About section JavaScript code is running');

    const subtitles = document.querySelectorAll('.about-subtitle');
    const detailsContainer = document.querySelector('.about-details-container');

    const contentData = {
        education: `
            <div class="about-details" id="education">
                <h3>Education</h3>
                <p>I pursued my undergraduate studies at XYZ University, where I earned a Bachelor's degree in Computer Science. During my time there, I developed a strong foundation in programming, algorithms, and software development.</p>
                <p>I also had the opportunity to work on several exciting projects, including:</p>
                <ul>
                    <li>Developing a mobile app for campus navigation</li>
                    <li>Creating a web-based project management system</li>
                    <li>Participating in hackathons and coding competitions</li>
                </ul>
                <p>These experiences further fueled my passion for creating innovative solutions and solidified my skills in various programming languages and frameworks.</p>
            </div>
        `,
        interests: `
            <div class="about-details" id="interests">
                <h3>Personal Interests</h3>
                <p>Outside of my professional life, I have a variety of personal interests that keep me inspired and motivated:</p>
                <ul>
                    <li>Exploring new technologies: I enjoy staying up-to-date with the latest advancements in technology and tinkering with hardware projects in my free time. I find it fascinating to experiment with IoT devices, robotics, and virtual reality.</li>
                    <li>Gaming: I'm an avid gamer and love immersing myself in virtual worlds and engaging storylines. Gaming allows me to unwind and also serves as a source of inspiration for my own game development projects.</li>
                    <li>Traveling: I find joy in traveling and experiencing different cultures. Exploring new places broadens my perspective and sparks creativity. I often find inspiration for design and development projects during my travels.</li>
                </ul>
            </div>
        `
    };

    function createContentBoxes() {
        detailsContainer.innerHTML = Object.values(contentData).join('');
    }

    function toggleContentBox(section) {
        const contentBox = document.getElementById(section);
        const allBoxes = document.querySelectorAll('.about-details');

        allBoxes.forEach(box => {
            if (box !== contentBox) {
                box.style.display = 'none';
            }
        });

        if (contentBox.style.display === 'none') {
            contentBox.style.display = 'block';
        } else {
            contentBox.style.display = 'none';
        }
    }

    subtitles.forEach(function(subtitle) {
        subtitle.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            toggleContentBox(section);
        });
    });

    createContentBoxes();
});