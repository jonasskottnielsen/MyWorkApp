const teamMembers = [
    {
        name: 'Ida',
        title: 'Frontend Developer',
        avatarUrl: 'assets/random.jpg',
        status: 'Busy',
        statusLabel: 'Busy'
    },
    {
        name: 'Frida',
        title: 'Fullstack Developer',
        avatarUrl: 'assets/random.jpg',
        status: 'Online',
        statusLabel: 'Online'
    },
    {
        name: 'Susan',
        title: 'Fullstack Developer',
        avatarUrl: 'assets/random.jpg',
        status: 'Online',
        statusLabel: 'Online'
    }, 
    {
        name: 'Reva',
        title: 'UI Designer',
        avatarUrl: 'assets/random2.jpg',
        status: 'Away',
        statusLabel: 'Away'
    },
    {
        name: 'Tamika',
        title: 'Frontend Developer',
        avatarUrl: 'assets/random3.jpg',
        status: 'Online',
        statusLabel: 'Online'
    },
    {
        name: 'Jasmin',
        title: 'Frontend Developer',
        avatarUrl: 'assets/random4.jpg',
        status: 'Offline',
        statusLabel: 'Offline'
    }
];
const statusMap = {
    Online: 'hi-success',
    Busy: 'hi-danger',
    Away: 'hi-warning',
    Offline: 'hi-muted'
}

const teamMemberTemplate = document.querySelector('#template-team-member');
const team = document.querySelector('.team');
let currentlyOpen =  null;

teamMembers.forEach((teamMember)=>{
    const teamMemberNode = teamMemberTemplate.content.firstElementChild.cloneNode(true);
    
    teamMemberNode.querySelector('.name').innerText = teamMember.name;
    teamMemberNode.querySelector('.title').innerText = teamMember.title;
    
    const avatar = teamMemberNode.querySelector('.avatar');
    avatar.style.setProperty('--avatar-url', `url('${teamMember.avatarUrl}')`);
    avatar.classList.add(statusMap[teamMember.status]);
    
    const actionMenu = teamMemberNode.querySelector('.action-menu');
    const actionMenuStatus = actionMenu.querySelector('.status');
    actionMenuStatus.innerText = teamMember.statusLabel;
    actionMenuStatus.classList.add(statusMap[teamMember.status]);

    teamMemberNode.addEventListener('click', (e)=> {
        if(currentlyOpen){
            currentlyOpen.classList.remove('open');
        }
        if(currentlyOpen !== actionMenu){
            actionMenu.classList.add('open');
            currentlyOpen = actionMenu;
        } else {
            currentlyOpen = null;
        }
    });

    team.appendChild(teamMemberNode);
});