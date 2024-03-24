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

// tooltip
document.addEventListener('DOMContentLoaded', function () {
    elems = document.querySelectorAll('.tooltipped');
    instances = M.Tooltip.init(elems, {

    });
});