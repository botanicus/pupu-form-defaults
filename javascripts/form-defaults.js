// Inspirated by http://davidwalsh.name/mootools-form-field-default-plugin
// TODO: add custom class instead of gray color
// TODO: maybe implements Events + custom hooks for Fx effects etc
var FormDefaults = new Class({
  //implements
  Implements: [Options, Events],

  // options
  options: {
    collection: $$('input[type="text"]')
  },
  
  // initialization
  initialize: function(options) {
    this.setOptions(options);
    this.registerLoadEvent();
    this.registerFocusEvent();
    this.registerBlurEvent();
    this.fireEvent("load");
    this.registerEvents();
  },

  // events

  // onLoad option is basically the same as onBlur
  // reason of its existence is that users may
  // want to define different events there
  registerLoadEvent: function() {
    this.options.collection.each(function(element) {
      element.addClass("blured");
      element.set("value", element.get("rel"));
    });
  },

  registerFocusEvent: function() {
    this.addEvent("focus", function() {
      this.options.collection.each(function(element) {
        element.addClass("focused");
        element.removeClass("blured");
        if(element.get("value") == element.get("rel")) {
          element.set("value", "")
        }
      });
    });
  },

  registerBlurEvent: function() {
    this.addEvent("blur", function() {
      this.options.collection.each(function(element) {
        element.addClass("blured");
        element.removeClass("focused");
        if(element.get("value") == "") {
          element.set("value", element.get("rel"));
        }
      });
    });
  },

  focus: function() {
    this.fireEvent("focus");
  },

  blur: function() {
    this.fireEvent("blur");
  },

  // a method that does whatever you want
  // event dispatching: when element event is fired,
  // FormDefaults object event is fired
  registerEvents: function() {
    object = this;
    this.options.collection.each(function(element) {
      element.addEvents({
        focus: function() { object.fireEvent("focus", element) },
        blur:  function() { object.fireEvent("blur",  element) }
      })
    })
  }
  
});
