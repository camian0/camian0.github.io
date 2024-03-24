// collapse
document.addEventListener('DOMContentLoaded', function () {
    elems = document.querySelectorAll('.collapsible');
    instances = M.Collapsible.init(elems, {
    });
});

// float button
document.addEventListener('DOMContentLoaded', function () {
    elems = document.querySelectorAll('.fixed-action-btn');
    instances = M.FloatingActionButton.init(elems, {

    });
});

// parallax effect
document.addEventListener('DOMContentLoaded', function () {
    elems = document.querySelectorAll('.parallax');
    instances = M.Parallax.init(elems, {

    });
});