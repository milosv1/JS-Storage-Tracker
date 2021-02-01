//Experimental side project for JavaScript,
//The use of this is to use JavaScript to grab system related information then output it,
//The main purpose of it, is to learn its concepts and make it fun.
//This will be using a Library called systeminformation.
const s_i = require('systeminformation');

s_i.cpu()
    .then(data => console.log(data))
    .catch(error => console.log(error));

