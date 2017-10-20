angular.module('MPOApp').controller('groceryListCtrl', function($scope, userServ, $stateParams, groceryListServ) {

    $scope.pageId = $stateParams.id;

    userServ.userInfo().then(result => {
        $scope.userName = result
    })


    $scope.createGroceryList = (name) => {
        groceryListServ.createGroceryList(name).then(result => {
            $scope.groceryLists = result.data
        })
    }

    $scope.getGroceryLists = () => {
        console.log("test")
        groceryListServ.getGroceryLists().then(result => {
            $scope.groceryLists = result.data
        })
    }

    $scope.deleteGroceryList = (listId) => {
        groceryListServ.deleteGroceryList(listId).then(result => {
            $scope.groceryLists = result.data
        })
    }



})