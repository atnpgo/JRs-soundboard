const $content = document.querySelector('#content');
[
    {text: 'kenny omega', sound: 'sounds/kenny omega.mp3'},
    {text: 'jezebel', sound: 'sounds/jezebel.mp3'},
    {text: 'slobber knocker', sound: 'sounds/slobberknocker.mp3'},
    {text: 'AEW Tix.com', sound: 'sounds/aewtix.com.mp3'},
    {text: 'bitch ass', sound: 'sounds/bitch ass.mp3'},
    {text: 'wubba lubba dub dub', sound: 'sounds/wubba lubba dub dub.mp3'},
    {text: 'two yahoos', sound: 'sounds/two yahoos.mp3'},
    {text: 'gifted athlete', sound: 'sounds/an amazingly gifted athlete.mp3'},
    {text: 'kickout 1', sound: 'sounds/and a kickout.mp3'},
    {text: 'kickout 2', sound: 'sounds/got a shoulder up at the last moment.mp3'},
    {text: 'back 1', sound: 'sounds/and we\'re back 2.mp3'},
    {text: 'back 2', sound: 'sounds/and we\'re back.mp3'},
    {text: 'back 3', sound: 'sounds/back live on tnt.mp3'},
    {text: 'bah gawd!', sound: 'sounds/bah gawd.mp3'},
    {text: 'dippin dots 1', sound: 'sounds/dippin dots didn\'t do anything.mp3'},
    {text: 'dippin dots 2', sound: 'sounds/stay away from the dippin dots.mp3'},
    {text: 'enough of that', sound: 'sounds/enough of that.mp3'},
    {text: 'good god almighty', sound: 'sounds/good god almighty.mp3'},
    {text: 'hard kick', sound: 'sounds/hard kick.mp3'},
    {text: 'cold beer', sound: 'sounds/hard to beat a cold beer.mp3'},
    {text: 'hell of a night', sound: 'sounds/hell of a night.mp3'},
    {text: 'JR\'s BBQ.com', sound: 'sounds/jr\'s bbq.com.mp3'},
    {text: 'jungle boy', sound: 'sounds/jungle boy.mp3'},
    {text: 'main event time', sound: 'sounds/main event time.mp3'},
    {text: 'another t-shirt', sound: 'sounds/okay nice another t shirt.mp3'},
    {text: 'only on ppv', sound: 'sounds/only on ppv.mp3'},
    {text: 'PiP', sound: 'sounds/PiP break.mp3'},
    {text: 'PiP 2', sound: 'sounds/PiP.mp3'},
    {text: 'strong, agile', sound: 'sounds/she\'s strong she\'s agile.mp3'},
    {text: 'Ending', sound: 'sounds/show ending.mp3'},
    {text: 'show stealing matchup', sound: 'sounds/show stealing matchup.mp3'},
    {text: 'superkick party', sound: 'sounds/superkick party.mp3'},
    {text: 'tag team action', sound: 'sounds/tag team action.mp3'},
    {text: 'annoying', sound: 'sounds/that\'s annoying.mp3'},
    {text: 'hideous 1', sound: 'sounds/that\'s hideous .mp3'},
    {text: 'hideous 2', sound: 'sounds/that\'s hideous.mp3'},
    {text: 'action roars on', sound: 'sounds/the action roars on.mp3'},
    {text: 'dang tags', sound: 'sounds/these dang tags.mp3'},
    {text: 'unsanctioned teeth', sound: 'sounds/unsanctioned teeth.mp3'},
    {text: 'wardrobe malfunction', sound: 'sounds/wardrobe malfunction.mp3'},
    {text: 'be right back', sound: 'sounds/we\'ll be right back.mp3'},
    {text: 'well folks uh', sound: 'sounds/well folks uh.mp3'},
    {text: 'whatever you say', sound: 'sounds/whatever you say.mp3'},
    {text: 'you wanna win', sound: 'sounds/you wanna win.mp3'}
].forEach(({text, sound}) => {
    const div = document.createElement('div');
    const btn = document.createElement('button');
    btn.innerText = text;
    const howl = new Howl({
        src: [sound]
    });
    btn.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        howl.play();
    });
    div.appendChild(btn);
    $content.appendChild(div);
});
