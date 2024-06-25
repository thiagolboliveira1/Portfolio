

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/thiagolboliveira1/Portfolio/main/data/profile.json'
   const fetching = await fetch(url)
   return await fetching.json()
}