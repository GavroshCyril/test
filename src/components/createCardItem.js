const createCardItem = (container, cards) => {
    cards.forEach((card, index) => { 
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.id = `card-${index}`; 

        const image = document.createElement('img');
        image.src = card.image; 
        cardElement.appendChild(image);

        const userAvatar = document.createElement('img');
        userAvatar.src = card.avatar; 
        const username = document.createElement('span');
        username.textContent = card.username; 

        cardElement.appendChild(userAvatar);
        cardElement.appendChild(username);

        const tag = document.createElement('span');
        tag.textContent = card.tag; 
        cardElement.appendChild(tag);

        container.appendChild(cardElement);
    });
}

export { createCardItem }
