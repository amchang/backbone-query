/**
 * Backbone Query
 * Version 1.0
 * A simple addition to Backbone.Collection to allow query based operations on collections
 * Hard dependencies on underscore.js / backbone.js
 **/
(function(){

	// get a reference to Backbone
	var Backbone = this.Backbone;

	// if Backbone || Backbone.js is falsy, don't do anything
	if(Backbone && Backbone.Collection) {

		// onto the prototype
		_.extend(Backbone.Collection.prototype, {

			/**
			 * Given an object (query) iterate through them and see if this Collection
			 * has a model(s) in this Collection
			 * @param {object} search the object to base this search off of, keys are attributes to search on
			 * @return {array} of results, could be empty to mean no results found
			 **/
			query: function(search){
				var set = [];
				var attribute;
				// need to be some models
				if(search && this.models) {
					_.each(this.models, function(){
						
						_.each(search, function(attr, val) {

						});
					});
				} else {
					return set;
				}
			}
			
		});

	}
	
}.call(this));
