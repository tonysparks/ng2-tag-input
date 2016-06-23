webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(1);
	var platform_browser_dynamic_1 = __webpack_require__(160);
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(280);
	var router_1 = __webpack_require__(301);
	var home_1 = __webpack_require__(323);
	// enableProdMode()
	platform_browser_dynamic_1.bootstrap(home_1.App, [
	    http_1.HTTP_PROVIDERS,
	    router_1.ROUTER_PROVIDERS,
	    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
	])
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var tag_input_component_1 = __webpack_require__(324);
	var common_1 = __webpack_require__(1);
	var App = (function () {
	    function App() {
	        this.items = ['Javascript', 'Typescript'];
	        this.options = {
	            readonly: undefined,
	            placeholder: '+ Tag'
	        };
	        this.validators = [common_1.Validators.minLength(3), this.startsWithAt];
	    }
	    App.prototype.onAdd = function (item) {
	        console.log(item + ' added');
	    };
	    App.prototype.onRemove = function (item) {
	        console.log(item + ' removed');
	    };
	    App.prototype.onSelect = function (item) {
	        console.log(item + ' selected');
	    };
	    App.prototype.transform = function (item) {
	        return "@" + item;
	    };
	    App.prototype.startsWithAt = function (control) {
	        if (control.value.charAt(0) !== '@') {
	            return {
	                'startsWithAt@': true
	            };
	        }
	        return null;
	    };
	    App.prototype.ngOnInit = function () {
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [tag_input_component_1.TagInput],
	            template: __webpack_require__(337)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;
	

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var common_1 = __webpack_require__(1);
	var tag_input_constants_1 = __webpack_require__(325);
	var common_2 = __webpack_require__(1);
	var tag_component_1 = __webpack_require__(326);
	var tag_input_accessor_1 = __webpack_require__(333);
	var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_2.NG_VALUE_ACCESSOR, {
	    useExisting: core_1.forwardRef(function () { return TagInput; }),
	    multi: true
	});
	/**
	 * A component for entering a list of terms to be used with ngModel.
	 */
	var TagInput = (function (_super) {
	    __extends(TagInput, _super);
	    function TagInput(element, builder, renderer) {
	        var _this = this;
	        _super.call(this);
	        this.element = element;
	        this.builder = builder;
	        this.renderer = renderer;
	        /**
	         * @name separatorKeys
	         * @desc keyboard keys with which a user can separate items
	         * @type {Array}
	         */
	        this.separatorKeys = [];
	        /**
	         * @name placeholder
	         * @desc the placeholder of the input text
	         * @type {string}
	         */
	        this.placeholder = tag_input_constants_1.PLACEHOLDER;
	        /**
	         * @name secondaryPlaceholder
	         * @desc placeholder to appear when the input is empty
	         * @type {string}
	         */
	        this.secondaryPlaceholder = tag_input_constants_1.SECONDARY_PLACEHOLDER;
	        /**
	         * @name maxItems
	         * @desc maximum number of items that can be added
	         * @type {number}
	         */
	        this.maxItems = undefined;
	        /**
	         * @name readonly
	         * @desc if set to true, the user cannot remove/add new items
	         * @type {boolean}
	         */
	        this.readonly = undefined;
	        /**
	         * @name transform
	         * @desc function passed to the component to transform the value of the items, or reject them instead
	         */
	        this.transform = function (item) { return item; };
	        /**
	         *
	         */
	        this.validators = [];
	        /**
	         * @name onAdd
	         * @desc event emitted when adding a new item
	         * @type {EventEmitter<string>}
	         */
	        this.onAdd = new core_1.EventEmitter();
	        /**
	         * @name onRemove
	         * @desc event emitted when removing an existing item
	         * @type {EventEmitter<string>}
	         */
	        this.onRemove = new core_1.EventEmitter();
	        /**
	         * @name onSelect
	         * @desc event emitted when selecting an item
	         * @type {EventEmitter<string>}
	         */
	        this.onSelect = new core_1.EventEmitter();
	        /**
	         * @name input
	         * @desc object representing utilities for managing the input text element
	         */
	        this.input = {
	            element: undefined,
	            isFocused: false,
	            isVisible: function () {
	                var maxItemsReached = _this.maxItems !== undefined && _this.value.length === _this.maxItems;
	                return !_this.readonly && !maxItemsReached;
	            },
	            focus: function () {
	                _this.input.isFocused = true;
	                _this.renderer.invokeElementMethod(_this.input.element, 'focus', []);
	                if (_this.selectedTag) {
	                    _this.selectedTag.unselect();
	                }
	            }
	        };
	        /**
	         * @name listeners
	         * @desc array of events that get fired using @fireEvents
	         * @type []
	         */
	        this.listeners = {
	            keyup: [],
	            change: []
	        };
	    }
	    /**
	     * @name removes an item from the array of the model
	     * @param tag {TagComponent}
	     */
	    TagInput.prototype.remove = function (tag) {
	        this.value = this.value.filter(function (_item) { return _item !== tag.item; });
	        if (this.selectedTag && this.selectedTag.item === tag.item) {
	            this.selectedTag.unselect();
	        }
	        // focus input right after removing an item
	        this.input.focus.call(this);
	        // emit remove event
	        this.onRemove.emit(tag.item);
	    };
	    /**
	     * @name add
	     * @desc adds the current text model to the items array
	     */
	    TagInput.prototype.add = function () {
	        var vm = this, item = vm.transform(vm.form.value.item), control = vm.form.find('item');
	        control.updateValue(item);
	        var isDupe = vm.value.indexOf(item) !== -1;
	        // check validity
	        if (!vm.input.isVisible() || !vm.form.valid || isDupe) {
	            return;
	        }
	        // append item to the ngModel list
	        vm.value.push(item);
	        // reset control
	        control.updateValue('');
	        //  and emit event
	        vm.onAdd.emit(item);
	    };
	    /**
	     * @name select
	     * @desc selects item passed as parameter as the selected tag
	     * @param item
	     */
	    TagInput.prototype.select = function (item) {
	        var tags = this.tags.toArray();
	        // deselect tag
	        if (this.selectedTag) {
	            this.selectedTag.unselect();
	        }
	        // activate selected tag
	        tags.filter(function (_tag) { return _tag.item === item; })[0].select();
	        // emit event
	        this.onSelect.emit(item);
	    };
	    /**
	     * @name fireEvents
	     * @desc goes through the list of the events for a given eventName, and fires each of them
	     * @param eventName
	     * @param $event
	     */
	    TagInput.prototype.fireEvents = function (eventName, $event) {
	        var _this = this;
	        this.listeners[eventName].forEach(function (listener) { return listener.call(_this, $event); });
	    };
	    /**
	     * @name handleKeydown
	     * @desc handles action when the user hits a keyboard key
	     * @param $event
	     * @param item
	     */
	    TagInput.prototype.handleKeydown = function ($event, item) {
	        var vm = this, KEY = $event.keyCode, ACTION = tag_input_constants_1.KEY_PRESS_ACTIONS[KEY], itemIndex = this.value.indexOf(item), tags = this.tags.toArray();
	        function deleteSelectedTag() {
	            if (vm.selectedTag) {
	                vm.remove(vm.selectedTag);
	            }
	        }
	        function switchPrev() {
	            if (itemIndex > 0) {
	                vm.select(vm.value[itemIndex - 1]);
	                tags[itemIndex - 1].focus();
	            }
	            else {
	                vm.input.focus.call(vm);
	            }
	        }
	        function switchNext() {
	            if (itemIndex < vm.value.length - 1) {
	                vm.select(vm.value[itemIndex + 1]);
	                tags[itemIndex + 1].focus();
	            }
	            else {
	                vm.input.focus.call(vm);
	            }
	        }
	        switch (ACTION) {
	            case tag_input_constants_1.ACTIONS.DELETE:
	                deleteSelectedTag();
	                break;
	            case tag_input_constants_1.ACTIONS.SWITCH_PREV:
	                switchPrev();
	                break;
	            case tag_input_constants_1.ACTIONS.SWITCH_NEXT:
	                switchNext();
	                break;
	            case tag_input_constants_1.ACTIONS.TAB:
	                switchNext();
	                break;
	        }
	        $event.preventDefault();
	    };
	    Object.defineProperty(TagInput.prototype, "selectedTag", {
	        /**
	         * @name selectedTag
	         * @desc string representing the current tag selected
	         * @type {Tag}
	         */
	        get: function () {
	            return this.tags.toArray().filter(function (_tag) { return _tag.isSelected; })[0];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @name setupAdditionalKeysEvents
	     * @desc sets up listeners for additional separator keys and the backspace key for selecting the last item
	     */
	    TagInput.prototype.setupAdditionalKeysEvents = function () {
	        var _this = this;
	        var vm = this;
	        var listener = function ($event) {
	            if (vm.separatorKeys.indexOf($event.keyCode) >= 0) {
	                $event.preventDefault();
	                vm.add();
	            }
	        };
	        var backSpaceListener = function ($event) {
	            var itemsLength = vm.value.length, inputValue = vm.form.find('item').value, index = vm.value.indexOf(inputValue), isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
	            if (isCorrectKey && itemsLength && !inputValue) {
	                vm.select(vm.value[itemsLength - 1]);
	                _this.tags.last.focus();
	            }
	        };
	        if (vm.separatorKeys.length) {
	            vm.listeners.keyup.push(listener);
	        }
	        vm.listeners.keyup.push(backSpaceListener);
	    };
	    TagInput.prototype.ngOnInit = function () {
	        this.setupAdditionalKeysEvents();
	        // if the number of items specified in the model is > of the value of maxItems
	        // degrade gracefully and let the max number of items to be the number of items in the model
	        // though, warn the user.
	        if (this.maxItems !== undefined && this.value.length > this.maxItems) {
	            this.maxItems = this.value.length;
	            console.warn('The number of items specified was greater than the property max-items.');
	        }
	        this.form = this.builder.group({
	            item: new common_1.Control('', common_1.Validators.compose(this.validators))
	        });
	    };
	    TagInput.prototype.ngAfterViewChecked = function () {
	        this.input.element = this.element.nativeElement.querySelector('input');
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], TagInput.prototype, "separatorKeys", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TagInput.prototype, "placeholder", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], TagInput.prototype, "secondaryPlaceholder", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], TagInput.prototype, "maxItems", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], TagInput.prototype, "readonly", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], TagInput.prototype, "transform", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TagInput.prototype, "validators", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TagInput.prototype, "onAdd", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TagInput.prototype, "onRemove", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], TagInput.prototype, "onSelect", void 0);
	    __decorate([
	        core_1.ViewChildren(tag_component_1.Tag), 
	        __metadata('design:type', core_1.QueryList)
	    ], TagInput.prototype, "tags", void 0);
	    TagInput = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'tag-input',
	            directives: [tag_component_1.Tag],
	            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
	            styles: [__webpack_require__(334).toString()],
	            template: __webpack_require__(336),
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, common_1.FormBuilder, core_1.Renderer])
	    ], TagInput);
	    return TagInput;
	}(tag_input_accessor_1.TagInputAccessor));
	exports.TagInput = TagInput;
	

