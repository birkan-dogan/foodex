const Header = () => {
  return (
    <div className="flex justify-between bg-secondary text-white w-full py-2 px-36 text-sm">
      <div className="flex gap-16">
        {/* clock */}
        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM14.2 14.2L9 11V5H10.5V10.2L15 12.9L14.2 14.2Z"
              fill="#FFF8EE"
            />
          </svg>
          <span>7.30 AM - 9.30 PM</span>
        </div>
        {/* phone */}
        <div className="flex gap-4 items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.02222 8.65556C5.62222 11.8 8.2 14.3667 11.3444 15.9778L13.7889 13.5333C14.0889 13.2333 14.5333 13.1333 14.9222 13.2667C16.1667 13.6778 17.5111 13.9 18.8889 13.9C19.5 13.9 20 14.4 20 15.0111V18.8889C20 19.5 19.5 20 18.8889 20C8.45556 20 0 11.5444 0 1.11111C0 0.5 0.5 0 1.11111 0H5C5.61111 0 6.11111 0.5 6.11111 1.11111C6.11111 2.5 6.33333 3.83333 6.74444 5.07778C6.86667 5.46667 6.77778 5.9 6.46667 6.21111L4.02222 8.65556Z"
              fill="#FFF8EE"
            />
          </svg>
          <span>+880 1630 225 015</span>
        </div>
      </div>
      {/* register button */}
      <p className="cursor-pointer hover:underline underline-offset-4">
        REGISTER
      </p>
    </div>
  );
};

export default Header;
