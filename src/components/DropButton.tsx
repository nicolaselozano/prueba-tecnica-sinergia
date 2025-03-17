interface IDropButton {
  name: string;
  options: string[];
}

const DropButton = ({ name, options }: IDropButton) => {
  return (
    <div className="w-fit">
      <button
        type="button"
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="text-orange-400 bg-white hover:bg-button-hover active:bg-button-hover font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        {name}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
  id="dropdownHover"
  className="absolute left-0 right-0 z-10 w-full max-w-full hidden bg-white divide-y divide-gray-100 shadow-md overflow-hidden"
>


        <ul
          aria-labelledby="dropdownHoverButton"
          className="py-2 text-sm text-orange-400"
        >
          {options.map((option, index) => (
            <li key={index}>
              <a href="#" className="block px-4 py-2 hover:bg-button-hover active:bg-button-hover">
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropButton;
