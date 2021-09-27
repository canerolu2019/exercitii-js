// the question //

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no(); 3fdfdf
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  ); 

// the answer// 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  } 

  ask(
      "Do you agree?", 
      () => alert("You agreed"),
      () => alert("You canceled the execution")
  );