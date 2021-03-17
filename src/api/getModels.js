export const getModels = async (markaId) =>{
    const response = await fetch(`http://34.72.0.144/api/v1.0/cars/models/?marka_id=${markaId}`,{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    })
    const data = await response.json()
    console.log(data)
    return data.models
}