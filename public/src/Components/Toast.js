import toast from 'react-hot-toast';

export const ShowErrorToast = (msg) => {
	toast.error(msg, {
		position: 'top-center',
		duration: 2000,
		ariaProps: {
			role: 'alert',
			'aria-live': 'error',
		},
	});
};

export const ShowSuccessToast = ({ msg }) => {
	toast.success(msg, {
		position: 'top-center',
		duration: 2000,
		ariaProps: {
			role: 'alert',
			'aria-live': 'sucess',
		},
	});
};
