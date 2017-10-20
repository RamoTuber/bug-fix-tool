var terms = ['hello', 'world', 'this', 'is', 'me'];


function check(str) {
  var 
   s = str.split(' ');
   out = [],
   redgreen = ['red','green'],
   rgcount = 0;
  
  s.forEach(function (k, i) {
    if (terms.indexOf(k) >= 0) {
      var color = redgreen[rgcount];
      out.push('<span class="'+color+'">'+color+'</span>');
      rgcount = (rgcount + 1) % 2;
    } else out.push(k);
  });
  document.write(out.join(' ')+'<br/>');
}

check('hello here is me');