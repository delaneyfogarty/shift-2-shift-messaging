import { sendChat, checkAuth, client, getUser } from '../fetch-utils.js';

checkAuth();

const allChatsEl = document.querySelector('.all-chats');
const form = document.querySelector('form');
const currentUser = getUser();

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    await sendChat({
        message: data.get('message'),
        sender_email: currentUser.email,
        user_id: currentUser.id
    });

    form.reset();
});

window.addEventListener('load', async () => {
    await client

        .from('delaneys_chats')

        .on('INSERT', payload => {


            const chatDiv = document.createElement('div');
            const chatMessageEl = document.createElement('p');
            const chatSenderEl = document.createElement('p');

            chatSenderEl.classList.add('sender');

            if (payload.new.sender_email === currentUser.email) {
                chatSenderEl.classList.add('its-me');
            }
            chatDiv.classList.add('chat-message');


            chatSenderEl.textContent = payload.new.sender_email;
            chatMessageEl.textContent = payload.new.message;



            chatDiv.append(chatMessageEl, chatSenderEl);
            allChatsEl.append(chatDiv);
        })

        .subscribe();

});