/***/ },

/***/ 325:
/***/ function(module, exports) {

	/*
	** constants and default values for <tag-input>
	 */
	"use strict";
	exports.PLACEHOLDER = '+ Tag';
	exports.SECONDARY_PLACEHOLDER = 'Enter a new tag';
	exports.ACTIONS = {
	    DELETE: 'DELETE',
	    SWITCH_PREV: 'SWITCH_PREV',
	    SWITCH_NEXT: 'SWITCH_NEXT',
	    TAB: 'TAB'
	};
	exports.KEY_PRESS_ACTIONS = {
	    8: exports.ACTIONS.DELETE,
	    37: exports.ACTIONS.SWITCH_PREV,
	    39: exports.ACTIONS.SWITCH_NEXT,
	    9: exports.ACTIONS.TAB
	};
	

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var Tag = (function () {
	    function Tag(element, renderer) {
	        this.element = element;
	        this.renderer = renderer;
	        this.onRemove = new core_1.EventEmitter();
	    }
	    Tag.prototype.focus = function () {
	        this.renderer.invokeElementMethod(this.element.nativeElement, 'focus', []);
	    };
	    Tag.prototype.select = function () {
	        this.isSelected = true;
	    };
	    Tag.prototype.unselect = function () {
	        this.isSelected = false;
	    };
	    Tag.prototype.remove = function () {
	        this.onRemove.emit(this);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], Tag.prototype, "item", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], Tag.prototype, "readonly", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Tag.prototype, "onRemove", void 0);
	    Tag = __decorate([
	        core_1.Component({
	            selector: 'tag',
	            styles: [__webpack_require__(327).toString()],
	            template: __webpack_require__(331)
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], Tag);
	    return Tag;
	}());
	exports.Tag = Tag;
	

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(328);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(330)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tag.style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tag.style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(329)();
	// imports


	// module
	exports.push([module.id, "tag {\n  display: flex;\n  flex-direction: row;\n  margin: 0.2rem;\n  padding: 0.1em 0.6rem;\n  border-radius: 16px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  letter-spacing: 0.05rem;\n  background: #efefef;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.25s;\n  color: #444;\n  font-weight: 500;\n  line-height: 32px; }\n\ntag:focus {\n  background: #2196F3;\n  color: #fff;\n  outline: 0; }\n\ntag:not(:focus):hover {\n  background: #e6e6e6; }\n\n.tag__remove-button {\n  cursor: pointer; }\n\n.tag__remove-button img {\n  width: 16px;\n  vertical-align: sub; }\n", ""]);

	// exports


/***/ },

