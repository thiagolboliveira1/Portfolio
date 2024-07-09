function updateProfileInfo(profileData) {
    if (!profileData) {
        console.error("profileData is undefined or null.");
        return;
    }

    const photo = document.getElementById('profile.photo')
    if (photo) {
        photo.src = profileData.photo || '';
        photo.alt = profileData.name || 'Profile Photo';
    }

    const name = document.getElementById('profile.name')
    if (name) name.innerText = profileData.name || '';

    const job = document.getElementById('profile.job')
    if (job) job.innerText = profileData.job || '';

    const location = document.getElementById('profile.location')
    if (location) location.innerText = profileData.location || '';

    const phone = document.getElementById('profile.phone')
    if (phone) {
        phone.innerText = profileData.phone || '';
        if (phone.tagName === 'A') {
            phone.href = `tel:${profileData.phone || ''}`;
        }
    }

    const email = document.getElementById('profile.email')
    if (email) {
        email.innerText = profileData.email || '';
        if (email.tagName === 'A') {
            email.href = `mailto:${profileData.email || ''}`;
        }
    }

    const softSkills = document.getElementById('softSkills')
    if (softSkills && profileData.skills && profileData.skills.softSkills) {
        softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('');
    }

    const hardSkills = document.getElementById('hardSkills')
    if (hardSkills && profileData.skills && profileData.skills.hardSkills) {
        hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
    }

    const languages = document.getElementById('languages')
    if (languages && profileData.languages) {
        languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
    }

    const portfolio = document.getElementById('profile.portfolio')
    if (portfolio && profileData.portfolio) {
        portfolio.innerHTML = profileData.portfolio.map(project => {
            return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
                <a href="${project.url}" target="_blank">${project.url}</a>
            </li>
            `;

            const certificados = document.getElementById('certificados')
    if (certificados && profileData.certificados && profileData.certificados.certificados) {
        certificados.innerHTML = profileData.certificados.certificados.map(certificados => `<li><img src="${certificados.logo}" alt="${certificados.name}" title="${certificados.name}"></li>`).join('');
    }

        }).join('');
    }

    const professionalExperience = document.getElementById('profile.professionalExperience')
    if (professionalExperience && profileData.professionalExperience) {
        professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
            return `
            <li>
                <h3 class="title">${experience.name}</h3>
                <p class="period">${experience.period}</p>
                <p>${experience.description}</p>
            </li>
            `;
        }).join('');
    }
}

(async () => {
    try {
        const profileData = await fetchProfileData();
        updateProfileInfo(profileData);
    } catch (error) {
        console.error("Error fetching profile data:", error);
    }
})();
