switch (browser) { //The Question
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }  

// The answer (for needing to use if else instead of switch/case)

if(browser == 'Edge'); {
    alert("You have got the Edge!");
} else if(browser == 'Chrome' 
  || browser == 'Safari'
  || browser == 'Firefox'
  || browser == 'Opera') {
   alert('Okay we support these browsers too');   
  } else{
      alert('We hope that this page looks ok');
  }