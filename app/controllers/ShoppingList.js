const ShoppingListModule = angular.module("ShoppingListModule", []);

ShoppingListModule.controller("ShoppingListCtrl", ShoppingListCtrl);
ShoppingListCtrl.$inject = ["$scope"];

function ShoppingListCtrl($scope) {
	// let itemSchema = { name: "Apple", quantity: 1, isCompleted: false };

	$scope.list = {
		items: [],
	};

	$scope.list.count = $scope.list.items.length;

	$scope.addItem = function (itemName = "") {
		let itemIndex = $scope.list.items.findIndex((item) => item.name.toLowerCase() == itemName.toLowerCase());

		if (itemIndex != -1) {
			let currentItem = $scope.list.items[itemIndex];
			$scope.list.items[itemIndex].quantity++;
			Swal.fire({
				toast: true,
				position: "bottom-end",
				showConfirmButton: false,
				timer: 5_000,
				timerProgressBar: true,
				icon: "success",
				title: `Duplicate found for ${currentItem.name}\n\nAdded +1 to ${currentItem.name}`,
			});

			$scope.newItem.name = "";
			return;
		}

		$scope.list.items.push({ name: itemName, quantity: 1, isCompleted: false });
		$scope.list.count = $scope.list.items.length;
		$scope.newItem.name = "";
	};

	$scope.removeItem = function (itemIndex) {
		$scope.list.items.splice(itemIndex, 1);
		$scope.list.count = $scope.list.items.length;
	};

	$scope.checkItem = function (itemIndex) {
		$scope.list.items[itemIndex].isCompleted = !$scope.list.items[itemIndex].isCompleted;
	};
}
