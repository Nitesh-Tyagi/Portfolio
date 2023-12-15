const container = document.getElementById('container');

// Function to fetch JSON data
function fetchJSONData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error fetching JSON:', error));
}

// Function to create the HTML structure for each project
function createProjectDiv(project) {
    // Create the div element
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('cell');

    // Create the image element
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');

    const img = document.createElement('img');
    img.src = `images/${project.title}.jpg`; // Replace spaces in title for filenames
    img.alt = project.title;
    img.classList.add('img');
    imgDiv.appendChild(img);


    // Create the title paragraph with link
    const titleP = document.createElement('p');
    titleP.innerHTML = `<a href="${project.link}">${project.title}</a>`;
    titleP.classList.add('titleP');


    // Create the description paragraph
    const descP = document.createElement('p');
    // descP.textContent = project.description;
    descP.classList.add('descP');


    // Append elements to the div
    projectDiv.appendChild(imgDiv);
    projectDiv.appendChild(titleP);
    projectDiv.appendChild(descP);

    // Append the div to the container
    container.appendChild(projectDiv);
}

// Load JSON data and create divs
fetchJSONData('list.json').then(data => {
    data.forEach(createProjectDiv);
});
