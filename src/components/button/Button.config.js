const defaultSize = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4',
  lg: 'h-12 px-5 text-lg',
};
const iconOnlySize = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10',
  lg: 'h-12 w-12 text-lg',
};

export default {
  colors: {
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    light: 'bg-white text-gray-900 hover:bg-gray-50',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
    error: 'bg-red-600 text-white hover:bg-red-700',
  },
  borderColors: {
    secondary: 'border-gray-200 hover:border-gray-300',
    primary: 'border-blue-600 hover:border-blue-700',
    light: 'border-gray-300 text hover:border-gray-300',
    warning: 'border-yellow-600 hover:border-yellow-700',
    success: 'border-green-600 hover:border-green-700',
    error: 'border-red-600 hover:border-red-700',
  },
  sizes: {
    default: defaultSize,
    responsive: {
      sm: defaultSize.sm,
      md: `${defaultSize.sm} sm:h-10 sm:px-4`,
      lg: `${defaultSize.sm} sm:h-12 sm:px-5 sm:text-lg`,
    },
    iconOnly: iconOnlySize,
    iconOnlyResponsive: {
      sm: iconOnlySize.sm,
      md: `${iconOnlySize.sm} sm:h-10 sm:w-10`,
      lg: `${iconOnlySize.sm} sm:h-12 sm:w-12 sm:text-lg`,
    },
  },
};
