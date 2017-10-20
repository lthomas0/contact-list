(function () {
  "use strict";

  angular
    .module("sabio.crud")
    .controller("contactEditController", ContactEditController);

  ContactEditController.$inject = [
    "$stateParams",
    "$state",
    "contactService"
  ];

  function ContactEditController(
    $stateParams,
    $state,
    contactService
  ) {
    "use strict";
    var $ctrl = this;
    $ctrl.show = true;
    $ctrl.formData = {};
    $ctrl.submit = _submit;

    $ctrl.$onInit = () => {
      if ($stateParams.id) {
        _editMode();
        contactService
          .getById($stateParams.id)
          .then(_onGetByIdSuccess)
          .catch(_onError);
      } else {
        _addMode();
      }
    }

    function _editMode() {
      $ctrl.formMode = "Edit Contact";
      $ctrl.submitButton = "Update";
      $ctrl.browseBtn = ' Click to browse new logo...';
    }

    function _addMode() {
      $ctrl.formMode = "Add New Contact";
      $ctrl.submitButton = "Add";
      $ctrl.browseBtn = " Click to Browse...";
    }

    function _onGetByIdSuccess(response) {
      $ctrl.pageState = "Edit contact";
      $ctrl.formData = response.item;
    }

    function _submit(){
      if ($stateParams.id) {
        contactService
          .update($ctrl.formData)
          .then(_onSubmitSuccess)
          .catch(_onError);
      } else {
        contactService
          .insert($ctrl.formData)
          .then(_onSubmitSuccess)
          .catch(_onError);
      }
    };

    function _onSubmitSuccess(response) {
      $state.go("app.contacts.list");
    }

    function _onError(error) {
      console.log(error);
    }

    function _onUploadSuccess(res) {
      $ctrl.browseBtn = ' Click to browse new logo...'
      $ctrl.formData.logoUrl = res;
      $ctrl.imageUploaded = true;
      $ctrl.file = null;
    }
  }
})();