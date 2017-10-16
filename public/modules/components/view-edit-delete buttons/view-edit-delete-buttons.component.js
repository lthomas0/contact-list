(function() {
    "use strict";
    angular.module("sabio.components").component("viewEditDeleteButtons", {
      templateUrl:
        "/public/modules/components/view-edit-delete-buttons/view-edit-delete-buttons.component.html",
      bindings: {
        item: "=",
        service: "=",
        list: "="
      },
      controller: ViewEditDeleteButtonsController
    });
  
    ViewEditDeleteButtonsController.$inject = ["$uibModal"];
  
    function ViewEditDeleteButtonsController($uibModal) {
      var $ctrl = this;
  
      
  
      $ctrl.openDeleteModal = item => {
        var modalInstance = $uibModal
          .open({
            component: "deleteModal",
            size: "sm",
            resolve: {
              dataObject: function() {
                return {
                  item: item,
                  service: $ctrl.service
                };
              }
            }
          })
          .result.then(_modalClosed)
          .catch(_modalDismissed);
      };
  
      function _modalClosed(result) {
        _onDeleteSuccess(result, $ctrl.list);
      }
  
      function _modalDismissed(reason) {
        console.log(reason);
      }
      var _onDeleteSuccess = (data, list) => {
        let removeIndex = list.findIndex(
          (element, index, list) => {
            return element._id === data.item._id;
          }
        );
        list.splice(removeIndex, 1);
      };
    }
  })();
  