/***/ 329:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"tag\" *ngIf=\"item\">\n    <span class=\"tag__name\">\n        {{ item }}\n    </span>\n    <span class=\"tag__remove-button\" (click)=\"remove()\" *ngIf=\"!readonly\">\n        <img src=\"" + __webpack_require__(332) + "\" />\n    </span>\n</div>";

/***/ },

/***/ 332:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABl0lEQVRoQ+2Y0VEDMQxENx3QCSkBOkg6gMqgA+gASkg6oQRGTDzjudydV9YqcIPv17K9Tyv7PNph499u4/oxAH7bweHAcCCYgX9VQncAHgC8B5PWmn4A8AngqxVo46wDJv4DwB7AM4BXZvGOmCcALwBOAB4ZCAagFl80ZUAU8WUPCoIBMEvfZrKphJiKL9sdWyXLANhiSxsoIEJrswBZECHxnkNcLA1vWJWiZC2PA0oIifgeBxQQMvERgN4zIRUfBfBCyMUrAFiIFPEqgBaEjdvzYPop/iH0W4h51ixleW6uRLzSgdbtVEPIxGcArJWTjUnFD4CZ4mbOgdSFnqfE0oFmxJe5MggVwNo9/+evUeYnxcQwV/VVTNQBjzBPLA0TAegR1DNnFaYXICIkMldSQgoBijV+YLwOyDZWNQo8AErxrbcT/Z9gATLESyAYgM03tqy1aM3W++oKoC2mL/Tr5tn50kxebfIyDpiGGiJD/LScKPHeW2jT7XVHJdw2lC2h26py7DYAHMlKCR0OpKTVsehwwJGslNBvypV0Mel0u1AAAAAASUVORK5CYII="

