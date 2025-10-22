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
    default: {
      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      light: 'bg-white text-gray-900 hover:bg-gray-100',
      warning: 'bg-yellow-600 text-white hover:bg-yellow-700',
      success: 'bg-green-600 text-white hover:bg-green-700',
      error: 'bg-red-600 text-white hover:bg-red-700',
    },
    transparent: {
      secondary: 'hover:text-white hover:bg-gray-700',
      primary: 'hover:text-white hover:bg-blue-700',
      light: 'hover:text-gray-900 hover:bg-gray-100',
      warning: 'hover:text-white hover:bg-yellow-700',
      success: 'hover:text-white hover:bg-green-700',
      error: 'hover:text-white hover:bg-red-700',
    },
  },
  borderColors: {
    default: {
      secondary: 'border-gray-500 hover:border-gray-600',
      primary: 'border-blue-500 hover:border-blue-600',
      light: 'border-gray-400 text hover:border-gray-500',
      warning: 'border-yellow-500 hover:border-yellow-600',
      success: 'border-green-500 hover:border-green-600',
      error: 'border-red-500 hover:border-red-600',
    },
    transparent: {
      secondary: 'border-gray-300 hover:border-gray-700',
      primary: 'border-blue-300 hover:border-blue-700',
      light: 'border-gray-300 hover:border-gray-100',
      warning: 'border-yellow-300 hover:border-yellow-700',
      success: 'border-green-300 hover:border-green-700',
      error: 'border-red-300 hover:border-red-700',
    },
  },
  spinnerColors: {
    secondary: 'light',
    primary: 'light-primary',
    light: 'secondary',
    warning: 'light-warning',
    success: 'light-success',
    error: 'light-error',
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
