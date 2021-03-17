export const createOrder = async (userName,userSurname,phoneNumber,orderData) =>{

    const response = await fetch('http://34.72.0.144/api/v1.0/cars/orders/',
    {
        method:'POST',
        headers:{'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            userName,
            userSurname,
            phoneNumber,
            orderData
        })
    })

    const data = await response.json()
    console.log(data)
    return false
}
