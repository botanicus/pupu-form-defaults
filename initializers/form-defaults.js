window.addEvent("domready", function() {
  if ($("search")) {
    var fx = new Fx.Tween("search");
    defs = new FormDefaults({
      collection: [$("search")],
      onFocus: function() { fx.start("width", "250") },
      onBlur:  function() { fx.start("width", "200") }
    });
  };
})
