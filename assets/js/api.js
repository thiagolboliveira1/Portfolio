async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/thiagolboliveira1/Portfolio/main/data/profile.json'
    try {
        const fetching = await fetch(url)
        if (!fetching.ok) {
            throw new Error(`Network response was not ok: ${fetching.statusText}`)
        }
        return await fetching.json()
    } catch (error) {
        console.error('Failed to fetch profile data:', error)
        throw error // Re-throw the error after logging it
    }
}

