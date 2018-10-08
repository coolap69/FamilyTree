document.getElementById("my-stories").addEventListener("submit", function (e) {
    // debugger;

    e.preventDefault();
    upsertStoryForm();
});

var upsertStoryForm = function () {
    const story = {
        title: document.forms["upsertStoryForm"]["title"].value,
        // text: document.forms["upsertStoryForm"]["text"].value,
        // lat: document.forms["upsertStoryForm"]["lat"].value,
        // long: document.forms["upsertStoryForm"]["long"].value,
        mother: document.forms["upsertStoryForm"]["mother"].value,
        father: document.forms["upsertStoryForm"]["father"].value,
        sister: document.forms["upsertStoryForm"]["sister"].value,
        brother: document.forms["upsertStoryForm"]["brother"].value,
        loveone: document.forms["upsertStoryForm"]["loveone"].value,
        grandma: document.forms["upsertStoryForm"]["grandma"].value,
        grandpa: document.forms["upsertStoryForm"]["grandpa"].value,
        // country: document.forms["upsertStoryForm"]["country"].value,
        // dateTime: document.forms["upsertStoryForm"]["date-time"].value,
        createdBy: window.sessionStorage.loggedIn
    };

    console.log(JSON.stringify(story));

    let stories = window.localStorage.stories ? JSON.parse(window.localStorage.stories) : [];

    if (stories.length == 0) {
        story.id = 1;
    } else {
        story.id = stories.length + 1;
    }

    stories.push(story);
    window.localStorage.stories = JSON.stringify(stories);
    window.location.href = "./famtree-details.html?id=" + story.id;

    return false;
}
