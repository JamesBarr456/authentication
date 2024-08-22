import PropTypes from 'prop-types';

export const LayoutFormAuth = ({title, children }) => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
          <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
            {title}
          </h3>
        </div>
        {children}
      </div>
    </section>
  );
};


LayoutFormAuth.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};