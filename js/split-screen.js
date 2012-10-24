function MyCtrl($scope, $filter) {
    $scope.dropDownOptions = [ "Option 1", "Option 2","Option 3","Option 4"];
  
    $scope.items = [{
        id: 1,
        name: {
            first: "Marcin",
            last: "Warpechowski"
        },
        address: "Schellingstr. 58, Muenchen",
        isActive: 'Yes',
        Product: {
            Description: "Big Mac"
        }
    },
    {
        id: 2,
        name: {
            first: "John",
            last: "Irving"
        },
        address: "Chengdu Road, Wanhua, Taipei 108",
        isActive: 'Yes',
        Product: {
            Description: "Fried Potatoes"
        }
    },
    {
        id: 3,
        name: {
            first: "John",
            last: "Irving"
        },
        address: "Chengdu Road, Wanhua, Taipei 108",
        isActive: 'Yes',
        Product: {
            Description: "Fried Potatoes"
        }
    },
    {
        id: 4,
        name: {
            first: "John",
            last: "Irving"
        },
        address: "Chengdu Road, Wanhua, Taipei 108",
        isActive: 'Yes',
        Product: {
            Description: "Fried Potatoes"
        }
    },
    {
        id: 5,
        name: {
            first: "John",
            last: "Irving"
        },
        address: "Chengdu Road, Wanhua, Taipei 108",
        isActive: 'Yes',
        Product: {
            Description: "Fried Potatoes"
        }
    },
    {
        id: 6,
        name: {
            first: "John",
            last: "Irving"
        },
        address: "Chengdu Road, Wanhua, Taipei 108",
        isActive: 'Yes',
        Product: {
            Description: "Fried Potatoes"
        }
    },
    {
        id: 7,
        name: {
            first: "John",
            last: "Irving"
        },
        address: "Chengdu Road, Wanhua, Taipei 108",
        isActive: 'Yes',
        Product: {
            Description: "Fried Potatoes"
        }
    },
    {
        id: 8,
        name: {
            first: "Jeremy",
            last: "Springsteen"
        },
        address: "4 New York Plaza, New York, NY 10004",
        isActive: 'Yes',
        Product: {
            Description: "McRoyal"
        }
    }];

    $scope.dumpItems = function () {
        console.log("dump items", $scope.items);
    };

    $scope.getOptions = function (options) {
        var out = [];
        if (options !== null && typeof options === 'object' && options.length) {
            for (var i = 0, ilen = options.length; i < ilen; i++) {
               out.push(options[i].Description);
            }
        }
        return out;
    };

    $scope.grayedOut = {
        renderer: function (instance, td, row, col, prop, value, cellProperties) {
            Handsontable.TextCell.renderer.apply(this, arguments);
            td.style.color = '#777';
        }
    };

    /**
    * Filter
    */
    $scope.$watch('query', function (newVal, oldVal) {
        $scope.filteredItems = $filter('filter')($scope.items, $scope.query);
        $scope.dataChange = !$scope.dataChange;
    });
    $scope.filteredItems = $scope.items;

    /**
    * Selection
    */

    $scope.currentSelection = "None";

    $scope.$on('datagridSelection', function (scope, $container, r, p, r2, p2) {
        var ht = $container.data('handsontable');
        var str = "row '" + r + "' col '" + ht.propToCol(p) + "' (prop '" + p + "')";
        if (r !== r2 && p !== p2) {
            str = "From " + str + " to row '" + r2 + "' col '" + ht.propToCol(p2) + "' (prop '" + p2 + "')";
        }
        $scope.$apply(function () {
            $scope.currentSelection = str;
        });
    });
}