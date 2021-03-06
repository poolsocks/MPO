angular.module('MPOApp').controller('recipeBooksCtrl', function($scope, userServ, $stateParams) {

    $scope.defaultPic = 'https://firebasestorage.googleapis.com/v0/b/mpoapp.appspot.com/o/defaultPic.png?alt=media&token=01868674-3ac3-4fb3-9c56-29e8472a711f'

    userServ.userInfo().then(result => {
        $scope.userName = result
    })

    $scope.createRecipeBook = (name) => {
        userServ.createRecipeBook(name)
            .then(result => {
                return $scope.userBooks = result.data
            })
    }

    userServ.getRecipeBooks()
        .then(result => {
            return $scope.userBooks = result[0]
        })

    $scope.deleteBook = (bookId) => {

        userServ.deleteBook(bookId)
            .then((result) => {
                $(".modal-backdrop").hide();
                return $scope.userBooks = result.data
            })
    }

})