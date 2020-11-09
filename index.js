const projectContainer = document.getElementById('projectContainer');

const projects = [
    {
        title: 'Countdown to day 100',
        link: '/100-Days-of-Code/Day-1-Countdown/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_1.png',
    },
    {
        title: 'Contact Form',
        link: '/100-Days-of-Code/Day-2-Contact-Form/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_2.png',
    },
    {
        title: 'Animated Burger Menu',
        link: '/100-Days-of-Code/Day-3-Hamburger-Menu/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_3.png',
    },
    {
        title: 'Color Changer',
        link: '/100-Days-of-Code/Day-4-Color-Changer/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_4.png',
    },
    {
        title: 'Cryptographer',
        link: '/100-Days-of-Code/Day-5-Cryptographer/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_5.png',
    },
    {
        title: 'Waterdrop Animation',
        link: '/100-Days-of-Code/Day-6-Waterdrop/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_6.png',
    },
    {
        title: 'Password Generator',
        link: '/100-Days-of-Code/Day-7-Password-Generator/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_7.png',
    },
    {
        title: 'Event KeyCodes',
        link: '/100-Days-of-Code/Day-8-Event-Keycodes/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_8.png',
    },
    {
        title: 'Loading Animation',
        link: '/100-Days-of-Code/Day-9-Loading-animation/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_9.png',
    },
    {
        title: 'Address Form',
        link: '/100-Days-of-Code/Day-10-Address-Form/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_10.png',
    },
    {
        title: 'Pricing Design',
        link: '/100-Days-of-Code/Day-11-Pricing-Design/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_11.png',
    },
    {
        title: 'Review Page',
        link: '/100-Days-of-Code/Day-12-Review-Page/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_12.png',
    },
    {
        title: 'Counter',
        link: '/100-Days-of-Code/Day-13-Counter/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_13.png',
    },
    {
        title: 'Overview Page',
        link: '/100-Days-of-Code/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_14.png',
    },
    {
        title: 'Moving Button',
        link: '/100-Days-of-Code/Day-15-Moving-Button/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_15.png',
    },
    {
        title: 'Word to binary Converter',
        link: '/100-Days-of-Code/Day-16-Word-to-Binary/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_16.png',
    },
    {
        title: 'Background Animation',
        link: '/100-Days-of-Code/Day-17-Background-Animation/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_17.png',
    },
    {
        title: 'Otter Spinner',
        link: '/100-Days-of-Code/Day-18-And-Otter/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_18.png',
    },
    {
        title: 'Night Mode Button',
        link: '/100-Days-of-Code/Day-19-Night-Mode/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_19.png',
    },
    {
        title: 'Expanding Images',
        link: '/100-Days-of-Code/Day-20-Expanding-Images/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_20.png',
    },
    {
        title: 'Local & Session Storage',
        link: '/100-Days-of-Code/Day-21-Local-Session-Storage/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_21.png',
    },
    {
        title: 'Coookies',
        link: '/100-Days-of-Code/Day-22-Coookies/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_22.png',
    },
    {
        title: 'Autosuggest with php',
        link: '/100-Days-of-Code/Day-23-Autosuggest-with-php/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_23.png',
    },
    {
        title: 'IP Address',
        link: '/100-Days-of-Code/Day-24-Ip-Address/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_24.png',
    },
    {
        title: 'Editor',
        link: '/100-Days-of-Code/Day-25-Editor/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_25.png',
    },
    {
        title: 'Shell Script',
        link: '/100-Days-of-Code/Day-26-shell/quiz.zsh',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_26.png',
    },
    {
        title: 'README.md Generator',
        link: '/100-Days-of-Code/Day-27-README-Generator/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_27.png',
    },
    {
        title: 'Live Location',
        link: '/100-Days-of-Code/Day-28-Live-Location/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_28.png',
    },
    {
        title: 'Corona Dashboard',
        link: '/100-Days-of-Code/Day-29-Corona-Dashboard/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_29.png',
    },
    {
        title: 'console.log() Game',
        link: '/100-Days-of-Code/Day-30-console-log-game/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_30.png',
    },
    {
        link: '/100-Days-of-Code/Day-31-Hover-Board/index.html',
        title: 'Hover Board',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_31.png',
    },
    {
        title: 'Higher or Lower',
        link: '/100-Days-of-Code/Day-32-Higher-or-Lower/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_32.png',
    },
    {
        title: 'Horizontal Scroll',
        link: '/100-Days-of-Code/Day-33-Horizontal-Scroll/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_33.png',
    },
    {
        title: 'Text Editor',
        link: '/100-Days-of-Code/Day-34-Text-Editor/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_34.png',
    },
    {
        title: 'Digital Clock',
        link: '/100-Days-of-Code/Day-35-Digital-Clock/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_35.png',
    },
    {
        title: 'Cookie Notice',
        link: '/100-Days-of-Code/Day-36-Cookie-Notice/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_36.png',
    },
    {
        title: 'Currency Converter',
        link: '/100-Days-of-Code/Day-37-Currency-Converter/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_37.png',
    },
    {
        title: 'Brooklyn Nine Nine Tribute',
        link: '/100-Days-of-Code/Day-38-Brooklyn-Nine-Nine-Tribute/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_38.png',
    },
    {
        title: 'Tip Calculator',
        link: '/100-Days-of-Code/Day-39-Tip-Calculator/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_39.png',
    },
    {
        title: 'Steps',
        link: '/100-Days-of-Code/Day-40-Steps/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_40.png',
    },
    {
        title: 'Validation Code',
        link: '/100-Days-of-Code/Day-41-Validation-Code/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_41.png',
    },
    {
        title: 'Post It',
        link: '/100-Days-of-Code/Day-42-Post-It/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_42.png',
    },
    {
        title: 'Color Countdown',
        link: '/100-Days-of-Code/Day-43-Color-Countdown/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_43.png',
    },
    {
        title: 'How low can you go?',
        link: '/100-Days-of-Code/Day-44-How-Low-Can-You-Go/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_44.png',
    },
    {
        title: 'Where is Waldo?',
        link: '/100-Days-of-Code/Day-45-Where-is-Waldo/home.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_45.png',
    },
    {
        title: 'Flip Card',
        link: '/100-Days-of-Code/Day-46-Flip-Card/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_46.png',
    },
    {
        title: 'Remus Lupin',
        link: '/100-Days-of-Code/Day-47-Remus-Lupin/index.html',
        image: '/100-Days-of-Code/Day-14-Overview-Page/images/Day_47.png',
    },
];


projects.forEach(project => {
    const projectTile = document.createElement('div');
    const link = document.createElement('a');
    const image = document.createElement('img');

    link.setAttribute('href', `${project.link}`);
    link.classList.add('link');
    projectTile.classList.add('projectTile');
    link.innerText = project.title;

    image.setAttribute('src', `${project.image}`);
    
    projectTile.appendChild(image);
    projectTile.appendChild(link);

    projectContainer.appendChild(projectTile);
});