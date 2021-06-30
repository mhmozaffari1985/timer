const timer1 = function() {
  let args = process.argv.splice(2, process.argv.length);
  args.forEach(function(element, index) {
    if (!isNaN(element)) args[index] = parseInt(element);
  }, args);
  args = args.sort(function(a, b) {
    return a - b;
  });
 
  args.forEach(element => {
    if (element > 0) {      
      setTimeout(() => {
        process.stdout.write('\x07');
      }, element * 1000);
    }
  });
};

timer1();