// Function to update preview
function updatePreview() {
    console.log('Updating preview');
    const preview = document.getElementById('cvPreview');
    const showProfileImage = document.getElementById('showProfileImage').checked;
    const profilePreview = document.getElementById('profilePreview');
    
    let html = `
        <div class="space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            ${showProfileImage && profilePreview.src ? `
                <div class="flex justify-center mb-6">
                    <img src="${profilePreview.src}" alt="Profile" class="w-32 h-32 rounded-full object-cover shadow-lg">
                </div>
            ` : ''}
            
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-400 dark:to-purple-400">
                    ${document.getElementById('fullName').value || 'Ditt Navn'}
                </h1>
                <h2 class="text-xl text-gray-600 dark:text-gray-300">
                    ${document.getElementById('title').value || 'Din Tittel'}
                </h2>
                <div class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    ${document.getElementById('email').value || 'din@epost.no'} | 
                    ${document.getElementById('phone').value || 'Telefon'}
                </div>
            </div>

            ${document.getElementById('about').value ? `
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Om meg</h3>
                    <p class="text-gray-600 dark:text-gray-300">${document.getElementById('about').value}</p>
                </div>
            ` : ''}
    `;

    // Work Experience
    const workExperience = Array.from(document.getElementById('workExperience').children);
    if (workExperience.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Arbeidserfaring</h3>
                <div class="space-y-4">
        `;
        workExperience.forEach(work => {
            const inputs = work.querySelectorAll('input, textarea');
            html += `
                <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
                    <h4 class="font-semibold text-gray-800 dark:text-gray-200">${inputs[0].value || 'Bedrift'}</h4>
                    <div class="text-gray-600 dark:text-gray-300">${inputs[1].value || 'Stilling'}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">${inputs[2].value || 'Start'} - ${inputs[3].value || 'Slutt'}</div>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">${inputs[4].value || 'Beskrivelse'}</p>
                </div>
            `;
        });
        html += `
                </div>
            </div>
        `;
    }

    // Education
    const education = Array.from(document.getElementById('education').children);
    if (education.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Utdanning</h3>
                <div class="space-y-4">
        `;
        education.forEach(edu => {
            const inputs = edu.querySelectorAll('input, textarea');
            html += `
                <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
                    <h4 class="font-semibold text-gray-800 dark:text-gray-200">${inputs[0].value || 'Skole'}</h4>
                    <div class="text-gray-600 dark:text-gray-300">${inputs[1].value || 'Grad'}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">${inputs[2].value || 'Start'} - ${inputs[3].value || 'Slutt'}</div>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">${inputs[4].value || 'Beskrivelse'}</p>
                </div>
            `;
        });
        html += `
                </div>
            </div>
        `;
    }

    // Courses
    const courses = Array.from(document.getElementById('courses').children);
    if (courses.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Kurs og sertifiseringer</h3>
                <div class="space-y-4">
        `;
        courses.forEach(course => {
            const inputs = course.querySelectorAll('input, textarea');
            html += `
                <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
                    <h4 class="font-semibold text-gray-800 dark:text-gray-200">${inputs[0].value || 'Kursnavn'}</h4>
                    <div class="text-gray-600 dark:text-gray-300">${inputs[1].value || 'Institusjon'}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">${inputs[2].value || 'Dato'}</div>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">${inputs[3].value || 'Beskrivelse'}</p>
                </div>
            `;
        });
        html += `
                </div>
            </div>
        `;
    }

    // Projects
    const projects = Array.from(document.getElementById('projects').children);
    if (projects.length > 0) {
        html += `
            <div class="mb-6">
                <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Prosjekter</h3>
                <div class="space-y-4">
        `;
        projects.forEach(project => {
            const inputs = project.querySelectorAll('input, textarea');
            html += `
                <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 shadow-sm">
                    <h4 class="font-semibold text-gray-800 dark:text-gray-200">${inputs[0].value || 'Prosjektnavn'}</h4>
                    <div class="text-gray-600 dark:text-gray-300">${inputs[1].value || 'Rolle'}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">${inputs[2].value || 'Dato'}</div>
                    <p class="mt-2 text-gray-600 dark:text-gray-300">${inputs[3].value || 'Beskrivelse'}</p>
                </div>
            `;
        });
        html += `
                </div>
            </div>
        `;
    }

    html += '</div>';
    preview.innerHTML = html;
}

// Function to create input group with animation and modern styling
function createInputGroup(type) {
    const div = document.createElement('div');
    div.className = 'relative p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md transform transition-all duration-300 hover:scale-102 space-y-3';
    
    let inputs = '';
    switch(type) {
        case 'work':
            inputs = `
                <input type="text" placeholder="Bedrift" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <input type="text" placeholder="Stilling" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <div class="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Start dato" class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                    <input type="text" placeholder="Slutt dato" class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                </div>
                <textarea placeholder="Beskrivelse" rows="3" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300"></textarea>`;
            break;
        case 'education':
            inputs = `
                <input type="text" placeholder="Skole" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <input type="text" placeholder="Grad" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <div class="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="Start dato" class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                    <input type="text" placeholder="Slutt dato" class="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                </div>
                <textarea placeholder="Beskrivelse" rows="3" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300"></textarea>`;
            break;
        case 'course':
            inputs = `
                <input type="text" placeholder="Kursnavn" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <input type="text" placeholder="Institusjon" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <input type="text" placeholder="Dato" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <textarea placeholder="Beskrivelse" rows="3" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300"></textarea>`;
            break;
        case 'project':
            inputs = `
                <input type="text" placeholder="Prosjektnavn" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <input type="text" placeholder="Rolle" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <input type="text" placeholder="Dato" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300">
                <textarea placeholder="Beskrivelse" rows="3" class="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 dark:focus:ring-blue-400 transition-all duration-300"></textarea>`;
            break;
    }
    
    div.innerHTML = `
        ${inputs}
        <button class="delete-btn absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors duration-300">
            <i class="fas fa-times-circle text-xl"></i>
        </button>
    `;
    
    // Add delete functionality with animation
    div.querySelector('.delete-btn').addEventListener('click', function() {
        console.log('Delete button clicked');
        div.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            div.remove();
            updatePreview();
        }, 300);
    });
    
    // Add input event listeners
    div.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    
    return div;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get container elements
    const workExperienceContainer = document.getElementById('workExperience');
    const educationContainer = document.getElementById('education');
    const coursesContainer = document.getElementById('courses');
    const projectsContainer = document.getElementById('projects');

    // Add section handlers
    const addWorkBtn = document.getElementById('addWork');
    const addEducationBtn = document.getElementById('addEducation');
    const addCourseBtn = document.getElementById('addCourse');
    const addProjectBtn = document.getElementById('addProject');

    if (addWorkBtn) {
        addWorkBtn.addEventListener('click', () => {
            console.log('Add Work button clicked');
            const newWork = createInputGroup('work');
            newWork.style.opacity = '0';
            newWork.style.transform = 'translateY(20px)';
            workExperienceContainer.appendChild(newWork);
            requestAnimationFrame(() => {
                newWork.style.opacity = '1';
                newWork.style.transform = 'translateY(0)';
            });
            updatePreview();
        });
    }

    if (addEducationBtn) {
        addEducationBtn.addEventListener('click', () => {
            console.log('Add Education button clicked');
            const newEducation = createInputGroup('education');
            newEducation.style.opacity = '0';
            newEducation.style.transform = 'translateY(20px)';
            educationContainer.appendChild(newEducation);
            requestAnimationFrame(() => {
                newEducation.style.opacity = '1';
                newEducation.style.transform = 'translateY(0)';
            });
            updatePreview();
        });
    }

    if (addCourseBtn) {
        addCourseBtn.addEventListener('click', () => {
            console.log('Add Course button clicked');
            const newCourse = createInputGroup('course');
            newCourse.style.opacity = '0';
            newCourse.style.transform = 'translateY(20px)';
            coursesContainer.appendChild(newCourse);
            requestAnimationFrame(() => {
                newCourse.style.opacity = '1';
                newCourse.style.transform = 'translateY(0)';
            });
            updatePreview();
        });
    }

    if (addProjectBtn) {
        addProjectBtn.addEventListener('click', () => {
            console.log('Add Project button clicked');
            const newProject = createInputGroup('project');
            newProject.style.opacity = '0';
            newProject.style.transform = 'translateY(20px)';
            projectsContainer.appendChild(newProject);
            requestAnimationFrame(() => {
                newProject.style.opacity = '1';
                newProject.style.transform = 'translateY(0)';
            });
            updatePreview();
        });
    }

    // Profile image handling
    const profileImageInput = document.getElementById('profileImage');
    const profilePreview = document.getElementById('profilePreview');
    const removeImageBtn = document.getElementById('removeImage');

    document.getElementById('uploadButton').addEventListener('click', () => {
        console.log('Upload button clicked');
        profileImageInput.click();
    });

    profileImageInput.addEventListener('change', function(e) {
        console.log('Profile image input changed');
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePreview.src = e.target.result;
                profilePreview.classList.remove('hidden');
                document.getElementById('profilePlaceholder').classList.add('hidden');
                removeImageBtn.classList.remove('hidden');
                updatePreview();
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    removeImageBtn.addEventListener('click', () => {
        console.log('Remove image button clicked');
        profileImageInput.value = '';
        profilePreview.src = '';
        profilePreview.classList.add('hidden');
        document.getElementById('profilePlaceholder').classList.remove('hidden');
        removeImageBtn.classList.add('hidden');
        updatePreview();
    });

    // Dark mode toggle with animation
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    darkModeToggle.addEventListener('change', function() {
        console.log('Dark mode toggle changed');
        if (this.checked) {
            html.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkModeToggle.checked = true;
        html.classList.add('dark');
    }

    // Export to PDF functionality
    document.getElementById('exportPDF').addEventListener('click', function() {
        console.log('Export to PDF button clicked');
        updatePreview();
        const elementId = 'cvPreview'; // Use the ID as a string
        printJS({
            printable: elementId,
            type: 'html',
            targetStyles: ['*'],
            documentTitle: 'CV',
            css: [
                'https://cdn.tailwindcss.com',
                'styles.css'
            ]
        });
    });

    // Update CV button with visual feedback
    document.getElementById('updateCV').addEventListener('click', function() {
        console.log('Update CV button clicked');
        updatePreview();
        
        const button = this;
        const originalIcon = button.querySelector('i').className;
        button.querySelector('i').className = 'fas fa-check mr-2';
        button.classList.add('scale-95');
        
        setTimeout(() => {
            button.querySelector('i').className = originalIcon;
            button.classList.remove('scale-95');
        }, 1000);
    });

    // Initial preview update
    updatePreview();
});
