import { getUser, sendMessage, checkAuth, getProfile, incrementRating, decrementRating, logout } from '../fetch-utils.js';

import { renderMessages, renderRating } from '../render-utils.js';

checkAuth();
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const upButton = document.querySelector('.up-vote');
const downButton = document.querySelector('.down-vote');
const return2ProfilesButton = document.getElementById('back-to-profiles');
const profileContainer = document.querySelector('.profile-container');
const usernameHeader = document.querySelector('.username-header');
const usernameEl = document.querySelector('.username');
const form = document.querySelector('form');

const logoutButton = document.getElementById('logout');

window.addEventListener('load', async ()=>{

    await fetchAndDisplay(); //write this!

});

return2ProfilesButton.addEventListener('click', ()=>{
    window.location.href = '../employees';
});

upButton.addEventListener('click', async ()=>{
    const profile = await incrementRating(profile.id);
    await fetchAndDisplay(profile);

});

downButton.addEventListener('click', async ()=>{
    const profile = await decrementRating(profile.id);
    await fetchAndDisplay(profile);
});

export async function fetchAndDisplay(){
    profileContainer.textContent = '';

    const profile = await getProfile(id);
    usernameHeader.textContent = profile.email;
    usernameEl.textContent = profile.email;

    const profileRatingEl = renderRating(profile);
    const messagesEl = renderMessages(profile);

    profileContainer.append(messagesEl, profileRatingEl);

}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fromUser = await getUser();
    const from_email = fromUser.email;
    const recipient_id = id;


    const data = new FormData(form);
    const text = data.get('text');
    const imageFile = data.get('my-image');
    const uploadedImage = await uploadImage(imageFile);

    const URL = makeImageURL(uploadedImage.Key);

    await sendMessage(recipient_id, from_email, text, URL);
    form.reset();
    await fetchAndDisplay();
});

logoutButton.addEventListener('click', () => {
    logout();
});