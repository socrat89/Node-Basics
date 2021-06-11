
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
 var list = ['1','2','3'];
function onDataReceived(text) {
  
  if (text === 'quit\n'|| text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n'|| text.startsWith("hello") || text.startsWith("hello\t")){
    hello(text);
  }
  else if(text === "help\n"){
    help();
  }
  
  else if(text.startsWith("list")){
    tasks(list);
  }
  else if(text.trim()==="add"||text.trim()==="edit"){
    unknownCommand(text);
  }
  else if(text.startsWith("add")){
    add(text);
}
else if(text.trim() === "remove"|| text.startsWith("remove") ){
  remove(text);
}
 else if(text.startsWith("edit")){
    edit(text);
  }

  else{
    unknownCommand(text);
  }
  
}

/**
 * Edits the task
 *
 * @returns {void}
 */
 function edit(x){
  
  var x = x.replace("\n","");
  var y=list.length-1;
  var z= x.substring(5);
  var b=z.substring(0,1);
  if(isNaN(b))
  {//its Not a Number
     z=  z.split(" ");
     list[y]=list[y].replace(list[y],z);
  }else if(b<=y)
  {
    x=x.substring(7);
    list[b]=list[b].replace(list[b],x);
  
    
  }else{unknownCommand(x)}
 }
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
/**
 * "help"command,  lists all the possible commands
 *
 * @returns {void}
 */
 function help(){
  console.log("\n");
  console.log(
  " ******** help command ********** \n"
  +"hello - hello command able to take an argument and adding !\n"
  +"help - lists all the possible commands\n"
  +"Add task to the list\n"
  +"Remove task from the list that allows to remove\n"
  +"exit or quit - quits the application\n");
  }


/**
 * Says hello with argument 
 * hello should be the first
 * @returns {void}
 */
 function hello(text){
  text = text.replace("\n", "!");
  text = text.trim(" ");
  console.log(text);

 }
 function tasks(list){
  for(var i = 0; i < list.length; i++){
    console.log(list[i]);
  }
}
/**
 * Adds a new task
 *
 * @returns {void}
 */
 function add(text){
  // text = text.trim();
  list.unshift(text.substring(4).trim());
}

/**
 * Removes an existing task
 *
 * @returns {void}
 */
function remove(text){
  text = text.trim();
  if(text.length == 6){
    list.shift();
  }
  else if(text.substring(7) >=list.length){
    console.log(text.substring(7));
    console.log("error task number dose not exsit in the list");
  }
  else{
  list.splice(text.substring(7),1);
}
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Socrat Alnajjad")
