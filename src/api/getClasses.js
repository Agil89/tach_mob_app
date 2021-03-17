export const getClasses = async () =>{
    const response = await fetch('http://34.72.0.144/api/v1.0/cars/classes/',{
        method:'GET',
        headers:{'Content-Type': 'application/json'}
    })
    const data = await response.json()
    return data.classes
}