(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b07b8b7"],{"528c":function(e,t,i){},6882:function(e,t,i){"use strict";var s=i("528c"),a=i.n(s);a.a},cdce5:function(e,t,i){"use strict";var s=i("d537"),a=i.n(s);a.a},d537:function(e,t,i){},fda7:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h1",{staticClass:"title"},[e._v("My Recipes")]),i("div",{staticClass:"resultsPreview"},e._l(e.recipe_list,(function(e){return i("PersonalRecipePreview",{key:e.id,attrs:{recipe:e}})})),1)])},a=[],r=(i("96cf"),i("1da1")),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("b-card",{staticClass:"recipe-preview"},[i("div",{staticClass:"recipe-body"},[i("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(e._s(e.recipe.title))]),i("div",{staticClass:"recipe-image-container"},[e.imageLoaded?e._e():i("div",{staticClass:"spinner"},[i("div",{staticClass:"spinner-border text-success",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])])]),i("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image_url},on:{load:e.handleImageLoad}})])]),i("div",{staticClass:"recipe-footer"},[i("ul",{staticClass:"recipe-overview"},[i("li",[e._v(e._s(e.recipe.cooking_time)+" minutes")]),i("li",[e._v(e._s(e.recipe.servings?e.recipe.servings+" servings":"")+" ")]),e.recipe.vegetarian?i("li",{attrs:{"data-placement":"top",title:"vegetarian"}},[i("i",{staticClass:"fas fa-leaf"})]):e._e(),e.recipe.vegan?i("li",{attrs:{"data-placement":"top",title:"vegan"}},[i("i",{staticClass:"fas fa-seedling",staticStyle:{color:"rgb(15, 143, 68)"}})]):e._e()])]),i("div",{staticClass:"recipe-instructions"},[i("h5",[e._v("Instructions:")]),i("ul",e._l(e.recipe.instructions.split("\n"),(function(t){return i("li",{key:t},[e._v(e._s(t))])})),0)]),i("div",{staticClass:"recipe-ingredients"},[i("h5",[e._v("Ingredients:")]),i("ul",e._l(e.recipe.ingredients.split("\n"),(function(t){return i("li",{key:t},[e._v(e._s(t))])})),0)])])],1)},c=[],l={name:"PersonalRecipePreview",data:function(){return{imageLoaded:!1}},methods:{handleImageLoad:function(){this.imageLoaded=!0}},props:{recipe:{type:Object,required:!0}}},o=l,p=(i("6882"),i("2877")),u=Object(p["a"])(o,n,c,!1,null,"31ac3817",null),d=u.exports,v={name:"myrecipes",components:{PersonalRecipePreview:d},data:function(){return{recipe_list:[]}},mounted:function(){this.getFavorites()},methods:{getFavorites:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+"/users/myrecipes");case 3:i=t.sent,e.recipe_list=i.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$root.toast("Input Error",t.t0.message,"danger");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},g=v,_=(i("cdce5"),Object(p["a"])(g,s,a,!1,null,null,null));t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-4b07b8b7.8cdd1c5d.js.map