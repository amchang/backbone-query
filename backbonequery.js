/**
 * Backbone Query
 * Version 1.0
 * A simple addition to Backbone.Collection to allow query based operations on collections
 * Hard dependencies on underscore.js / backbone.js
 **/
(function(){

	// get a reference to Backbone
	var Backbone = this.Backbone;

	/**
	 * General model filter
	 * @param {object} model the current mode we're looking at
	 * @param {function|boolean|object|integer|string} filter the type of filter to look by
	 * @param {string} attr the attribute to filter on
	 **/
	var modelFilter = function(model, filter, attr) {
		if(_.isFunction(filter)) {
			return filter(model[attr]);
		// just do a direct check
		} else {
			return model[attr] === filter;
		}
	};

	/**
	 * Iterator for going over the models of the Collection
	 * @param search {object} set of filters to apply on the modelFilterIterator
	 * @param model {object} the current collection model to look at
	 * @param index {number} the number we're at in the collection
	 **/
	var modelFilterIterator = function(search, model, index) {
		var set = [];
		_.each(search, _.bind(modelFilter, this, model));
		return set;
	};

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
				var attribute;
				// need to be some models
				if(search && this.models) {
					_.each(this.models, function(){
						return _.bind(modelIterator, this, search);
					});
				} else {
					return [];
				}
			}
			
		});

	}
	
}.call(this));
