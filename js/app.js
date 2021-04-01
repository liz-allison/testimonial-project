(function (img, name, text) {
    var img = document.getElementById('customer-img').src = 'img/customer-0.jpg' ;
    var name = document.getElementById('customer-name').innerHTML = "Martine";
    var text = document.getElementById('customer-text').innerHTML = "Code whisperer";
})(); 


(function(){
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')
    let index = 0
    const customers = []


    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let fullImg = `./img/customer-${img}.jpg`
        let customer = new Customer(fullImg, name, text)

        customers.push(customer)
    }

    document.addEventListener('open', ()=> {
        let index = 0 
        customerImage.src = customers[index].img
        customerName.textContent = customers[index].name
        customerText.textContent = customers[index].text     
    })

    createCustomer(0, 'Martine', 'As zany as it gets.')
    createCustomer(1, 'Alexa', 'Ruler of all things good.')
    createCustomer(2, 'Lauren', 'Hostest of the mostest.')
    createCustomer(3, 'Jordan', 'Excells at everything.')
    createCustomer(4, 'Julian', 'Into poop things.')

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
                if(index === 0) {
                    index = customers.length
                }
                index --
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })
})()
