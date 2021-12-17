fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{ //callback
        console.log(data)
    })
}) //client side o.peration- fetch

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
    messageOne.textContent = 'loading...'
    e.preventDefault()
    const location = searchElement.value
    //Fetch weather for Boston
    fetch('/weather?address='+location).then((response)=>{
        messageOne.textContent = ''
        messageTwo.textContent = ''
        response.json().then((data)=>{
            if(data.error){

                messageOne.textContent =data.error 
                
            }else{
                messageOne.textContent = data.location
                console.log(data.forecast)
                messageTwo.textContent = 'It\'s '+data.forecast.forecast+ 'and it feels like '+data.forecast.feelsLike+' ,Temperature is :'+data.forecast.temperature
            }
        })
    })
})