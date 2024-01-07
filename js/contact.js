const form = document.querySelector('.form');
const contact = document.querySelector('.contact');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    contact.classList.add('hidden');
    
    const nameInput = document.querySelector('.name');
    const emailInput = document.querySelector('.email');
    const msgInput = document.querySelector('.message');

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const msgValue = msgInput.value;
    const div = document.createElement('div');

    div.classList.add('div-msg')
    
    div.innerHTML = `
        <p class="text text-name"> <strong>Name:</strong> ${nameValue}</p>
        <p class="text text-email"> <strong>Email:</strong> ${emailValue}</p>
        <p class="text text-msg"> <strong>Message:</strong> ${msgValue}</p>
    `;

    const main = document.querySelector('main')
    main.appendChild(div);
});
