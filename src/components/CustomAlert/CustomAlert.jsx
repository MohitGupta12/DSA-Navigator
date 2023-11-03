import Swal from "sweetalert2";

const CustomAlert = () => {
  const swalWithTailwindButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mx-6",
      cancelButton:
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mx-6",
    },
    buttonsStyling: false,
  });

  swalWithTailwindButtons
    .fire({
      title: "Are you sure about it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Reset it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithTailwindButtons.fire(
          "Reset Complete ! ",
          "Your progress has been reset.",
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithTailwindButtons.fire(
          "Cancelled",
          "Your progress is safe",
          "error"
        );
      }
    });
};

export default CustomAlert;
