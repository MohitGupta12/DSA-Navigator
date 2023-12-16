import Swal from "sweetalert2";


const CustomAlert = async (resetHandler) => {



  const swalWithTailwindButtons = Swal.mixin({
    customClass: {
      confirmButton:
        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mx-6",
      cancelButton:
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mx-6",
    },
    buttonsStyling: false,
  });

  const result = await swalWithTailwindButtons.fire({
    title: "Are you sure about it?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Reset it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true,
  });

  if (result.isConfirmed) {
    
    await swalWithTailwindButtons.fire(
      "Reset Complete ! ",
      "Your progress has been reset.",
      "success"
    );
          resetHandler();
         } else if (result.dismiss === Swal.DismissReason.cancel) {
    await swalWithTailwindButtons.fire(
      "Cancelled",
      "Your progress is safe",
      "error"
    );
  }
};

export default CustomAlert;
