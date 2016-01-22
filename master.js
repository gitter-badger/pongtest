// Numbers divisible by 3 are replaced with "ping"
// Numbers divisible by 5 are replaced with "pong"
// Numbers divisible by 15 are replaced with "pingpong"

  function pingpong(num){

      var ping = 3;
      var pong = 5
      var pingpong = 15

      var i = 1;
      while(i<=num) {
      if (i % pingpong === 0){
        console.log('pingpong');
      } else if (i % ping === 0) {
        console.log('ping')
      } else if (i % pong === 0) {
        console.log('pong');
      }  else {
        console.log(i);
      }
      i++;
    }
  }
