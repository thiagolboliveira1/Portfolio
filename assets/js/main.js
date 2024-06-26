function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    if (photo) {
        photo.src = profileData.photo
        photo.alt = profileData.name
    }

    const name = document.getElementById('profile.name')
    if (name) name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    if (job) job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    if (location) location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    if (phone) {
        phone.innerText = profileData.phone
        if (phone.tagName === 'A') {  // Verifica se o elemento é um link
            phone.href = `tel:${profileData.phone}`
        }
    }

    const email = document.getElementById('profile.email')
    if (email) {
        email.innerText = profileData.email
        if (email.tagName === 'A') {  // Verifica se o elemento é um link
            email.href = `mailto:${profileData.email}`
        }
    }

    const softSkills = document.getElementById('softSkills')  // Certifique-se de que este ID exista no HTML
    if (softSkills) {
        softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
    }

    const hardSkills = document.getElementById('hardSkills');  // Certifique-se de que este ID exista no HTML
if (hardSkills) {
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('');
}

}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
})()
