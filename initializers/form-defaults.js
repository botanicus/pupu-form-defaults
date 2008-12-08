window.addEvent("domready", function() {
  var defs = new FormDefaults({
    // default to $$('input[type=text]')
    collection: $$('input.defs')
  });
})
