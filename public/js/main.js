document.addEventListener('DOMContentLoaded', function() {
    //change color of title
    let i = 0,
    colors = ['E4A834', '68E3AD'];
    function nextColor() {
        document.getElementById('headerTitle').style.color = '#' + colors[i++];
        if (i >= colors.length) i = 0;
    }
    document.getElementById('headerTitle').style.transition = '5s ease';
    setInterval(nextColor, 5000);
});
//#CF4917