export const PasswordInput = ({ setPassword }: any) => {
  return (
    <>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
    </>
  );
};