/***/ },

/***/ 333:
/***/ function(module, exports) {

	"use strict";
	var TagInputAccessor = (function () {
	    function TagInputAccessor() {
	        this._value = [];
	    }
	    Object.defineProperty(TagInputAccessor.prototype, "value", {
	        get: function () {
	            return this._value;
	        },
	        set: function (items) {
	            this._value = items;
	            this._onChangeCallback(items);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    TagInputAccessor.prototype.onTouched = function (items) {
	        this._onTouchedCallback(items);
	    };
	    TagInputAccessor.prototype.writeValue = function (items) {
	        this._value = items;
	    };
	    TagInputAccessor.prototype.registerOnChange = function (fn) {
	        this._onChangeCallback = fn;
	    };
	    TagInputAccessor.prototype.registerOnTouched = function (fn) {
	        this._onTouchedCallback = fn;
	    };
	    return TagInputAccessor;
	}());
	exports.TagInputAccessor = TagInputAccessor;
	

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(335);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(330)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tag-input.style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./tag-input.style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(329)();
	// imports


	// module
	exports.push([module.id, ".tag-input {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  transition: all 0.15s;\n  padding: 0.2rem;\n  border-bottom: 1px solid #efefef; }\n\n.tag-input--focused {\n  border-bottom: 2px solid #2196F3; }\n\n.tag-input--invalid {\n  border-bottom: 2px solid red; }\n\n.tag-input form {\n  line-height: 2; }\n\n.tag-input__text-input {\n  border: none;\n  display: inline;\n  padding: 0 0.5rem;\n  font-size: 14px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  vertical-align: sub; }\n\n.tag-input__text-input:focus {\n  outline: 0; }\n", ""]);

	// exports


/***/ },

/***/ 336:
/***/ function(module, exports) {

	module.exports = "<div class=\"tag-input\"\n     [class.tag-input--invalid]=\"!form.valid && form.controls.item.value\"\n     [class.tag-input--focused]=\"input.isFocused\">\n\n    <tag *ngFor=\"let item of value; trackBy: item; let i = index\"\n         (onRemove)=\"remove($event)\"\n         (click)=\"select(item)\"\n         (keydown)=\"handleKeydown($event, item)\"\n         [tabindex]=\"i\"\n         [readonly]=\"readonly\"\n         [item]=\"item\">\n    </tag>\n\n    <form (ngSubmit)=\"add()\" *ngIf=\"input.isVisible.call(this)\" [ngFormModel]=\"form\">\n        <input type=\"text\"\n               required\n               class=\"tag-input__text-input\"\n               placeholder=\"{{ value.length ? placeholder : secondaryPlaceholder }}\"\n               (focus)=\"input.focus()\"\n               (blur)=\"input.isFocused = false\"\n               (keyup)=\"fireEvents('keyup', $event)\"\n               ngControl=\"item\"\n               [tabindex]=\"value.length\"\n        />\n    </form>\n</div>";

/***/ },

/***/ 337:
/***/ function(module, exports) {

	module.exports = "<main><div class=\"home-container\">\n\t\t<div class=\"tag-input-container\">\n\t\t\t<tag-input [(ngModel)]=\"items\"\n\t\t\t\t\t   (onSelect)=\"onSelect($event)\"\n\t\t\t\t\t   (onAdd)=\"onAdd($event)\"\n\t\t\t\t\t   (onRemove)=\"onRemove($event)\"\n\t\t\t\t\t   [readonly]=\"options.readonly\"\n\t\t\t\t\t   [validators]=\"validators\"\n\t\t\t\t\t   [transform]=\"transform\"\n\t\t\t\t\t   [placeholder]=\"options.placeholder\">\n\t\t\t</tag-input>\n\t\t</div>\n\t</div>\n</main>\n\n";

/***/ }

});
//# sourceMappingURL=app.map