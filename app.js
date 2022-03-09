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
let currentlyOpen = null;

teamMembers.forEach((teamMember) => {
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

    teamMemberNode.addEventListener('click', (e) => {
        if (currentlyOpen) {
            currentlyOpen.classList.remove('open');
        }
        if (currentlyOpen !== actionMenu) {
            actionMenu.classList.add('open');
            currentlyOpen = actionMenu;
        } else {
            currentlyOpen = null;
        }
    });

    team.appendChild(teamMemberNode);
});

const startHour = 8;
const endHour = 18;
const resolution = 2;
const currentHour = 12;
const currentMinute = 25;

const hourTemplate = document.querySelector('#template-hour');
const hourGrid = document.querySelector('.calendar__hour-grid');

for (let i = startHour; i < endHour; i++) {
    const hourNode = hourTemplate.content.firstElementChild.cloneNode(true);
    hourGrid.appendChild(hourNode);

    hourNode.querySelector('.label').innerText = `${i}`.padStart(2, '0');

    if (currentHour === i) {
        hourNode.classList.add('active');
        hourNode.style.setProperty('--current-minute', currentMinute)
    }
}

const events = [
    {
        start: 8,
        end: 10,
        title: 'Focus time',
        past: true
    },
    {
        start: 10.5,
        end: 11.5,
        title: '1:1 Tamika',
        past: true
    }, {
        start: 14,
        end: 15,
        title: 'Technical Review'
    }
];

const eventTemplate = document.querySelector('#template-event');
const calendarEvents = document.querySelector('.calendar__events');
const calendar = document.querySelector('.calendar');

calendar.style.setProperty('--start-hour', startHour);
calendar.style.setProperty('--end-hour', endHour);
calendar.style.setProperty('--resolution', resolution);

events.forEach((event) => {
    let eventNode = eventTemplate.content.firstElementChild.cloneNode(true);
    calendarEvents.appendChild(eventNode);

    eventNode.querySelector('.label').innerText = event.title;
    eventNode.style.setProperty('--start', event.start);
    eventNode.style.setProperty('--end', event.end);

    if (event.past) {
        eventNode.classList.add('past');
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const main = document.querySelector('main');

menuToggle.addEventListener('click', (e) => {
    main.classList.toggle('nav-open');
});
main.addEventListener('click', (e) => {
    if (e.target !== menuToggle) {
        main.classList.toggle('nav-open');
    }
});