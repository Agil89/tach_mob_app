export const getMarkas = async () =>{
    const response = await fetch('http://34.72.0.144/api/v1.0/cars/markas/',{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    })
    const data = await response.json()
    return data.allMarkas
}