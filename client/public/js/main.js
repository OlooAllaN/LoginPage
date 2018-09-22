var $ = require("jquery");

    $(document ).ready(function() {
    $(".custom-class .text-center").on("click", function() {
        $("#modalLoginAvatar").modal("show");
        $("#modalLoginAvatar").removeClass("modal-backdrop");
      });
      $(".custom-class .register-center").on("click", function() {
        $("#modalRegisterForm").modal("show");
      });
      $(document).on('show.bs.collapse', function() {
          $(".custom-class").find(".row").toggleClass("slide-up", 5000);
      });
      $(document).on('hide.bs.collapse', function() {
          $(".custom-class").find(".row").removeClass("slide-up");
      });//$('.collapse').collapse()
    });