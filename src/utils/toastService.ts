export const ToastService = {
  showToast: () => {
    window.dispatchEvent(new Event("show-toast"));
  },
};
