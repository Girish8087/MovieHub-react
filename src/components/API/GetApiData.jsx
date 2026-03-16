export const GetApiData = async () => {
    try {
        const API_KEY = import.meta.env.VITE_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}