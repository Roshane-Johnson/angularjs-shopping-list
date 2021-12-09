angular.module("ShoppingListModule", []).controller("ShoppingListCtrl", ShoppingListCtrl);

ShoppingListCtrl.$inject = ["$scope"];
function ShoppingListCtrl($scope) {
	// let listItemSchema = { name: "Apple", quantity: 1, isCompleted: false };

	$scope.list = {
		items: [
			{ name: "Apple", quantity: 3, isCompleted: true },
			{ name: "Grape", quantity: 6, isCompleted: false },
			{ name: "Pineapple", quantity: 9, isCompleted: false },
			{ name: "Mango", quantity: 12, isCompleted: false },
			{ name: "Pomegranate", quantity: 15, isCompleted: false },
		],
	};

	$scope.list.count = $scope.list.items.length;

	$scope.addItem = function (itemName = "") {
		let itemIndex = $scope.list.items.findIndex((item) => item.name.toLowerCase() == itemName.toLowerCase());
		let itemNotFound = itemIndex == -1;

		if (itemNotFound) {
			$scope.list.items.push({ name: itemName, quantity: 1, isCompleted: false });
			$scope.list.count = $scope.list.items.length;
		} else {
			let currentItem = $scope.list.items[itemIndex];
			currentItem.quantity++;

			Swal.fire({
				toast: true,
				position: "bottom-end",
				showConfirmButton: false,
				timer: 5_000,
				timerProgressBar: true,
				icon: "success",
				title: `Duplicate found for ${currentItem.name}\n\nAdded +1 to ${currentItem.name}`,
			});
		}

		$scope.newItem.name = "";
	};

	$scope.removeItem = function (itemIndex) {
		$scope.list.items.splice(itemIndex, 1);
		$scope.list.count = $scope.list.items.length;
	};

	$scope.checkItem = function (itemIndex) {
		let currentItem = $scope.list.items[itemIndex];
		currentItem.isCompleted = !currentItem.isCompleted;
	};
}
