var Match = (function(){

	var ListsDic = {};
	/**
	 * Creates a new list with default values and inserts it in ListsDic
	 * @param  {String} listId [the name or id wanted do identify the list]
	 * @return {Object}        [the created list]
	 */
	var insertNewList = function(
		){
		list = {
				lastId: 0,
				id: listId,
				items:{}
			};

			ListsDic[listId] = list;

			return list;
	};

	var addNewName = function(listId, name){
		var list = ListsDic[listId];

		if(!list){
			list = insertNewList(listId);
		}

		// adds new name to list
		var id = list.lastId++;
		list.items[id+""] = name;

		return {
			name: name,
			id: id
		};
	};

	var removeNameByID = function(listId, nameId){
		var list = ListDic[listId];

		if(list){
			return delete list.items[nameId];
		}

		return false;
	};

	var getRandomItem = function(list){

		var length = list.length;
		var index = Math.floor(Math.random()* length );
		var ret = list.splice(index,1);
		ret[0].remove();
		return ret;
	};

	/**
	 * Finds the first and second lists by tag id and grabs randomly an item of each list,
	 * adds a match of these items in the matching list
	 * @param  {String} first  [From list]
	 * @param  {String} second [To list]
	 * @return {Null}
	 */
	var match = function(first,second){
		var firstlist = $(first + " li");
		var secondlist = $(second + " li");

		var destList = $("#Dest1 ul");
		var length = firstlist.length;
		
		while(length > 0){
			length --;
			var firstItem = getRandomItem(firstlist)[0].innerHTML.trim();
			var secondItem = getRandomItem(secondlist)[0].innerHTML.trim();

			var newChild = $("<li>");

			newChild.html(firstItem + "->" + secondItem);

			destList.append(newChild);

		}
	};

	return {
		AddName : addNewName,
		RemoveName : removeNameByID,
		Match : match
	};
}());