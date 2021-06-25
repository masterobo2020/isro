setScreen("homescreen");
onEvent("button1", "click", function( ) {
  setScreen("introscr");
});
onEvent("button6", "click", function( ) {
  open("https://www.youtube.com/watch?v=WL94XhNbwQ4&feature=youtu.be");
});
onEvent("button2", "click", function( ) {
  setScreen("datascr");
});
onEvent("button3", "click", function( ) {
var myDatabase = {};
myDatabase.name = getText("text_input1");
myDatabase.age = getText("text_input2");
myDatabase.email = getText("text_input3");
createRecord("myDatabase", myDatabase, function(record) {
  setScreen("content");
});
});
onEvent("cb1", "click", function( ) {
  setScreen("missions");
});
onEvent("button12", "click", function( ) {
  setScreen("content");
});
onEvent("button4", "click", function( ) {
  open("https://www.isro.gov.in/missions");
});
onEvent("cb2", "click", function( ) {
  setScreen("spacecrafts");
});
onEvent("button11", "click", function( ) {
  setScreen("content");
});
onEvent("button7", "click", function( ) {
  open("https://www.isro.gov.in/spacecraft");
});
onEvent("cb3", "click", function( ) {
  setScreen("launchers");
});
onEvent("button16", "click", function( ) {
  setScreen("content");
});
onEvent("button5", "click", function( ) {
  open("https://www.isro.gov.in/launchers");
});
onEvent("cb4", "click", function( ) {
  setScreen("applications");
});
onEvent("button17", "click", function( ) {
  setScreen("content");
});
onEvent("button8", "click", function( ) {
  open("https://www.isro.gov.in/applications");
});
onEvent("cb5", "click", function( ) {
  setScreen("Chandrayaanscr");
});
onEvent("btnc", "click", function( ) {
  open("https://studio.code.org/projects/gamelab/EircXvVH47ZP3hQkx2lTNOIO7vUfj_3Meq2h-IR5qZ0");
});
onEvent("btnclink", "click", function( ) {
  open("https://www.isro.gov.in/chandrayaan2-mission#launch-vehicle");
});
onEvent("button13", "click", function( ) {
  setScreen("content");
});
onEvent("cb6", "click", function( ) {
  open("https://forms.gle/hQfkMqhueWsctHEh7");
});
onEvent("button10", "click", function( ) {
  setScreen("funwithuniversescr");
});
onEvent("button18", "click", function( ) {
  open("https://stellarium.org");
});
onEvent("button19", "click", function( ) {
  open("https://en.wikipedia.org/wiki/Stellarium_(software)");
});
onEvent("button20", "click", function( ) {
  setScreen("content");
});
onEvent("button15", "click", function( ) {
  setScreen("contactscr");
});
onEvent("button14", "click", function( ) {
  setScreen("content");
});
onEvent("button9", "click", function( ) {
  open("https://www.youtube.com/channel/UCx7ZrwKtGvHImUWOq-j6A6Q");
});
