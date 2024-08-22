import PropTypes from 'prop-types';
export const Button = ({label, ...props}) => {
  return (
    <button
         className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

        {...props}
    >
        {label}
    </button>
  )
}


Button.propTypes = {
  label: PropTypes.string.isRequired,


};